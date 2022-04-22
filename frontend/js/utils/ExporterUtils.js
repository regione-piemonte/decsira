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
const SiraFilterUtils = require('../utils/SiraFilterUtils');
const Dom = require('xmldom').DOMParser;

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
            ret = new Intl.NumberFormat(LocaleUtils.getSupportedLocales().it).format(value);
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
        // stringValue = stringValue.replace(/"/g, "\"\"");
        stringValue = stringValue.replace(/"/g, "");
        // Replace del carattere di new line con uno spazio
        stringValue = stringValue.replace(/\r\n/g, " ");
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

    },
    getDownloadEstimatorRequest: function(layerName, wfsRequest) {
        const fesFilter = SiraFilterUtils.getFesFilter(wfsRequest);

        const filterInput = fesFilter ? `
        <wps:Input>
        <ows:Identifier>filter</ows:Identifier>
        <wps:Data>
            <wps:ComplexData mimeType="text/xml; filter/1.0"><![CDATA[
                ${SiraFilterUtils.fesFilterToOgcFilter(fesFilter)}
            ]]>
            </wps:ComplexData>
        </wps:Data>
        </wps:Input>` : '';

        const request = `
        <wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">
        <ows:Identifier>gs:DownloadEstimator</ows:Identifier>
        <wps:DataInputs>
            <wps:Input>
            <ows:Identifier>layerName</ows:Identifier>
            <wps:Data>
                <wps:LiteralData>${layerName}</wps:LiteralData>
            </wps:Data>
            </wps:Input>
            <wps:Input>
            <ows:Identifier>targetCRS</ows:Identifier>
            <wps:Data>
                <wps:LiteralData>EPSG:32632</wps:LiteralData>
            </wps:Data>
            </wps:Input>
            ${filterInput}
        </wps:DataInputs>
        <wps:ResponseForm>
            <wps:ResponseDocument status="true">
                <wps:Output asReference="true" mimeType="application/zip">
                <ows:Identifier>result</ows:Identifier>
                </wps:Output>
            </wps:ResponseDocument>
        </wps:ResponseForm>
        </wps:Execute>
        `;
        return request;
    },
    getWpsDownloadRequest: function(layerName, outputFormat, wfsRequest) {
        const fesFilter = SiraFilterUtils.getFesFilter(wfsRequest);

        const filterInput = fesFilter ? `
        <wps:Input>
        <ows:Identifier>filter</ows:Identifier>
        <wps:Data>
            <wps:ComplexData mimeType="text/xml; filter/1.0"><![CDATA[
                ${SiraFilterUtils.fesFilterToOgcFilter(fesFilter)}
            ]]>
            </wps:ComplexData>
        </wps:Data>
        </wps:Input>` : '';

        const request = `
        <wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">
        <ows:Identifier>gs:Download</ows:Identifier>
        <wps:DataInputs>
            <wps:Input>
            <ows:Identifier>layerName</ows:Identifier>
            <wps:Data>
                <wps:LiteralData>${layerName}</wps:LiteralData>
            </wps:Data>
            </wps:Input>
            <wps:Input>
            <ows:Identifier>outputFormat</ows:Identifier>
            <wps:Data>
                <wps:LiteralData>${outputFormat}</wps:LiteralData>
            </wps:Data>
            </wps:Input>
            <wps:Input>
            <ows:Identifier>targetCRS</ows:Identifier>
            <wps:Data>
                <wps:LiteralData>EPSG:32632</wps:LiteralData>
            </wps:Data>
            </wps:Input>
            ${filterInput}
        </wps:DataInputs>
        <wps:ResponseForm>
            <wps:ResponseDocument storeExecuteResponse="true" status="true">
                <wps:Output asReference="true" mimeType="application/zip">
                <ows:Identifier>result</ows:Identifier>
                </wps:Output>
            </wps:ResponseDocument>
        </wps:ResponseForm>
        </wps:Execute>
        `;
        return request;
    },
    getDownloadEstimatorResult: function(xmlResponse) {
        const doc = new Dom().parseFromString(xmlResponse);
        const output = doc.getElementsByTagName('wps:ExecuteResponse')[0].childNodes[2];
        const data = output.getElementsByTagName('wps:Data')[0];
        const result = data.getElementsByTagName('wps:LiteralData')[0].childNodes[0].nodeValue;
        return result;
    },
    getDownloadStatusLocation: function(xmlResponse) {
        let doc = new Dom().parseFromString(xmlResponse);
        let element = doc.getElementsByTagName('wps:ExecuteResponse')[0];
        return element.getAttribute('statusLocation');
    },
    getDownloadResultLocation: function(xmlResponse) {
        const doc = new Dom().parseFromString(xmlResponse);
        const output = doc.getElementsByTagName('wps:ExecuteResponse')[0].childNodes[2];
        const ref = output.getElementsByTagName('wps:Reference')[0];
        let resultLocation = ref.getAttribute('href');
        return resultLocation;
    },
    getDownloadError: function(xmlResponse) {
        let owsException = this.getOwsException(xmlResponse);
        const doc = new Dom().parseFromString(owsException);
        const exception = doc.getElementsByTagName('ows:ExceptionReport')[0].childNodes[0];
        const exceptionText = exception.getElementsByTagName('ows:ExceptionText')[0];
        let error = exceptionText.childNodes[0].nodeValue;
        return error;
    },
    getOwsException: function(xmlResponse) {
        let res = xmlResponse.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
        res = xmlResponse.replace(/\n/g, "");
        if (res.startsWith('<ows:ExceptionReport')) return res;
        let startIndex = res.indexOf('<ows:ExceptionReport');
        let endIndex = res.indexOf('</ows:ExceptionReport>') + 22;
        return res.substring(startIndex, endIndex);
    },
    getProcessStatus: function(xmlResponse) {
        const doc = new Dom().parseFromString(xmlResponse);
        try {
            return doc.getElementsByTagName('wps:ExecuteResponse')[0]
                .childNodes[1]
                .childNodes[0]
                .localName;
        } catch (e) {
            return "UnexpectedStatus";
        }
    }
};

module.exports = ExporterUtils;
