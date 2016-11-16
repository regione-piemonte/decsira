/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DebugUtils = require('../../MapStore2/web/client/utils/DebugUtils');
const {combineReducers} = require('../../MapStore2/web/client/utils/PluginsUtils');

const {persistStore, autoRehydrate} = require('redux-persist');

const SecurityUtils = require('../../MapStore2/web/client/utils/SecurityUtils');
const assign = require('object-assign');
module.exports = (initialState = {defaultState: {}, mobile: {}}, appReducers = {}, plugins, storeOpts) => {
    const allReducers = combineReducers(plugins, {
        ...appReducers,
        browser: require('../../MapStore2/web/client/reducers/browser'),
        locale: require('../../MapStore2/web/client/reducers/locale'),
        controls: require('../../MapStore2/web/client/reducers/controls')
    });
    const defaultState = initialState.defaultState;

    const rootReducer = (state, action) => {
        let newState = {
            ...allReducers(state, action)
        };
        if (action && action.type === 'FEATURETYPE_CONFIG_LOADED' && newState.siradec.configOggetti[action.featureType] && action.activate) {
            const configOggetti = newState.siradec.configOggetti[action.featureType];
        //     // Devi assegnare a queryform e grid i valori che hai in     siradec.configOggetti.featureType
            newState = assign({}, newState, {queryform: configOggetti.queryform, grid: {featuregrid: configOggetti.featuregrid, data: null, dataSourceOptions: {}, loadingGrid: false}});
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
