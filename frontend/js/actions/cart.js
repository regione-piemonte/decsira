/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const HIDE_PANEL = 'HIDE_PANEL';
const SHOW_CART_PANEL = 'SHOW_CART_PANEL';
const ADD_SERVICE_IN_CART = 'ADD_SERVICE_IN_CART';
const REFRESH_NUMBER_OF_SERVICES = 'REFRESH_NUMBER_OF_SERVICES';
const SET_CART_SERVICES = 'SET_CART_SERVICES';
const EMPTY_CART = 'EMPTY_CART';
const RM_LAYERS_SERVICES = 'RM_LAYERS_SERVICES';
const RM_SERVICES = 'RM_SERVICES';

/*
 * action
 */
function hidePanel() {
    return {
        type: HIDE_PANEL
    };
}

function showPanel() {
    return {
        type: SHOW_CART_PANEL
    };
}

function refreshNumberOfServices() {
    return {
        type: REFRESH_NUMBER_OF_SERVICES
    };
}

function addService(node) {
    return {
        type: ADD_SERVICE_IN_CART,
        service: node
    };
}

function addServiceIncart(node) {
    return (dispatch, getState) => {
        let nodes = getState().cart.wmsservices;
        const alreadyPresent = nodes.filter((el) => el.id === node.id).length > 0;
        if (!alreadyPresent) dispatch(addService(node));
        else dispatch(addService(null));
    };
}

function setServices(nodes) {
    return {
        type: SET_CART_SERVICES,
        wmsservices: nodes
    };
}

function removeLayersFromCart(idNode) {
    return {
        type: RM_LAYERS_SERVICES,
        idNode: idNode
    };
}

function rmServiceFromCart(idService) {
    return {
        type: RM_SERVICES,
        idService: idService
    };
}

function removeServiceFromCart(id) {
    return (dispatch) => {
        dispatch(rmServiceFromCart(id));
        dispatch(refreshNumberOfServices());
    };
}

function addSiraLayers(layers) {
    return {
        type: 'SIRA_ADD_LAYERS',
        layers
    };
}

function emptyCart() {
    return {
        type: 'EMPTY_CART',
        layers: [],
        wmsservices: []
    };
}

function prepareDataToMap() {
    return (dispatch, getState) => {
        let layers = getState().cart.layers;
        dispatch(addSiraLayers(layers));
        dispatch(emptyCart());
    };
}

module.exports = {
    HIDE_PANEL,
    SHOW_CART_PANEL,
    ADD_SERVICE_IN_CART,
    REFRESH_NUMBER_OF_SERVICES,
    SET_CART_SERVICES,
    EMPTY_CART,
    RM_LAYERS_SERVICES,
    RM_SERVICES,
    showPanel,
    hidePanel,
    addServiceIncart,
    refreshNumberOfServices,
    setServices,
    removeLayersFromCart,
    removeServiceFromCart,
    prepareDataToMap,
    addSiraLayers,
    emptyCart
  };
