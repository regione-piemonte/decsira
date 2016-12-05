/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');

const {loadMapConfig} = require('../../MapStore2/web/client/actions/config');
const {configureQueryForm} = require('../actions/siradec');
const {configureExporter} = require('../actions/siraexporter');

const appReducers = {
    userprofile: require('../reducers/userprofile'),
    siraControls: require('../reducers/controls'),
    queryform: require('../reducers/queryform'),
    siradec: require('../reducers/siradec'),
    grid: require('../reducers/grid'),
    cardtemplate: require('../reducers/card'),
    featuregrid: require('../reducers/featuregrid'),
    draw: require('../../MapStore2/web/client/reducers/draw'),
    security: require('../reducers/siraSecurity'),
    siraexporter: require('../reducers/siraexporter')
};

const startApp = () => {
    const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
    const StandardApp = require('../../MapStore2/web/client/components/app/StandardApp');

    const {pages, pluginsDef, initialState, storeOpts} = require('./appConfig');

    const StandardRouter = connect((state) => ({
        locale: state.locale || {},
        pages
    }))(require('../../MapStore2/web/client/components/app/StandardRouter'));

    const appStore = require('../stores/store').bind(null, initialState, appReducers);
    const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');

    const initialActions = [
        () => loadMapConfig(configUrl, legacy),
        ()=> configureQueryForm(ConfigUtils.getConfigProp("query")),
        ()=> configureExporter(ConfigUtils.getConfigProp("exporter"))
    ];

    const appConfig = {
        storeOpts,
        appStore,
        pluginsDef,
        initialActions,
        appComponent: StandardRouter,
        printingEnabled: false
    };

    ReactDOM.render(
        <StandardApp {...appConfig}/>,
        document.getElementById('container')
    );
};

if (!global.Intl ) {
    // Ensure Intl is loaded, then call the given callback
    LocaleUtils.ensureIntl(startApp);
}else {
    startApp();
}
