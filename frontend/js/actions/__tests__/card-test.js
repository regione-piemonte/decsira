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
    SELECT_SECTION,
    ACTIVE_SECTION,
    loadCardTemplate,
    loadCardData,
    // loadCardModelConfig,
    selectSection,
    activateSection
} = require('../card');

describe('Test correctness of the card template actions', () => {

    it('loads an existing template file', (done) => {
        loadCardTemplate('base/js/test-resources/template-test.config', 'modelconfig/url', 'wfs/url')((e) => {
            try {
                expect(e).toExist();
                expect(e).withArgs('templateConfigURL', 'modelConfigURL', 'wfsUrl');
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    /*it('loads an existing template file 2', (done) => {
        const template = "<Panel header={(<DetailTitle title='Autorizzazione Unica Ambientale (AUA ) - Recupero rifiuti' subtitle={['N°', model.numauth, 'del', model.dataauth]} id={model.id}/>)}>Scheda</Panel>";

        loadCardModelConfig(template, 'base/js/test-resources/testCardModelConfig.json', '')((e) => {
            try {
                expect(e).toExist();
                expect(e).withArgs('templateConfigURL', 'modelConfigURL', 'wfsUrl');
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });*/

    it('loads an existing template file 3', (done) => {
        const template = "<Panel header={(<DetailTitle title='Autorizzazione Unica Ambientale (AUA ) - Recupero rifiuti' subtitle={['N°', model.numauth, 'del', model.dataauth]} id={model.id}/>)}>Scheda</Panel>";

        loadCardData(template, 'base/js/test-resources/testWFSModel.xml')((e) => {
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
