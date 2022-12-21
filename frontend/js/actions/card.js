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
        let secure = '';
        if (window.location.href.indexOf('auth') !== -1) {
            secure = '/secure';
        }
        let url = "services/scriva" + secure + "/allegati-istanza?id_istanza=" + idIstanza;

        return axios.get(url).then((resp) => {
            let data = resp.data;
            // console.log(data);

            /* data.push({
                "autore_allegato": "Mario Rossi",
                "classe_allegato": {
                    "cod_classe_allegato": "ELAB_PROGETTUALI",
                    "des_classe_allegato": "Elaborati progettuali"
                },
                "cod_allegato": "VER-2022-0035",
                "cod_allegato_padre": "VER-2022-0034",
                "data_protocollo_allegato": "2022-08-15T14:23:49.000Z",
                "data_pubblicazione": "2022-08-22T15:23:49.000Z",
                "dimensione_upload": 1912,
                "flg_cancellato": false,
                "flg_da_pubblicare": true,
                "flg_riservato": false,
                "id_allegato_istanza": 134,
                "id_allegato_padre": 133,
                "id_istanza": 46,
                "ind_firma": 1,
                "nome_allegato": "Nome documento",
                "note": "Documento progetto",
                "num_protocollo_allegato": "Prot772022",
                "tipo_integra_allegato": {
                    "cod_tipo_integra_allegato": "P",
                    "des_tipo_integra_allegato": "Integrazione di perfezionamento"
                },
                "tipologia_allegato": {
                    "categoria_allegato": {
                        "cod_categoria_allegato": "ALTRA-DOC",
                        "des_categoria_allegato": "Ulteriore documentazione"
                    },
                    "cod_tipologia_allegato": "ATTO_FIN",
                    "des_tipologia_allegato": "Atto finale"
                },
                "titolo_allegato": "Titolo",
                "url_documento": "https://www.liberliber.eu/mediateca/libri/d/de_amicis/cuore/pdf/de_amicis_cuore.pdf"
            });
            data.push({
                "autore_allegato": "Mario Rossi",
                "classe_allegato": {
                    "cod_classe_allegato": "ELAB_PROGETTUALI",
                    "des_classe_allegato": "Elaborati progettuali"
                },
                "cod_allegato": "VER-2022-0035-bis",
                "cod_allegato_padre": "VER-2022-0034",
                "data_protocollo_allegato": "2022-08-15T14:23:49.000Z",
                "data_pubblicazione": "2022-08-22T15:23:49.000Z",
                "dimensione_upload": 1912,
                "flg_cancellato": false,
                "flg_da_pubblicare": false,
                "flg_riservato": false,
                "id_allegato_istanza": 134,
                "id_allegato_padre": 133,
                "id_istanza": 46,
                "ind_firma": 1,
                "nome_allegato": "Nome documento 2",
                "note": "Documento progetto",
                "num_protocollo_allegato": "Prot772022",
                "tipo_integra_allegato": {
                    "cod_tipo_integra_allegato": "P",
                    "des_tipo_integra_allegato": "Integrazione di perfezionamento"
                },
                "tipologia_allegato": {
                    "categoria_allegato": {
                        "cod_categoria_allegato": "ALTRA-DOC",
                        "des_categoria_allegato": "Ulteriore documentazione"
                    },
                    "cod_tipologia_allegato": "ATTO_FIN",
                    "des_tipologia_allegato": "Atto finale"
                },
                "titolo_allegato": "Titolo 2",
                "url_documento": "https://www.liberliber.eu/mediateca/libri/d/de_amicis/cuore/pdf/de_amicis_cuore.pdf"
            }); */

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
