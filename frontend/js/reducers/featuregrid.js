/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const {SELECT_FEATURES, SET_FEATURES, SELECT_ALL} = require('../actions/featuregrid');
const {CONFIGURE_INFO_TOPOLOGY, CHANGE_MAPINFO_STATE, CHANGE_TOPOLOGY_MAPINFO_STATE} = require('../actions/mapInfo');

function featuregrid(state = {
    select: [],
    features: [],
    selectAll: false
}, action) {
    switch (action.type) {
        case CHANGE_TOPOLOGY_MAPINFO_STATE:
        case CHANGE_MAPINFO_STATE: {
            return assign({}, state, {features: [], select: []});
        }
        case SELECT_FEATURES:
            return assign({}, state, {select: action.features});
        case SET_FEATURES:
        case CONFIGURE_INFO_TOPOLOGY:
            return assign({}, state, {features: action.features || action.infoTopologyResponse.features});
        case SELECT_ALL:
            return assign({}, state, {selectAll: (action.sldBody && action.featureTypeName) ? true : false});
        default:
            return state;
    }
}

module.exports = featuregrid;
