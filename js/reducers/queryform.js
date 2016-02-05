/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {QUERYFORM_CONFIG_LOADED, EXPAND_FILTER_PANEL, QUERYFORM_CONFIG_LOAD_ERROR} = require('../actions/queryform');
const assign = require('object-assign');

function queryformconfig(state = {filterPanelExpanded: true, attributes: [], loadingQueryFormConfigError: null}, action) {
    switch (action.type) {
        case QUERYFORM_CONFIG_LOADED: {
            return assign({}, state, {
                attributes: action.config.fields,
                featureTypeName: action.config.featureTypeName
            });
        }
        case EXPAND_FILTER_PANEL: {
            return assign({}, state, {
                filterPanelExpanded: action.expand
            });
        }
        case QUERYFORM_CONFIG_LOAD_ERROR: {
            return {
                loadingQueryFormConfigError: action.error
            };
        }
        default:
            return state;
    }
}

module.exports = queryformconfig;
