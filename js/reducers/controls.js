/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {TOGGLE_CONTROL} = require('../actions/controls');
const assign = require('object-assign');

const initialState = {
    grid: false,
    detail: false,
    query: true
};

function controls(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CONTROL: {
            return assign({}, state, {
                [action.control]: !state[action.control]
            });
        }
        default:
            return state;
    }
}

module.exports = controls;
