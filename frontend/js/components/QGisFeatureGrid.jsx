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
// const {loadFeatureGridConfig} = require('../actions/grid');

const {
    // SiraQueryPanel action functions
    expandFilterPanel
} = require('../actions/siradec');

require('react-resizable/css/styles.css');
require('./SiraFeatureGrid.css');

module.exports = connect((state) => ({
    open: state.siraControls.grid,
    detailOpen: state.siraControls.detail,
    detailsConfig: state.siradec && state.siradec.card || {},
    columnsDef: state.grid.featuregrid && state.grid.featuregrid.grid ? state.grid.featuregrid.grid.columns : [],
    attributes: state.siradec.attributes,
    features: state.grid && state.grid.data || [],
    totalFeatures: state.grid.totalFeatures,
    map: (state.map && state.map) || (state.config && state.config.map),
    loadingGrid: state.grid.loadingGrid,
    loadingGridError: state.grid.loadingGridError,
    groupFields: state.queryform.groupFields,
    filterFields: state.queryform.filterFields,
    spatialField: state.queryform.spatialField,
    featureTypeName: state.siradec.featureTypeName,
    searchUrl: state.queryform.searchUrl,
    dataSourceOptions: state.grid.dataSourceOptions
}), {
    onDetail: loadCardTemplate,
    onShowDetail: toggleSiraControl.bind(null, 'detail'),
    toggleSiraControl: toggleSiraControl.bind(null, 'grid'),
    changeMapView: changeMapView,
    onExpandFilterPanel: expandFilterPanel,
    onQuery: loadFeaturesWithPagination,
    onConfigureQuery: loadGridModelWithPagination,
    cleanError: configureGridError
})(require('./FeatureGrid'));
