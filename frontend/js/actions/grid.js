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
const CREATE_GRID_DATA_SOURCE = 'CREATE_GRID_DATA_SOURCE';
const UPDATE_TOTAL_FEATURES = 'UPDATE_TOTAL_FEATURES';
const FEATURES_LOADED_PAG = 'FEATURES_LOADED_PAG';
const SET_GRID_TYPE = 'SET_GRID_TYPE';

function configureGrid(config) {
    return {
        type: GRID_CONFIG_LOADED,
        config: config
    };
}

function configureGridData(data, add = false ) {
    return {
        type: GRID_MODEL_LOADED,
        data: data,
        add
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

function loadGridModelWithFilter(wfsUrl, data, params, add = false) {
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
            dispatch(configureGridData(response.data, add));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

function configureGridDataWithPagination(data, requestId) {
    return {
        type: FEATURES_LOADED_PAG,
        data,
        requestId
    };
}

function loadFeaturesWithPagination(wfsUrl, data, params, requestId) {
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
            if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
                dispatch(configureGridDataWithPagination(response.data, requestId));
            }else {
                dispatch(configureGridError("GeoServer Exception, query fallita!"));
            }
        }).catch(() => {
            dispatch(configureGridError("Network problem query fallita!"));
        });
    };
}


function createGridDataSource(pagination) {
    return {
        type: CREATE_GRID_DATA_SOURCE,
        pagination
    };
}

function setGridType(gridType) {
    return {
        type: SET_GRID_TYPE,
        gridType
    };
}

function updateTotalFeatures(data) {
    return {
        type: UPDATE_TOTAL_FEATURES,
        data
    };
}


function loadGridModelWithPagination(wfsUrl, data, params, pagination) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            url += "&" + param + "=" + params[param];
        }
    }
    return (dispatch) => {
        dispatch(createGridDataSource(pagination));
        return axios.post(url, data, {
          timeout: 120000,
          headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
        }).then((response) => {
            if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
                dispatch(updateTotalFeatures(response.data));
            }else {
                dispatch(configureGridError("GeoServer Exception, impossibile recuperare numero totale oggetti!"));
            }
        }).catch(() => {
            dispatch(configureGridError("Network problem, impossibile recuperare numero totale oggetti!"));
        });
    };
}

module.exports = {
    GRID_MODEL_LOADED,
    GRID_LOAD_ERROR,
    GRID_CONFIG_LOADED,
    SHOW_LOADING,
    CREATE_GRID_DATA_SOURCE,
    UPDATE_TOTAL_FEATURES,
    FEATURES_LOADED_PAG,
    SET_GRID_TYPE,
    configureGrid,
    configureGridData,
    createGridDataSource,
    loadGridModelWithPagination,
    // loadFeatureGridConfig,
    loadGridModel,
    loadGridModelWithFilter,
    configureGridError,
    loadFeaturesWithPagination,
    setGridType,
    showLoading
};
