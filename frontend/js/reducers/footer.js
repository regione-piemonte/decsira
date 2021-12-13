/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const assign = require('object-assign');

const {
    SHOW_HIDE_ACCESSIBILITY_BOX
} = require('../actions/footer');

const initialState = {
    showAccessibilityBox: 'none'
};

function footer(state = initialState, action) {
    switch (action.type) {
    case SHOW_HIDE_ACCESSIBILITY_BOX: {
        return assign({}, state,
            {showAccessibilityBox: state.showAccessibilityBox === 'none' ? 'block' : 'none'});
    }
    default:
        return state;
    }
}

module.exports = footer;
