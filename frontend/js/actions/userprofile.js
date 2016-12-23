/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const axios = require('../../MapStore2/web/client/libs/ajax');
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_IDENTITY_ERROR = 'SET_USER_IDENTITY_ERROR';
const SET_USER_IDENTITY = 'LOADED_USER_IDENTITY';

function setProfile(profile, authParams) {
    return {
        type: SET_PROFILE,
        profile: profile,
        authParams: authParams
    };
}

function userIdentityLoaded(data) {
    return {
        type: SET_USER_IDENTITY,
        roles: data.roles,
        userIdentity: data.userIdentity,
        error: ''
    };
}

function userIdentityError(err) {
    return {
        type: SET_USER_IDENTITY_ERROR,
        roles: '',
        userIdentity: '',
        error: err
    };
}

function loadUserIdentity(serviceUrl = 'services/iride/getRolesForDigitalIdentity') {
    return (dispatch) => {
        return axios.get(serviceUrl).then((response) => {
            // TODO to remove only for first test
            response.data = {"roles": [{"code": "PA_GEN_DECSIRA", "domain": "REG_PMN", "mnemonic": "PA_GEN_DECSIRA@REG_PMN"}], "userIdentity": {"codFiscale": "AAAAAA00B77B000F", "nome": "CSI PIEMONTE", "cognome": "DEMO 20", "idProvider": "SISTEMAPIEMONTE"}};
            if (typeof response.data === 'object') {
                dispatch(userIdentityLoaded(response.data));
            } else {
                try {
                    dispatch(userIdentityLoaded(JSON.parse(response.data)));
                } catch(e) {
                    dispatch(userIdentityError('Error in getRolesForDigitalIdentity: ' + e.message));
                }
            }
        }).catch((e) => {
            dispatch(userIdentityError(e.message));
        });
    };
}

module.exports = {
    SET_PROFILE,
    SET_USER_IDENTITY_ERROR,
    SET_USER_IDENTITY,
    loadUserIdentity,
    userIdentityLoaded,
    userIdentityError,
    setProfile
};
