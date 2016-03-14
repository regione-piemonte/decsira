/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    QUERYFORM_CONFIG_LOADED,
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR
} = require('../actions/queryform');

const assign = require('object-assign');

const initialState = {
    filterPanelExpanded: true,
    attributes: [],
    loadingQueryFormConfigError: null,
    queryform: null
};

function queryformconfig(state = initialState, action) {
    switch (action.type) {
        case FEATURETYPE_CONFIG_LOADED: {
            return assign({}, state, {
                attributes: [...state.attributes, action.field],
                featureTypeName: action.ftName,
                featureTypeNameLabel: action.ftNameLabel
            });
        }
        case QUERYFORM_CONFIG_LOADED: {
            return assign({}, state, {
                queryform: action.config
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
