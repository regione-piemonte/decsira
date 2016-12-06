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
function getFeaturesAndExport(wfsUrl, params, filter, columns, outputformat, featuregrid, filename) {
    let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            url += "&" + param + "=" + params[param];
        }
    }
    return (dispatch) => {
        dispatch(toggleLoading(true));
        return axios.post(url, filter, {
          timeout: 60000,
          headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
        }).then((response) => {
            if (response.data && !response.data.startsWith("<ows:ExceptionReport")) {
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
                dispatch(toggleLoading(false));
                try {
                    ExporterUtils.exportFeatures(outputformat, features, columns, filename );
                }catch (e) {
                    dispatch(exportError("Errore nel parsing dei dati"));
                }
            }else {
                dispatch(exportError("GeoServer Exception, query fallita!"));
            }
        }).catch(() => {
            dispatch(exportError("Network problem query fallita!"));
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
    configureExporter
};
