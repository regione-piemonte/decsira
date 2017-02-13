/**
* Copyright 2016, GeoSolutions Sas.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree.
*/

const assign = require('object-assign');
const {
  HIDE_BOX, SHOW_BOX,
  LOAD_METADATA,
  LOAD_METADATA_ERROR,
  TOGGLE_LEGEND_PANEL,
  ADD_URL_LEGEND
} = require('../actions/metadatainfobox');

const initialState = {
  show: 'none',
  showButtonLegend: 'none',
  data: null,
  openLegendPanel: false,
  urlLegend: [],
  error: ''
};

function metadatainfobox(state = initialState, action) {
    switch (action.type) {
    case HIDE_BOX: {
        return assign({}, state, {show: action.show});
    }
    case SHOW_BOX: {
        return assign({}, state, {show: action.show});
    }
    case LOAD_METADATA: {
        return assign({}, state, {
          title: action.data.title,
          showButtonLegend: action.data.showButtonLegend ? action.data.showButtonLegend : 'none',
          text: action.data.text,
          dataProvider: action.data.dataProvider,
          urlMetadato: action.data.urlMetadatoCalc,
          numDatasetObjectCalc: action.data.numDatasetObjectCalc,
          urlWMS: action.data.urlWMS,
          urlLegend: [],
          openLegendPanel: false,
          error: ''
        });
    }
    case LOAD_METADATA_ERROR: {
        return assign({}, state, {error: action.error});
    }
    case TOGGLE_LEGEND_PANEL: {
        return assign({}, state, {openLegendPanel: !state.openLegendPanel});
    }
    case ADD_URL_LEGEND: {
        for (let i = 0; i < state.urlLegend.length; i++) {
            action.infolegend.push(state.urlLegend[i]);
        }
        return assign({}, state, {urlLegend: action.infolegend});
    }
    default:
        return state;
    }
}

module.exports = metadatainfobox;
