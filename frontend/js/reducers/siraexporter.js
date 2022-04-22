/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require("object-assign");
const { SET_EXPORT_PARAMS, EXPORT_LOADING, EXPORT_ERROR, CONFIGURE_EXPORTER,
    STORE_DOWNLOAD_RESULT, CHECKING_DOWNLOAD_DATA_ENTRIES, UPDATE_DOWNLOAD_RESULT,
    REMOVE_DOWNLOAD_RESULT, SHOW_INFO_BUBBLE, SET_INFO_BUBBLE_MESSAGE, EXPORT_RESULT_POLLING } = require('../actions/siraexporter');
const { findIndex } = require('lodash');

function siraexporter(state = {
    params: null,
    loading: false,
    errormsg: null,
    csvName: "csv",
    shpName: "shp",
    maxFeatures: 40,
    addFile: null,
    srs: 'EPSG:4326',
    downloadResults: [],
    showInfoBubble: false,
    infoBubbleMessage: {},
    polling: false
}, action) {
    switch (action.type) {
    case SET_EXPORT_PARAMS: {
        return assign({}, state, {params: action.params, errormsg: null});
    }
    case EXPORT_LOADING: {
        return assign({}, state, {loading: action.loading});
    }
    case EXPORT_ERROR: {
        return assign({}, state, {errormsg: action.error, loading: false});
    }
    case CONFIGURE_EXPORTER: {
        return assign({}, state, action.config);
    }
    case EXPORT_RESULT_POLLING: {
        return assign({}, state, {polling: action.polling});
    }
    case STORE_DOWNLOAD_RESULT: {
        return {
            ...state,
            downloadResults: [...(state.downloadResults || []), action.downloadResult]
        };
    }
    case CHECKING_DOWNLOAD_DATA_ENTRIES: {
        return assign(state, {checkingDownload: action.checking});
    }
    case UPDATE_DOWNLOAD_RESULT: {
        const resultIndex = findIndex(state.downloadResults || [], { id: action.downloadResult.id });
        return {
            ...state,
            downloadResults: resultIndex > -1 ? [
                ...state.downloadResults.slice(0, resultIndex),
                {
                    ...state.downloadResults[resultIndex],
                    ...(action.downloadResult || {})
                },
                ...state.downloadResults.slice(resultIndex + 1)
            ] : state.downloadResults
        };
    }
    case REMOVE_DOWNLOAD_RESULT: {
        return {
            ...state,
            downloadResults: (state.downloadResults || []).filter(result => result.id !== action.id)
        };
    }
    case SHOW_INFO_BUBBLE: {
        return {
            ...state,
            showInfoBubble: action.show
        };
    }
    case SET_INFO_BUBBLE_MESSAGE: {
        return {
            ...state,
            infoBubbleMessage: {
                msgId: action.msgId,
                msgParams: action.msgParams,
                level: action.level
            }
        };
    }
    default:
        return state;
    }
}

module.exports = siraexporter;
