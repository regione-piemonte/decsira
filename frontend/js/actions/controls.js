/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const TOGGLE_SIRA_CONTROL = 'TOGGLE_SIRA_CONTROL';

function toggleSiraControl(control) {
    return {
        type: TOGGLE_SIRA_CONTROL,
        control
    };
}

module.exports = {TOGGLE_SIRA_CONTROL, toggleSiraControl};
