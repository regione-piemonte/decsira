/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const expect = require('expect');
const queryformconfig = require('../siradec');

describe('Test the queryform reducer', () => {

    it('Returns the initial state on unrecognized action', () => {
        const initialState = {filterPanelExpanded: true, attributes: [], loadingQueryFormConfigError: null};

        let state = queryformconfig(initialState, {type: 'UNKNOWN'});
        expect(state).toBe(initialState);
    });

    it('Expand the Filter Panel', () => {
        let testAction = {
            type: 'EXPAND_FILTER_PANEL',
            expand: false
        };

        const initialState = {filterPanelExpanded: true, attributes: [], loadingQueryFormConfigError: null};

        let state = queryformconfig(initialState, testAction);
        expect(state).toExist();

        expect(state.filterPanelExpanded).toBe(false);
    });

    it('Query Form configuration load error', () => {
        let testAction = {
            type: 'QUERYFORM_CONFIG_LOAD_ERROR',
            error: "Exception text"
        };

        const initialState = {filterPanelExpanded: true, attributes: [], loadingQueryFormConfigError: null};

        let state = queryformconfig(initialState, testAction);
        expect(state).toExist();

        expect(state.loadingQueryFormConfigError).toBe("Exception text");
    });
});
