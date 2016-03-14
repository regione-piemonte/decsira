/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const TemplateUtils = require('../utils/TemplateUtils');

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

function configureCard(template, model) {
    return {
        type: CARD_TEMPLATE_LOADED,
        template: template,
        model: model
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

function loadCardModel(template, modelConfig, wfsUrl) {
    return (dispatch) => {
        return axios.get(wfsUrl).then((response) => {
            let model = TemplateUtils.getModel(response.data, modelConfig);
            dispatch(configureCard(template, model));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

function loadCardModelConfig(template, modelConfigURL, wfsUrl) {
    return (dispatch) => {
        return axios.get(modelConfigURL).then((response) => {
            let modelConfig = response.data;
            if (typeof modelConfig !== "object") {
                try {
                    modelConfig = JSON.parse(modelConfig);
                } catch(e) {
                    dispatch(configureCardError(e));
                }
            }
            dispatch(loadCardModel(template, modelConfig, wfsUrl));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

function loadCardTemplate(templateConfigURL, modelConfigURL, wfsUrl) {
    return (dispatch) => {
        return axios.get(templateConfigURL).then((response) => {
            let template = response.data;
            dispatch(loadCardModelConfig(template, modelConfigURL, wfsUrl));
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
    loadCardModel,
    toggleCard,
    configureCardError,
    loadCardModelConfig,
    selectSection
};
