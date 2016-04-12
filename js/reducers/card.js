/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


const {
    CARD_TEMPLATE_LOADED, CARD_TEMPLATE_LOAD_ERROR,
    SELECT_SECTION, ACTIVE_SECTION, SELECT_ROWS, SET_IMPIANTO_MODEL
} = require('../actions/card');

const assign = require('object-assign');

const initialState = {
    show: false,
    template: null,
    model: null,
    impiantoModel: null
};

function cardtemplate(state = initialState, action) {
    switch (action.type) {
        case CARD_TEMPLATE_LOADED: {
            return assign({}, state, {
                template: action.template,
                model: action.model || state.model,
                activeSections: null
            });
        }
        case CARD_TEMPLATE_LOAD_ERROR: {
            return assign({}, state, {
                loadingCardTemplateError: action.error
            });
        }
        case SELECT_SECTION: {
            const newSections = assign({}, state.activeSections);
            newSections[action.section] = action.active;
            return assign({}, state, {
                activeSections: newSections
            });
        }
        case ACTIVE_SECTION: {
            let newSections = {};
            newSections[action.section] = true;
            return assign({}, state, {
                activeSections: newSections
            });
        }
        case SELECT_ROWS: {
            let model = assign({}, state.model);
            model[action.table_id] = action.rows;
            return assign({}, state, {model: model});
        }
        case SET_IMPIANTO_MODEL: {
            return assign({}, state, {impiantoModel: action.impiantoModel});
        }
        default:
            return state;
    }
}

module.exports = cardtemplate;
