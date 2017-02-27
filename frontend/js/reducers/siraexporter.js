/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const {SET_EXPORT_PARAMS, EXPORT_LOADING, EXPORT_ERROR, CONFIGURE_EXPORTER} = require('../actions/siraexporter');

function siraexporter(state = {
    params: null,
    loading: false,
    errormsg: null,
    csvName: "csv",
    shpName: "shp",
    maxFeatures: 40,
    addFile: null,
    srs: 'EPSG:4326'
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
        case CONFIGURE_EXPORTER: {
            return assign({}, state, action.config);
        }
        default:
            return state;
    }
}

module.exports = siraexporter;
