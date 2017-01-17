/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FileSaver = require('file-saver');
const shpwrite = require('shp-write');
const JSZip = require('jszip');


const ExporterUtils = {
    exportFeatures: function(outputformat, features, columns, filename = 'export', mimeType) {
        const name = filename.replace(':', "_");
        switch (outputformat) {
            case "csv": {
                this.exportCSV(features, columns, name, mimeType);
                break;
            }
            case "shp": {
                this.exportShp(features, columns, name);
                break;
            }
            default:
                this.exportCSV(features, columns, name, mimeType);
        }
    },
    exportCSV: function(features, columns, filename, mimeType) {
        const csvString = this.convertArrayOfObjectsToCSV(features, columns);
        let file = new Blob([csvString], {
                    type: mimeType || "text/csv;charset=utf-8;"
                });
        FileSaver.saveAs(file, `${filename}.csv`);
    },
    exportShp: function(features, columns, filename) {
        const shpString = shpwrite.zip({
            type: 'FeatureCollection',
            features: this.getFeaturesForShp(features, columns)
            }, {
            folder: filename,
            types: {
            point: 'SiraPoints',
            polygon: 'SiraPolygons',
            line: 'SiraLines'
            }});
        const zip = new JSZip();
        zip.loadAsync(shpString, {base64: true}).then((result) => {
            return result.generateAsync({ compression: 'STORE', type: 'blob'});
        }).then((blob) => FileSaver.saveAs(blob, `${filename}.zip`));
    },
    cvsEscape: function(value) {
        if (value === null || value === undefined) {
            return '';
        }
        let stringValue;
        if (typeof value === 'string') {
            stringValue = value;
        }else if (typeof value.toString === 'function') {
            stringValue = value.toString();
        }else {
            stringValue = '';
        }
        return stringValue.replace(/"/g, "\"\"");
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
                return this.cvsEscape(ft.properties[id]);
            }).join(columnDelimiter));
            return res;
        }, result);
        return result.join(lineDelimiter);
    },
    getFeaturesForShp: function(features, columns) {
        const cols = columns.map((c) => ({id: c.field.replace('properties.', ''), header: c.headerName}));
        return features.reduce((res, ft) => {
            if (ft.geometry.coordinates) {
                res.push({
                    type: ft.type,
                    id: ft.id,
                    geometry: ft. geometry,
                    properties: cols.reduce((obj, col) => {
                        obj[col.header] = ft.properties[col.id];
                        return obj;
                    }, {}) });
            }
            return res;
        }, []);

    }
};

module.exports = ExporterUtils;
