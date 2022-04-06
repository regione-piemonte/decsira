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
const EXPORT_RESULT_POLLING = "EXPORT_RESULT_POLLING";
const { Promise } = require('es6-promise');
const { toggleSiraControl } = require('./controls');
const uuidv1 = require('uuid/v1');

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

function togglePolling(polling) {
    return {
        type: EXPORT_RESULT_POLLING,
        polling
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

function estimateDownload(url, request) {
    return axios.post(url, request, {
        timeout: 60000,
        headers: { 'Accept': 'text/xml', 'Content-Type': 'text/plain' }
    }).then((response) => {
        if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
            let result = ExporterUtils.getDownloadEstimatorResult(response.data);
            return result === 'true';
        }
        throw new Error("GeoServer Exception, query fallita!");
    });
}

function asynchDownoad(url, request) {
    return axios.post(url, request, {
        timeout: 60000,
        headers: { 'Accept': 'text/xml', 'Content-Type': 'text/plain' }
    }).then((response) => {
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

function getExecutionStatus(result) {
    return axios.get(result.statusLocation, {
        timeout: 60000,
        headers: { 'Accept': 'text/xml', 'Content-Type': 'text/plain' }
    }).then((response) => {
        let status = {};
        if (response.data && response.data.indexOf("<ows:ExceptionReport") === -1) {
            let procStatus = ExporterUtils.getProcessStatus(response.data);
            if (procStatus === "ProcessSucceeded") {
                let resultLocation = ExporterUtils.getDownloadResultLocation(response.data);
                status = {...result, status: 'completed', resultLocation: resultLocation };
            } else {
                status = {...result, status: 'pending'};
            }
        } else {
            let error = ExporterUtils.getDownloadError(response.data);
            status = {...result, status: 'failed', error: error };
        }
        return status;
    });
}

function continuePolling(downloadResults) {
    let ret = false;
    downloadResults.map(result => {
        if (result.status === "pending") ret = true;
    });
    return ret;
}

function pollingDownloadDataEntries() {
    return (dispatch, getState) => {
        const promises = [];
        let downloadResults = getState().siraexporter.downloadResults;
        downloadResults.forEach(result => {
            if (result.status === "pending") {
                promises.push(getExecutionStatus(result));
            }
        });
        Promise.all(promises).then((results) => {
            results.map(result => {
                dispatch(updateDownloadResult(result));
                if (result.status === "completed") {
                    dispatch(showInfoBubbleMessage('layerdownload.exportResultsMessages.exportSuccess'));
                } else if (result.status === "failed") {
                    dispatch(showInfoBubbleMessage('layerdownload.exportResultsMessages.exportFailure'));
                }
            });

            if (continuePolling(results)) {
                setTimeout(() => { dispatch(pollingDownloadDataEntries()); }, 5000);
            } else {
                dispatch(togglePolling(false));
            }
        });
    };
}

function downloadFeatures(wpsUrl, layerName, layerTitle, wfsRequest, outputformat, filename, mimeType, addFile) {
    const format = outputformat === 'shp' ? "application/zip" : "text/csv";
    let {url} = ConfigUtils.setUrlPlaceholders({url: wpsUrl});
    const request = ExporterUtils.getWpsDownloadRequest(layerName, format, wfsRequest);
    const estimateRequest = ExporterUtils.getDownloadEstimatorRequest(layerName, format, wfsRequest);

    return (dispatch, getState) => {
        dispatch(toggleLoading(true));

        estimateDownload(url, estimateRequest).then(result => {
            if (result === true) {
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

                    if (getState().siraexporter.polling === false) {
                        dispatch(pollingDownloadDataEntries());
                        dispatch(togglePolling(true));
                    }
                }).catch((e) => {
                    const message = e.message || `Network problem code ${e.status}`;
                    dispatch(exportError(message));
                });
            } else {
                dispatch(exportError("downloadEstimatorFailed"));
            }
        });
    };
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
            results.map(result => {
                dispatch(updateDownloadResult(result));
            });
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
    EXPORT_RESULT_POLLING,
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
