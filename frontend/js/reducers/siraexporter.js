/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const {SET_EXPORT_PARAMS, EXPORT_LOADING, EXPORT_ERROR} = require('../actions/siraexporter');

function siraexporter(state = {
    params: null,
    loading: false,
    errormsg: null
}, action) {
    switch (action.type) {
        case SET_EXPORT_PARAMS: {
            return assign({}, state, {params: action.params, errormsg: null});
        }
        case EXPORT_LOADING: {
            return assign({}, state, {loading: action.loading});
        }
        case EXPORT_ERROR: {
            return assign({}, state, {errormsg: action.error, loading: false});
        }
        default:
            return state;
    }
}

module.exports = siraexporter;
