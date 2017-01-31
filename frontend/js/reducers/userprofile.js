/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const {SHOW_LOGIN_PANEL, HIDE_LOGIN_PANEL, SET_PROFILE, SET_USER_IDENTITY, SET_USER_IDENTITY_ERROR} = require('../actions/userprofile');

function userprofile(state = {
    profile: null,
    authParams: {}
}, action) {
    switch (action.type) {
        case SHOW_LOGIN_PANEL: {
            return assign({}, state, {showLoginPanel: action.showLoginPanel});
        }
        case HIDE_LOGIN_PANEL: {
            return assign({}, state, {showLoginPanel: action.showLoginPanel});
        }
        case SET_PROFILE: {
            return assign({}, state, {
                profile: state.profile ? state.profile.concat(action.profile) : action.profile,
                authParams: action.authParams
            });
        }
        case SET_USER_IDENTITY: {
            return assign({}, state,
                {
                    roles: action.roles,
                    user: action.user,
                    profile: state.profile ? state.profile.concat(action.user.profile) : action.user.profile,
                    error: ''
                });
        }
        case SET_USER_IDENTITY_ERROR: {
            return assign({}, state, {roles: '', user: '', error: action.error});
        }
        default:
            return state;
    }
}

module.exports = userprofile;
