/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require('object-assign');

/*
const allReducers = combineReducers({
	mosaic: require('../reducers/mosaic'),
    userprofile: require('../reducers/userprofile'),
    mapInfo: require('../reducers/mapInfo'),
    search: require('../../MapStore2/web/client/reducers/search'),
    browser: require('../../MapStore2/web/client/reducers/browser'),
    locale: require('../../MapStore2/web/client/reducers/locale'),
    draw: require('../../MapStore2/web/client/reducers/draw'),
    siraControls: require('../reducers/controls'),
    controls: require('../../MapStore2/web/client/reducers/controls'),
    locate: require('../../MapStore2/web/client/reducers/locate'),
    measurement: require('../../MapStore2/web/client/reducers/measurement'),
    routing: routeReducer,
    queryform: queryform,
    siradec: siradec,
    map: () => {return null; },
    layers: () => {return null; },
    mapInitialConfig: () => {return null; },
    cardtemplate: require('../reducers/card'),
    featuregrid: require('../reducers/featuregrid'),
    grid: grid
});

*/
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
        mosaic: require('../reducers/mosaic'),
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
        if (action && ((action.type === 'FEATURETYPE_CONFIG_LOADED' && action.activate) || action.type === 'SET_ACTIVE_FEATURE_TYPE') && newState.siradec.configOggetti[action.featureType]) {
            const configOggetti = newState.siradec.configOggetti[action.featureType];
        //     // Devi assegnare a queryform e grid i valori che hai in     siradec.configOggetti.featureType
            const newGrid = assign({}, newState.grid, {featuregrid: configOggetti.featuregrid});
            newState = assign({}, newState, {queryform: configOggetti.queryform, grid: newGrid});
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
