/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {connect} = require('react-redux');

const {changeMapView} = require('../../MapStore2/web/client/actions/map');


const {
    loadFeaturesWithPagination,
    loadGridModelWithPagination,
    configureGridError
} = require('../actions/grid');

const {loadCardTemplate} = require('../actions/card');
const {toggleSiraControl} = require('../actions/controls');
const {setExportParams} = require('../actions/siraexporter');


const {
    // SiraQueryPanel action functions
    expandFilterPanel
} = require('../actions/siradec');

require('react-resizable/css/styles.css');
require('./SiraFeatureGrid.css');

module.exports = connect((state) => {
    const activeConfig = state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
    open: state.siraControls.grid,
    detailOpen: state.siraControls.detail,
    detailsConfig: activeConfig && activeConfig.card || {},
    columnsDef: state.grid.featuregrid && state.grid.featuregrid.grid ? state.grid.featuregrid.grid.columns : [],
    attributes: activeConfig.attributes,
    features: state.grid && state.grid.data || [],
    totalFeatures: state.grid.totalFeatures,
    map: (state.map && state.map.present) || (state.config && state.config.map),
    loadingGrid: state.grid.loadingGrid,
    loadingGridError: state.grid.loadingGridError,
    groupFields: state.queryform.groupFields,
    filterFields: state.queryform.filterFields,
    spatialField: state.queryform.spatialField,
    featureTypeName: activeConfig.featureTypeName,
    searchUrl: state.queryform.searchUrl,
    dataSourceOptions: state.grid.dataSourceOptions,
    maxFeatures: state.siraexporter.maxFeatures,
    profile: state.userprofile.profile,
    exportCsvMimeType: "application/octet-stream"
    };
}, {
    onDetail: loadCardTemplate,
    onShowDetail: toggleSiraControl.bind(null, 'detail'),
    toggleSiraControl: toggleSiraControl,
    changeMapView: changeMapView,
    onExpandFilterPanel: expandFilterPanel,
    onQuery: loadFeaturesWithPagination,
    onConfigureQuery: loadGridModelWithPagination,
    cleanError: configureGridError,
    setExportParams
})(require('./FeatureGrid'));
