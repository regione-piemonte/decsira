/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const initialState = {};
const { TOGGLE_NODE,
        SELECT_CATEGORY,
        SEARCH_CATEGORIES_LOADED,
        METADATA_OBJECTS_VIEWS_LOADED,
        CATALOG_LOADING} = require('../actions/siracatalog');
const assign = require('object-assign');
const uuid = require('node-uuid');

// const normalizeFunction = function(functions, parentId, nodes) {
//     return functions.reduce((ns, func) => {
//         const nodeId = `${parentId}_${ns.length}`;
//         let newNode = {id: nodeId, name: nodeId, type: "node", title: func.type, url: func.url, tools: "map"};
//         if (func.type === "Mappa" && func.url && func.url.length > 2) {
//             nodes.push(newNode);
//             ns.push(nodeId);
//         }else if (func.type === "Cerca") {
//             newNode.title = "Oggetto";
//             newNode.tools = "all";
//             nodes.push(newNode);
//             ns.push(nodeId);
//         }
//         return ns;
//     }, []);
// };

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
        case TOGGLE_NODE: {
            let nodes = state.nodes.map((n) => (n.name === action.id || n.id === action.id ? assign({}, n, {expanded: !action.status}) : n));
            return assign({}, state, {nodes});
        }
        case CATALOG_LOADING: {
            return assign({}, state, {loading: action.status});
        }
        case SELECT_CATEGORY: {
            return assign({}, state, {category: action.category});
        }
        case SEARCH_CATEGORIES_LOADED: {
            return assign({}, state, {searchCategories: action.categories, category: action.categories[0]});
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
