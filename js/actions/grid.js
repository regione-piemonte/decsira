/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const TemplateUtils = require('../utils/TemplateUtils');

const GRID_MODEL_LOADED = 'GRID_MODEL_LOADED';
const GRID_LOAD_ERROR = 'GRID_LOAD_ERROR';

function configureGrid(model) {
    return {
        type: GRID_MODEL_LOADED,
        model: model
    };
}

function configureGridError(e) {
    return {
        type: GRID_LOAD_ERROR,
        error: e
    };
}

function loadGridModel(wfsUrl) {
    return (dispatch) => {
        return axios.get(wfsUrl).then((response) => {
            let modelConfig = [
                {
                    field: "id",
                    xpath: ['@gml:id'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "codice",
                    xpath: ['sira:impianto/sira:Sede/sira:codiceSira/text()'],
                    type: TemplateUtils.NUMBER_TYPE
                },
                {
                    field: "codicefisc",
                    xpath: ['sira:istanza/sira:IstanzaAutorizzativa/sira:codiceFiscale/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "comune",
                    xpath: ['sira:impianto/sira:Sede/sira:comune/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "autamb",
                    xpath: [
                        'sira:rifiuto/sira:Rifiuto/sira:attivita/sira:Attivita/sira:descrizione/text()'
                    ],
                    type: TemplateUtils.STRING_TYPE
                }
            ];

            let model = TemplateUtils.getModels(response.data, '/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale', modelConfig);

            dispatch(configureGrid(model));
        }).catch((e) => {
            dispatch(configureGridError(e));
        });
    };
}

module.exports = {
    GRID_MODEL_LOADED,
    GRID_LOAD_ERROR,
    loadGridModel,
    configureGridError
};
