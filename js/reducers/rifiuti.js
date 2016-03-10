/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {SELECT_RIFIUTO} = require('../actions/rifiuti');
const assign = require('object-assign');

const initialState = {
    id_rifiuto: ''
};

function rifiuti(state = initialState, action) {
    switch (action.type) {
        case SELECT_RIFIUTO: {
            return assign({}, state, {
                id_rifiuto: action.id_rifiuto
            });
        }
        default:
            return state;
    }
}

module.exports = rifiuti;
