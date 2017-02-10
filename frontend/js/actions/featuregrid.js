/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FilterUtils = require('../utils/SiraFilterUtils');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const TemplateUtils = require('../utils/TemplateUtils');
const axios = require('../../MapStore2/web/client/libs/ajax');
const {showLoading} = require('./grid');
const SELECT_FEATURES = 'SELECT_FEATURES';
const SET_FEATURES = 'SET_FEATURES';
const SELECT_ALL = 'SELECT_ALL';

function selectFeatures(features) {
    return {
        type: SELECT_FEATURES,
        features: features
    };
}

function setFeatures(features) {
    return {
        type: SET_FEATURES,
        features: features
    };
}

function selectAllToggle(featureTypeName, filterObj, ogcVersion, params, wfsUrl, nameSpaces) {
    const sldBody = filterObj ? FilterUtils.getSLD(featureTypeName, filterObj, "1.0.0", "ogc", nameSpaces) : undefined;
    return {
        type: SELECT_ALL,
        featureTypeName,
        sldBody
    };
}

function selectAllQgis(featureTypeName, filterObj, ogcVersion, params, wfsUrl) {
    return (dispatch, getState) => {
        if (featureTypeName) {
            let {url} = ConfigUtils.setUrlPlaceholders({url: wfsUrl});
            for (let param in params) {
                if (params.hasOwnProperty(param)) {
                    url += "&" + param + "=" + params[param];
                }
            }
            let filter = FilterUtils.toOGCFilterSira(featureTypeName, filterObj, ogcVersion);
            dispatch(showLoading(true));
            let state = getState();
            const featuregrid = state.grid && state.grid.featuregrid;
            return axios.post(url, filter, {
              timeout: 60000,
              headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
            }).then((response) => {

                if (response.data && response.data.indexOf("<ows:ExceptionReport") !== 0) {
                    const idFieldName = featuregrid.idFieldName;
                    const features = TemplateUtils.getModels(response.data, featuregrid.grid.root, featuregrid.grid.columns);
                    let ids = features.map((f) => {
                        return f[idFieldName];
                    }).join(',');
                    /*eslint-disable */
                    if ("undefined" != typeof window.parent && "undefined" != typeof parent.VALAMB && parent.VALAMB.viewOnMapById) {
                        console.log("prenset.VALAMB present", `present.VALAMB.viewOnMapById('${state.siradec.featureType}',"${ids}");`);
                        parent.VALAMB.viewOnMapById(`'${state.siradec.featureType}'`, `"${ids}"`);
                    }else {
                        console.log("parent.VALAMB absent", `parent.VALAMB.viewOnMapById('${state.siradec.featureType}',"${ids}")`);
                        if (typeof VALAMB !== 'undefined' && VALAMB.viewOnMapById) {
                            console.log("VALAMB present", `VALAMB.viewOnMapById('${state.siradec.featureType}',"${ids}");`);
                            VALAMB.viewOnMapById(`'${state.siradec.featureType}'`, `"${ids}"`);
                        }else {
                            console.log("VALAMB absent", `VALAMB.viewOnMapById('${state.siradec.featureType}',"${ids}")`);
                        }
                    }

                    /*eslint-enable */
                }
                dispatch(showLoading(false));
            });
        }
    };
}

module.exports = {
    SELECT_FEATURES,
    SET_FEATURES,
    SELECT_ALL,
    selectFeatures,
    setFeatures,
    selectAllToggle,
    selectAllQgis
};
