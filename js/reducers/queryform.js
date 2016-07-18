/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msQueryFrom = require('../../MapStore2/web/client/reducers/queryform');

function queryform(state, action) {
    switch (action.type) {
        case 'QUERYFORM_CONFIG_LOADED': {
            return {...action.config};
        }
        case 'FEATURETYPE_CONFIG_LOADED': {
            return {...state, spatialField: {...state.spatialField, attribute: action.geometryName}};
        }
        default: return msQueryFrom(state, action);
    }
}

module.exports = queryform;

