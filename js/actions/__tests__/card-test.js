/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const {
    CARD_TEMPLATE_LOADED,
    CARD_TEMPLATE_LOAD_ERROR,
    CARD_TEMPLATE_TOOGLE,
    SELECT_SECTION,
    ACTIVE_SECTION,
    loadCardTemplate,
    loadCardModel,
    toggleCard,
    loadCardModelConfig,
    selectSection,
    activateSection
} = require('../card');

describe('Test correctness of the card template actions', () => {

    it('loads an existing template file', (done) => {
        loadCardTemplate('base/js/test-resources/template-test.config', '', '')((e) => {
            try {
                expect(e).toExist();
                expect(e).withArgs('template', 'wfsUrl');
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('loads an existing template file 2', (done) => {
        const template = "<Panel header={(<DetailTitle title='Autorizzazione Unica Ambientale (AUA ) - Recupero rifiuti' subtitle='Codice SIRA  impianto=' id={model.id}/>)}>Scheda</Panel>";

        loadCardModelConfig(template, 'base/js/test-resources/testCardModelConfig.json', '')((e) => {
            try {
                expect(e).toExist();
                expect(e).withArgs('template', 'modelConfig', 'wfsUrl');
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('loads an existing template file 3', (done) => {
        const template = "<Panel header={(<DetailTitle title='Autorizzazione Unica Ambientale (AUA ) - Recupero rifiuti' subtitle='Codice SIRA  impianto=' id={model.id}/>)}>Scheda</Panel>";
        const modelConfig = [
            {
                "field": "id",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:impianto/sira:Sede/sira:codiceSira/text()"],
                "type": 1
            },
            {
                "field": "codicesira",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:impianto/sira:Sede/sira:codiceSira/text()"],
                "type": 1
            },
            {
                "field": "comune",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:impianto/sira:Sede/sira:comune/text()"],
                "type": 2
            },
            {
                "field": "provincia",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:impianto/sira:Sede/sira:provincia/text()"],
                "type": 2
            },
            {
                "field": "tipo",
                "xpath": [
                    "/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:procedimento/sira:Procedimento/sira:descrizione/text()",
                    "/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:attivita/sira:Attivita/sira:descrizione/text()"
                ],
                "type": 2
            },
            {
                "field": "numauth",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:nrProvvedimento/text()"],
                "type": 2
            },
            {
                "field": "dataauth",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:dataRilascio/text()"],
                "type": 2
            },
            {
                "field": "tipoimpianto",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:impianto/sira:TipoImpianto/sira:descrizione/text()"],
                "type": 2
            },
            {
                "field": "quantita",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:qtaTotRecupero/text()"],
                "type": 1
            },
            {
                "field": "numscheda",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:dettaglio/sira:SchedaRifiuto/sira:nrScheda/text()"],
                "type": 2
            },
            {
                "field": "tiporecupero",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:dettaglio/sira:SchedaRifiuto/sira:tipoRecupero/sira:TipoRecupero/sira:descrizione/text()"],
                "type": 2
            },
            {
                "type": 4,
                "field": "tiporifiuto",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:dettaglio"],
                "fields": [
                {
                    "field": "id",
                    "xpath": ["sira:SchedaRifiuto/sira:tipoRifiuto/sira:TipoRifiuto/@id"],
                    "type": 2
                },
                {
                    "field": "codice",
                    "xpath": ["sira:SchedaRifiuto/sira:tipoRifiuto/sira:TipoRifiuto/sira:codice/text()"],
                    "type": 2
                },
                {
                    "field": "descrizione",
                    "xpath": ["sira:SchedaRifiuto/sira:tipoRifiuto/sira:TipoRifiuto/sira:descrizione/text()"],
                    "type": 2
                }]
            },
            {
                "type": 4,
                "field": "dettagliorifiuto",
                "xpath": ["/wfs:FeatureCollection/gml:featureMembers/sira:AutorizzazioneUnicaAmbientale/sira:rifiuto/sira:Rifiuto/sira:dettaglio"],
                "fields": [
                {
                    "field": "id",
                    "xpath": ["sira:SchedaRifiuto/sira:tipoRifiuto/sira:TipoRifiuto/@id"],
                    "type": 2
                },
                {
                    "type": 4,
                    "field": "codiceCER",
                    "xpath": ["sira:SchedaRifiuto/sira:codiceCER"],
                    "fields": [
                    {
                        "field": "codice",
                        "xpath": ["sira:CodiceCER/sira:codice/text()"],
                        "type": 2
                    },
                    {
                        "field": "descrizione",
                        "xpath": ["sira:CodiceCER/sira:descrizione/text()"],
                        "type": 2
                    }]
                },
                {
                    "type": 4,
                    "field": "opRecupero",
                    "xpath": ["sira:SchedaRifiuto/sira:operazioneRecupero"],
                    "fields": [
                    {
                        "field": "codice",
                        "xpath": ["sira:OperazioneRecupero/sira:codice/text()"],
                        "type": 2
                    },
                    {
                        "field": "descrizione",
                        "xpath": ["sira:OperazioneRecupero/sira:descrizione/text()"],
                        "type": 2
                    }]
                }
                ]
            }
        ];

        loadCardModel(template, modelConfig, 'base/js/test-resources/testWFSModel.xml')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(CARD_TEMPLATE_LOADED);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('error loading template file', (done) => {
        loadCardTemplate('base/js/test-resources/template-test.conf')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(CARD_TEMPLATE_LOAD_ERROR);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('toggle card template', () => {
        let retval = toggleCard(false);

        expect(retval).toExist();
        expect(retval.type).toBe(CARD_TEMPLATE_TOOGLE);
        expect(retval.show).toBe(false);
    });

    it('select section', () => {
        let retval = selectSection("TEST", false);

        expect(retval).toExist();
        expect(retval.type).toBe(SELECT_SECTION);
        expect(retval.section).toBe("TEST");
        expect(retval.active).toBe(false);
    });

    it('activate section', () => {
        let retval = activateSection("TEST");

        expect(retval).toExist();
        expect(retval.type).toBe(ACTIVE_SECTION);
        expect(retval.section).toBe("TEST");
    });
});
