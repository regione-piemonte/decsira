/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {CLICK_ON_MAP} = require('../../MapStore2/web/client/actions/map');

const {
    ERROR_FEATURE_INFO,
    EXCEPTIONS_FEATURE_INFO,
    LOAD_FEATURE_INFO,
    CHANGE_MAPINFO_STATE,
    NEW_MAPINFO_REQUEST,
    PURGE_MAPINFO_RESULTS,
    CHANGE_MAPINFO_FORMAT,
    SHOW_MAPINFO_MARKER,
    HIDE_MAPINFO_MARKER,

    LOAD_TEMPLATE_INFO,
    CONFIGURE_GET_FEATURE_INFO_ERROR,
    CONFIGURE_GET_FEATURE_INFO,
    CHANGE_TOPOLOGY_MAPINFO_STATE,
    SET_MODEL_CONFIG,
    CONFIGURE_INFO_TOPOLOGY} = require('../actions/mapInfo');

const assign = require('object-assign');

const initialState = {
    detailsConfig: null,
    // modelConfig: null,
    template: null,
    topologyConfig: null,
    infoTopologyResponse: null
};

function mapInfo(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MAPINFO_STATE: {
            return assign({}, state, {
                infoEnabled: action.enabled,
                topologyInfoEnabled: false,
                infoType: "getfeatureinfo",
                responses: [],
                requests: {length: 0},
                detailsConfig: null,
                // modelConfig: null,
                template: null
            });
        }
        case NEW_MAPINFO_REQUEST: {
            let newRequests;
            let {reqId, request} = action;
            newRequests = assign({}, state.requests);
            newRequests.length = (newRequests.length) ? newRequests.length + 1 : 1;
            newRequests[reqId] = assign({}, { request: request});
            return assign({}, state, {
                requests: newRequests
            });
        }
        case PURGE_MAPINFO_RESULTS:
            return assign({}, state, {
                responses: [],
                requests: {length: 0}
            });
        case LOAD_FEATURE_INFO: {
            /* action.data (if a JSON has been requested) is an object like this:
             * {
             *     crs: [object],
             *     features: [array],
             *     type: [string]
             * }
             * else is a [string] (for eg. if HTML data has been requested)
             */
            let newState;
            if (state.requests && state.requests[action.reqId]) {
                let newResponses;
                let obj = {
                    response: action.data,
                    queryParams: action.requestParams,
                    layerMetadata: action.layerMetadata
                };
                if (state.responses) {
                    newResponses = state.responses.slice();
                    newResponses.push(obj);
                } else {
                    newResponses = [obj];
                }
                newState = assign({}, state, {
                    responses: newResponses
                });
            }
            return (newState) ? newState : state;
        }
        case EXCEPTIONS_FEATURE_INFO: {
            /* action.exceptions, an array of exceptions like this:
             * [{
             *     code: [string],
             *     locator: [string],
             *     text: [string]
             * }, ...]
             */
            let newState;
            if (state.requests && state.requests[action.reqId]) {
                let newResponses;
                let obj = {
                    response: action.exceptions,
                    queryParams: action.requestParams,
                    layerMetadata: action.layerMetadata
                };
                if (state.responses) {
                    newResponses = state.responses.slice();
                    newResponses.push(obj);
                } else {
                    newResponses = [obj];
                }
                newState = assign({}, state, {
                    responses: newResponses
                });
            }
            return (newState) ? newState : state;
        }
        case ERROR_FEATURE_INFO: {
            /* action.error, an Object like this:
             * {
             *     config: [Object],
             *     data: [string],
             *     headers: [Object],
             *     status: [number],
             *     statusText: [string]
             * }
             */
            let newState;
            if (state.requests && state.requests[action.reqId]) {
                let newResponses;
                let obj = {
                    response: action.error,
                    queryParams: action.requestParams,
                    layerMetadata: action.layerMetadata
                };
                if (state.responses) {
                    newResponses = state.responses.slice();
                    newResponses.push(obj);
                } else {
                    newResponses = [obj];
                }
                newState = assign({}, state, {
                    responses: newResponses
                });
            }
            return (newState) ? newState : state;
        }
        case CLICK_ON_MAP: {
            return assign({}, state, {
                clickPoint: action.point
            });
        }
        case CHANGE_MAPINFO_FORMAT: {
            return assign({}, state, {
                infoFormat: action.infoFormat
            });
        }
        case SHOW_MAPINFO_MARKER: {
            return assign({}, state, {
                showMarker: true
            });
        }
        case HIDE_MAPINFO_MARKER: {
            return assign({}, state, {
                showMarker: false
            });
        }

        // ---------------------- SIRA ----------------------- //

        case CONFIGURE_INFO_TOPOLOGY: {
            // let modelConfig = assign({}, state.modelConfig, {[action.layerId]: action.modelConfig.modelConfig});
            let topologyConfig = assign({}, action.topologyConfig, {modelConfig: action.modelConfig});
            topologyConfig = assign({}, state.topologyConfig, {[action.layerId]: topologyConfig});
            let infoTopologyResponse = assign({}, state.infoTopologyResponse, {[action.layerId]: action.infoTopologyResponse});

            return assign({}, state, {
                // modelConfig: modelConfig,
                topologyConfig: topologyConfig,
                infoTopologyResponse: infoTopologyResponse
            });
        }
        case CHANGE_TOPOLOGY_MAPINFO_STATE: {
            return assign({}, state, {
                topologyInfoEnabled: action.enabled,
                infoEnabled: false,
                infoType: "topology",
                responses: [],
                requests: {length: 0},
                detailsConfig: null,
                // modelConfig: null,
                template: null
            });
        }
        case CONFIGURE_GET_FEATURE_INFO: {
            let detailsConfig = assign({}, state.detailsConfig, {[action.layerId]: action.config});
            // let modelConfig = assign({}, state.modelConfig, {[action.layerId]: action.config.grid});

            return assign({}, state, {
                detailsConfig: detailsConfig
                // modelConfig: modelConfig
            });
        }
        case LOAD_TEMPLATE_INFO: {
            let template = assign({}, state.template, {[action.layerId]: action.template});
            return assign({}, state, {
                template: template
            });
        }
        case CONFIGURE_GET_FEATURE_INFO_ERROR: {
            let loadingError = assign({}, state.loadingError, {[action.layerId]: action.error});
            return assign({}, state, {
                loadingError: loadingError
            });
        }
        case SET_MODEL_CONFIG: {
            return assign({}, state, {
                modelConfig: action.config
            });
        }
        default:
            return state;
    }
}

module.exports = mapInfo;
