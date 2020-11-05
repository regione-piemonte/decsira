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
FilterUtils.getSLD = function(ftName, json, version, nsplaceholder, nameSpaces, mlsFtName) {
    let filter = this.toOGCFilterSira(ftName, json, version, null, false, null, nsplaceholder);
    let sIdx = filter.search( `<${nsplaceholder}:Filter>`);
    if (sIdx !== -1) {
        let eIndx = filter.search( `</wfs:Query>`);
        filter = filter.substr(sIdx, eIndx - sIdx);
    } else {
        filter = '';
    }
    // let configName = ftName.indexOf(":") > -1 ? ftName.split(":")[1] : ftName;
    // let geometryType = (configName && SiraUtils.getConfigOggetti()[configName]) ? SiraUtils.getConfigOggetti()[configName].geometryType : SiraUtils.getConfigOggetti()[ftName].geometryType;
    const config = SiraUtils.getConfigByfeatureTypeName(ftName);
    let geometryType = mlsFtName ? head(config.multiLayerSelect.filter(mls=> mls.name === mlsFtName)).geometryType : config.geometryType;
    const nameSpacesAttr = Object.keys(nameSpaces).map((prefix) => 'xmlns:' + prefix + '="' + nameSpaces[prefix] + '"').join(" ");
    let result;
    switch (geometryType) {
    case "Point": {
        result = `<StyledLayerDescriptor version="1.0.0"
                    ${nameSpacesAttr}
                    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><Name>${mlsFtName || ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PointSymbolizer><Graphic><Mark><WellKnownName>circle</WellKnownName><Fill><CssParameter name="fill">#0000FF</CssParameter></Fill></Mark><Size>20</Size></Graphic></PointSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer></StyledLayerDescriptor>`;
        break;
    }
    case "Polygon": {
        result = `<StyledLayerDescriptor version="1.0.0"
                    ${nameSpacesAttr}
                    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><Name>${mlsFtName || ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PolygonSymbolizer><Fill><CssParameter name="fill">#0000FF</CssParameter><CssParameter name="stroke">#0000FF</CssParameter><CssParameter name="fill-opacity">0.4</CssParameter></Fill></PolygonSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer></StyledLayerDescriptor>`;
        break;
    }
    case "LineString": {
        result = `<StyledLayerDescriptor version="1.0.0"
                ${nameSpacesAttr}
                xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><Name>${mlsFtName || ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<LineSymbolizer><Fill><CssParameter name="fill">#0000FF</CssParameter><CssParameter name="stroke">#0000FF</CssParameter><CssParameter name="fill-opacity">0.4</CssParameter></Fill></LineSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer></StyledLayerDescriptor>`;
        break;
    }
    default:
        result = "";
    }
    return result;
    // return `<StyledLayerDescriptor version="1.0.0"
    //        ${nameSpacesAttr}
    //        xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gsml="urn:cgi:xmlns:CGI:GeoSciML:2.0" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><Name>${ftName}</Name><UserStyle><FeatureTypeStyle><Rule >${filter}<PointSymbolizer><Graphic><Mark><WellKnownName>circle</WellKnownName><Fill><CssParameter name="fill">#0000FF</CssParameter></Fill></Mark><Size>20</Size></Graphic></PointSymbolizer></Rule></FeatureTypeStyle></UserStyle></NamedLayer></StyledLayerDescriptor>`;
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
