/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {CARD_TEMPLATE_LOADED, CARD_TEMPLATE_LOAD_ERROR, CARD_TEMPLATE_TOOGLE, SELECT_SECTION} = require('../actions/card');
const assign = require('object-assign');

const initialState = {
    show: true,
    template: null,
    model: null
};

function cardtemplate(state = initialState, action) {
    switch (action.type) {
        case CARD_TEMPLATE_LOADED: {
            return assign({}, state, {
                template: action.template,
                model: action.model
            });
        }
        case CARD_TEMPLATE_LOAD_ERROR: {
            return assign({}, state, {
                loadingCardTemplateError: action.error
            });
        }
        case CARD_TEMPLATE_TOOGLE: {
            return assign({}, state, {
                show: action.show
            });
        }
        case SELECT_SECTION: {
            const newSections = assign({}, state.activeSections);
            newSections[action.section] = action.active;
            return assign({}, state, {
                activeSections: newSections
            });
        }
        default:
            return state;
    }
}

module.exports = cardtemplate;
