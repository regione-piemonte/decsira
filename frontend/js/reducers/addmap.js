/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {
    SIRA_RECORDS_LOADING,
    SIRA_RECORDS_ERROR,
    SIRA_RECORDS_LOADED,
    TOGGLE_ADD_MAP_MODAL} = require('../actions/addmap');

const assign = require('object-assign');

const initialState = {
    loading: false,
    error: null,
    show: false,
    records: [],
    node: null
};

function addmap(state = initialState, action) {
    switch (action.type) {
        case SIRA_RECORDS_LOADING: {
            return action.status ? assign({}, state, {
                records: [],
                node: action.node,
                loading: action.status,
                error: null
            }) : assign({}, state, {
                loading: action.status});
        }
        case SIRA_RECORDS_ERROR: {
            return assign({}, state, {
                error: action.error,
                records: []
            });
        }
        case TOGGLE_ADD_MAP_MODAL: {
            return assign({}, state, {
                show: action.status,
                error: null
            });
        }
        case SIRA_RECORDS_LOADED: {
            return assign({}, state, {
                    node: action.node,
                    records: action.result
                });
        }
        default:
            return state;
    }
}
module.exports = addmap;
