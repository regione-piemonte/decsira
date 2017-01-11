/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');

const TOGGLE_NODE = 'TOGGLE_NODE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const METADATA_OBJECTS_VIEWS_LOADED = 'METADATA_OBJECTS_VIEWS_LOADED';
const CATALOG_LOADING = 'CATALOG_LOADING';
const THEMATIC_VIEW_CONFIG_LOADED = 'THEMATIC_VIEW_CONFIG_LOADED';
const SELECT_SUB_CATEGORY = 'SELECT_SUB_CATEGORY';

const {Promise} = require('es6-promise');

function toggleNode(id, status) {
    return {
        type: TOGGLE_NODE,
        id,
        status
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

function objectsLoaded(objects, views) {
    return {
        type: METADATA_OBJECTS_VIEWS_LOADED,
        objects,
        views
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
            } catch(e) {
                Promise.reject(`Configuration broken (${url}): ${ e.message}`);
            }
        }else {
            return response.data;
        }
    });
}

function getMetadataObjects({serviceUrl = 'services/metadata/getMetadataObject?', params = {}} = {}) {

    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);

    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.post(url).then((response) => {
            getMetadataView({params}).then((result) => {
                dispatch(catalogLoading(false));
                if (typeof response.data !== "object" ) {
                    try {
                        dispatch(objectsLoaded(JSON.parse(response.data), result));
                    }catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                    }
                }else {
                    dispatch(objectsLoaded(response.data, result));
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
function getThematicViewConfig({serviceUrl = 'services/metadata/getMetadataObject?', params = {}} = {}) {

    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);

    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.get(url).then((response) => {
            dispatch(catalogLoading(false));
            if (typeof response.data !== "object" ) {
                try {
                    dispatch(thematicViewConfigLoaded(JSON.parse(response.data)));
                }catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                }
            }else {
                dispatch(thematicViewConfigLoaded(response.data));
            }
        }).catch(() => {
            dispatch(catalogLoading(false));
        });
    };
}
module.exports = {
    TOGGLE_NODE,
    SELECT_CATEGORY,
    METADATA_OBJECTS_VIEWS_LOADED,
    CATALOG_LOADING,
    THEMATIC_VIEW_CONFIG_LOADED,
    SELECT_SUB_CATEGORY,
    toggleNode,
    selectCategory,
    getMetadataObjects,
    getThematicViewConfig,
    selectSubCategory
};
