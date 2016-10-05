/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

if (!global.Intl) {
    global.Intl = require('intl');
}

const ReactDOM = require('react-dom');

const {Provider} = require('react-redux');

const store = require('./stores/store');

const {loadMapConfig} = require('../MapStore2/web/client/actions/config');
const {changeBrowserProperties} = require('../MapStore2/web/client/actions/browser');
const {loadLocale} = require('../MapStore2/web/client/actions/locale');
const {loadTiles} = require('./actions/mosaictile');

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');

const {configureQueryForm, configureTopology/*, configureFeatureGrid*/} = require('./actions/siradec');
// const {configureGrid} = require('./actions/grid');

function startApp() {
    const App = require('./containers/App');

    store.dispatch(changeBrowserProperties(ConfigUtils.getBrowserProperties()));
    store.dispatch(loadTiles());

    ConfigUtils
        .loadConfiguration()                       // localConfig.json: Global configuration
        .then(() => {                              // config.json: app configuration
            const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
            store.dispatch(loadMapConfig(configUrl, legacy));

            let locale = LocaleUtils.getUserLocale();
            store.dispatch(loadLocale('translations', locale));

            // "/sira/services/queryformconfig/aua"
            // store.dispatch(loadQueryFormConfig("assets/", "queryFormConfig.json"));

            store.dispatch(configureQueryForm(ConfigUtils.getConfigProp("query")));
            store.dispatch(configureTopology(ConfigUtils.getConfigProp("topology")));
            // store.dispatch(configureFeatureGrid(ConfigUtils.getConfigProp("featuregrid")));

            // store.dispatch(configureGrid(ConfigUtils.getConfigProp("featuregrid")));
        });

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById("container")
    );
}

if (!global.Intl) {
    require.ensure(['intl', 'intl/locale-data/jsonp/en.js', 'intl/locale-data/jsonp/it.js'], (require) => {
        require('intl/locale-data/jsonp/en.js');
        require('intl/locale-data/jsonp/it.js');
        startApp();
    });
}else {
    startApp();
}
