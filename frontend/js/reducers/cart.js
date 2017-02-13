/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const assign = require('object-assign');

const {HIDE_PANEL, SHOW_CART_PANEL, ADD_SERVICE_IN_CART, REFRESH_NUMBER_OF_SERVICES, SET_CART_SERVICES, RM_LAYERS_SERVICES, RM_SERVICES} = require('../actions/cart');
const {SIRA_ADD_LAYERS_IN_CART} = require('../actions/addmap');

const initialState = {
  showPanel: false,
  showLayersPanel: false,
  servicesNumber: 0,
  layers: [],
  wmsservices: []
};

function cart(state = initialState, action) {
    switch (action.type) {
    case HIDE_PANEL: {
        return assign({}, state, {showPanel: false});
    }
    case SHOW_CART_PANEL: {
        return assign({}, state, {showPanel: true});
    }
    case REFRESH_NUMBER_OF_SERVICES: {
        return assign({}, state, {servicesNumber: state.wmsservices.length});
    }
    case SIRA_ADD_LAYERS_IN_CART: {
        return assign({}, state,
            {
                layers: action.layers
            }
        );
    }
    case ADD_SERVICE_IN_CART: {
        return assign({}, state,
            {
                wmsservices: action.service ? [...state.wmsservices, action.service] : state.wmsservices
            }
        );
    }case SET_CART_SERVICES: {
        return assign({}, state,
            {
                wmsservices: action.wmsservices ? action.wmsservices : []
            }
        );
    }case RM_LAYERS_SERVICES: {
        let layersOk = state.cart && state.cart.layers ? state.cart.layers : [];
        if (action.idNode) {
            layersOk = layersOk.filter((el) => el.idNode !== action.idNode);
        }
        return assign({}, state,
            {
                layers: layersOk
            }
        );
    }case RM_SERVICES: {
        let servicesOk = state.cart && state.cart.wmsservices ? state.cart.wmsservices : [];
        if (action.idService) {
            servicesOk = servicesOk.filter((el) => el.id !== action.idService);
        }
        return assign({}, state,
            {
                layers: servicesOk
            }
        );
    }
    default:
        return state;
    }
}

module.exports = cart;
