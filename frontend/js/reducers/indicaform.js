/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const assign = require('object-assign');

const initialState = {
};

function indicaform(state = initialState, action) {
    switch (action.type) {
    case 'INDICA_FORM_RESET': {
        return assign({}, state.indicaform, initialState);
    }

    case 'INDICA_FORM_CLOSED': {
        return assign({}, state.indicaform, action.indicaform);
    }

    default: return state;
    }
}

module.exports = indicaform;
