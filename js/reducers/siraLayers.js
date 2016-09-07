/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msLayers = require('../../MapStore2/web/client/reducers/layers');

const {SELECT_FEATURES, SET_FEATURES} = require('../actions/featuregrid');
const {CONFIGURE_INFO_TOPOLOGY, CHANGE_MAPINFO_STATE, CHANGE_TOPOLOGY_MAPINFO_STATE} = require('../actions/mapInfo');

const getAction = (layer, features) => {
    return {
        type: "CHANGE_LAYER_PROPERTIES",
        layer,
        newProperties: { features }
    };
};
function layers(state = [], action) {
    switch (action.type) {
        case CHANGE_TOPOLOGY_MAPINFO_STATE:
        case CHANGE_MAPINFO_STATE: {
            let tmpState = msLayers(state, getAction("gridItems", []) );
            return msLayers(tmpState, getAction("topologyItems", []));
        }
        case SELECT_FEATURES:
            return msLayers(state, getAction("gridItems", action.features) );
        case SET_FEATURES:
        case CONFIGURE_INFO_TOPOLOGY:
            return msLayers(state, getAction("topologyItems", action.features || action.infoTopologyResponse.features));
        default:
            return msLayers(state, action);
    }
}
module.exports = layers;

