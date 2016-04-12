/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SET_PROFILE = 'SET_PROFILE';

function setProfile(profile, authParams) {
    return {
        type: SET_PROFILE,
        profile: profile,
        authParams: authParams
    };
}

module.exports = {
    SET_PROFILE,
    setProfile
};
