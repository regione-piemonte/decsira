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
const {createSelector} = require('reselect');

const LocaleUtils = require('@mapstore/utils/LocaleUtils');

const {configureQueryForm} = require('../actions/siradec');
const {configureExporter} = require('../actions/siraexporter');

const Promise = require('promise-polyfill');

if (!window.Promise) {
    window.Promise = Promise;
}

if (!Array.from) {
    Array.from = (function() {
        var toStr = Object.prototype.toString;
        var isCallable = function(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function(value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike/* , mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);
            // 3. ReturnIfAbrupt(items).
            if (arrayLike === null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }

            // 4. If mapfn is undefined, then let mapping be false.
            let mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            let T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            let len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            let A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            let k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            let kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
}

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

require('../utils/ProjUtils')();

const ConfigUtils = require('@mapstore/utils/ConfigUtils');
ConfigUtils.setConfigProp('translationsPath', ['MapStore2/web/client/translations', 'translations']);
ConfigUtils.setLocalConfigurationFile('localConfig.json');

const {loadVersion} = require('@mapstore/actions/version');

const initialActions = [
    () => configureQueryForm(ConfigUtils.getConfigProp("query")),
    () => configureExporter(ConfigUtils.getConfigProp("exporter")),
    () => loadVersion()
];

const startApp = () => {
    const StandardApp = require('@mapstore/components/app/StandardApp').default;
    const {versionSelector} = require('@mapstore/selectors/version');

    const {pages, pluginsDef, initialState, storeOpts, appReducers} = require('./appConfig');

    const routerSelector = createSelector(state => state.locale, state=>versionSelector(state), (locale, version) => ({
        locale: locale || {},
        version,
        pages
    }));

    const StandardRouter = connect(routerSelector)(require('@mapstore/components/app/StandardRouter').default);

    const appStore = require('../stores/qGisStore').bind(null, initialState, appReducers);

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
} else {
    startApp();
}
