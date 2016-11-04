/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const TOGGLE_NODE = 'TOGGLE_NODE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

function toggleNode(id, status) {
    return {
        type: TOGGLE_NODE,
        id,
        status
    };
}
function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    };
}


module.exports = {
    TOGGLE_NODE,
    SELECT_CATEGORY,
    toggleNode,
    selectCategory
};
