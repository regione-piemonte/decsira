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
    wms: require('../utils/WMS')
};
const AddMapUtils = require('../utils/AddMapUtils');
const {addServiceIncart, refreshNumberOfServices, addSiraLayers} = require('./cart');
const SIRA_RECORDS_LOADING = 'SIRA_RECORDS_LOADING';
const SIRA_RECORDS_ERROR = 'SIRA_RECORDS_ERROR';
const SIRA_RECORDS_LOADED = 'SIRA_RECORDS_LOADED';
const TOGGLE_ADD_MAP_MODAL = 'TOGGLE_ADD_MAP_MODAL';
const SIRA_ADD_LAYERS = 'SIRA_ADD_LAYERS';
const SIRA_ADD_LAYERS_IN_CART = 'SIRA_ADD_LAYERS_IN_CART';

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

function addSiraLayersIncartInt(layers) {
    return {
        type: 'SIRA_ADD_LAYERS_IN_CART',
        layers
    };
}

function addSiraLayersIncart(layers) {
    return (dispatch, getState) => {
        let inCartLayers = getState().cart.layers;
        let layersOk = [];
        let alreadyPresent = false;
        layers.forEach((lay) => {
            alreadyPresent = inCartLayers.filter((el) => el.name === lay.name).length > 0;
            if (!alreadyPresent)layersOk.push(lay);
            alreadyPresent = false;
        });
        dispatch(addSiraLayersIncartInt(layersOk));
    };
}

function addLayers(layers, useTitle, useGroup, srs = 'EPSG:32632') {
    return (dispatch, getState) => {
        const node = ((getState()).addmap || {}).node;
        const layersConfig = layers.slice().reverse().map((layer) => AddMapUtils.getLayerConfing(layer, srs, useTitle, useGroup, {}, node));
        Promise.all(layersConfig).then((results) => {
            dispatch(addSiraLayers(results));
            dispatch(toggleAddMap(false));
        }).catch((e) => dispatch(recordsError(e)) );
    };
}

function addLayersInCart(layers, useTitle, useGroup, srs = 'EPSG:32632') {
    return (dispatch, getState) => {
        const node = ((getState()).addmap || {}).node;
        const layersConfig = layers.map((layer) => AddMapUtils.getLayerConfing(layer, srs, useTitle, useGroup, {}, node));
        Promise.all(layersConfig).then((results) => {
            const cartLayers = getState().cart.layers || [];
            const resultOk = results.reduce((previous, current) => {
                const alreadyPresent = cartLayers.filter((el) => el.title === current.title).length > 0;
                return alreadyPresent ? previous : [...previous, current];
            }, []);
            if (node.id) {
                resultOk.forEach((layer) => {layer.idnode = node.id; });
            }
            dispatch(addSiraLayersIncart(resultOk));
            dispatch(toggleAddMap(false));
            dispatch(addServiceIncart(node));
            dispatch(refreshNumberOfServices());
        }).catch((e) => dispatch(recordsError(e)) );
    };
}

function addFeatureTypeLayerInCart(layers, node) {
    return (dispatch) => {
        dispatch(addSiraLayersIncart(layers));
        dispatch(addServiceIncart(node));
        dispatch(refreshNumberOfServices());
    };
}

module.exports = {
    SIRA_RECORDS_LOADING,
    SIRA_RECORDS_ERROR,
    SIRA_RECORDS_LOADED,
    TOGGLE_ADD_MAP_MODAL,
    SIRA_ADD_LAYERS,
    SIRA_ADD_LAYERS_IN_CART,
    loadNodeMapRecords,
    toggleAddMap,
    addLayers,
    addLayersInCart,
    addFeatureTypeLayerInCart
 };
