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
    SHOW_HIDE_CONOSCENZA_AMB_BOX,
    SHOW_HIDE_CREDITS_BOX
} = require('../actions/header');

const initialState = {
  showRightMenu: false,
  showSistemaConoscenzeAmbientaliBox: 'none',
  showCreditsBox: 'none'
};

function header(state = initialState, action) {
    switch (action.type) {
        case SHOW_HIDE_RIGHT_MENU: {
            return assign({}, state,
                {showRightMenu: !state.showRightMenu});
        }case SHOW_HIDE_CONOSCENZA_AMB_BOX: {
            return assign({}, state,
                {showSistemaConoscenzeAmbientaliBox: state.showSistemaConoscenzeAmbientaliBox === 'none' ? 'block' : 'none'});
        }case SHOW_HIDE_CREDITS_BOX: {
            return assign({}, state,
                {showCreditsBox: state.showCreditsBox === 'none' ? 'block' : 'none'});
        }
        default:
            return state;
    }
}

module.exports = header;
