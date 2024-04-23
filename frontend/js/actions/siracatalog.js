/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('@mapstore/libs/ajax');

const TOGGLE_SIRA_NODE = 'TOGGLE_SIRA_NODE';
const SELECT_SIRA_NODE = 'SELECT_SIRA_NODE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const ALL_OBJECTS = 'ALL_OBJECTS';
const SELECT_VIEW = 'SELECT_VIEW';
const METADATA_OBJECTS_VIEWS_LOADED = 'METADATA_OBJECTS_VIEWS_LOADED';
const CATALOG_LOADING = 'CATALOG_LOADING';
const THEMATIC_VIEW_CONFIG_LOADED = 'THEMATIC_VIEW_CONFIG_LOADED';
const SELECT_SUB_CATEGORY = 'SELECT_SUB_CATEGORY';
const RESET_OBJECT_AND_VIEW = 'RESET_OBJECT_AND_VIEW';
const THEMATIC_VIEW_CONFIG_MAP = 'THEMATIC_VIEW_CONFIG_MAP';
const SEARCH_TEXT_CHANGE = 'SEARCH_TEXT_CHANGE';
const SHOWCATEGORIES = 'SHOWCATEGORIES';
const SET_NODE_IN_USE = 'SET_NODE_IN_USE';
const {verifyProfiles} = require('../utils/TemplateUtils');
const {Promise} = require('es6-promise');

function searchTextChange(text) {
    return {
        type: SEARCH_TEXT_CHANGE,
        text
    };
}
function toggleCategories(state) {
    return {
        type: SHOWCATEGORIES,
        state
    };
}
function toggleNode(id, status) {
    return {
        type: TOGGLE_SIRA_NODE,
        id,
        status
    };
}
function selectNode(id) {
    return {
        type: SELECT_SIRA_NODE,
        id
    };
}
function setNodeInUse(node) {
    return {
        type: SET_NODE_IN_USE,
        node
    };
}
function catalogLoading(status) {
    return {
        type: CATALOG_LOADING,
        status
    };
}
function selectCategory(category, subcat) {
    return {
        type: SELECT_CATEGORY,
        category,
        subcat
    };
}
function selectSubCategory( subcat) {
    return {
        type: SELECT_SUB_CATEGORY,
        subcat
    };
}
function selectView(view) {
    return {
        type: SELECT_VIEW,
        view
    };
}
function selectAllObjects() {
    return {
        type: ALL_OBJECTS
    };
}
function resetObjectAndView() {
    return {
        type: RESET_OBJECT_AND_VIEW
    };
}
function objectsLoaded(objects, views, isAllObjects) {
    return {
        type: METADATA_OBJECTS_VIEWS_LOADED,
        objects,
        views,
        isAllObjects
    };
}

function getMetadataView({serviceUrl = 'services/metadata/getMetadataView?', params = {}} = {}) {
    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);
    return axios.post(url).then((response) => {
        if (typeof response.data !== "object" ) {
            try {
                return JSON.parse(response.data);
            } catch (e) {
                Promise.reject(`Configuration broken (${url}): ${ e.message}`);
            }
        } else {
            return response.data;
        }
        return null;
    });
}

function getMetadataObjects({serviceUrl = 'services/metadata/getMetadataObject?', params = {}} = {}) {

    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);

    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.post(url).then((response) => {
            //getMetadataView({params}).then((result) => {
            getMetadataView().then((result) => {
                dispatch(catalogLoading(false));
                if (typeof response.data !== "object" ) {
                    try {
                        dispatch(objectsLoaded(JSON.parse(response.data), result, isAllObjects));
                    } catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                    }
                } else {
                    dispatch(objectsLoaded(response.data, result, false));
                }
            });
        }).catch(() => {
        });
    };
}

function getAllMetadata({serviceUrl = 'services/metadata/getMetadataObject?'} = {}) {
    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.post(serviceUrl).then((response) => {
            getMetadataView().then((result) => {
                dispatch(catalogLoading(false));
                if (typeof response.data !== "object" ) {
                    try {
                        dispatch(objectsLoaded(JSON.parse(response.data), result, true));
                    } catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                    }
                } else {
                    dispatch(objectsLoaded(response.data, result, true));
                }
            });
        }).catch(() => {
        });
    };
}

function thematicViewConfigLoaded(data) {
    return {
        type: THEMATIC_VIEW_CONFIG_LOADED,
        config: data
    };
}

/* function thematicViewConfigMap(data) {
    return {
        type: THEMATIC_VIEW_CONFIG_MAP,
        config: data
    };
}*/
function thematicViewConfigMap(data) {
    return (dispatch, getState) => {
        const { userprofile } = getState();
        const layersFiltered = data.map.layers.filter(
            (layer) => verifyProfiles(layer.profiles, userprofile.profile)
        );
        data.map.layers = layersFiltered;
        dispatch(
            {
                type: THEMATIC_VIEW_CONFIG_MAP,
                config: data
            }
        );
    };
}

function getThematicViewConfig({serviceUrl = 'services/metadata/getMetadataObject?', params = {}, configureMap = false} = {}) {

    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);

    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.get(url).then((response) => {
            dispatch(catalogLoading(false));
            if (typeof response.data !== "object" ) {
                try {
                    if (configureMap) {
                        dispatch(thematicViewConfigMap(JSON.parse(response.data)));
                    } else {
                        dispatch(thematicViewConfigLoaded(JSON.parse(response.data)));
                    }
                } catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                }
            } else {
                if (configureMap) {
                    dispatch(thematicViewConfigMap(response.data));
                } else {
                    dispatch(thematicViewConfigLoaded(response.data));
                }
            }
        }).catch(() => {
            dispatch(catalogLoading(false));
        });
    };
}
module.exports = {
    TOGGLE_SIRA_NODE,
    SELECT_SIRA_NODE,
    SELECT_CATEGORY,
    SELECT_VIEW,
    METADATA_OBJECTS_VIEWS_LOADED,
    CATALOG_LOADING,
    THEMATIC_VIEW_CONFIG_LOADED,
    SELECT_SUB_CATEGORY,
    RESET_OBJECT_AND_VIEW,
    SEARCH_TEXT_CHANGE,
    SHOWCATEGORIES,
    SET_NODE_IN_USE,
    ALL_OBJECTS,
    toggleNode,
    selectNode,
    selectCategory,
    selectView,
    getMetadataObjects,
    getAllMetadata,
    getThematicViewConfig,
    selectSubCategory,
    resetObjectAndView,
    searchTextChange,
    toggleCategories,
    setNodeInUse,
    selectAllObjects
};
