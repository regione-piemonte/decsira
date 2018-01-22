/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SHOW_HIDE_RIGHT_MENU = 'SHOW_HIDE_RIGHT_MENU';
const SHOW_HIDE_CONOSCENZA_AMB_BOX = 'SHOW_HIDE_CONOSCENZA_AMB_BOX';
const SHOW_HIDE_CREDITS_BOX = 'SHOW_HIDE_CREDITS_BOX';

function showHideRightMenu() {
    return {
        type: SHOW_HIDE_RIGHT_MENU
    };
}

function showHideRightConoscenzaAmbBox() {
    return {
        type: SHOW_HIDE_CONOSCENZA_AMB_BOX
    };
}

function showHideCreditsBox() {
    return {
        type: SHOW_HIDE_CREDITS_BOX
    };
}

module.exports = {
    SHOW_HIDE_RIGHT_MENU,
    SHOW_HIDE_CONOSCENZA_AMB_BOX,
    SHOW_HIDE_CREDITS_BOX,
    showHideRightConoscenzaAmbBox,
    showHideCreditsBox,
    showHideRightMenu
};
