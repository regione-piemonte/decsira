/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const QUERYFORM_CONFIG_LOADED = 'QUERYFORM_CONFIG_LOADED';
const FEATURETYPE_CONFIG_LOADED = 'FEATURETYPE_CONFIG_LOADED';
const EXPAND_FILTER_PANEL = 'EXPAND_FILTER_PANEL';
const QUERYFORM_CONFIG_LOAD_ERROR = 'QUERYFORM_CONFIG_LOAD_ERROR';

const assign = require('object-assign');

function configureFeatureType(ft, field) {
    return {
        type: FEATURETYPE_CONFIG_LOADED,
        ftName: ft.id,
        ftNameLabel: ft.name,
        field: field
    };
}

function configureQueryForm(config) {
    return {
        type: QUERYFORM_CONFIG_LOADED,
        config: config
    };
}

function expandFilterPanel(expand) {
    return {
        type: EXPAND_FILTER_PANEL,
        expand: expand
    };
}

function configureQueryFormError(e) {
    return {
        type: QUERYFORM_CONFIG_LOAD_ERROR,
        error: e
    };
}

function getAttributeValues(ftName, field, params) {
    return (dispatch) => {
        if (field.valueService) {
            let url = field.valueService;
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
                        dispatch(configureQueryFormError('Configuration broken (' + url + '): ' + e.message));
                    }
                }

                let values = [];
                for (let feature in config.features) {
                    if (feature) {
                        values.push(config.features[feature].properties);
                    }
                }
                dispatch(configureFeatureType(ftName, assign({}, field, {values: values})));
            }).catch((e) => {
                dispatch(configureQueryFormError(e));
            });
        }

        dispatch(configureFeatureType(ftName, assign({}, field, {})));
    };
}

function loadFeatureTypeConfig(url, params) {
    return (dispatch) => {
        return axios.get(url).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch(e) {
                    dispatch(configureQueryFormError('Configuration file broken (' + url + '): ' + e.message));
                }
            }

            for (let field in config.fields) {
                if (field) {
                    dispatch(getAttributeValues({id: config.featureTypeName, name: config.featureTypeNameLabel}, config.fields[field], params));
                }
            }
        }).catch((e) => {
            dispatch(configureQueryFormError(e));
        });
    };
}

function loadQueryFormConfig(configUrl, configName) {
    return (dispatch) => {
        return axios.get(configUrl + configName).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch(e) {
                    dispatch(configureQueryFormError('Configuration file broken (' + configUrl + "/" + configName + '): ' + e.message));
                }
            }

            dispatch(configureQueryForm(config));
        }).catch((e) => {
            dispatch(configureQueryFormError(e));
        });
    };
}

module.exports = {
    QUERYFORM_CONFIG_LOADED,
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR,
    loadQueryFormConfig,
    loadFeatureTypeConfig,
    configureQueryForm,
    expandFilterPanel,
    configureQueryFormError,
    getAttributeValues
};
