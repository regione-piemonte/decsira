/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const expect = require('expect');
const cardtemplate = require('../card');
const {
    CARD_TEMPLATE_LOADED,
    CARD_TEMPLATE_LOAD_ERROR
} = require('../../actions/card');

describe('Test the card template reducer', () => {

    it('Returns the initial state on unrecognized action', () => {
        const initialState = {template: '', show: true, loadingCardTemplateError: null};

        let state = cardtemplate(initialState, {type: 'UNKNOWN'});
        expect(state).toBe(initialState);
    });

    it('Returns the initial state', () => {
        const initialState = {show: true};

        let state = cardtemplate(initialState, {type: 'UNKNOWN'});
        expect(state).toBe(initialState);
    });

    it('Card Template load error', () => {
        let testAction = {
            type: CARD_TEMPLATE_LOAD_ERROR,
            error: "Exception text"
        };
        let state = cardtemplate(null, testAction);
        expect(state).toExist();
        expect(state.loadingCardTemplateError).toBe("Exception text");
    });
    it('Card Template loaded', () => {
        let testAction = {
            type: CARD_TEMPLATE_LOADED,
            template: "Test Template",
            xml: "Test Model"
        };
        let state = cardtemplate(null, testAction);
        expect(state).toExist();
        expect(state.template).toBe("Test Template");
        expect(state.xml).toBe("Test Model");
    });
});
