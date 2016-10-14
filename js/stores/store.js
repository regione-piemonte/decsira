/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require('object-assign');

const {mapConfigHistory, createHistory} = require('../../MapStore2/web/client/utils/MapHistoryUtils');

const map = mapConfigHistory(require('../../MapStore2/web/client/reducers/map'));

const layers = require('../reducers/siraLayers');
const mapConfig = require('../reducers/SiraMapConfig');

const DebugUtils = require('../../MapStore2/web/client/utils/DebugUtils');
const {combineReducers} = require('../../MapStore2/web/client/utils/PluginsUtils');

const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');
const {CHANGE_BROWSER_PROPERTIES} = require('../../MapStore2/web/client/actions/browser');
const {persistStore, autoRehydrate} = require('redux-persist');

const SecurityUtils = require('../../MapStore2/web/client/utils/SecurityUtils');

module.exports = (initialState = {defaultState: {}, mobile: {}}, appReducers = {}, plugins, storeOpts) => {
    const allReducers = combineReducers(plugins, {
        ...appReducers,
        browser: require('../../MapStore2/web/client/reducers/browser'),
        locale: require('../../MapStore2/web/client/reducers/locale'),
        controls: require('../../MapStore2/web/client/reducers/controls'),
        help: require('../../MapStore2/web/client/reducers/help'),
        map: () => {return null; },
        mapInitialConfig: () => {return null; },
        layers: () => {return null; }
    });
    const defaultState = initialState.defaultState;
    const mobileOverride = initialState.mobile;

    const rootReducer = (state, action) => {
        let mapState = createHistory(LayersUtils.splitMapAndLayers(mapConfig(state, action)));
        let newState = {
            ...allReducers(state, action),
            map: mapState && mapState.map ? map(mapState.map, action) : null,
            mapInitialConfig: mapState ? mapState.mapInitialConfig : null,
            layers: mapState ? layers(mapState.layers, action) : null
        };
        if (action && action.type === CHANGE_BROWSER_PROPERTIES && newState.browser.mobile) {
            newState = assign(newState, mobileOverride);
        }

        return newState;
    };
    let store;
    if (storeOpts && storeOpts.persist) {
        store = DebugUtils.createDebugStore(rootReducer, defaultState, [], autoRehydrate());
        persistStore(store, storeOpts.persist, storeOpts.onPersist);
    } else {
        store = DebugUtils.createDebugStore(rootReducer, defaultState);
    }
    SecurityUtils.setStore(store);
    return store;
};
