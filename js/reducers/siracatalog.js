/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const initialState = {};
const { TOGGLE_NODE} = require('../actions/siracatalog');
const assign = require('object-assign');
function siracatalog(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NODE: {
            let nodes = state.nodes.map((n) => (n.name === action.id || n.id === action.id ? assign({}, n, {expanded: !action.status}) : n));
            return assign({}, state, {nodes});
        }
        default:
            return state;
    }
}

module.exports = siracatalog;
