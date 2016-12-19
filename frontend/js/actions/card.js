/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const CARD_TEMPLATE_LOADED = 'CARD_TEMPLATE_LOADED';
const CARD_TEMPLATE_LOAD_ERROR = 'CARD_TEMPLATE_LOAD_ERROR';
const SELECT_SECTION = 'SELECT_SECTION';
const ACTIVE_SECTION = 'ACTIVE_SECTION';
const SELECT_ROWS = 'SELECT_ROWS';
const GENERATE_PDF = 'GENERATE_PDF';


function generatePDF(active = true) {
    return {
        type: GENERATE_PDF,
        active
    };
}

function configureCard(template, xml) {
    return {
        type: CARD_TEMPLATE_LOADED,
        template: template,
        xml: xml
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

function activateSection(section) {
    return {
        type: ACTIVE_SECTION,
        section: section
    };
}

function loadCardData(template, wfsUrl) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    return (dispatch) => {
        return axios.get(url).then((response) => {
            // let model = TemplateUtils.getModel(response.data, modelConfig);
            dispatch(configureCard(template, response.data));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

/*function loadCardModelConfig(template, modelConfigURL, wfsUrl) {
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
}*/

function loadCardTemplate(templateConfigURL, wfsUrl) {
    return (dispatch) => {
        return axios.get(templateConfigURL).then((response) => {
            let template = response.data;
            if (wfsUrl) {
                dispatch(loadCardData(template, wfsUrl));
                // dispatch(loadCardModelConfig(template, modelConfigURL, wfsUrl));
            } else {
                dispatch(configureCard(template));
            }
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

function selectRows(tableId, rows) {
    return {
        type: SELECT_ROWS,
        tableId: tableId,
        rows: rows
    };
}

/*function setSiraImpiantoModel(impiantoModel) {
    return {
        type: SET_IMPIANTO_MODEL,
        impiantoModel: impiantoModel
    };
}*/

module.exports = {
    CARD_TEMPLATE_LOADED,
    CARD_TEMPLATE_LOAD_ERROR,
    SELECT_SECTION,
    ACTIVE_SECTION,
    SELECT_ROWS,
    GENERATE_PDF,
    // SET_IMPIANTO_MODEL,
    loadCardTemplate,
    loadCardData,
    configureCardError,
    // loadCardModelConfig,
    selectSection,
    activateSection,
    selectRows,
    generatePDF
    // setSiraImpiantoModel
};
