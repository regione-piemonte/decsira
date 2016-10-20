/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msMapConfig = require('../../MapStore2/web/client/reducers/config');
const CommonLayers = require('json!../../siraCommonLayers.json');
const assign = require('object-assign');

function mapConfig(state = null, action) {
    switch (action.type) {
        case 'MAP_CONFIG_LOADED': {
            let layers = action.config.map.layers.concat(CommonLayers);
            action.config.map = assign({}, action.config.map, {layers: layers});
            if (state.siradec.inlineMapConfig) {
                action.config.map = assign({}, action.config.map, state.siradec.inlineMapConfig);
            }
            return msMapConfig(state, action);
        }
        default:
            return msMapConfig(state, action);
    }
}
module.exports = mapConfig;

