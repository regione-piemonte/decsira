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
const {removeLayer} = require('@mapstore/actions/layers');

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
        // controllo i layers già presenti in cart
        layers.forEach((lay) => {
            alreadyPresent = inCartLayers.filter((el) => el.name === lay.name).length > 0;
            if (!alreadyPresent)layersOk.push(lay);
            alreadyPresent = false;
        });
        // controllo i layers già presenti in mappa
        const mapLayers = getState().layers.flat || [];
        let layersToAdd = [];
        layersOk.forEach((lay) => {
            alreadyPresent = mapLayers.filter((el) => el.name === lay.name).length > 0;
            if (!alreadyPresent)layersToAdd.push(lay);
            alreadyPresent = false;
        });
        dispatch(addSiraLayersIncartInt(layersToAdd));
    };
}

function checkLayersInMap(getState, results, node) {
    const mapLayers = getState().layers.flat || [];
    const resultOk = results.reduce((previous, current) => {
        const alreadyPresent = mapLayers.filter((el) => el.title === current.title).length > 0;
        return alreadyPresent ? previous : [...previous, current];
    }, []);
    if (node.id) {
        resultOk.forEach((layer) => { layer.idnode = node.id; });
    }
    return resultOk;
}

function addLayers(layers, useTitle, useGroup, srs = 'EPSG:32632') {
    return (dispatch, getState) => {
        const node = ((getState()).addmap || {}).node;
        const layersConfig = layers.slice().reverse().map((layer) => AddMapUtils.getLayerConfing(layer, srs, useTitle, useGroup, {}, node));
        Promise.all(layersConfig).then((results) => {
            const resultOk = checkLayersInMap(getState, results, node);
            dispatch(addSiraLayers(resultOk));
            dispatch(toggleAddMap(false));
        }).catch((e) => dispatch(recordsError(e)) );
    };
}

function addLayersInCart(layers, useTitle, useGroup, srs = 'EPSG:32632') {
    return (dispatch, getState) => {
        const node = ((getState()).addmap || {}).node;
        const layersConfig = layers.map((layer) => AddMapUtils.getLayerConfing(layer, srs, useTitle, useGroup, {}, node));
        Promise.all(layersConfig).then((results) => {
            const resultOk = checkLayersInMap(getState, results, node);
            dispatch(addSiraLayersIncart(resultOk));
            dispatch(toggleAddMap(false));
            dispatch(addServiceIncart(node));
            dispatch(refreshNumberOfServices());
        }).catch((e) => dispatch(recordsError(e)) );
    };
}

function removeIndicaLayer(layer) {
    return (dispatch, getState) => {
        // rimuovo i layers già presenti in mappa con lo stesso title
        const mapLayers = getState().layers.flat || [];

        let alreadyPresentLayers = mapLayers.filter((el) => el.title === layer.title);
        alreadyPresentLayers.forEach(lay => {
            dispatch(removeLayer(lay.id));
        });
    };
}

function addIndicaLayer(layer) {
    return (dispatch) => {
        dispatch(removeIndicaLayer(layer));
        dispatch(addSiraLayers([layer]));
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
    addIndicaLayer,
    removeIndicaLayer,
    addFeatureTypeLayerInCart
};
