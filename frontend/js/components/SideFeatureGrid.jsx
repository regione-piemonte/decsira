/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {connect} = require('react-redux');

const {changeMapView} = require('../../MapStore2/web/client/actions/map');
const {selectFeatures, selectAllToggle} = require('../actions/featuregrid');

const {
    loadFeaturesWithPagination,
    loadGridModelWithPagination,
    configureGridError
} = require('../actions/grid');

const {loadCardTemplate} = require('../actions/card');
const {toggleSiraControl} = require('../actions/controls');
const {setExportParams, configureExporter} = require('../actions/siraexporter');

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
    detailsConfig: activeConfig.card || {},
    columnsDef: state.grid.featuregrid && state.grid.featuregrid.grid ? state.grid.featuregrid.grid.columns : [],
    attributes: activeConfig.attributes || [],
    features: state.grid && state.grid.data || [],
    totalFeatures: state.grid.totalFeatures,
    map: (state.map && state.map.present) || (state.config && state.config.map),
    loadingGrid: state.grid.loadingGrid,
    loadingGridError: state.grid.loadingGridError,
    pagination: (state.queryform.pagination && state.queryform.pagination.maxFeatures) ? true : false,
    groupFields: state.queryform.groupFields,
    filterFields: state.queryform.filterFields,
    spatialField: state.queryform.spatialField,
    featureTypeName: activeConfig.featureTypeName,
    nameSpaces: activeConfig.nameSpaces,
    searchUrl: state.queryform.searchUrl,
    dataSourceOptions: state.grid.dataSourceOptions,
    header: state.grid.gridType === 'search' ? "featuregrid.header" : "featuregrid.header_all",
    backToSearch: state.grid.gridType === 'search' ? "featuregrid.backtosearch" : "featuregrid.opensearch",
    gridType: state.grid.gridType,
    maxFeatures: state.siraexporter.maxFeatures,
    exporterConfig: activeConfig.exporter
    };
}, {
    onDetail: loadCardTemplate,
    onShowDetail: toggleSiraControl.bind(null, 'detail'),
    toggleSiraControl: toggleSiraControl,
    changeMapView: changeMapView,
    onExpandFilterPanel: expandFilterPanel,
    selectFeatures: selectFeatures,
    onQuery: loadFeaturesWithPagination,
    onConfigureQuery: loadGridModelWithPagination,
    cleanError: configureGridError,
    selectAllToggle: selectAllToggle,
    setExportParams,
    configureExporter
})(require('./FeatureGrid'));
