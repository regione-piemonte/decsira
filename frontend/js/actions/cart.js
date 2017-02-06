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
        let alreadyPresent = false;
        if (node && nodes && Object.prototype.toString.call(nodes) === '[object Array]') {
            nodes.map((el) => {
                alreadyPresent = alreadyPresent || (el.id === node.id);
            });
        }
        if (!alreadyPresent) dispatch(addService(node));
        else dispatch(addService(null));
    };
}

module.exports = {
    HIDE_PANEL,
    SHOW_CART_PANEL,
    ADD_SERVICE_IN_CART,
    REFRESH_NUMBER_OF_SERVICES,
    showPanel,
    hidePanel,
    addServiceIncart,
    refreshNumberOfServices
  };
