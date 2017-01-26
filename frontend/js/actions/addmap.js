/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
 /**
  * Copyright 2016, GeoSolutions Sas.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * LICENSE file in the root directory of this source tree.
  */
const {Promise} = require('es6-promise');
const API = {
    wms: require('../../MapStore2/web/client/api/WMS')
};
const AddMapUtils = require('../utils/AddMapUtils');
const SIRA_RECORDS_LOADING = 'SIRA_RECORDS_LOADING';
const SIRA_RECORDS_ERROR = 'SIRA_RECORDS_ERROR';
const SIRA_RECORDS_LOADED = 'SIRA_RECORDS_LOADED';
const TOGGLE_ADD_MAP_MODAL = 'TOGGLE_ADD_MAP_MODAL';
const SIRA_ADD_LAYERS = 'SIRA_ADD_LAYERS';

function toggleAddMap(status = true) {
    return {
        type: TOGGLE_ADD_MAP_MODAL,
        status
    };
}
function recordsLoading(status, node) {
    return {
        type: SIRA_RECORDS_LOADING,
        status,
        node
    };
}
function recordsError(e) {
    return {
        type: SIRA_RECORDS_ERROR,
        error: e
    };
}
function recordsLoaded(node, result) {
    return {
        type: SIRA_RECORDS_LOADED,
        node,
        result
    };
}

function loadNodeMapRecords(node, params) {
    return (dispatch) => {
        dispatch(recordsLoading(true, node));
        const records = node.layers.filter((l) => l.type === 'wms').map((layer) => {
            return new Promise((resolve, reject) => {
                API.wms.getRecords(AddMapUtils.setUrl(layer.url, params), 1, Infinity, '').then((res) => {
                    resolve({records: res.records, wmsUrl: AddMapUtils.setUrl(layer.url)});
                }).catch((e) => reject(e));
            });
        });
        Promise.all(records).then((results) => {
            const layerrecords = results.reduce((acc, result) => {
                return acc.concat(AddMapUtils.getRootLayers(result));
            }, []);
            dispatch(recordsLoaded(node, layerrecords));
            dispatch(recordsLoading(false));
        }).catch((e)=> {
            dispatch(recordsError(e));
            dispatch(recordsLoading(false));
        });
    };
}
function addSiraLayers(layers) {
    return {
        type: 'SIRA_ADD_LAYERS',
        layers
    };
}
function addLayers(layers, useTitle, useGroup) {
    return (dispatch, getState) => {
        const node = ((getState()).addmap || {}).node;
        const layersConfig = layers.map((layer) => AddMapUtils.getLayerConfing(layer, 'EPSG:3857', useTitle, useGroup, {}, node));
        Promise.all(layersConfig).then((results) => {
            dispatch(addSiraLayers(results));
            dispatch(toggleAddMap(false));
        }).catch((e) => dispatch(recordsError(e)) );
    };
}

module.exports = {
    SIRA_RECORDS_LOADING,
    SIRA_RECORDS_ERROR,
    SIRA_RECORDS_LOADED,
    TOGGLE_ADD_MAP_MODAL,
    SIRA_ADD_LAYERS,
    loadNodeMapRecords,
    toggleAddMap,
    addLayers
 };
