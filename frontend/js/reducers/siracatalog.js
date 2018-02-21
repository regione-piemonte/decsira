/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const initialState = {};
const { TOGGLE_SIRA_NODE,
        SELECT_CATEGORY,
        METADATA_OBJECTS_VIEWS_LOADED,
        CATALOG_LOADING,
        SELECT_SUB_CATEGORY,
        RESET_OBJECT_AND_VIEW,
        SEARCH_TEXT_CHANGE,
        SHOWCATEGORIES,
        SET_NODE_IN_USE} = require('../actions/siracatalog');
const {TILES_LOADED} = require('../actions/mosaictile');
const assign = require('object-assign');
const uuid = require('node-uuid');


const normalizeCategories = function(categories, nodes) {
    return categories.reduce((cats, category) => {
        category.id = category.id ? category.id : uuid.v1();
        category.name = category.id;
        category.type = "node";
        if (category.categories) {
            category.nodes = normalizeCategories(category.categories, nodes);
           // delete category.categories;
        }else if (category.metadata) {
            category.nodes = normalizeCategories(category.metadata, nodes);
            // delete category.metadata;
        }else if (category.functions) {
            // category.nodes = normalizeFunction(category.functions, category.id, nodes);
            category.layers = category.functions.reduce((layers, f) => {
                const layerId = `${category.id}_${layers.length}`;
                if (f.type === "Mappa" && f.url && f.url.length > 2) {
                    layers.push({type: 'wms', id: layerId, url: f.url, name: layerId});
                }else if (f.type === 'Cerca' && f.url && f.url.length > 1) {
                    category.featureType = f.url;
                }else if (f.type === 'Vista tematica' && f.url && f.url.length > 1) {
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
            return assign({}, state, {nodes});
        }
        case CATALOG_LOADING: {
            return assign({}, state, {loading: action.status});
        }
        case SELECT_CATEGORY: {
            return assign({}, state, {category: action.category, subcat: action.subcat});
        }
        case SELECT_SUB_CATEGORY: {
            return assign({}, state, {subcat: action.subcat});
        }
        case TILES_LOADED: {
            return assign({}, state, { category: [...(action.tiles || [])].shift()});
        }
        case RESET_OBJECT_AND_VIEW: {
            return assign({}, state, {nodes: null, views: null});
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
                }else if (o.metadata) {
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
                }else if (v.metadata) {
                    v.nodes = normalizeCategories(v.metadata, views);
                    if (v.nodes.length > 0) {
                        views.push(v);
                    }
                }
            });
            return assign({}, state, {nodes: nodes, views: views});
        }
        default:
            return state;
    }
}

module.exports = siracatalog;
