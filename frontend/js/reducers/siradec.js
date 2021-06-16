/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    WAITING_FOR_CONFIG,
    QUERYFORM_CONFIG_LOADED,
    FEATURETYPE_CONFIG_LOADED,
    EXPAND_FILTER_PANEL,
    CONFIGURE_INDICA_LAYER,
    CLOSE_INDICA_CONFIGURATION,
    QUERYFORM_CONFIG_LOAD_ERROR,
    FEATUREGRID_CONFIG_LOADED,
    FEATUREINFO_CONFIG_LOADED,
    TOPOLOGY_CONFIG_LOADED,
    CARD_CONFIG_LOADED,
    QUERYFORM_HIDE_ERROR,
    QUERYFORM_PRELOADED,
    INLINE_MAP_CONFIG,
    SET_ACTIVE_FEATURE_TYPE,
    SET_TREE_FEATURE_TYPE,
    FEATURETYPE_CONFIG_LOADING,
    USER_NOT_AUTHORIZED
} = require('../actions/siradec');
const { SET_FEATURE_ROW_DATA } = require('../actions/featuregrid');
const { SHOW_SETTINGS } = require('@mapstore/actions/layers');

const assign = require('object-assign');

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;
const uuid = require('uuid');

const initialState = {
    waitingForConfig: null,
    filterPanelExpanded: false,
    indicaConfigPanelExpanded: false,
    configOggetti: {
    },
    topology: null,
    loadingQueryFormConfigError: null,
    featureType: urlQuery.featureType || 'aua',
    activeFeatureType: null,
    treeFeatureType: null,
    inlineMapConfig: null,
    fTypeConfigLoading: false,
    notAuthorized: []
};

function siradec(state = initialState, action) {
    switch (action.type) {
    case USER_NOT_AUTHORIZED: {
        return assign({}, state, {notAuthorized: [...state.notAuthorized, action.feature], activeFeatureType: action.feature});
    }
    case WAITING_FOR_CONFIG: {
        return assign({}, state, {waitingForConfig: action.wfc});
    }
    case INLINE_MAP_CONFIG: {
        return assign({}, state, {inlineMapConfig: action.mapconfig});
    }
    case SET_ACTIVE_FEATURE_TYPE: {
        return assign({}, state, {activeFeatureType: action.featureType});
    }
    case SET_TREE_FEATURE_TYPE: {
        return assign({}, state, {treeFeatureType: action.featureType});
    }
    case FEATURETYPE_CONFIG_LOADING: {
        return assign({}, state, {fTypeConfigLoading: action.loading});
    }
    case FEATURETYPE_CONFIG_LOADED: {
        let attributes = state.attributes ? [...state.attributes, ...action.field] : action.field;
        let queryAttributes = attributes.filter((att) => {return att.filterType !== "tematizzatore";});
        let indicaFilters = attributes.filter((att) => {return att.filterType === "tematizzatore";});

        // Sorting the attributes by the given index in configuration
        queryAttributes.sort((attA, attB) => {
            return attA.index && attB.index && attA.index - attB.index;
        });
        indicaFilters.sort((filA, filB) => {
            return filA.index && filB.index && filA.index - filB.index;
        });

        const queryform = assign({}, state.queryform, {geometryName: action.geometryName, spatialField: assign({}, state.queryform.spatialField, {attribute: action.geometryName})});

        let newConf = assign({}, state.configOggetti[action.featureType], {
            attributes: queryAttributes,
            featureTypeName: action.ftName,
            featureTypeNameLabel: action.ftNameLabel,
            nameSpaces: action.nameSpaces,
            multiLayerSelect: action.multiLayerSelect,
            multiLayerSelectionAttribute: action.multiLayerSelectionAttribute,
            layer: action.layer,
            exporter: action.exporter,
            geometryType: action.geometryType || 'Point',
            queryform,
            authorized: action.authorized,
            tematizzatore: action.tematizzatore,
            indicaFilters: indicaFilters
        });

        if (newConf.featuregrid) {
            const featuregrid = assign({}, newConf.featuregrid, {geometryType: action.geometryType, grid: assign({}, newConf.featuregrid.grid, {geometryType: action.geometryType})});
            newConf = assign({}, newConf, {featuregrid: featuregrid});
        }
        let configOggetti = assign({}, state.configOggetti, {[action.featureType]: newConf} );
        if (action.activate) {
            return assign({}, state, {
                configOggetti: configOggetti,
                activeFeatureType: action.featureType,
                fTypeConfigLoading: false
            });
        }
        return assign({}, state, {
            configOggetti: configOggetti,
            fTypeConfigLoading: false
        });
    }
    case QUERYFORM_CONFIG_LOADED: {
        return assign({}, state, {
            queryform: action.config
        });
    }
    case FEATUREGRID_CONFIG_LOADED: {
        let featureGrid = action.config;
        let idFieldName;
        if (featureGrid.grid.columns) {
            featureGrid.grid.columns.forEach((column) => {
                let fieldName = !column.field ? uuid.v1() : column.field;
                idFieldName = column.id === true ? fieldName : idFieldName;
                column.field = fieldName;
            });
        }
        featureGrid.idFieldName = idFieldName;
        let newConf = assign({}, state.configOggetti[action.featureType], {featuregrid: featureGrid});
        let configOggetti = assign({}, state.configOggetti, {[action.featureType]: newConf} );
        return assign({}, state, {
            configOggetti: configOggetti
        });
    }
    case FEATUREINFO_CONFIG_LOADED: {
        let newConf = assign({}, state.configOggetti[action.featureType], {featureinfo: action.config});
        let configOggetti = assign({}, state.configOggetti, {[action.featureType]: newConf} );
        return assign({}, state, {
            configOggetti: configOggetti
        });
    }
    case CARD_CONFIG_LOADED: {
        let newConf = assign({}, state.configOggetti[action.featureType], {card: action.config});
        let configOggetti = assign({}, state.configOggetti, {[action.featureType]: newConf} );
        return assign({}, state, {
            configOggetti: configOggetti
        });
    }
    case TOPOLOGY_CONFIG_LOADED: {
        return assign({}, state, {
            topology: action.config
        });
    }
    case EXPAND_FILTER_PANEL: {
        return assign({}, state, {
            filterPanelExpanded: action.expand,
            // currentNodeId: action.expand ? action.currentNodeId : state.currentNodeId
            currentNodeId: action.expand && action.currentNodeId !== null ? action.currentNodeId : state.currentNodeId
        });
    }
    case SHOW_SETTINGS: {
        return assign({}, state, {
            currentNodeId: action.node ? action.node : state.currentNodeId
        });
    }
    case CONFIGURE_INDICA_LAYER: {
        return assign({}, state, {
            indicaConfigPanelExpanded: true,
            currentNodeId: action.currentNodeId
        });
    }
    case CLOSE_INDICA_CONFIGURATION: {
        return assign({}, state, {
            indicaConfigPanelExpanded: false
        });
    }
    case QUERYFORM_CONFIG_LOAD_ERROR: {
        return assign({}, state, {
            loadingQueryFormConfigError: action.error,
            fTypeConfigLoading: false});
    }
    case QUERYFORM_HIDE_ERROR: {
        return assign({}, state, {
            loadingQueryFormConfigError: null,
            filterPanelExpanded: false,
            authorized: false
        });
    }
    case SET_FEATURE_ROW_DATA: {
        return assign({}, state, {
            currentFeatureRowData: action.geometry
        });
    }
    case QUERYFORM_PRELOADED: {
        return assign({}, state, {
            queryformPreloaded: action.preloaded
        });
    }
    default:
        return state;
    }
}

module.exports = siradec;
