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
    loadCardTemplate,
    toggleCard
} = require('../card');

describe('Test correctness of the card template actions', () => {

    it('loads an existing template file', (done) => {
        loadCardTemplate('base/js/test-resources/template-test.config', '')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(CARD_TEMPLATE_LOADED);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });
    it('loads an existing template file json', (done) => {
        loadCardTemplate('base/js/test-resources/testQueryFormConfig.json', '')((e) => {
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
        loadCardTemplate('')((e) => {
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
});
