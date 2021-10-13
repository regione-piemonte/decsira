/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FilterUtils = require('@mapstore/utils/FilterUtils');
const SiraUtils = require('./SiraUtils');
const head = require('lodash/head');

function getWSNameByFeatureName(ftName = "") {
    if (ftName === "" ) return "";
    return ftName.split(':')[0];
}

FilterUtils.toOGCFilterSira = function(ftName, json, version, sortOptions = null, hits = false, format = null, nsplaceholder = "fes") {
    let newFilter = this.toOGCFilter(ftName, json, version, sortOptions, hits, format);
    let undefFilter = `<${nsplaceholder}:Filter>undefined</${nsplaceholder}:Filter>`;
    newFilter = newFilter.replace(undefFilter, '');
    newFilter = nsplaceholder === "ogc" ? newFilter.replace("<ogc:PropertyName>geometria</ogc:PropertyName>", "<ogc:PropertyName>" + getWSNameByFeatureName(ftName) + ":geometria</ogc:PropertyName>") : newFilter;
    return newFilter;

};
FilterUtils.toCQLFilterSira = function(json) {
    let filter = this.toCQLFilter(json);
    return filter === "(undefined)" ? "(INCLUDE)" : filter;
};
FilterUtils.getOgcAllPropertyValue = function(featureTypeName, attribute) {
    return "<wfs:GetPropertyValue service='WFS' valueReference='" + attribute + "'"
                + " version='2.0' xmlns:fes='http://www.opengis.net/fes/2.0' "
                + " xmlns:gml='http://www.opengis.net/gml/3.2' "
                + " xmlns:wfs='http://www.opengis.net/wfs/2.0' "
                + " xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' "
                + " xsi:schemaLocation='http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd'>"
                +  "<wfs:Query typeNames='" + featureTypeName + "'/>"
            + "</wfs:GetPropertyValue>";
};

const getSLDByGeomType = (geometryType, ftName, filter, styleColor = '#0000FF') =>{
    let result;
    switch (geometryType) {
    case "Point": {
        result = `<NamedLayer><Name>${ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PointSymbolizer><Graphic><Mark><WellKnownName>circle</WellKnownName><Fill><CssParameter name="fill">${styleColor}</CssParameter></Fill></Mark><Size>20</Size></Graphic></PointSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer>`;
        break;
    }
    case "Polygon": {
        result = `<NamedLayer><Name>${ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PolygonSymbolizer><Fill><CssParameter name="fill">${styleColor}</CssParameter><CssParameter name="stroke">${styleColor}</CssParameter><CssParameter name="fill-opacity">0.7</CssParameter></Fill></PolygonSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer>`;
        break;
    }
    case "MultiPolygon": {
        result = `<NamedLayer><Name>${ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PolygonSymbolizer><Fill><CssParameter name="fill">${styleColor}</CssParameter><CssParameter name="stroke">${styleColor}</CssParameter><CssParameter name="fill-opacity">0.7</CssParameter></Fill></PolygonSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer>`;
        break;
    }
    case "LineString": {
        result = `<NamedLayer><Name>${ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<LineSymbolizer><Stroke><CssParameter name="stroke">${styleColor}</CssParameter><CssParameter name="stroke-width">2.0</CssParameter><CssParameter name="stroke-opacity">1.0</CssParameter></Stroke></LineSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer>`;
        break;
    }
    default:
        result = "";
    }
    return result;
};

FilterUtils.getSLD = function(ftName, json, version, nsplaceholder, nameSpaces, mlsFtName) {
    let filter = this.toOGCFilterSira(ftName, json, version, null, false, null, nsplaceholder);
    let sIdx = filter.search( `<${nsplaceholder}:Filter>`);
    if (sIdx !== -1) {
        let eIndx = filter.search( `</wfs:Query>`);
        filter = filter.substr(sIdx, eIndx - sIdx);
    } else {
        filter = '';
    }
    const config = SiraUtils.getConfigByfeatureTypeName(ftName);
    let geometryType = mlsFtName ? head(config.multiLayerSelect.filter(mls=> mls.name === mlsFtName)).geometryType : config.geometryType;
    const nameSpacesAttr = Object.keys(nameSpaces).map((prefix) => 'xmlns:' + prefix + '="' + nameSpaces[prefix] + '"').join(" ");
    return `<StyledLayerDescriptor version="1.0.0"
                    ${nameSpacesAttr}
                    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${getSLDByGeomType(geometryType, ftName, filter)}</StyledLayerDescriptor>`;
};

FilterUtils.getSLDMSLayers = (ftName, nameSpaces, mlsFtNames = []) => {
    const config = SiraUtils.getConfigByfeatureTypeName(ftName);
    const nameSpacesAttr = Object.keys(nameSpaces).map((prefix) => 'xmlns:' + prefix + '="' + nameSpaces[prefix] + '"').join(" ");
    let result = [];
    mlsFtNames.forEach(mlsFtName => {
        let geometryType = mlsFtName ? head(config.multiLayerSelect.filter(mls=> mls.name === mlsFtName)).geometryType : config.geometryType;
        result.push(getSLDByGeomType(geometryType, mlsFtName, '', "#00FFFF"));
    });
    return `<StyledLayerDescriptor version="1.0.0"
                    ${nameSpacesAttr}
                    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${result.join('')}</StyledLayerDescriptor>`;
};

FilterUtils.getFilterByIds = function(ftName, ids, idField, pagination) {
    let filterObj = {
        groupFields: [{id: 1, index: 0, logic: "OR"}],
        filterFields: ids.map((id) => ({ attribute: idField.xpath[0], groupId: 1, operator: "=", value: id, type: 'string'})),
        spatialField: {},
        pagination
    };
    return this.toOGCFilter(ftName, filterObj, "2.0");
};

module.exports = FilterUtils;
