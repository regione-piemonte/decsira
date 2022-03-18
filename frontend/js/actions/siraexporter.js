/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('@mapstore/libs/ajax');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const ExporterUtils = require('../utils/ExporterUtils');
const TemplateUtils = require('../utils/TemplateUtils');
const SiraUtils = require('../utils/SiraUtils');
const SET_EXPORT_PARAMS = 'SET_EXPORT_PARAMS';
const EXPORT_LOADING = 'EXPORT_LOADING';
const EXPORT_ERROR = 'EXPORT_ERROR';
const CONFIGURE_EXPORTER = 'CONFIGURE_EXPORTER';
const STORE_DOWNLOAD_RESULT = 'STORE_DOWNLOAD_LOCATION';
const CHECKING_DOWNLOAD_DATA_ENTRIES = 'CHECKING_DOWNLOAD_DATA_ENTRIES';
const UPDATE_DOWNLOAD_RESULT = 'UPDATE_DOWNLOAD_RESULT';
const REMOVE_DOWNLOAD_RESULT = 'REMOVE_DOWNLOAD_RESULT';
const SHOW_INFO_BUBBLE = "SHOW_INFO_BUBBLE";
const SET_INFO_BUBBLE_MESSAGE = "SET_INFO_BUBBLE_MESSAGE";
const { Promise } = require('es6-promise');
const { toggleSiraControl } = require('./controls');
const uuidv1 = require('uuid/v1');
// const { parseString } = require('xml2js');
// const { stripPrefix } = require('xml2js/lib/processors');

function setExportParams(params) {
    return {
        type: SET_EXPORT_PARAMS,
        params
    };
}
function toggleLoading(loading) {
    return {
        type: EXPORT_LOADING,
        loading
    };
}
function exportError(error) {
    return {
        type: EXPORT_ERROR,
        error
    };
}
function configureExporter(config) {
    return {
        type: CONFIGURE_EXPORTER,
        config
    };
}
function storeDownloadResult(downloadResult) {
    return {
        type: STORE_DOWNLOAD_RESULT,
        downloadResult
    };
}
function checkingDownloadDataEntries(checking) {
    return {
        type: CHECKING_DOWNLOAD_DATA_ENTRIES,
        checking
    };
}
function updateDownloadResult(downloadResult) {
    return {
        type: UPDATE_DOWNLOAD_RESULT,
        downloadResult
    };
}
function removeDownloadResult(id) {
    return {
        type: REMOVE_DOWNLOAD_RESULT,
        id
    };
}

function showInfoBubble(show) {
    return {
        type: SHOW_INFO_BUBBLE,
        show
    };
}

function setInfoBubbleMessage(msgId, msgParams, level) {
    return {
        type: SET_INFO_BUBBLE_MESSAGE,
        msgId,
        msgParams,
        level
    };
}

function getFile(url) {
    return axios.get(url, {responseType: 'arraybuffer'}).then((response) => {
        return response;
    }).catch((e) => {
        const msg = e.message || "Network problem, code ${e.status} per il file da includere";
        throw new Error(msg);
    });
}
function getFeatures(url, filter, featuregrid) {
    return axios.post(url, filter, { timeout: 60000,
        headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}}).then((response) => {
        if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
            let idFieldName = featuregrid.idFieldName;
            let features = TemplateUtils.getModels(response.data, featuregrid.grid.root, featuregrid.grid.columns);
            features = features.map((feature) => {
                let f = {
                    "type": "Feature",
                    "id": feature[idFieldName] || feature.id,
                    "geometry_name": "the_geom",
                    "properties": {}
                };
                let geometry;
                for (let prop in feature) {
                    if (feature[prop] && feature[prop].type === "geometry") {
                        geometry = feature[prop];
                    } else if (feature.hasOwnProperty(prop)) {
                        f.properties[prop] = feature[prop];
                    }
                }
                f.geometry = {
                    "type": featuregrid.grid.geometryType
                };
                // Setting coordinates
                if (featuregrid.grid.geometryType === "Polygon") {
                    let coordinates = [[]];
                    if (geometry && geometry.coordinates.length > 0) {
                        for (let i = 0; geometry && i < geometry.coordinates.length; i++) {
                            let coords = featuregrid.grid.wfsVersion === "1.1.0" ?
                                [geometry.coordinates[i][1], geometry.coordinates[i][0]] : geometry.coordinates[i];
                            coordinates[0].push(coords);
                        }
                        f.geometry.coordinates = coordinates;
                    } else {
                        f.geometry.coordinates = null;
                    }
                } else if (featuregrid.grid.geometryType === "MultiPolygon") {
                    let coordinates = [];
                    let polygon = [];
                    for (let i = 0; geometry && i < geometry.coordinates.length; i++) {
                        let point = geometry.coordinates[i];
                        polygon.push(point);
                        if (polygon.length > 1 && SiraUtils.arrayEquals(point, polygon[0])) {
                            coordinates.push([polygon]);
                            polygon = [];
                        }
                    }
                    f.geometry.coordinates = coordinates && coordinates.length > 0 ? coordinates : null;
                } else if (featuregrid.grid.geometryType === "LineString") {
                    let coordinates = [];
                    if (geometry && geometry.coordinates.length > 0) {
                        for (let i = 0; geometry && i < geometry.coordinates.length; i++) {
                            let coords = featuregrid.grid.wfsVersion === "1.1.0" ?
                                [geometry.coordinates[i][1], geometry.coordinates[i][0]] : geometry.coordinates[i];
                            coordinates.push(coords);
                        }
                        f.geometry.coordinates = coordinates;
                    } else {
                        f.geometry.coordinates = null;
                    }
                } else if (featuregrid.grid.geometryType === "Point") {
                    f.geometry.coordinates = geometry ? [geometry.coordinates[0][0], geometry.coordinates[0][1]] : null;
                }
                return f;
            });
            return features;
        }
        throw new Error("GeoServer Exception, query fallita!");
    });
}
function getFileAndExport(features, columns, outputformat, featuregrid, filename, mimeType, addFile, srs) {
    return (dispatch) => {
        dispatch(toggleLoading(true));
        getFile(addFile).then((result) => {
            dispatch(toggleLoading(false));
            const fileToAdd = {name: addFile.split('/').pop(), content: result.data};
            try {
                ExporterUtils.exportFeatures(outputformat, features, columns, filename, mimeType, fileToAdd, srs);
            } catch (e) {
                throw new Error("Errore nel parsing dei dati");
            }

        }).catch((e) => {
            const message = e.message || `Network problem code ${e.status}`;
            dispatch(exportError(message));
        });
    };

}
function getFeaturesAndExport(wfsUrl, params, filter, columns, outputformat, featuregrid, filename, mimeType, addFile, srs) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            url += "&" + param + "=" + params[param];
        }
    }
    // [ axios.get(url).then((response) => {})];

    return (dispatch) => {
        dispatch(toggleLoading(true));
        const featurePromise = getFeatures(url, filter, featuregrid);
        const promises = addFile ? [featurePromise, getFile(addFile)] : [featurePromise];
        Promise.all(promises).then((results) => {
            dispatch(toggleLoading(false));
            const fileToAdd = addFile ? {name: addFile.split('/').pop(), content: results[1].data} : null;
            try {
                ExporterUtils.exportFeatures(outputformat, results[0], columns, filename, mimeType, fileToAdd, srs);
            } catch (e) {
                throw new Error("Errore nel parsing dei dati");
            }

        }).catch((e) => {
            const message = e.message || `Network problem code ${e.status}`;
            dispatch(exportError(message));
        });
    };
}

function asynchDownoad(url, request) {
    return axios.post(url, request, {
        timeout: 60000,
        headers: { 'Accept': 'text/xml', 'Content-Type': 'text/plain' }
    }).then((response) => {
        /* parseString(response.data, { tagNameProcessors: [stripPrefix] }, function(err, result) {
            console.log(result);
            console.log(ExporterUtils.getDownloadResponse(result));
            console.log(result.ExecuteResponse.$.statusLocation);
        });*/
        if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
            let statusLocation = ExporterUtils.getDownloadStatusLocation(response.data);
            return statusLocation;
        }
        throw new Error("GeoServer Exception, query fallita!");
    });
}

function showInfoBubbleMessage(msgId, msgParams, level, duration) {
    return (dispatch) => {
        dispatch(setInfoBubbleMessage(msgId, msgParams, level));
        dispatch(showInfoBubble(true));
        setTimeout(() => {
            dispatch(showInfoBubble(false));
        }, duration || 3000);
    };
}

function downloadFeatures(wpsUrl, layerName, layerTitle, wfsRequest, outputformat, filename, mimeType, addFile) {
    const format = outputformat === 'shp' ? "application/zip" : "text/csv";
    const request = ExporterUtils.getWpsDownloadRequest(layerName, format, wfsRequest);

    return (dispatch) => {
        dispatch(toggleLoading(true));
        let {url} = ConfigUtils.setUrlPlaceholders({url: wpsUrl});
        const downloadPromise = asynchDownoad(url, request);
        const promises = addFile ? [downloadPromise, getFile(addFile)] : [downloadPromise];
        const newResult = {
            id: uuidv1(),
            layerName: layerName,
            layerTitle: layerTitle,
            status: 'pending',
            startTime: new Date().getTime()
        };
        Promise.all(promises).then((results) => {
            dispatch(toggleLoading(false));
            dispatch(toggleSiraControl("exporter", false));
            dispatch(storeDownloadResult({...newResult, statusLocation: results[0] }));
            dispatch(showInfoBubbleMessage('layerdownload.exportResultsMessages.newExport'));
        }).catch((e) => {
            const message = e.message || `Network problem code ${e.status}`;
            dispatch(exportError(message));
        });
    };
}

function getExecutionStatus(result) {
    return axios.get(result.statusLocation, {
        timeout: 60000,
        headers: { 'Accept': 'text/xml', 'Content-Type': 'text/plain' }
    }).then((response) => {
        let status = {};
        if (response.data && response.data.indexOf("<ows:ExceptionReport") === -1) {
            let resultLocation = ExporterUtils.getDownloadResultLocation(response.data);
            status = {...result, status: 'completed', resultLocation: resultLocation };
        } else {
            let error = ExporterUtils.getDownloadError(response.data);
            status = {...result, status: 'failed', error: error };
        }
        return status;
        // throw new Error("GeoServer Exception, query fallita!");
    });
}

function checkDownloadDataEntries(downloadResults) {
    return (dispatch) => {
        checkingDownloadDataEntries(true);
        const promises = [];
        downloadResults.forEach(result => {
            promises.push(getExecutionStatus(result));
        });
        Promise.all(promises).then((results) => {
            dispatch(checkingDownloadDataEntries(false));
            results.map(result => dispatch(updateDownloadResult(result)));
        }).catch((e) => {
            const message = e.message || `Network problem code ${e.status}`;
            dispatch(exportError(message));
        });
    };
}

module.exports = {
    SET_EXPORT_PARAMS,
    EXPORT_LOADING,
    EXPORT_ERROR,
    CONFIGURE_EXPORTER,
    STORE_DOWNLOAD_RESULT,
    CHECKING_DOWNLOAD_DATA_ENTRIES,
    UPDATE_DOWNLOAD_RESULT,
    REMOVE_DOWNLOAD_RESULT,
    SHOW_INFO_BUBBLE,
    SET_INFO_BUBBLE_MESSAGE,
    toggleLoading,
    setExportParams,
    getFeaturesAndExport,
    downloadFeatures,
    checkDownloadDataEntries,
    checkingDownloadDataEntries,
    removeDownloadResult,
    configureExporter,
    getFileAndExport
};
