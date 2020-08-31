/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DebugUtils = require('@mapstore/utils/DebugUtils').default;
const {combineReducers} = require('../../MapStore2/web/client/utils/PluginsUtils');
const {connectRouter} = require( 'connected-react-router');
const history  = require( '../../MapStore2/web/client/stores/History').default;

const SecurityUtils = require('../../MapStore2/web/client/utils/SecurityUtils');
const assign = require('object-assign');
module.exports = (initialState = {defaultState: {}, mobile: {}}, appReducers = {}, plugins) => {
    const allReducers = combineReducers(plugins, {
        ...appReducers,
        browser: require('../../MapStore2/web/client/reducers/browser'),
        locale: require('../../MapStore2/web/client/reducers/locale'),
        controls: require('../../MapStore2/web/client/reducers/controls'),
        version: require('@mapstore/reducers/version'),
        router: connectRouter(history)
    });
    const defaultState = initialState.defaultState;

    const rootReducer = (state, action) => {
        let newState = {
            ...allReducers(state, action)
        };
        if (action && (action.type === 'FEATURETYPE_CONFIG_LOADED' || action.type === 'SET_ACTIVE_FEATURE_TYPE') && newState.siradec.configOggetti[action.featureType] && action.activate) {
            const configOggetti = newState.siradec.configOggetti[action.featureType];
            //     // Devi assegnare a queryform e grid i valori che hai in     siradec.configOggetti.featureType
            const newGrid = assign({}, newState.grid, {featuregrid: configOggetti.featuregrid});
            newState = assign({}, newState, {queryform: configOggetti.queryform, grid: newGrid});
        }
        return newState;
    };
    let store;
    store = DebugUtils.createDebugStore(rootReducer, defaultState);
    SecurityUtils.setStore(store);
    return store;
};
