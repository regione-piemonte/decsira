/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const assign = require('object-assign');
const axios = require('axios');
const uuid = require('node-uuid');

const LOAD_FEATURE_INFO = 'LOAD_FEATURE_INFO';
const ERROR_FEATURE_INFO = 'ERROR_FEATURE_INFO';
const EXCEPTIONS_FEATURE_INFO = 'EXCEPTIONS_FEATURE_INFO';
const CHANGE_MAPINFO_STATE = 'CHANGE_MAPINFO_STATE';
const NEW_MAPINFO_REQUEST = 'NEW_MAPINFO_REQUEST';
const PURGE_MAPINFO_RESULTS = 'PURGE_MAPINFO_RESULTS';
const CHANGE_MAPINFO_FORMAT = 'CHANGE_MAPINFO_FORMAT';
const SHOW_MAPINFO_MARKER = 'SHOW_MAPINFO_MARKER';
const HIDE_MAPINFO_MARKER = 'HIDE_MAPINFO_MARKER';


const LOAD_TEMPLATE_INFO = 'LOAD_TEMPLATE_INFO';
const CONFIGURE_GET_FEATURE_INFO_ERROR = 'LOAD_TEMPLATE_ERROR';
const CONFIGURE_GET_FEATURE_INFO = 'CONFIGURE_GET_FEATURE_INFO';
const CHANGE_TOPOLOGY_MAPINFO_STATE = 'CHANGE_TOPOLOGY_MAPINFO_STATE';

const CONFIGURE_INFO_TOPOLOGY_ERROR = 'CONFIGURE_INFO_TOPOLOGY_ERROR';
const CONFIGURE_INFO_TOPOLOGY = 'CONFIGURE_INFO_TOPOLOGY';

const SET_MODEL_CONFIG = 'SET_MODEL_CONFIG';

const TemplateUtils = require('../utils/TemplateUtils');
const {parseXMLResponse} = require('../../MapStore2/web/client/utils/FeatureInfoUtils');
const {loadFeatureTypeConfig} = require('./siradec');
/**
 * Private
 * @return a LOAD_FEATURE_INFO action with the response data to a wms GetFeatureInfo
 */
function loadFeatureInfo(reqId, data, rParams, lMetaData) {
    return {
        type: LOAD_FEATURE_INFO,
        data: data,
        reqId: reqId,
        requestParams: rParams,
        layerMetadata: lMetaData
    };
}

/**
 * Private
 * @return a ERROR_FEATURE_INFO action with the error occured
 */
function errorFeatureInfo(reqId, e, rParams, lMetaData) {
    return {
        type: ERROR_FEATURE_INFO,
        error: e,
        reqId: reqId,
        requestParams: rParams,
        layerMetadata: lMetaData
    };
}

/**
 * Private
 * @return a EXCEPTIONS_FEATURE_INFO action with the wms exception occured
 *         during a GetFeatureInfo request.
 */
function exceptionsFeatureInfo(reqId, exceptions, rParams, lMetaData) {
    return {
        type: EXCEPTIONS_FEATURE_INFO,
        reqId: reqId,
        exceptions: exceptions,
        requestParams: rParams,
        layerMetadata: lMetaData
    };
}

function newMapInfoRequest(reqId, reqConfig) {
    return {
        type: NEW_MAPINFO_REQUEST,
        reqId: reqId,
        request: reqConfig
    };
}

/**
 * Sends a wms GetFeatureInfo request and dispatches the right action
 * in case of success, error or exceptions.
 *
 * @param wmsBasePath {string} base path to the wms service
 * @param requestParams {object} map of params for a getfeatureinfo request.
 */
function getFeatureInfo(wmsBasePath, requestParams, lMetaData, options = {}, topologyOptions = null) {
    const defaultParams = assign({
        service: 'WMS',
        version: '1.1.1',
        request: 'GetFeatureInfo',
        srs: 'EPSG:4326',
        info_format: 'application/json',
        x: 0,
        y: 0,
        exceptions: 'application/vnd.ogc.se_xml'
    }, options);
    const param = assign({}, defaultParams, requestParams);
    const reqId = uuid.v1();
    return (dispatch) => {
        dispatch(newMapInfoRequest(reqId, param));
        axios.get(wmsBasePath, {params: param}).then((response) => {
            if (response.data.exceptions) {
                dispatch(exceptionsFeatureInfo(reqId, response.data.exceptions, requestParams, lMetaData));
            } else {
                if (topologyOptions) {
                    let valid = parseXMLResponse({response: response.data});
                    if (valid) {
                        dispatch(topologyOptions.callback(
                            topologyOptions.layerId,
                            topologyOptions.topologyConfig,
                            topologyOptions.modelConfig,
                            topologyOptions.filter,
                            {reqId: reqId, response: response.data, requestParams: requestParams, lMetaData: lMetaData}
                        ));
                    } else {
                        dispatch(loadFeatureInfo(reqId, response.data, requestParams, lMetaData));
                    }
                } else {
                    dispatch(loadFeatureInfo(reqId, response.data, requestParams, lMetaData));
                }
            }
        }).catch((e) => {
            dispatch(errorFeatureInfo(reqId, e, requestParams, lMetaData));
        });
    };
}

function changeMapInfoState(enabled) {
    return {
        type: CHANGE_MAPINFO_STATE,
        enabled: enabled
    };
}

function purgeMapInfoResults() {
    return {
        type: PURGE_MAPINFO_RESULTS
    };
}

/**
 * Set a new format for GetFeatureInfo request.
 * @param mimeType {string} correct value are:
 *   - "text/plain"
 *   - "text/html"
 *   - "text/javascript"
 *   - "application/json"
 *   - "application/vnd.ogc.gml"
 *   - "application/vnd.ogc.gml/3.1.1"
 */
function changeMapInfoFormat(mimeType) {
    return {
        type: CHANGE_MAPINFO_FORMAT,
        infoFormat: mimeType
    };
}

function showMapinfoMarker() {
    return {
        type: SHOW_MAPINFO_MARKER
    };
}

function hideMapinfoMarker() {
    return {
        type: HIDE_MAPINFO_MARKER
    };
}

// -------------------  SIRA -------------------------- //

function changeTopologyMapInfoState(enabled) {
    return {
        type: CHANGE_TOPOLOGY_MAPINFO_STATE,
        enabled: enabled
    };
}

function configureGetFeatureInfo(layerId, config) {
    return {
        type: CONFIGURE_GET_FEATURE_INFO,
        layerId: layerId,
        config: config
    };
}

function configureTemplate(layerId, template) {
    return {
        type: LOAD_TEMPLATE_INFO,
        layerId: layerId,
        template: template
    };
}

function configureGetFeatureInfoError(layerId, e) {
    return {
        type: CONFIGURE_GET_FEATURE_INFO_ERROR,
        layerId: layerId,
        error: e
    };
}

function configureInfoTopologyConfig(layerId, infoTopologyResponse, modelConfig, topologyConfig) {
    return {
        type: CONFIGURE_INFO_TOPOLOGY,
        layerId: layerId,
        modelConfig: modelConfig,
        topologyConfig: topologyConfig,
        infoTopologyResponse: infoTopologyResponse
    };
}

function configureInfoTopologyConfigError(layerId, e) {
    return {
        type: CONFIGURE_INFO_TOPOLOGY_ERROR,
        layerId: layerId,
        error: e
    };
}

function loadFeatureInfoTemplateConfig(layerId, templateURL) {
    return (dispatch) => {
        dispatch(configureTemplate(layerId, {needsLoading: false}));
        return axios.get(templateURL).then((response) => {
            let template = response.data;
            dispatch(configureTemplate(layerId, template));
        }).catch((e) => {
            dispatch(configureGetFeatureInfoError(layerId, e));
        });
    };
}

function loadGetFeatureInfoConfig(layerId, featureType, params) {
    return (dispatch, getState) => {
        const state = getState();
        if (!state.siradec.configOggetti[featureType]) {
            dispatch(loadFeatureTypeConfig(null, params, featureType));
        }
        dispatch(configureGetFeatureInfo(layerId, featureType));
        if (!state.mapInfo.template || !state.mapInfo.template[layerId]) {
            dispatch(configureTemplate(layerId, {featureType, needsLoading: true}));
        }
    };
}

function loadTopologyInfoWithFilter(layerId, modelConfig, topologyConfig, filter) {
    return (dispatch) => {
        return axios.post(topologyConfig.wfsUrl, filter, {
          timeout: 60000,
          headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
        }).then((response) => {
            let infoTopologyResponse = response.data;
            const columns = (modelConfig.columns || []).map((column) => {
                return !column.field ? assign({}, column, {field: uuid.v1()}) : column;
            });

            let features = TemplateUtils.getModels(infoTopologyResponse,
                modelConfig.root, columns, "1.1.0");

            let data = {
                "type": "FeatureCollection",
                "totalFeatures": features.length,
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
                    "id": feature.id,
                    "geometry_name": topologyConfig.geomAttribute,
                    "properties": {}
                };

                for (let prop in feature) {
                    if (feature.hasOwnProperty(prop) && prop !== "geometry") {
                        f.properties[prop] = feature[prop];
                    }
                }

                f.geometry = {
                    "type": topologyConfig.geometryType,
                    "coordinates": [[]]
                };

                if (topologyConfig.geometryType === "Polygon") {
                    for (let i = 0; i < feature.geometry.coordinates.length; i++) {
                        let coordinates = topologyConfig.wfsVersion === "1.1.0" ?
                            [feature.geometry.coordinates[i][1], feature.geometry.coordinates[i][0]] : feature.geometry.coordinates[i];
                        f.geometry.coordinates[0].push(coordinates);
                    }
                }

                return f;
            });

            data.features = features;

            dispatch(configureInfoTopologyConfig(layerId, data, modelConfig, topologyConfig));
        }).catch((e) => {
            dispatch(configureInfoTopologyConfigError(e));
        });
    };
}

function loadInfoTopologyConfig(layerId, topologyConfig, modelConfig, filter, infoParams) {
    return (dispatch) => {
        dispatch(loadFeatureInfo(infoParams.reqId, infoParams.response, infoParams.requestParams, infoParams.lMetaData));
        dispatch(loadTopologyInfoWithFilter(layerId, modelConfig, topologyConfig, filter));

        /*return axios.get(topologyConfig.topologyModelURL).then((response) => {
            let modelConfig = response.data;
            if (typeof modelConfig !== "object") {
                try {
                    modelConfig = JSON.parse(modelConfig);
                } catch(e) {
                    dispatch(configureGetFeatureInfoError(layerId, e));
                }
            }

            dispatch(loadFeatureInfo(infoParams.reqId, infoParams.response, infoParams.requestParams, infoParams.lMetaData));
            dispatch(loadTopologyInfoWithFilter(layerId, modelConfig, topologyConfig, filter));
        }).catch((e) => {
            dispatch(configureInfoTopologyConfigError(layerId, e));
        });*/
    };
}

function setModelConfig(config) {
    return {
        type: SET_MODEL_CONFIG,
        config: config
    };
}

module.exports = {
    ERROR_FEATURE_INFO,
    EXCEPTIONS_FEATURE_INFO,
    LOAD_FEATURE_INFO,
    CHANGE_MAPINFO_STATE,
    NEW_MAPINFO_REQUEST,
    PURGE_MAPINFO_RESULTS,
    CHANGE_MAPINFO_FORMAT,
    SHOW_MAPINFO_MARKER,
    HIDE_MAPINFO_MARKER,
    getFeatureInfo,
    changeMapInfoState,
    newMapInfoRequest,
    purgeMapInfoResults,
    changeMapInfoFormat,
    showMapinfoMarker,
    hideMapinfoMarker,

    LOAD_TEMPLATE_INFO,
    CONFIGURE_GET_FEATURE_INFO_ERROR,
    CONFIGURE_GET_FEATURE_INFO,
    CHANGE_TOPOLOGY_MAPINFO_STATE,
    CONFIGURE_INFO_TOPOLOGY_ERROR,
    CONFIGURE_INFO_TOPOLOGY,
    SET_MODEL_CONFIG,
    configureTemplate,
    loadGetFeatureInfoConfig,
    configureGetFeatureInfoError,
    configureGetFeatureInfo,
    changeTopologyMapInfoState,
    loadInfoTopologyConfig,
    setModelConfig,
    loadFeatureInfoTemplateConfig
};
