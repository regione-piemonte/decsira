/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msLayers = require('../../MapStore2/web/client/reducers/layers');
const assign = require('object-assign');
const {isObject} = require('lodash');
const {SHOW_SETTINGS, HIDE_SETTINGS, TOGGLE_NODE} = require('../../MapStore2/web/client/actions/layers');
const {SELECT_FEATURES, SET_FEATURES, SELECT_ALL} = require('../actions/featuregrid');
const {CONFIGURE_INFO_TOPOLOGY, CHANGE_MAPINFO_STATE, CHANGE_TOPOLOGY_MAPINFO_STATE} = require('../actions/mapInfo');

const getAction = (layer, features) => {
    return {
        type: "CHANGE_LAYER_PROPERTIES",
        layer,
        newProperties: { features }
    };
};
const cloneLayer = (layer) => {
    let newLayer = {};
    Object.keys(layer).reduce((pr, next) => {
        pr[next] = isObject(layer[next]) ? assign({}, layer[next]) : layer[next];
        return pr;
    }, newLayer);
    return newLayer;
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
        case SHOW_SETTINGS: {
            return msLayers(msLayers(state, {
                    type: TOGGLE_NODE,
                    node: action.node,
                    nodeType: "layers",
                    status: true}), action);

        }
        case HIDE_SETTINGS: {
            return msLayers(msLayers(state, {
                    type: 'TOGGLE_NODE',
                    node: action.node,
                    nodeType: "layers",
                    status: false}), action);
        }
        case SELECT_ALL: {
            if (action.sldBody && action.featureTypeName) {
                let layer = state.flat.find(l => l.name === `${action.featureTypeName}`);
                if (layer) {
                    let allLayer = state.flat.find(l => l.id === "selectAll");
                    if (allLayer) {
                        let params = {params: {...allLayer.params, SLD_BODY: action.sldBody}};
                        return msLayers(state, { type: "CHANGE_LAYER_PROPERTIES",
                                                layer: allLayer.id,
                                                newProperties: params
                                            });
                    }
                    let newLayer = cloneLayer(layer);
                    newLayer.id = "selectAll";
                    newLayer.type = "wmspost";
                    delete newLayer.group;
                    newLayer.params = assign({}, newLayer.params, {SLD_BODY: action.sldBody});
                    return msLayers(state, { type: "ADD_LAYER", layer: newLayer});
                }
            }
            let allLayer = state.flat.find(l => l.id === "selectAll");
            return allLayer ? msLayers(state, { type: "REMOVE_NODE", nodeType: 'layers', node: 'selectAll'}) : msLayers(state, action);
        }
        default:
            return msLayers(state, action);
    }
}
module.exports = layers;

