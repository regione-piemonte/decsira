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

function loadCardModel(template, wfsUrl, id) {
    return (dispatch) => {
        return axios.get(wfsUrl).then((response) => {
            let extra = '';
            if (id) {
                extra = '[@gml:id=\'' + id + '\']';
            }
            let modelConfig = [
                {
                    field: "id",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:impianto/sira:Sede/sira:codiceSira/text()'],
                    type: TemplateUtils.NUMBER_TYPE
                },
                {
                    field: "codicesira",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:impianto/sira:Sede/sira:codiceSira/text()'],
                    type: TemplateUtils.NUMBER_TYPE
                },
                {
                    field: "comune",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:impianto/sira:Sede/sira:comune/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "provincia",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:impianto/sira:Sede/sira:provincia/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "tipo",
                    xpath: [
                        '/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:istanza/sira:IstanzaAutorizzativa/sira:procedimento/sira:Procedimento/sira:descrizione/text()',
                        '/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:rifiuto/sira:Rifiuto/sira:attivita/sira:Attivita/sira:descrizione/text()'
                    ],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "numauth",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:istanza/sira:IstanzaAutorizzativa/sira:nrProvvedimento/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "dataauth",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:istanza/sira:IstanzaAutorizzativa/sira:dataRilascio/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "tipoimpianto",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:rifiuto/sira:Rifiuto/sira:impianto/sira:TipoImpianto/sira:descrizione/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "quantita",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:rifiuto/sira:Rifiuto/sira:qtaTotRecupero/text()'],
                    type: TemplateUtils.NUMBER_TYPE
                },
                {
                    field: "numscheda",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:rifiuto/sira:Rifiuto/sira:dettaglio/sira:SchedaRifiuto/sira:nrScheda/text()'],
                    type: TemplateUtils.STRING_TYPE
                },
                {
                    field: "tiporecupero",
                    xpath: ['/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale' + extra + '/sira:rifiuto/sira:Rifiuto/sira:dettaglio/sira:SchedaRifiuto/sira:tipoRecupero/sira:TipoRecupero/sira:descrizione/text()'],
                    type: TemplateUtils.STRING_TYPE
                }
            ];

            let model = TemplateUtils.getModel(response.data, modelConfig);

            dispatch(configureCard(template, model));
        }).catch((e) => {
            dispatch(configureCardError(e));
        });
    };
}

function loadCardTemplate(configUrl, configName, wfsUrl, id) {
    return (dispatch) => {
        return axios.get(configUrl + configName).then((response) => {
            let template = response.data;
            dispatch(loadCardModel(template, wfsUrl, id));
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
    selectSection
};
