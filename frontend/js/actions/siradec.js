/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');
const {addLayer} = require('../../MapStore2/web/client/actions/layers');

const QUERYFORM_CONFIG_LOADED = 'QUERYFORM_CONFIG_LOADED';
const FEATURETYPE_CONFIG_LOADED = 'FEATURETYPE_CONFIG_LOADED';
const EXPAND_FILTER_PANEL = 'EXPAND_FILTER_PANEL';
const QUERYFORM_CONFIG_LOAD_ERROR = 'QUERYFORM_CONFIG_LOAD_ERROR';
const QUERYFORM_HIDE_ERROR = 'QUERYFORM_HIDE_ERROR';
const FEATUREGRID_CONFIG_LOADED = 'FEATUREGRID_CONFIG_LOADED';
const FEATUREINFO_CONFIG_LOADED = 'FEATUREINFO_CONFIG_LOADED';
const TOPOLOGY_CONFIG_LOADED = 'TOPOLOGY_CONFIG_LOADED';
const CARD_CONFIG_LOADED = 'CARD_CONFIG_LOADED';
const INLINE_MAP_CONFIG = 'INLINE_MAP_CONFIG';
const SET_ACTIVE_FEATURE_TYPE = 'SET_ACTIVE_FEATURE_TYPE';
const FEATURETYPE_CONFIG_LOADING = 'FEATURETYPE_CONFIG_LOADING';
const assign = require('object-assign');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const {addFeatureTypeLayerInCart} = require('../actions/addmap');
const {verifyProfiles} = require('../utils/TemplateUtils');
const {Promise} = require('es6-promise');

function configureInlineMap(mapconfig) {
    return {
        type: INLINE_MAP_CONFIG,
        mapconfig
    };
}

function configureFeatureType(ft, field, featureType, activate) {
    return {
        type: FEATURETYPE_CONFIG_LOADED,
        ftName: ft.id,
        ftNameLabel: ft.name,
        geometryName: ft.geometryName,
        geometryType: ft.geometryType,
        nameSpaces: ft.nameSpaces,
        layer: ft.layer,
        exporter: ft.exporter,
        field,
        featureType,
        activate
    };
}

function configureQueryForm(config) {
    return {
        type: QUERYFORM_CONFIG_LOADED,
        config: config
    };
}

function configureFeatureGrid(config, featureType) {
    return {
        type: FEATUREGRID_CONFIG_LOADED,
        config: config,
        featureType
    };
}

function configureCard(config, featureType) {
    return {
        type: CARD_CONFIG_LOADED,
        config: config,
        featureType
    };
}

function configureTopology(config) {
    return {
        type: TOPOLOGY_CONFIG_LOADED,
        config: config
    };
}

function configureFeatureInfo(config, featureType) {
    return {
        type: FEATUREINFO_CONFIG_LOADED,
        config: config,
        featureType
    };
}

function expandFilterPanel(expand) {
    return {
        type: EXPAND_FILTER_PANEL,
        expand: expand
    };
}

function configureQueryFormError(featureType, e) {
    return {
        type: QUERYFORM_CONFIG_LOAD_ERROR,
        featureType,
        error: e
    };
}

function hideQueryError() {
    return {
        type: QUERYFORM_HIDE_ERROR
    };
}
function getAttributeValuesPromise(field, params, serviceUrl) {
    if (serviceUrl) {
        let {url} = ConfigUtils.setUrlPlaceholders({url: serviceUrl});

        for (let param in params) {
            if (params.hasOwnProperty(param)) {
                url += "&" + param + "=" + params[param];
            }
        }
        return axios.get(url).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch(e) {
                    Promise.reject(`Configuration broken (${url}): ${ e.message}`);
                }
            }
            const values = config.features.map((feature) => feature.properties);
            return assign({}, field, {values: values});
        });
    }
}

function getAttributeValues(ft, field, params, serviceUrl) {
    return (dispatch) => {
        if (serviceUrl) {
            let {url} = ConfigUtils.setUrlPlaceholders({url: serviceUrl});

            for (let param in params) {
                if (params.hasOwnProperty(param)) {
                    url += "&" + param + "=" + params[param];
                }
            }

            return axios.get(url).then((response) => {
                let config = response.data;
                if (typeof config !== "object") {
                    try {
                        config = JSON.parse(config);
                    } catch(e) {
                        dispatch(configureQueryFormError(ft, 'Configuration broken (' + url + '): ' + e.message));
                    }
                }

                let values = [];
                for (let feature in config.features) {
                    if (feature) {
                        values.push(config.features[feature].properties);
                    }
                }
                dispatch(configureFeatureType(ft, assign({}, field, {values: values})));
            }).catch((e) => {
                dispatch(configureQueryFormError(ft, e));
            });
        }

        dispatch(configureFeatureType(ft, assign({}, field, {})));
    };
}
function configurationLoading() {
    return {
        type: FEATURETYPE_CONFIG_LOADING
    };
}

function loadFeatureTypeConfig(configUrl, params, featureType, activate = false, addlayer = false, siraId, addCartlayer = false, node = null) {
    const url = configUrl ? configUrl : 'assets/' + featureType + '.json';
    return (dispatch, getState) => {
        const {userprofile} = getState();
        dispatch(configurationLoading());
        return axios.get(url).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch(e) {
                    dispatch(configureQueryFormError(featureType, 'Configuration file broken (' + url + '): ' + e.message));
                }
            }
            const layer = ConfigUtils.setUrlPlaceholders(config.layer);
            if (addlayer) {
                dispatch(addLayer(assign({}, layer, {siraId})));
            }
            // add layer in cart
            if (addCartlayer) {
                let layers = [];
                if (layer) layers.push(layer);
                dispatch(addFeatureTypeLayerInCart(layers, node));
            }
            // Configure the FeatureGrid for WFS results list
            dispatch(configureFeatureGrid(config.featuregrid, featureType));
            dispatch(configureFeatureInfo(config.featureinfo, featureType));
            dispatch(configureCard(config.card, featureType));

            let serviceUrl = config.query.service.url;

            const fields = config.query.fields.filter(
                // (field) => !field.profile || field.profile.indexOf(userprofile.profile) !== -1
                (field) => verifyProfiles(field.profile, userprofile.profile)
            ).map((f) => {
                let urlParams = config.query.service && config.query.service.urlParams ? assign({}, params, config.query.service.urlParams) : params;
                urlParams = f.valueService && f.valueService.urlParams ? assign({}, urlParams, f.valueService.urlParams) : urlParams;
                return f.valueService && f.valueService.urlParams ? getAttributeValuesPromise(f, urlParams, serviceUrl) : Promise.resolve(f);
            });
            Promise.all(fields).then((fi) => {
                dispatch(configureFeatureType({
                        id: config.featureTypeName,
                        name: config.featureTypeNameLabel,
                        geometryName: config.geometryName,
                        geometryType: config.geometryType,
                        nameSpaces: config.nameSpaces || {},
                        layer: layer,
                        exporter: config.exporter
                    }, fi, featureType, activate));
            }).catch((e) => dispatch(configureQueryFormError(featureType, e)));
            // for (let field in config.query.fields) {
            //     if (field) {
            //         let f = config.query.fields[field];

            //         let urlParams = config.query.service && config.query.service.urlParams ? assign({}, params, config.query.service.urlParams) : params;
            //         urlParams = f.valueService && f.valueService.urlParams ? assign({}, urlParams, f.valueService.urlParams) : urlParams;
            //         //getAttributeValuesPromise()
            //         dispatch(getAttributeValues({
            //             id: config.featureTypeName,
            //             name: config.featureTypeNameLabel,
            //             geometryName: config.geometryName,
            //             geometryType: config.geometryType
            //         }, f, urlParams, f.valueService && f.valueService.urlParams ? serviceUrl : null));
            //     }
            // }


        }).catch((e) => {
            dispatch(configureQueryFormError(featureType, e));
        });
    };
}
function setActiveFeatureType(featureType) {
    return {
        type: SET_ACTIVE_FEATURE_TYPE,
        featureType
    };
}

module.exports = {
    QUERYFORM_CONFIG_LOADED,
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR,
    QUERYFORM_HIDE_ERROR,
    FEATUREGRID_CONFIG_LOADED,
    FEATUREINFO_CONFIG_LOADED,
    TOPOLOGY_CONFIG_LOADED,
    CARD_CONFIG_LOADED,
    INLINE_MAP_CONFIG,
    SET_ACTIVE_FEATURE_TYPE,
    FEATURETYPE_CONFIG_LOADING,
    configureTopology,
    configureFeatureGrid,
    configureCard,
    // loadQueryFormConfig,
    loadFeatureTypeConfig,
    configureQueryForm,
    expandFilterPanel,
    configureQueryFormError,
    getAttributeValues,
    hideQueryError,
    configureInlineMap,
    setActiveFeatureType
};
