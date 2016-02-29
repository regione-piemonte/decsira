/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const {
    // QUERYFORM_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR,
    loadQueryFormConfig,
    expandFilterPanel
} = require('../queryform');

describe('Test correctness of the queryform actions', () => {

    it('loads an existing configuration file 1', (done) => {
        loadQueryFormConfig('base/js/test-resources/testQueryFormConfig.json', '')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(undefined);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('loads an broken configuration file', (done) => {
        loadQueryFormConfig('base/js/test-resources/testQueryFormConfig.broken.json')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(QUERYFORM_CONFIG_LOAD_ERROR);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    it('collapseFilterPanel', () => {
        let retval = expandFilterPanel(false);

        expect(retval).toExist();
        expect(retval.type).toBe(EXPAND_FILTER_PANEL);
        expect(retval.expand).toBe(false);
    });
});
