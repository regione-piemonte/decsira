/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {GRID_MODEL_LOADED, GRID_LOAD_ERROR} = require('../actions/grid');

const assign = require('object-assign');

const initialState = {
    model: null
};

function grid(state = initialState, action) {
    switch (action.type) {
        case GRID_MODEL_LOADED: {
            return assign({}, state, {
                model: action.model
            });
        }
        case GRID_LOAD_ERROR: {
            return assign({}, state, {
                loadingGridError: action.error
            });
        }
        default:
            return state;
    }
}

module.exports = grid;
