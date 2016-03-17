/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {GRID_MODEL_LOADED, GRID_LOAD_ERROR, GRID_CONFIG_LOADED, SHOW_LOADING} = require('../actions/grid');

const assign = require('object-assign');
const TemplateUtils = require('../utils/TemplateUtils');

const initialState = {
    model: null,
    detailsConfig: null,
    modelConfig: null,
    loadingGrid: false,
    featureConfigUrl: "assets/featureGridConfig"
};

function grid(state = initialState, action) {
    switch (action.type) {
        case GRID_CONFIG_LOADED: {
            return assign({}, state, {
                detailsConfig: action.config.detailsConfig,
                modelConfig: action.config.modelConfig
            });
        }
        case GRID_MODEL_LOADED: {
            let model = TemplateUtils.getModels(action.model, state.modelConfig.root, state.modelConfig.config);
            return assign({}, state, {
                model: model,
                loadingGrid: false
            });
        }
        case GRID_LOAD_ERROR: {
            return assign({}, state, {
                loadingGridError: action.error,
                loadingGrid: false
            });
        }
        case SHOW_LOADING: {
            return assign({}, state, {
                loadingGrid: action.show
            });
        }
        default:
            return state;
    }
}

module.exports = grid;
