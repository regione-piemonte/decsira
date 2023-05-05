/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FileSaver = require('file-saver');
const shpwrite = require('fixed-shp-write');
const JSZip = require('jszip');
const GeoJSON = require('ol/format/GeoJSON').default;
const ProWKTDef = require('./ProjWKTDef');
const {head} = require('lodash');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const ExporterUtils = {
    exportFeatures: function(outputformat, features, columns, filename = 'export', mimeType, fileToAdd, outputSrs = 'EPSG:32632') {
        const name = filename.replace(':', "_");
        switch (outputformat) {
        case "csv": {
            this.exportCSV(features, columns, name, mimeType, fileToAdd);
            break;
        }
        case "shp": {
            this.exportShp(features, columns, name, fileToAdd, outputSrs);
            break;
        }
        default:
            this.exportCSV(features, columns, name, mimeType, fileToAdd);
        }
    },
    exportCSV: function(features, columns, filename, mimeType, fileToAdd) {
        const csvString = this.convertArrayOfObjectsToCSV(features, columns);
        if (fileToAdd) {
            const zip = new JSZip();
            zip.file(fileToAdd.name, fileToAdd.content);
            zip.file(`${filename}.csv`, csvString);
            zip.generateAsync({ compression: 'STORE', type: 'blob'}).then((blob) => FileSaver.saveAs(blob, `${filename}.zip`));
        } else {
            let file = new Blob([csvString], {
                type: mimeType || "text/csv;charset=utf-8;"
            });
            FileSaver.saveAs(file, `${filename}.csv`);
        }
    },
    exportShp: function(features, columns, filename, fileToAdd, outputSrs) {
        const format = new GeoJSON();
        let featureCollection = this.getFeaturesForShp(features, columns);
        if (Array.isArray(featureCollection)) {
            featureCollection = { "type": "FeatureCollection", features: featureCollection};
        }
        const olFeatures = format.readFeatures(featureCollection);
        olFeatures.map((f) => f.getGeometry().transform('EPSG:4326', outputSrs));
        const geoObject = format.writeFeaturesObject(olFeatures);
        geoObject.features.map((ft) => {
            if (ft.geometry.type === "LineString") {
                ft.geometry.coordinates = [ft.geometry.coordinates];
            }
        });
        const shpString = shpwrite.zip({
            type: 'FeatureCollection',
            features: geoObject.features
        }, {
            folder: filename,
            types: {
                point: 'SiraPoints',
                polygon: 'SiraPolygons',
                line: 'SiraLines'
            }});
        const zip = new JSZip();
        zip.loadAsync(shpString, {base64: true}).then((result) => {
            if (fileToAdd) {
                result.file(fileToAdd.name, fileToAdd.content);
            }
            if (ProWKTDef[outputSrs]) {
                const prj = head(zip.file(/\.prj/));
                result.file(prj.name, ProWKTDef[outputSrs]);
            }
            return result.generateAsync({ compression: 'STORE', type: 'blob'});
        }).then((blob) => FileSaver.saveAs(blob, `${filename}.zip`));
    },
    formatNumber(value) {
        if (value === null || value === undefined) {
            return '';
        }
        let ret;
        if (typeof value === 'number') {
            ret = new Intl.NumberFormat(LocaleUtils.getSupportedLocales().it, {maximumFractionDigits: 20}).format(value);
        } else {
            ret = value;
        }
        return ret;
    },
    formatDate(value) {
        if (value === null || value === undefined) {
            return '';
        }
        let ret;
        if (typeof value === 'string') {
            const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))Z/;
            ret = value.match(regex) ? value.replace('Z', '') : value;
        } else {
            ret = value;
        }
        return ret;
    },
    cvsEscape: function(value) {
        if (value === null || value === undefined) {
            return '';
        }
        let stringValue;
        if (typeof value === 'string') {
            stringValue = value;
        } else if (typeof value.toString === 'function') {
            stringValue = value.toString();
        } else {
            stringValue = '';
        }
        stringValue = stringValue.replace(/"/g, "\"\"");
        stringValue = (stringValue.indexOf(",") > -1) ? "\"" + stringValue + "\"" : stringValue;
        return stringValue;
    },
    convertArrayOfObjectsToCSV: function(features, columns, columnDelimiter = ',', lineDelimiter = '\r\n') {
        if (features === null || !features.length) {
            return null;
        }
        // Get columns header
        let result = [];
        let headers = columns.map((c) => this.cvsEscape(c.headerName)).join(columnDelimiter);
        result.push(headers);
        const ids = columns.map((c) => c.field.replace('properties.', ''));
        features.reduce(( res, ft) => {
            res.push(ids.map((id) => {
                let ret = this.formatNumber(ft.properties[id]);
                ret = this.formatDate(ret);
                ret = this.cvsEscape(ret);
                return ret;
            }).join(columnDelimiter));
            return res;
        }, result);
        return result.join(lineDelimiter);
    },
    getFeaturesForShp: function(features, columns) {
        const cols = columns.map((c) => ({id: c.field.replace('properties.', ''), header: c.headerName}));
        return features.reduce((res, ft) => {
            if (ft.geometry && ft.geometry.coordinates) {
                res.push({
                    type: ft.type,
                    id: ft.id,
                    geometry: ft.geometry,
                    properties: cols.reduce((obj, col) => {
                        let ret = this.formatNumber(ft.properties[col.id]);
                        ret = this.formatDate(ret);
                        obj[col.header] = ret;
                        return obj;
                    }, {}) });
            }
            return res;
        }, []);

    }
};

module.exports = ExporterUtils;
