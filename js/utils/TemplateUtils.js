/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const XPath = require('xpath');
const Dom = require('xmldom').DOMParser;

const TemplateUtils = {
    NUMBER_TYPE: 1,
    STRING_TYPE: 2,
    BOOLEAN_TYPE: 3,

    nsResolver() {
        let ns = {
            "wfs": "http://www.opengis.net/wfs",
            "gml": "http://www.opengis.net/gml",
            "sira": "http://www.regione.piemonte.it/ambiente/sira/1.0"
        };
        return ns;
    },
    getElementValue(doc, xpath, type) {
        let select = XPath.useNamespaces(this.nsResolver());

        let result = select(xpath, doc)[0];

        switch (type) {
            case 1 /*NUMBER_TYPE*/: {
                return parseFloat(result.nodeValue);
            }
            case 2 /*STRING_TYPE*/: {
                return result.nodeValue;
            }
            case 3 /*BOOLEAN_TYPE*/: {
                return result.nodeValue === "true";
            }
            default: return result;
        }
    },
    getModel(data, config) {
        let doc = new Dom().parseFromString(data);

        let model = {};
        for (let element in config) {
            if (config[element]) {
                let value = "";
                for (let i = 0; i < config[element].xpath.length; i++) {
                    if (config[element].type === this.STRING_TYPE) {
                        value += " " + this.getElementValue(doc, config[element].xpath[i], config[element].type);
                    } else {
                        value = this.getElementValue(doc, config[element].xpath[i], config[element].type);
                    }
                }
                model[config[element].field] = value;
            }
        }

        return model;
    }
};

module.exports = TemplateUtils;
