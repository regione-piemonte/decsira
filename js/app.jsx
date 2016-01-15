/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');

const {Provider} = require('react-redux');
const Sira = require('./containers/Sira');
const Debug = require('../MapStore2/web/client/components/development/Debug');

const store = require('./stores/store');

var {loadMapConfig} = require('../MapStore2/web/client/actions/config');
var {changeBrowserProperties} = require('../MapStore2/web/client/actions/browser');
var {loadLocale} = require('../MapStore2/web/client/actions/locale');

var ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
var LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');

store.dispatch(changeBrowserProperties(ConfigUtils.getBrowserProperties()));

ConfigUtils
    .loadConfiguration()                       // localConfig.json: Global configuration
    .then(() => {                              // config.json: app configuration
        const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
        store.dispatch(loadMapConfig(configUrl, legacy));

        let locale = LocaleUtils.getUserLocale();
        store.dispatch(loadLocale('../MapStore2/web/client/translations', locale));
    });

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Sira/>
            <Debug/>
        </div>
    </Provider>
    , document.getElementById("container")
);
