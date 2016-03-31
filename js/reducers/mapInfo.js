/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {LOAD_TEMPLATE_INFO, CONFIGURE_GET_FEATURE_INFO_ERROR, CONFIGURE_GET_FEATURE_INFO} = require('../actions/mapInfo');

const assign = require('object-assign');

const initialState = {
    detailsConfig: null,
    modelConfig: null,
    template: null
};

function mapInfo(state = initialState, action) {
    switch (action.type) {
        case CONFIGURE_GET_FEATURE_INFO: {
            return assign({}, state, {
                detailsConfig: action.config.detailsConfig,
                modelConfig: action.config.modelConfig
            });
        }
        case LOAD_TEMPLATE_INFO: {
            return assign({}, state, {
                template: action.template
            });
        }
        case CONFIGURE_GET_FEATURE_INFO_ERROR: {
            return assign({}, state, {
                loadingTemplateError: action.error
            });
        }
        default:
            return state;
    }
}

module.exports = mapInfo;
