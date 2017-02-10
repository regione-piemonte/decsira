/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const assign = require('object-assign');

const {HIDE_PANEL, SHOW_CART_PANEL, ADD_SERVICE_IN_CART, REFRESH_NUMBER_OF_SERVICES, SET_CART_SERVICES} = require('../actions/cart');
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
    }
    default:
        return state;
    }
}

module.exports = cart;
