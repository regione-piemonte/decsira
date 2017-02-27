/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const ExporterUtils = require('../utils/ExporterUtils');
const TemplateUtils = require('../utils/TemplateUtils');
const SET_EXPORT_PARAMS = 'SET_EXPORT_PARAMS';
const EXPORT_LOADING = 'EXPORT_LOADING';
const EXPORT_ERROR = 'EXPORT_ERROR';
const CONFIGURE_EXPORTER = 'CONFIGURE_EXPORTER';
const {Promise} = require('es6-promise');

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
                                   for (let i = 0; geometry && i < geometry.coordinates.length; i++) {
                                       let coords = featuregrid.grid.wfsVersion === "1.1.0" ?
                                   [geometry.coordinates[i][1], geometry.coordinates[i][0]] : geometry.coordinates[i];
                                       coordinates[0].push(coords);
                                   }
                                   f.geometry.coordinates = coordinates;
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
            }catch (e) {
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
            }catch (e) {
                throw new Error("Errore nel parsing dei dati");
            }

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
    toggleLoading,
    setExportParams,
    getFeaturesAndExport,
    configureExporter,
    getFileAndExport
};
