/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    CARD_TEMPLATE_LOADED, CARD_TEMPLATE_LOAD_ERROR,
    SELECT_SECTION, ACTIVE_SECTION, SELECT_ROWS, GENERATE_PDF,
    MAP_IMAGE_READY// , SET_IMPIANTO_MODEL
} = require('../actions/card');

const assign = require('object-assign');

const initialState = {
    generatepdf: false,
    show: false,
    template: null,
    xml: null,
    mapImageReady: false
    // impiantoModel: null
};

function cardtemplate(state = initialState, action) {
    switch (action.type) {
        case CARD_TEMPLATE_LOADED: {
            return assign({}, state, {
                template: action.template,
                xml: action.xml || state.xml,
                activeSections: null,
                params: action.params
            });
        }
        case CARD_TEMPLATE_LOAD_ERROR: {
            return assign({}, state, {
                loadingCardTemplateError: action.error,
                params: {}
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
            // let model = assign({}, state.model);
            // model[action.table_id] = action.rows;
            return assign({}, state, {[action.tableId]: action.rows});
        }
        case GENERATE_PDF: {
            return assign({}, state, {generatepdf: action.active});
        }
        case MAP_IMAGE_READY: {
            return assign({}, state, {mapImageReady: action.state});
        }
        /* case SET_IMPIANTO_MODEL: {
            return assign({}, state, {impiantoModel: action.impiantoModel});
        } */
        default:
            return state;
    }
}

module.exports = cardtemplate;
