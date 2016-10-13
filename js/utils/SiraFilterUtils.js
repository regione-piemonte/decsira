/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FilterUtils = require('../../MapStore2/web/client/utils/FilterUtils');

FilterUtils.toOGCFilter = function(ftName, json, version, sortOptions = null, hits = false, format = null) {
        try {
            this.objFilter = (json instanceof Object) ? json : JSON.parse(json);
        } catch(e) {
            return e;
        }

        const versionOGC = version || this.ogcVersion;
        this.nsplaceholder = versionOGC === "2.0" ? "fes" : "ogc";
        this.setOperatorsPlaceholders("{namespace}", this.nsplaceholder);

        let ogcFilter = this.getGetFeatureBase(versionOGC, this.objFilter.pagination, hits, format);
        let filters = [];

        let attributeFilter;
        if (this.objFilter.filterFields && this.objFilter.filterFields.length > 0) {
            if (this.objFilter.groupFields && this.objFilter.groupFields.length > 0) {
                attributeFilter = this.processOGCFilterGroup(this.objFilter.groupFields[0]);
            } else {
                attributeFilter = this.processOGCFilterFields();
            }
            filters.push(attributeFilter);
        }else if (this.objFilter.simpleFilterFields && this.objFilter.simpleFilterFields.length > 0) {
            let ogc = "";
            ogc += this.ogcLogicalOperator.AND.startTag;
            this.objFilter.simpleFilterFields.forEach((filter) => {
                ogc += this.processOGCSimpleFilterField(filter);
            }, this);
            ogc += this.ogcLogicalOperator.AND.endTag;
            filters.push(ogc);
        }

        let spatialFilter;
        if (this.objFilter.spatialField && this.objFilter.spatialField.geometry && this.objFilter.spatialField.method) {
            spatialFilter = this.processOGCSpatialFilter(versionOGC);
            filters.push(spatialFilter);
        }
        let filter = '';
        if (filters.length >= 1 ) {
            filter += "<" + this.nsplaceholder + ":Filter>";

            if (filters.length > 1) {
                filter += "<" + this.nsplaceholder + ":And>";
                filters.forEach((subFilter) => {
                    filter += subFilter;
                });
                filter += "</" + this.nsplaceholder + ":And>";
            } else if (filters.length === 1) {
                filter += filters[0];
            }
            filter += "</" + this.nsplaceholder + ":Filter>";
        }
        ogcFilter += '<wfs:Query ' + (versionOGC === "2.0" ? "typeNames" : "typeName") + '="' + ftName + '" srsName="EPSG:4326">';
        ogcFilter += filter;

        if (sortOptions && sortOptions.sortBy && sortOptions.sortOrder) {
            ogcFilter +=
                "<" + this.nsplaceholder + ":SortBy>" +
                    "<" + this.nsplaceholder + ":SortProperty>" +
                        this.propertyTagReference[this.nsplaceholder].startTag +
                            sortOptions.sortBy +
                        this.propertyTagReference[this.nsplaceholder].endTag +
                        "<" + this.nsplaceholder + ":SortOrder>" +
                            sortOptions.sortOrder +
                        "</" + this.nsplaceholder + ":SortOrder>" +
                    "</" + this.nsplaceholder + ":SortProperty>" +
                "</" + this.nsplaceholder + ":SortBy>";
        }

        ogcFilter +=
                    '</wfs:Query>' +
            '</wfs:GetFeature>';

        this.setOperatorsPlaceholders(this.nsplaceholder, "{namespace}");

        return ogcFilter;
    };

module.exports = FilterUtils;
