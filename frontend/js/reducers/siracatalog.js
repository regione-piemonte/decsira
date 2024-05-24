/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const initialState = {
    subcat: 'objects',
    title: 'allObjects'
};
const { TOGGLE_SIRA_NODE,
    SELECT_SIRA_NODE,
    SELECT_CATEGORY, SELECT_VIEW,
    METADATA_OBJECTS_VIEWS_LOADED,
    CATALOG_LOADING,
    SELECT_SUB_CATEGORY,
    RESET_OBJECT_AND_VIEW,
    SEARCH_TEXT_CHANGE,
    SHOWCATEGORIES,
    SET_NODE_IN_USE,
    ALL_OBJECTS} = require('../actions/siracatalog');
const {LOAD_METADATA} = require('../actions/metadatainfobox');
const {TILES_LOADED} = require('../actions/mosaictile');
const assign = require('object-assign');
const uuid = require('uuid');

const normalizeCategories = function(categories, nodes) {
    return categories.reduce((cats, category) => {
        category.id = category.id ? category.id : uuid.v1();
        category.name = category.id;
        category.type = "node";
        if (category.categories) {
            category.nodes = normalizeCategories(category.categories, nodes);
            // delete category.categories;
        } else if (category.metadata) {
            category.nodes = normalizeCategories(category.metadata, nodes);
            // delete category.metadata;
        } else if (category.functions) {
            // category.nodes = normalizeFunction(category.functions, category.id, nodes);
            category.layers = category.functions.reduce((layers, f) => {
                const layerId = `${category.id}_${layers.length}`;
                if (f.type === "Mappa" && f.url && f.url.length > 2) {
                    layers.push({type: 'wms', id: layerId, url: f.url, name: layerId});
                } else if (f.type === 'Cerca' && f.url && f.url.length > 1) {
                    category.featureType = f.url;
                } else if (f.type === 'Vista tematica' && f.url && f.url.length > 1) {
                    category.type = "view";
                    category.view = f.url;
                    category.nodes = [];
                }
                return layers;
            }, []);
            // delete category.functions;
            if (category.featureType || category.view || (category.layers && category.layers.length > 0 )) {
                cats.push(category.id);
                nodes.push(category);
            }
        }
        if (category.nodes && category.nodes.length > 0 ) {

            cats.push(category.id);
            nodes.push(category);
        }
        return cats;
    }, []);
};


function siracatalog(state = initialState, action) {
    switch (action.type) {
    case TOGGLE_SIRA_NODE: {
        let nodes = state.nodes.map((n) => (n.name === action.id || n.id === action.id ? assign({}, n, {expanded: !action.status}) : n));
        let allNodes = state.allNodes.map((n) => (n.name === action.id || n.id === action.id ? assign({}, n, {expanded: !action.status, selected: true}) : assign({}, n, {selected: false})));
        return assign({}, state, {nodes, allNodes});
    }
    case SELECT_SIRA_NODE: {
        let selectedNodes = state.allNodes.filter((n) => (n.name === action.id || n.id === action.id));
        let title = selectedNodes ? selectedNodes[0].title : "";
        let metadata = [];
        selectedNodes.forEach((n) => {
            if (n.categories) {
                n.categories.forEach(category => {
                    metadata.push.apply(metadata, category.metadata);
                });
            } else if (n.metadata) {
                metadata.push.apply(metadata, n.metadata);
            }
        });
        return assign({}, state, {nodes: metadata, title: title});
    }
    case CATALOG_LOADING: {
        return assign({}, state, {loading: action.status});
    }
    case SELECT_CATEGORY: {
        return assign({}, state, {category: action.category, subcat: action.subcat});
    }
    case SELECT_SUB_CATEGORY: {
        let selectedView = state.selectedView;
        if (action.subcat === 'objects') {
            selectedView = null;
        }
        return assign({}, state, {subcat: action.subcat, selectedView: selectedView});
    }
    case SELECT_VIEW: {
        let allViews = state.allViews;
        if (action.view !== null) {
            allViews = state.allViews.map((v) => (v.name === action.view.name || v.id === action.viewid ? assign({}, v, {selected: true}) : assign({}, v, {selected: false})));
        } else {
            // Significa che e' stato selezionato "Tutte le viste tematiche"
            allViews = state.allViews.map((v) => (assign({}, v, {selected: false})));
        }
        return assign({}, state, {selectedView: action.view, allViews: allViews});
    }
    case TILES_LOADED: {
        return assign({}, state, { category: [...(action.tiles || [])].shift()});
    }
    case RESET_OBJECT_AND_VIEW: {
        return assign({}, state, {nodes: null, views: null, selectedView: null});
    }
    case SHOWCATEGORIES: {
        return assign({}, state, {showcategories: action.state});
    }
    case SEARCH_TEXT_CHANGE: {
        return assign({}, state, {searchText: action.text});
    }
    case SET_NODE_IN_USE: {
        return assign({}, state, {nodeUsed: action.node});
    }
    case ALL_OBJECTS: {
        return assign({}, state, {nodes: state.allNodes, title: "allObjects"});
    }
    case METADATA_OBJECTS_VIEWS_LOADED: {
        // FILTRA LE categorie ed i nodi
        let nodes = [];
        action.objects.forEach((o) => {
            o.type = "root";
            o.id = o.id ? o.id : uuid.v1();
            o.name = o.id;
            if (o.categories) {
                o.nodes = normalizeCategories(o.categories, nodes);
                if (o.nodes.length > 0) {
                    nodes.push(o);
                }
            } else if (o.metadata) {
                o.nodes = normalizeCategories(o.metadata, nodes);
                if (o.nodes.length > 0) {
                    nodes.push(o);
                }
            }
        });
        let views = [];

        action.views.forEach((v) => {
            v.type = "root";
            v.id = v.id ? v.id : uuid.v1();
            v.name = v.id;
            if (v.categories) {
                v.nodes = normalizeCategories(v.categories, views);
                if (v.nodes.length > 0) {
                    views.push(v);
                }
            } else if (v.metadata) {
                v.nodes = normalizeCategories(v.metadata, views);
                if (v.nodes.length > 0) {
                    views.push(v);
                }
            }
        });
        if (action.isAllObjects) {
            return assign({}, state, {nodes: nodes, views: views, allNodes: nodes, allViews: views});
        }
        return assign({}, state, {nodes: nodes, views: views});
    }
    case LOAD_METADATA: {
        let nodeId = action.idMetadato;
        let metadato = {
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
        };
        let nodes = state.nodes.map((n) => (n.name === nodeId || n.id === nodeId ? assign({}, n, {metadato: metadato}) : n));
        return assign({}, state, {nodes: nodes});
    }
    default:
        return state;
    }
}

module.exports = siracatalog;
