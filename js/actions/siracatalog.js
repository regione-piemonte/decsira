/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const TOGGLE_NODE = 'TOGGLE_NODE';

function toggleNode(id, status) {
    return {
        type: TOGGLE_NODE,
        id,
        status
    };
}


module.exports = {
    TOGGLE_NODE,
    toggleNode
};
