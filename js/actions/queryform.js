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

function loadQueryFormConfig(configUrl, configName) {
    return (dispatch) => {
        /*dispatch(configureQueryForm([
                {
                    id: "ListAttribute",
                    type: "list",
                    values: [
                        "value1",
                        "value2",
                        "value3",
                        "value4",
                        "value5"
                    ]
                },
                {
                    id: "DateAttribute",
                    type: "date"
                }
            ]
        ));*/
        return axios.get(configUrl + configName).then((response) => {
            if (typeof response.data === "object") {
                dispatch(configureQueryForm(response.data));
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
