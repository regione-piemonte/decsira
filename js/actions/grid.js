/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const GRID_MODEL_LOADED = 'GRID_MODEL_LOADED';
const GRID_LOAD_ERROR = 'GRID_LOAD_ERROR';
const GRID_CONFIG_LOADED = 'GRID_CONFIG_LOADED';
const SHOW_LOADING = 'SHOW_LOADING';

function configureGrid(config) {
    return {
        type: GRID_CONFIG_LOADED,
        config: config
    };
}

function configureGridData(data) {
    return {
        type: GRID_MODEL_LOADED,
        data: data
    };
}

function configureGridError(e) {
    return {
        type: GRID_LOAD_ERROR,
        error: e
    };
}

function showLoading(show) {
    return {
        type: SHOW_LOADING,
        show: show
    };
}

function loadGridModel(wfsUrl, params) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    url = params.forEach((param) => {
        url += "&" + param + "=" + params[param];
    });

    return (dispatch) => {
        return axios.get(wfsUrl).then((response) => {
            dispatch(configureGridData(response.data));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

function loadGridModelWithFilter(wfsUrl, data, params) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            url += "&" + param + "=" + params[param];
        }
    }

    return (dispatch) => {
        dispatch(showLoading(true));

        return axios.post(url, data, {
          timeout: 60000,
          headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
        }).then((response) => {
            dispatch(configureGridData(response.data));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

/*function loadFeatureGridConfig(configUrl) {
    return (dispatch) => {
        return axios.get(configUrl).then((response) => {
            let gridConfig = response.data;
            if (typeof gridConfig !== "object") {
                try {
                    gridConfig = JSON.parse(gridConfig);
                } catch(e) {
                    dispatch(configureGridError(e));
                }
            }
            dispatch(configureGrid(gridConfig));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}*/

module.exports = {
    GRID_MODEL_LOADED,
    GRID_LOAD_ERROR,
    GRID_CONFIG_LOADED,
    SHOW_LOADING,
    configureGrid,
    configureGridData,
    // loadFeatureGridConfig,
    loadGridModel,
    loadGridModelWithFilter,
    configureGridError
};
