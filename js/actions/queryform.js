/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const QUERYFORM_CONFIG_LOADED = 'QUERYFORM_CONFIG_LOADED';
const EXPAND_FILTER_PANEL = 'EXPAND_FILTER_PANEL';
const QUERYFORM_CONFIG_LOAD_ERROR = 'QUERYFORM_CONFIG_LOAD_ERROR';

const assign = require('object-assign');


function configureQueryForm(ftName, field) {
    return {
        type: QUERYFORM_CONFIG_LOADED,
        ftName: ftName,
        field: field
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

function getAttributeValues(ftName, field) {
    return (dispatch) => {
        if (field.valueService) {
            return axios.get(field.valueService).then((response) => {
                if (typeof response.data === "object") {
                    let values = [];
                    for (let feature in response.data.features) {
                        if (feature) {
                            values.push(response.data.features[feature].properties);
                        }
                    }
                    dispatch(configureQueryForm(ftName, assign({}, field, {values: values})));
                } else {
                    try {
                        JSON.parse(response.data);
                    } catch(e) {
                        dispatch(configureQueryFormError('Configuration broken (' + field.valueService + '): ' + e.message));
                    }
                }
            }).catch((e) => {
                dispatch(configureQueryFormError(e));
            });
        }

        dispatch(configureQueryForm(ftName, assign({}, field, {})));
    };
}

function loadQueryFormConfig(configUrl, configName) {
    return (dispatch) => {
        return axios.get(configUrl + configName).then((response) => {
            if (typeof response.data === "object") {
                for (let field in response.data.fields) {
                    if (field) {
                        dispatch(getAttributeValues(response.data.featureTypeName, response.data.fields[field]));
                    }
                }
            } else {
                try {
                    JSON.parse(response.data);
                } catch(e) {
                    dispatch(configureQueryFormError('Configuration file broken (' + configUrl + "/" + configName + '): ' + e.message));
                }
            }
        }).catch((e) => {
            dispatch(configureQueryFormError(e));
        });
    };
}

module.exports = {
    QUERYFORM_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR,
    loadQueryFormConfig,
    configureQueryForm,
    expandFilterPanel,
    configureQueryFormError
};
