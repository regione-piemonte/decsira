/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
LocaleUtils.setSupportedLocales({
    "it": {
        code: "it-IT",
        description: "Italiano"}});

require('./utils/ProjUtils')();

const {loadMapConfig} = require('../MapStore2/web/client/actions/config');
const {configureQueryForm} = require('./actions/siradec');
const {loadTiles} = require('./actions/mosaictile');
const {loadPlatformNumbers} = require('./actions/platformnumbers');
const {configureExporter} = require('./actions/siraexporter');
const {loadUserIdentity} = require('./actions/userprofile');

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
/**
 * Add custom (overriding) translations with:
 *
 * ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
 */
ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', '../translations']);

/**
 * Use a custom plugins configuration file with:
 *
 * ConfigUtils.setLocalConfigurationFile('localConfig.json');
 */
ConfigUtils.setLocalConfigurationFile('localConfig.json');

/**
 * Use a custom application configuration file with:
 *
 * const appConfig = require('./appConfig');
 *
 * Or override the application configuration file with (e.g. only one page with a mapviewer):
 *
 * const appConfig = assign({}, require('../MapStore2/web/client/product/appConfig'), {
 *     pages: [{
 *         name: "mapviewer",
 *         path: "/",
 *         component: require('../MapStore2/web/client/product/pages/MapViewer')
 *     }]
 * });
 */

const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
const {loadVersion} = require('../MapStore2/web/client/actions/version');

const initialActions = [
    () => loadUserIdentity(),
    () => loadTiles(),
    () => loadPlatformNumbers(),
    () => loadMapConfig(configUrl, legacy),
    () => configureQueryForm(ConfigUtils.getConfigProp("query")),
    () => configureExporter(ConfigUtils.getConfigProp("exporter")),
    () => loadVersion()
];

const appConfig = {
    ...require('./appConfig')
};

/**
 * Define a custom list of plugins with:
 *
 */
const plugins = require('./plugins');

require('../MapStore2/web/client/product/main')(appConfig, plugins,
    (cfg) => ({
        ...cfg,
        initialActions
    }));

