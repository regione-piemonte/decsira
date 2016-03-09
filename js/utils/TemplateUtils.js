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

    nsResolver() {
        let ns = {
            "wfs": "http://www.opengis.net/wfs",
            "gml": "http://www.opengis.net/gml",
            "sira": "http://www.regione.piemonte.it/ambiente/sira/1.0"
        };
        return ns;
    },
    getElementValue(result, type) {

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
                return result && result.nodeValue && parse(result.nodeValue) || {};
            }
            default: return result;
        }
    },
    getModels(data, root, config) {
        let doc = new Dom().parseFromString(data);

        let select = XPath.useNamespaces(this.nsResolver());

        let rows = select(root, doc);
        return rows.map((row) => {
            return this.getModel(data, config, row);
        });
    },
    getModel(data, config, el) {
        let doc = el || new Dom().parseFromString(data);

        let model = {};
        for (let element in config) {
            if (config[element]) {
                model[config[element].field] = this.getElement(config[element], doc);
            }
        }
        return model;
    },
    getElement(element, doc) {
        let select = XPath.useNamespaces(this.nsResolver());
        let value = "";
        let result;

        if (element.type === this.OBJECT_TYPE) {
            let values = [];
            let results = select(element.xpath, doc);
            results.forEach((res) => {
                value = {};
                element.fields.forEach((f) => {
                    let r = select(f.xpath, res)[0];
                    value[f.field] = this.getElementValue(r, f.type);
                });
                values.push(value);
            });
            value = values;
        }else if (element.type === this.GEOMETRY_TYPE) {
            result = select(element.xpath, doc)[0];
            value = this.getElementValue(result, element.type);
        }else {
            for (let i = 0; i < element.xpath.length; i++) {
                result = select(element.xpath[i], doc)[0];
                if (element.type === this.STRING_TYPE) {
                    if (i > 0) {
                        value += " ";
                    }
                    value += this.getElementValue(result, element.type);
                } else {
                    value = this.getElementValue(result, element.type);
                }
            }
        }
        return value;
    }
};

module.exports = TemplateUtils;
