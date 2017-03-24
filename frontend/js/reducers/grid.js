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
    SHOW_LOADING,
    CREATE_GRID_DATA_SOURCE,
    UPDATE_TOTAL_FEATURES,
    FEATURES_LOADED_PAG,
    SET_GRID_TYPE
} = require('../actions/grid');

const assign = require('object-assign');
const TemplateUtils = require('../utils/TemplateUtils');

const initialState = {
    data: null,
    featuregrid: null,
    loadingGrid: false,
    totalFeatures: null,
    dataSourceOptions: {}
};

function grid(state = initialState, action) {
    switch (action.type) {
        case GRID_CONFIG_LOADED: {
            return assign({}, state, {
                featuregrid: action.config
            });
        }
        case GRID_MODEL_LOADED: {
            let idFieldName = state.featuregrid.idFieldName;
            let features = TemplateUtils.getModels(action.data, state.featuregrid.grid.root, state.featuregrid.grid.columns);
            let totalFeatures = (!action.add) ? features.length : state.totalFeatures;
            let data = {
                "type": "FeatureCollection",
                "totalFeatures": totalFeatures,
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

            data.features = action.add ? [...(state.data || []), ...features ] : features;

            return assign({}, state, {
                data: data.features,
                totalFeatures: data.totalFeatures,
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
        case SET_GRID_TYPE: {
            return assign({}, state, {
                gridType: action.gridType
            });
        }
        case CREATE_GRID_DATA_SOURCE: {
            let dataSourceOptions = {
                    rowCount: -1,
                    pageSize: action.pagination.maxFeatures
            };
            return assign({}, state, {
                data: {},
                totalFeatures: -1,
                loadingGrid: false,
                dataSourceOptions: dataSourceOptions
            });
        }
        case UPDATE_TOTAL_FEATURES: {
            let totalFeatures = TemplateUtils.getNumberOfFeatures(action.data);
            return {...state, totalFeatures };
        }
        case FEATURES_LOADED_PAG: {

            let idFieldName = state.featuregrid.idFieldName;
            let features = TemplateUtils.getModels(action.data, state.featuregrid.grid.root, state.featuregrid.grid.columns);

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
            let data = {...state.data};
            data[action.requestId] = features;
            return {
                ...state,
                data,
                loadingGrid: false
                };
        }
        case 'FEATURETYPE_CONFIG_LOADED': {
            if (action.activate) {
                return assign({}, state, initialState);
            }
            return state;
        }
        case 'SET_ACTIVE_FEATURE_TYPE': {
            return assign({}, state, initialState);
        }
        default:
            return state;
    }
}

module.exports = grid;
