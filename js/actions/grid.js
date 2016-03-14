/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const GRID_MODEL_LOADED = 'GRID_MODEL_LOADED';
const GRID_LOAD_ERROR = 'GRID_LOAD_ERROR';
const GRID_CONFIG_LOADED = 'GRID_CONFIG_LOADED';

function configureGrid(config) {
    return {
        type: GRID_CONFIG_LOADED,
        config: config
    };
}

function configureGridModel(model) {
    return {
        type: GRID_MODEL_LOADED,
        model: model
    };
}

function configureGridError(e) {
    return {
        type: GRID_LOAD_ERROR,
        error: e
    };
}

function loadGridModel(wfsUrl) {
    return (dispatch) => {
        return axios.get(wfsUrl).then((response) => {
            dispatch(configureGridModel(response.data));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

function loadGridModelWithFilter(wfsUrl, data) {
    return (dispatch) => {
        return axios.post(wfsUrl, data, {
          timeout: 10000,
          headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
        }).then((response) => {
            dispatch(configureGridModel(response.data));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

function loadFeatureGridConfig(configUrl) {
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
}

module.exports = {
    GRID_MODEL_LOADED,
    GRID_LOAD_ERROR,
    GRID_CONFIG_LOADED,
    configureGrid,
    configureGridModel,
    loadFeatureGridConfig,
    loadGridModel,
    loadGridModelWithFilter,
    configureGridError
};
