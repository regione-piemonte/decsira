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
            if (localStorage.getItem('sira.config.layers')) {
                const storedLayersConfig = JSON.parse(localStorage.getItem('sira.config.layers'));
                layers = action.config.map.layers.concat(storedLayersConfig);
                action.config.map = assign({}, action.config.map, {layers: layers});
                localStorage.removeItem('sira.config.layers');
            }
            if (localStorage.getItem('sira.config.map')) {
                const storedMapConfig = JSON.parse(localStorage.getItem('sira.config.map'));
                action.config.map = assign({}, action.config.map, storedMapConfig);
                localStorage.removeItem('sira.config.map');
            }
            if (state.siradec.inlineMapConfig) {
                action.config.map = assign({}, action.config.map, state.siradec.inlineMapConfig);
            }
            return msMapConfig(state, action);
        }
        case 'THEMATIC_VIEW_CONFIG_MAP': {
            const layers = action.config.map.layers.concat(CommonLayers);
            const map = assign({}, action.config.map, {layers: layers});
            const newAction = {type: 'MAP_CONFIG_LOADED', legacy: false, mapId: false, config: {map}};
            return msMapConfig(state, newAction);
        }
        default:
            return msMapConfig(state, action);
    }
}
module.exports = mapConfig;

