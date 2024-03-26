/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SHOW_HIDE_RIGHT_MENU = 'SHOW_HIDE_RIGHT_MENU';

function showHideRightMenu() {
    return {
        type: SHOW_HIDE_RIGHT_MENU
    };
}

module.exports = {
    SHOW_HIDE_RIGHT_MENU,
    showHideRightMenu
};
