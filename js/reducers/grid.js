/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    GRID_MODEL_LOADED,
    GRID_LOAD_ERROR,
    GRID_CONFIG_LOADED,
    SHOW_LOADING
} = require('../actions/grid');

const assign = require('object-assign');
const TemplateUtils = require('../utils/TemplateUtils');

const uuid = require('node-uuid');

const initialState = {
    data: null,
    featuregrid: null,
    loadingGrid: false
    // featureGrigConfigUrl: "assets/featureGridConfig"
};

function grid(state = initialState, action) {
    switch (action.type) {
        case GRID_CONFIG_LOADED: {
            return assign({}, state, {
                featuregrid: action.config
            });
        }
        case GRID_MODEL_LOADED: {
            // /////////////////////////////////////////////////////////////////////////////
            // Generate the needed 'field' property internally for each column definition
            // /////////////////////////////////////////////////////////////////////////////
            let idFieldName;
            if (state.featuregrid.grid.columns) {
                state.featuregrid.grid.columns = state.featuregrid.grid.columns.map((column) => {
                    let fieldName = !column.field ? uuid.v1() : column.field;
                    idFieldName = column.id === true ? fieldName : idFieldName;
                    return assign({}, column, {field: fieldName});
                });
            }

            let features = TemplateUtils.getModels(action.data, state.featuregrid.grid.root, state.featuregrid.grid.columns);

            let data = {
                "type": "FeatureCollection",
                "totalFeatures": features.length,
                "features": [],
                "crs": {
                   "type": "name",
                   "properties": {
                      "name": "urn:ogc:def:crs:EPSG::4326"
                   }
                }
            };

            features = features.map((feature) => {
                let f = {
                    "type": "Feature",
                    "id": feature[idFieldName] || feature.id,
                    "geometry_name": "the_geom",
                    "properties": {}
                };

                let geometry;
                for (let prop in feature) {
                    if (feature[prop] && feature[prop].type === "geometry") {
                        geometry = feature[prop];
                    } else if (feature.hasOwnProperty(prop)) {
                        f.properties[prop] = feature[prop];
                    }
                }

                f.geometry = {
                    "type": state.featuregrid.grid.geometryType
                };

                // Setting coordinates
                if (state.featuregrid.grid.geometryType === "Polygon") {
                    let coordinates = [[]];
                    for (let i = 0; geometry && i < geometry.coordinates.length; i++) {
                        let coords = state.featuregrid.grid.wfsVersion === "1.1.0" ?
                            [geometry.coordinates[i][1], geometry.coordinates[i][0]] : geometry.coordinates[i];
                        coordinates[0].push(coords);
                    }

                    f.geometry.coordinates = coordinates;
                } else if (state.featuregrid.grid.geometryType === "Point") {
                    f.geometry.coordinates = geometry ? [geometry.coordinates[0][0], geometry.coordinates[0][1]] : null;
                }

                return f;
            });

            data.features = features;

            return assign({}, state, {
                data: data.features,
                loadingGrid: false
            });
        }
        case GRID_LOAD_ERROR: {
            return assign({}, state, {
                loadingGridError: action.error,
                loadingGrid: false
            });
        }
        case SHOW_LOADING: {
            return assign({}, state, {
                loadingGrid: action.show
            });
        }
        default:
            return state;
    }
}

module.exports = grid;
