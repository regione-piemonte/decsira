/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {PLATFORM_NUMBER_LOADED, PLATFORM_NUMBER_ERROR} = require('../actions/platformnumbers');

function platformnumbers(state = {
    functionObjectMap: 0,
    functionObjectSearch: 0,
    functionObjectView: 0,
    siradecObject: 0
}, action) {
    switch (action.type) {
    case PLATFORM_NUMBER_LOADED: {
        return {
            functionObjectMap: action.functionObjectMap,
            functionObjectSearch: action.functionObjectSearch,
            functionObjectView: action.functionObjectView,
            siradecObject: action.siradecObject,
            error: null
        };
    }
    case PLATFORM_NUMBER_ERROR: {
        return {
            functionObjectMap: 0,
            functionObjectSearch: 0,
            functionObjectView: 0,
            siradecObject: 0,
            error: action.error
        };
    }
    default:
        return state;
    }
}

module.exports = platformnumbers;
