/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const {
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    QUERYFORM_CONFIG_LOAD_ERROR,
    // loadQueryFormConfig,
    loadFeatureTypeConfig,
    expandFilterPanel,
    getAttributeValues
} = require('../siradec');

describe('Test correctness of the queryform actions', () => {

    it('loads an existing configuration file 1', (done) => {
        loadFeatureTypeConfig('base/js/test-resources/testQueryFormConfig.json')((e) => {
            try {
                expect(e).toExist();
                done();
            } catch(ex) {
                done(ex);
            }
        }, () => ({ueserprofile: {}}));
    });

    it('loads an existing configuration file 2', (done) => {
        const field = {
            id: "Provincia",
            type: "list",
            valueService: "base/js/test-resources/testQueryFormFieldConfig.json",
            idField: "sigla",
            labelField: "toponimo"
        };

        const ftName = "aua";

        getAttributeValues(ftName, field)((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(FEATURETYPE_CONFIG_LOADED);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });

    /*it('loads a broken configuration file 1', (done) => {
        loadQueryFormConfig('base/js/test-resources/testQueryFormConfig.broken.json')((e) => {
            try {
                expect(e).toExist();
                expect(e.type).toBe(QUERYFORM_CONFIG_LOAD_ERROR);
                done();
            } catch(ex) {
                done(ex);
            }
        });
    });*/

    it('loads a broken configuration file 2', (done) => {
        const field = {
            attribute: "Provincia",
            type: "list",
            valueService: "base/js/test-resources/testQueryFormFieldConfig.broken.json",
            idField: "sigla",
            labelField: "toponimo"
        };

        const ftName = "aua";

        getAttributeValues(ftName, field, null, field.valueService)((e) => {
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
