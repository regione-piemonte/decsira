/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const LocaleUtils = require('@mapstore/utils/LocaleUtils');
LocaleUtils.setSupportedLocales({
    "it": {
        code: "it-IT",
        description: "Italiano"
    },
    "en": {
        code: "en-US",
        description: "English"
    }
});

require('./utils/ProjUtils')();

const {loadMapConfig} = require('@mapstore/actions/config');
const {configureQueryForm} = require('./actions/siradec');
const {loadTiles} = require('./actions/mosaictile');
const {getMetadataObjects} = require('./actions/siracatalog');
const {loadPlatformNumbers} = require('./actions/platformnumbers');
const {configureExporter} = require('./actions/siraexporter');
const {loadUserIdentity} = require('./actions/userprofile');

const ConfigUtils = require('@mapstore/utils/ConfigUtils');
ConfigUtils.setConfigProp('translationsPath', ['MapStore2/web/client/translations', 'translations']);
ConfigUtils.setLocalConfigurationFile('localConfig.json');

const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
const {loadVersion} = require('@mapstore/actions/version');

const initialActions = [
    () => loadUserIdentity(),
    () => loadTiles(),
    () => loadPlatformNumbers(),
    () => loadMapConfig(configUrl, legacy),
    () => configureQueryForm(ConfigUtils.getConfigProp("query")),
    () => configureExporter(ConfigUtils.getConfigProp("exporter")),
    () => loadVersion(),
    () => getMetadataObjects()
];

const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');

const startApp = () => {
    const StandardApp = require('@mapstore/components/app/StandardApp').default;
    const {updateMapLayoutEpic} = require('@mapstore/epics/maplayout');
    const {versionSelector} = require('@mapstore/selectors/version');


    const {pages, pluginsDef, initialState, storeOpts, appReducers} = require('./appConfig');

    const routerSelector = createSelector(state => state.locale, state=>versionSelector(state), (locale, version) => ({
        locale: locale || {},
        version,
        pages
    }));

    const StandardRouter = connect(routerSelector)(require('@mapstore/components/app/StandardRouter').default);

    const appStore = require('./stores/store').bind(null, initialState, appReducers, {updateMapLayoutEpic});

    const appConfig = {
        storeOpts,
        appStore,
        pluginsDef,
        initialActions,
        appComponent: StandardRouter,
        mode: "desktop"
    };


    ReactDOM.render(
        <StandardApp {...appConfig}/>,
        document.getElementById('container')
    );
};

if (!global.Intl ) {
    LocaleUtils.ensureIntl(startApp);
} else {
    startApp();
}
