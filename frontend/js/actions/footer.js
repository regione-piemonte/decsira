/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SHOW_HIDE_ACCESSIBILITY_BOX = 'SHOW_HIDE_ACCESSIBILITY_BOX';

function showHideAccessibilityBox() {
    return {
        type: SHOW_HIDE_ACCESSIBILITY_BOX
    };
}

module.exports = {
    SHOW_HIDE_ACCESSIBILITY_BOX,
    showHideAccessibilityBox
};
