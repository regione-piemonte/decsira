/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const CARD_TEMPLATE_LOADED = 'CARD_TEMPLATE_LOADED';
const CARD_TEMPLATE_LOAD_ERROR = 'CARD_TEMPLATE_LOAD_ERROR';
const CARD_TEMPLATE_TOOGLE = 'CARD_TEMPLATE_TOOGLE';
const SELECT_SECTION = 'SELECT_SECTION';

function toggleCard(state) {
    return {
        type: CARD_TEMPLATE_TOOGLE,
        show: state
    };
}

function configureCard(config) {
    return {
        type: CARD_TEMPLATE_LOADED,
        config: config
    };
}

function configureCardError(e) {
    return {
        type: CARD_TEMPLATE_LOAD_ERROR,
        error: e
    };
}

function selectSection(section, active) {
    return {
        type: SELECT_SECTION,
        section: section,
        active: active
    };
}

function loadCardTemplate(configUrl, configName) {
    return (dispatch) => {
        return axios.get(configUrl + configName).then((response) => {
            if (typeof response.data === "object") {
                dispatch(configureCard(response.data));
            } else {
                dispatch(configureCard(response.data));
            }
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

module.exports = {
    CARD_TEMPLATE_LOADED,
    CARD_TEMPLATE_LOAD_ERROR,
    CARD_TEMPLATE_TOOGLE,
    SELECT_SECTION,
    loadCardTemplate,
    toggleCard,
    configureCardError,
    selectSection

};
