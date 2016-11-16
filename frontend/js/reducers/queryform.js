/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msQueryFrom = require('../../MapStore2/web/client/reducers/queryform');
const assign = require('object-assign');

const siraInitialState = {
    "attributePanelExpanded": true,
    "filterFields": [
        {
            "attribute": null,
            "exception": null,
            "groupId": 1,
            "operator": "=",
            "rowId": 1,
            "type": null,
            "value": null
        }
    ],
    "groupFields": [
        {
            "id": 1,
            "index": 0,
            "logic": "AND"
        }
    ],
    "groupLevels": 1,
    "pagination": {
        "maxFeatures": 15,
        "startIndex": 0
    },
    "searchUrl": "{geoserverUrl}/ows?service=WFS",
    "showDetailsPanel": false,
    "showGeneratedFilter": false,
    "spatialField": {
        "attribute": "geometria",
        "geometry": null,
        "method": null,
        "operation": "INTERSECTS"
    },
    "spatialPanelExpanded": false,
    "toolbarEnabled": true,
    "useMapProjection": false
};

function queryform(state, action) {
    switch (action.type) {
        // case 'QUERYFORM_CONFIG_LOADED': {
        //     return {...action.config};
        // }
        // case 'FEATURETYPE_CONFIG_LOADED': {
        //     return {...state, spatialField: {...state.spatialField, attribute: action.geometryName}};
        // }
        case 'QUERY_FORM_RESET': {
            return assign({}, state, siraInitialState);
        }
        default: return msQueryFrom(state, action);
    }
}

module.exports = queryform;
