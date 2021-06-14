/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('@mapstore/libs/ajax');
const {addLayer} = require('@mapstore/actions/layers');
const {cardLoading} = require('../actions/card');
const {setSiraControl} = require('./controls');

const WAITING_FOR_CONFIG = 'WAITING_FOR_CONFIG';
const QUERYFORM_CONFIG_LOADED = 'QUERYFORM_CONFIG_LOADED';
const FEATURETYPE_CONFIG_LOADED = 'FEATURETYPE_CONFIG_LOADED';
const EXPAND_FILTER_PANEL = 'EXPAND_FILTER_PANEL';
const CONFIGURE_INDICA_LAYER = 'CONFIGURE_INDICA_LAYER';
const CLOSE_INDICA_CONFIGURATION = 'CLOSE_INDICA_CONFIGURATION';
const QUERYFORM_CONFIG_LOAD_ERROR = 'QUERYFORM_CONFIG_LOAD_ERROR';
const QUERYFORM_HIDE_ERROR = 'QUERYFORM_HIDE_ERROR';
const QUERYFORM_PRELOADED = 'QUERYFORM_PRELOADED';
const FEATUREGRID_CONFIG_LOADED = 'FEATUREGRID_CONFIG_LOADED';
const FEATUREINFO_CONFIG_LOADED = 'FEATUREINFO_CONFIG_LOADED';
const TOPOLOGY_CONFIG_LOADED = 'TOPOLOGY_CONFIG_LOADED';
const CARD_CONFIG_LOADED = 'CARD_CONFIG_LOADED';
const INLINE_MAP_CONFIG = 'INLINE_MAP_CONFIG';
const SET_ACTIVE_FEATURE_TYPE = 'SET_ACTIVE_FEATURE_TYPE';
const SET_TREE_FEATURE_TYPE = 'SET_TREE_FEATURE_TYPE';
const FEATURETYPE_CONFIG_LOADING = 'FEATURETYPE_CONFIG_LOADING';
const USER_NOT_AUTHORIZED = 'USER_NOT_AUTHORIZED';
const assign = require('object-assign');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const {addFeatureTypeLayerInCart} = require('../actions/addmap');
const {indicaFormReset} = require('./indicaform');
const {verifyProfiles} = require('../utils/TemplateUtils');
const { Promise } = require('es6-promise');

function setWaitingForConfig(wfc) {
    return {
        type: WAITING_FOR_CONFIG,
        wfc
    };
}

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
        multiLayerSelect: ft.multiLayerSelect,
        multiLayerSelectionAttribute: ft.multiLayerSelectionAttribute,
        exporter: ft.exporter,
        field,
        featureType,
        activate,
        tematizzatore: ft.tematizzatore
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

function expandFilterPanel(expand, nodeId = null) {
    return {
        type: EXPAND_FILTER_PANEL,
        expand: expand,
        currentNodeId: nodeId
    };
}

function configureIndicaLayer(nodeId = null) {
    return {
        type: CONFIGURE_INDICA_LAYER,
        currentNodeId: nodeId
    };
}

function closeIndicaConfiguration() {
    return {
        type: CLOSE_INDICA_CONFIGURATION
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

function queryFormPreloaded(preloaded) {
    return {
        type: QUERYFORM_PRELOADED,
        preloaded: preloaded
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
                } catch (e) {
                    Promise.reject(`Configuration broken (${url}): ${ e.message}`);
                }
            }
            const values = config.features.map((feature) => feature.properties);
            return assign({}, field, {values: values});
        });
    }
    return {};
}

function getAttributeValues(ft, field, params, serviceUrl) {
    // eslint-disable-next-line consistent-return
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
                    } catch (e) {
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
function configurationLoading(loading = true) {
    return {
        type: FEATURETYPE_CONFIG_LOADING,
        loading
    };
}

function isUserAuthorized(profiles = [], userprofile = []) {
    if ( profiles.length > 0 ) {
        const matching = profiles.reduce((previous, current) => {
            return previous + userprofile.filter(p => p === current).length;
        }, 0);
        return matching > 0;
    }
    return true;
}

function userNotAuthorized(feature) {
    return {
        type: USER_NOT_AUTHORIZED,
        feature
    };
}

function loadFeatureTypeConfig(configUrl, params, featureType, activate = false, addlayer = false, siraId, addCartlayer = false, node = null, loading = true, loadCardTemplate = null) {
    const url = configUrl ? configUrl : 'assets/' + featureType + '.json';
    return (dispatch, getState) => {
        const { userprofile} = getState();
        dispatch(configurationLoading(loading));
        loadCardTemplate && dispatch(cardLoading());
        return axios.get(url).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch (e) {
                    dispatch(configureQueryFormError(featureType, 'Configuration file broken (' + url + '): ' + e.message));
                }
            }
            if (!isUserAuthorized(config.profiles, userprofile.profile)) {
                dispatch(userNotAuthorized(config.featureTypeName));
                dispatch(expandFilterPanel(false));
                dispatch(setSiraControl('grid', false));
            } else {
                const layer = ConfigUtils.setUrlPlaceholders(config.layer);
                if (addlayer) {
                    dispatch(addLayer(assign({}, layer, {siraId})));
                }
                // add layer in cart
                if (addCartlayer) {
                    let layers = [];
                    if (layer) {
                        layer.siraId = siraId;
                        layers.push(layer);
                    }
                    dispatch(addFeatureTypeLayerInCart(layers, node));
                }
                // Configure the FeatureGrid for WFS results list
                dispatch(configureFeatureGrid(config.featuregrid, featureType));
                dispatch(configureFeatureInfo(config.featureinfo, featureType));
                dispatch(configureCard(config.card, featureType));
                dispatch(indicaFormReset());
                dispatch(queryFormPreloaded(false));

                let serviceUrl = config.query.service.url;

                const fields = config.query.fields.filter(
                    (field) => verifyProfiles(field.profile, userprofile.profile)
                ).map((f) => {
                    let urlParams = config.query.service && config.query.service.urlParams ? assign({}, params, config.query.service.urlParams) : params;
                    urlParams = f.valueService && f.valueService.urlParams ? assign({}, urlParams, f.valueService.urlParams) : urlParams;
                    return f.valueService && f.valueService.urlParams ? getAttributeValuesPromise(f, urlParams, serviceUrl) : Promise.resolve(f);
                });

                let temaFilters = config.tematizzatore && config.tematizzatore.filters ? config.tematizzatore.filters : [];
                const temaFields = temaFilters.map((f) => {
                    let urlParams = config.query.service && config.query.service.urlParams ? assign({}, params, config.query.service.urlParams) : params;
                    urlParams = f.valueService && f.valueService.urlParams ? assign({}, urlParams, f.valueService.urlParams) : urlParams;
                    return f.valueService && f.valueService.urlParams ? getAttributeValuesPromise(f, urlParams, serviceUrl) : Promise.resolve(f);
                });

                const allFields = fields.concat(temaFields);

                // Load card template
                loadCardTemplate && loadCardTemplate({card: config.card});

                Promise.all(allFields).then((fi) => {
                    dispatch(configureFeatureType({
                        id: config.featureTypeName,
                        name: config.featureTypeNameLabel,
                        geometryName: config.geometryName,
                        geometryType: config.geometryType,
                        multiLayerSelect: config.multiLayerSelect,
                        multiLayerSelectionAttribute: config.multiLayerSelectionAttribute,
                        nameSpaces: config.nameSpaces || {},
                        layer: layer,
                        exporter: config.exporter,
                        tematizzatore: config.tematizzatore
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
            }

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
function setTreeFeatureType(featureType) {
    return {
        type: SET_TREE_FEATURE_TYPE,
        featureType
    };
}

module.exports = {
    WAITING_FOR_CONFIG,
    QUERYFORM_CONFIG_LOADED,
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    CONFIGURE_INDICA_LAYER,
    CLOSE_INDICA_CONFIGURATION,
    QUERYFORM_CONFIG_LOAD_ERROR,
    QUERYFORM_HIDE_ERROR,
    QUERYFORM_PRELOADED,
    FEATUREGRID_CONFIG_LOADED,
    FEATUREINFO_CONFIG_LOADED,
    TOPOLOGY_CONFIG_LOADED,
    CARD_CONFIG_LOADED,
    INLINE_MAP_CONFIG,
    SET_ACTIVE_FEATURE_TYPE,
    SET_TREE_FEATURE_TYPE,
    FEATURETYPE_CONFIG_LOADING,
    USER_NOT_AUTHORIZED,
    setWaitingForConfig,
    configureTopology,
    configureFeatureGrid,
    configureCard,
    // loadQueryFormConfig,
    loadFeatureTypeConfig,
    configureQueryForm,
    expandFilterPanel,
    configureIndicaLayer,
    closeIndicaConfiguration,
    configureQueryFormError,
    getAttributeValues,
    hideQueryError,
    configureInlineMap,
    setActiveFeatureType,
    setTreeFeatureType,
    queryFormPreloaded
};
