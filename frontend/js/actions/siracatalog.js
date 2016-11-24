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
const SEARCH_CATEGORIES_LOADED = 'SEARCH_CATEGORIES_LOADED';
const METADATA_OBJECTS_VIEWS_LOADED = 'METADATA_OBJECTS_VIEWS_LOADED';
const CATALOG_LOADING = 'CATALOG_LOADING';

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
function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    };
}
function serchCategoriesLoaded(categories) {
    return {
        type: SEARCH_CATEGORIES_LOADED,
        categories
    };
}

function objectsLoaded(objects, views) {
    return {
        type: METADATA_OBJECTS_VIEWS_LOADED,
        objects,
        views
    };
}

function getSearchCategories(serviceUrl = 'sira/services/metadata/getMosaico?', params = {}) {
    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);
    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.get(url).then((response) => {
            if (typeof response.data !== "object" ) {
                try {
                    dispatch(serchCategoriesLoaded(JSON.parse(response.data)));
                }catch (e) {
                    // dispatch(serchCategoriesLoaded(response.data));
                }
            }else {
                dispatch(serchCategoriesLoaded(response.data));
            }
            dispatch(catalogLoading(false));
        }).catch(() => {
            // dispatch(configureGridError(e));
        });
    };


}

function getMetadataView({serviceUrl = 'sira/services/metadata/getMetadataView?', params = {}} = {}) {
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

function getMetadataObjects({serviceUrl = 'sira/services/metadata/getMetadataObject?', params = {}} = {}) {

    const url = Object.keys(params).reduce((u, p) => {
        return `${u}&${p}=${params[p]}`;
    }, serviceUrl);

    return (dispatch) => {
        dispatch(catalogLoading(true));
        return axios.post(url).then((response) => {
            getMetadataView({params}).then((result) => {
                if (typeof response.data !== "object" ) {
                    try {
                        dispatch(objectsLoaded(JSON.parse(response.data), result));
                    }catch (e) {
                        // dispatch(serchCategoriesLoaded(response.data));
                    }
                }else {
                    dispatch(objectsLoaded(response.data, result));
                }
                dispatch(catalogLoading(false));
            });
        }).catch(() => {
            // dispatch(configureGridError(e));
        });
    };


}

module.exports = {
    TOGGLE_NODE,
    SELECT_CATEGORY,
    SEARCH_CATEGORIES_LOADED,
    METADATA_OBJECTS_VIEWS_LOADED,
    CATALOG_LOADING,
    toggleNode,
    selectCategory,
    getSearchCategories,
    getMetadataObjects
};
