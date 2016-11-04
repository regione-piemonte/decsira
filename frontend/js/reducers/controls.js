/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {TOGGLE_SIRA_CONTROL} = require('../actions/controls');
const {GRID_MODEL_LOADED, SHOW_LOADING, CREATE_GRID_DATA_SOURCE} = require('../actions/grid');
const assign = require('object-assign');

const initialState = {
    grid: false,
    detail: false,
    query: true
};

function controls(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIRA_CONTROL: {
            return assign({}, state, {
                [action.control]: !state[action.control]
            });
        }
        case CREATE_GRID_DATA_SOURCE:
        case GRID_MODEL_LOADED:
        case SHOW_LOADING: {
            return assign({}, state, {
                grid: true
            });
        }
        default:
            return state;
    }
}

module.exports = controls;
