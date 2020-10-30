/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const FilterUtils = require('../utils/SiraFilterUtils');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const CoordinatesUtils = require('@mapstore/utils/CoordinatesUtils');
const TemplateUtils = require('../utils/TemplateUtils');
const axios = require('@mapstore/libs/ajax');
const {version} = require('../utils/WMS');
const {showLoading} = require('./grid');
const SELECT_FEATURES = 'SELECT_FEATURES';
const SET_FEATURES = 'SET_FEATURES';
const SELECT_ALL = 'SELECT_ALL';
const SELECT_MLS = 'SELECT_MLS';
const SET_FEATURE_ROW_DATA = 'SET_FEATURE_ROW_DATA';

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
    // eslint-disable-next-line consistent-return
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

                    /* eslint-enable */
                }
                dispatch(showLoading(false));
            });
        }
    };
}

const selectMLS = (layers) =>{
    return {
        type: SELECT_MLS,
        layers
    };
};

const configureMultiLayerSelection = (value, zoomEnabled = false) => {
    return (dispatch, getState) => {
        const {siradec, map, layers: msLayers} = getState();
        const crs = CoordinatesUtils.normalizeSRS(map?.present?.projection);
        const activeFeatureType = siradec?.activeFeatureType || '';
        const {multiLayerSelect = [], featureTypeName = '', layer = {}} = siradec?.configOggetti?.[activeFeatureType];
        const layers = multiLayerSelect.map(({name, title = '', filterOn = ''}) => {
            const CQL_FILTER = `${filterOn}='${value}'`;
            const SLD_BODY = FilterUtils.getSLD(featureTypeName, {}, "1.0.0", "ogc", {}, name);
            return {
                ...layer,
                featureType: name,
                name,
                title: title ? title : name.split(':')[1] || name,
                id: name + '_mls',
                params: { LAYERS: name, FORMAT: layer.format, TRANSPARENT: true, SRS: crs, crs, TILED: true, version, SLD_BODY, CQL_FILTER}
            };
        });
        const activeFeatureLayerNotPresent = msLayers?.flat?.findIndex((l) => l.name === layer.name ) === -1;
        Promise.all(layers).then(data => {
            data && dispatch(selectMLS(activeFeatureLayerNotPresent && !zoomEnabled ? data.concat(layer) : data));
        });
    };
};

const setCurrentFeatureRowData = (geometry) => {
    return {
        type: SET_FEATURE_ROW_DATA,
        geometry
    };
};

module.exports = {
    SELECT_FEATURES,
    SET_FEATURES,
    SELECT_ALL,
    SELECT_MLS,
    SET_FEATURE_ROW_DATA,
    selectFeatures,
    setFeatures,
    selectAllToggle,
    selectAllQgis,
    configureMultiLayerSelection,
    setCurrentFeatureRowData
};
