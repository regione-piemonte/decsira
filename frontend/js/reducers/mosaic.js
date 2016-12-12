/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {TILES_LOADED, TILES_LOAD_ERROR} = require('../actions/mosaictile');

function mosaic(state = {tiles: []}, action) {
    switch (action.type) {
    case TILES_LOADED: {
        return {tiles: action.tiles, error: null };
    }
    case TILES_LOAD_ERROR: {
        return {tiles: [], error: action.error};
    }
    default:
        return state;
    }
}

module.exports = mosaic;
