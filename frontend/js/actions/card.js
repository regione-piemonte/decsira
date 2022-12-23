/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('@mapstore/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const CARD_TEMPLATE_LOADED = 'CARD_TEMPLATE_LOADED';
const CARD_TEMPLATE_LOADING = 'CARD_TEMPLATE_LOADING';
const CARD_TEMPLATE_LOAD_ERROR = 'CARD_TEMPLATE_LOAD_ERROR';
const SELECT_SECTION = 'SELECT_SECTION';
const ACTIVE_SECTION = 'ACTIVE_SECTION';
const SELECT_ROWS = 'SELECT_ROWS';
const GENERATE_PDF = 'GENERATE_PDF';
const MAP_IMAGE_READY = 'MAP_IMAGE_READY';
const SHOW_CONFIRM_DOWNLOAD = 'SHOW_CONFIRM_DOWNLOAD';
const HIDE_CONFIRM_DOWNLOAD = 'HIDE_CONFIRM_DOWNLOAD';
const ATTACHMENTS_LOADED = 'ATTACHMENTS_LOADED';

function showConfirmDownload() {
    return {
        type: SHOW_CONFIRM_DOWNLOAD,
        showConfirmDownload: true
    };
}

function hideConfirmDownload() {
    return {
        type: HIDE_CONFIRM_DOWNLOAD,
        showConfirmDownload: false
    };
}

function mapImageReady(state) {
    return {
        type: MAP_IMAGE_READY,
        state
    };
}

function generatePDF(active = true) {
    return {
        type: GENERATE_PDF,
        active
    };
}

function configureCard(template, xml, params) {
    return {
        type: CARD_TEMPLATE_LOADED,
        template,
        xml,
        params
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

function cardLoading() {
    return {
        type: CARD_TEMPLATE_LOADING
    };
}

function loadCardData(template, wfsUrl, params = {}) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    return (dispatch) => {
        dispatch(cardLoading());
        return axios.get(url).then((response) => {
            // let model = TemplateUtils.getModel(response.data, modelConfig);
            dispatch(configureCard(template, response.data, params));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

/* function loadCardModelConfig(template, modelConfigURL, wfsUrl) {
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

function loadCardTemplate(templateConfigURL, wfsUrl, params = {}) {
    return (dispatch) => {
        dispatch(cardLoading());
        return axios.get(templateConfigURL).then((response) => {
            let template = response.data;
            if (wfsUrl) {
                dispatch(loadCardData(template, wfsUrl, params));
                // dispatch(loadCardModelConfig(template, modelConfigURL, wfsUrl));
            } else {
                dispatch(configureCard(template, null, params));
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

function attachmentsLoaded(attachments) {
    return {
        type: ATTACHMENTS_LOADED,
        attachments: attachments
    };
}

function findProp(object, property) {
    let obj = object;
    let prop = property.split('.');
    for (let i = 0; i < prop.length; i++) {
        if (typeof obj[prop[i]] === 'undefined') {
            return "";
        }
        obj = obj[prop[i]];
    }
    return obj;
}

function loadAttachments(idIstanza, columns) {
    return (dispatch) => {
        // reset della lista degli allegati prima di caricare la lista per il nuovo idIstanza
        dispatch(attachmentsLoaded([]));
        let secure = '';
        if (window.location.href.indexOf('auth') !== -1) {
            secure = '/secure';
        }
        let url = "services/scriva" + secure + "/allegati-istanza?id_istanza=" + idIstanza;

        return axios.get(url).then((resp) => {
            let data = resp.data;
            // console.log(data);

            let rows = data.map((el) => {
                let f = {};
                columns.forEach((column) => {
                    if (column.download) {
                        f[column.field] = column.field;
                    } else if (column.url) {
                        f.url = findProp(el, column.jsonField);
                        let showUrl = true;
                        if (column.showUrlField) {
                            showUrl = findProp(el, column.showUrlField);
                        }
                        if (showUrl) {
                            f[column.field] = findProp(el, column.jsonField);
                        }
                    } else {
                        f[column.field] = findProp(el, column.jsonField);
                    }
                });
                return f;
            }, this);

            // console.log(rows);
            dispatch(attachmentsLoaded(rows));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

/* function setSiraImpiantoModel(impiantoModel) {
    return {
        type: SET_IMPIANTO_MODEL,
        impiantoModel: impiantoModel
    };
}*/

module.exports = {
    CARD_TEMPLATE_LOADED,
    CARD_TEMPLATE_LOADING,
    CARD_TEMPLATE_LOAD_ERROR,
    SELECT_SECTION,
    ACTIVE_SECTION,
    SELECT_ROWS,
    GENERATE_PDF,
    MAP_IMAGE_READY,
    SHOW_CONFIRM_DOWNLOAD,
    HIDE_CONFIRM_DOWNLOAD,
    ATTACHMENTS_LOADED,
    // SET_IMPIANTO_MODEL,
    loadCardTemplate,
    loadCardData,
    configureCardError,
    // loadCardModelConfig,
    selectSection,
    activateSection,
    selectRows,
    generatePDF,
    mapImageReady,
    cardLoading,
    showConfirmDownload,
    hideConfirmDownload,
    loadAttachments,
    attachmentsLoaded
    // setSiraImpiantoModel
};
