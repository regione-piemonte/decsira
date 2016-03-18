/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const XPath = require('xpath');
const Dom = require('xmldom').DOMParser;

const parse = require('wellknown');

const TemplateUtils = {

    NUMBER_TYPE: 1,
    STRING_TYPE: 2,
    BOOLEAN_TYPE: 3,
    OBJECT_TYPE: 4,
    ARRAY_TYPE: 5,
    GEOMETRY_TYPE: 6,

    nsResolver(wfsVersion="2.0") {
        switch (wfsVersion) {
            case "1.1.0": {
                return {
                    "wfs": "http://www.opengis.net/wfs",
                    "gml": "http://www.opengis.net/gml",
                    "sira": "http://www.regione.piemonte.it/ambiente/sira/1.0"
                };
            }
            case "2.0": {
                return {
                    "wfs": "http://www.opengis.net/wfs/2.0",
                    "gml": "http://www.opengis.net/gml/3.2",
                    "sira": "http://www.regione.piemonte.it/ambiente/sira/1.0"
                };
            }
            default:
                return {
                    "wfs": "http://www.opengis.net/wfs",
                    "gml": "http://www.opengis.net/gml",
                    "sira": "http://www.regione.piemonte.it/ambiente/sira/1.0"
                };
        }
    },
    getElementValue(result, type, wfsVersion="2.0") {
        switch (type) {
            case 1 /*NUMBER_TYPE*/: {
                return parseFloat(result && result.nodeValue || '0');
            }
            case 2 /*STRING_TYPE*/: {
                return result && result.nodeValue || '';
            }
            case 3 /*BOOLEAN_TYPE*/: {
                return result && result.nodeValue === "true" || false;
            }
            case 6 /*GEOMETRY_TYPE*/: {
                let value;
                if (wfsVersion !== "2.0") {
                    value = result && result.nodeValue && parse(result.nodeValue) || {};
                } else {
                    value = result && result.nodeValue || {};
                }
                return value;
            }
            default: return result;
        }
    },
    getModels(data, root, config, wfsVersion="2.0") {
        let doc = new Dom().parseFromString(data);

        let select = XPath.useNamespaces(this.nsResolver(wfsVersion));

        let rows = select(root, doc);
        return rows.map((row) => {
            return this.getModel(data, config, row, wfsVersion);
        });
    },
    getModel(data, config, el, wfsVersion="2.0") {
        let doc = el || new Dom().parseFromString(data);

        let model = {};
        for (let element in config) {
            if (config[element]) {
                model[config[element].field] = this.getElement(config[element], doc, wfsVersion);
            }
        }
        return model;
    },
    getElement(element, doc, wfsVersion="2.0") {
        let select = XPath.useNamespaces(this.nsResolver(wfsVersion));
        let value = "";
        let result;
        const me = this;
        if (element.type === this.OBJECT_TYPE) {
            let values = [];
            let results = select(element.xpath, doc);
            results.forEach((res) => {
                value = {};
                element.fields.forEach((f) => {
                    let r = select(f.xpath, res)[0];
                    value[f.field] = (f.type === me.OBJECT_TYPE) ? me.getElement(f, res, wfsVersion) : this.getElementValue(r, f.type, wfsVersion);
                });
                values.push(value);
            });
            value = values;
        }else if (element.type === this.GEOMETRY_TYPE) {
            result = select(element.xpath, doc)[0];
            value = this.getElementValue(result, element.type, wfsVersion);

            if (wfsVersion === "2.0") {
                try {
                    let coordinates = value.split(" ");
                    coordinates = coordinates.map((coord) => parseFloat(coord));
                    value = {
                        type: "geometry",
                        coordinates: coordinates
                    };
                } catch(e) {
                    value = value;
                }
            }
        }else {
            for (let i = 0; i < element.xpath.length; i++) {
                result = select(element.xpath[i], doc)[0];
                if (element.type === this.STRING_TYPE) {
                    if (i > 0) {
                        value += " ";
                    }
                    value += this.getElementValue(result, element.type, wfsVersion);
                } else {
                    value = this.getElementValue(result, element.type, wfsVersion);
                }
            }
        }
        return value;
    }
};

module.exports = TemplateUtils;
