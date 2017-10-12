/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const SET_PROFILE = 'SET_PROFILE';
const SET_USER_IDENTITY_ERROR = 'SET_USER_IDENTITY_ERROR';
const SET_USER_IDENTITY = 'LOADED_USER_IDENTITY';
const SHOW_LOGIN_PANEL = 'SHOW_LOGIN_PANEL';
const HIDE_LOGIN_PANEL = 'HIDE_LOGIN_PANEL';

function showLoginPanel() {
    return {
        type: SHOW_LOGIN_PANEL,
        showLoginPanel: true
    };
}

function hideLoginPanel() {
    return {
        type: HIDE_LOGIN_PANEL,
        showLoginPanel: false
    };
}

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
        user: data.user,
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
            // response example
            // response.data = {"roles": [{"code": "PA_GEN_DECSIRA", "domain": "REG_PMN", "mnemonic": "PA_GEN_DECSIRA@REG_PMN"}], "userIdentity": {"codFiscale": "AAAAAA00B77B000F", "nome": "CSI PIEMONTE", "cognome": "DEMO 20", "idProvider": "SISTEMAPIEMONTE"}};
            if (typeof response.data === 'object') {
                if (response.data.userIdentity && response.data.roles && response.data.roles.length > 0) {
                    // there is a logged user, geoserverUrl = secureGeoserverUrl
                    ConfigUtils.setConfigProp('geoserverUrl', ConfigUtils.getConfigProp('secureGeoserverUrl'));
                    response.data.profile = [];
                    Array.from(response.data.roles).forEach(function(val) {
                        if (val && val.mnemonic) {
                            response.data.profile.push(val.mnemonic);
                        }
                    });
                }
                let user = {};
                if (response.data.userIdentity) {
                    user = {
                        name: response.data.userIdentity.nome + " " + response.data.userIdentity.cognome,
                        surname: response.data.userIdentity.cognome,
                        cf: response.data.userIdentity.nome,
                        idProvider: response.data.userIdentity.idProvider,
                        profile: response.data.profile
                   };
                    response.data.user = user;
                }
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
    SHOW_LOGIN_PANEL,
    HIDE_LOGIN_PANEL,
    showLoginPanel,
    hideLoginPanel,
    loadUserIdentity,
    userIdentityLoaded,
    userIdentityError,
    setProfile
};
