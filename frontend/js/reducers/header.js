/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const assign = require('object-assign');

const {
    SHOW_HIDE_RIGHT_MENU,
} = require('../actions/header');

const initialState = {
    showRightMenu: false
};

function header(state = initialState, action) {
    switch (action.type) {
    case SHOW_HIDE_RIGHT_MENU: {
        return assign({}, state,
            {showRightMenu: !state.showRightMenu});
    }
    default:
        return state;
    }
}

module.exports = header;
