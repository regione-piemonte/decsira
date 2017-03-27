/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const {SET_PROFILE} = require('../actions/userprofile');

function security(state = {user: null, errorCause: null}, action) {
    switch (action.type) {
        case SET_PROFILE: {
            return assign({}, state,
                {
                    // user: action.authParams && action.authParams.userName ? action.authParams.userName : '',
                    // token: action.authParams && action.authParams.authkey ? action.authParams.authkey : ''
                    user: action.authParams ? action.authParams.userName : '',
                    token: action.authParams ? action.authParams.authkey : ''
                });
        }
        default:
            return state;
    }
}

module.exports = security;
