/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require('object-assign');
const {mapConfigHistory, createHistory} = require('@mapstore/utils/MapHistoryUtils');

const map = mapConfigHistory(require('@mapstore/reducers/map').default);

const {createEpicMiddleware} = require('redux-observable');

const ListenerEnhancer = require('@carnesen/redux-add-action-listener-enhancer').default;

const { routerMiddleware, connectRouter } = require('connected-react-router');

const layersEpics = require('@mapstore/epics/layers');
const controlsEpics = require('@mapstore/epics/controls');
const configEpics = require('@mapstore/epics/config');
const timeManagerEpics = require('@mapstore/epics/dimension');
const {persistMiddleware, persistEpic} = require('@mapstore/utils/StateUtils');

const standardEpics = {
    ...layersEpics,
    ...controlsEpics,
    ...timeManagerEpics,
    ...configEpics
};

const layers = require('../reducers/siraLayers');
const mapConfig = require('../reducers/SiraMapConfig');

const DebugUtils = require('@mapstore/utils/DebugUtils').default;
const {combineEpics, combineReducers} = require('@mapstore/utils/PluginsUtils');
const LayersUtils = require('@mapstore/utils/LayersUtils');
const {CHANGE_BROWSER_PROPERTIES} = require('@mapstore/actions/browser');

const SecurityUtils = require('@mapstore/utils/SecurityUtils');
const SiraUtils = require('../utils/SiraUtils');

module.exports = (initialState = {defaultState: {}, mobile: {}}, appReducers = {}, appEpics = {}, plugins = {}, storeOpts = {}) => {
    const history = storeOpts.noRouter ? null : require('@mapstore/stores/History').default;
    const allReducers = combineReducers(plugins, {
        ...appReducers,
        browser: require('@mapstore/reducers/browser').default,
        locale: require('@mapstore/reducers/locale').default,
        controls: require('@mapstore/reducers/controls').default,
        help: require('@mapstore/reducers/help').default,
        maptype: require('@mapstore/reducers/maptype').default,
        maps: require('@mapstore/reducers/maps').default,
        maplayout: require('@mapstore/reducers/maplayout').default,
        version: require('@mapstore/reducers/version').default,
        mapPopups: require('@mapstore/reducers/mapPopups').default,
        mosaic: require('../reducers/mosaic'),
        localConfig: require('@mapstore/reducers/localConfig').default,
        locales: () => {return null; },
        theme: require('@mapstore/reducers/theme').default,
        map: () => {return null; },
        mapInitialConfig: () => {return null; },
        mapConfigRawData: () => null,
        layers: () => {return null; },
        router: storeOpts.noRouter ? undefined : connectRouter(history)
    });
    const rootEpic = persistEpic(combineEpics(plugins, {...standardEpics, ...appEpics}));
    const optsState = storeOpts.initialState || {defaultState: {}, mobile: {}};
    const defaultState = assign({}, initialState.defaultState, optsState.defaultState);
    const mobileOverride = assign({}, initialState.mobile, optsState.mobile);
    const epicMiddleware = persistMiddleware(createEpicMiddleware(rootEpic));

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
    let enhancer;
    if (storeOpts && storeOpts.notify !== false) {
        enhancer = ListenerEnhancer;
    }
    if (storeOpts && storeOpts.persist) {
        storeOpts.persist.whitelist.forEach((fragment) => {
            const fragmentState = localStorage.getItem('mapstore2.persist.' + fragment);
            if (fragmentState) {
                defaultState[fragment] = JSON.parse(fragmentState);
            }
        });
        if (storeOpts.onPersist) {
            setTimeout(() => {storeOpts.onPersist(); }, 0);
        }
    }

    let middlewares = [epicMiddleware];
    if (!storeOpts.noRouter) {
        const reduxRouterMiddleware = routerMiddleware(history);
        middlewares = [...middlewares, reduxRouterMiddleware];
    }

    store = DebugUtils.createDebugStore(rootReducer, defaultState, middlewares, enhancer);
    if (storeOpts && storeOpts.persist) {
        const persisted = {};
        store.subscribe(() => {
            storeOpts.persist.whitelist.forEach((fragment) => {
                const fragmentState = store.getState()[fragment];
                if (fragmentState && persisted[fragment] !== fragmentState) {
                    persisted[fragment] = fragmentState;
                    localStorage.setItem('mapstore2.persist.' + fragment, JSON.stringify(fragmentState));
                }
            });
        });
    }
    SecurityUtils.setStore(store);
    SiraUtils.setStore(store);
    return store;
};
