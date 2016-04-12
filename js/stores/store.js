/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DebugUtils = require('../../MapStore2/web/client/utils/DebugUtils');
const {combineReducers} = require('redux');
const {syncHistory, routeReducer} = require('redux-simple-router');
const {hashHistory} = require('react-router');
const reduxRouterMiddleware = syncHistory(hashHistory);

const {isArray} = require('lodash');
const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');

const layers = require('../../MapStore2/web/client/reducers/layers');
const mapConfig = require('../../MapStore2/web/client/reducers/config');

const map = require('../../MapStore2/web/client/reducers/map');

const queryform = require('../../MapStore2/web/client/reducers/queryform');
const queryformconfig = require('../reducers/queryform');

const assign = require('object-assign');

const allReducers = combineReducers({
    userprofile: require('../reducers/userprofile'),
    mapInfo: require('../reducers/mapInfo'),
    search: require('../../MapStore2/web/client/reducers/search').searchResults,
    browser: require('../../MapStore2/web/client/reducers/browser'),
    locale: require('../../MapStore2/web/client/reducers/locale'),
    draw: require('../../MapStore2/web/client/reducers/draw'),
    siraControls: require('../reducers/controls'),
    controls: require('../../MapStore2/web/client/product/reducers/controls'),
    locate: require('../../MapStore2/web/client/reducers/locate'),
    measurement: require('../../MapStore2/web/client/reducers/measurement'),
    routing: routeReducer,
    queryform: () => {return {}; },
    queryformconfig: () => {return {}; },
    map: () => {return null; },
    layers: () => {return null; },
    cardtemplate: require('../reducers/card'),
    featuregrid: require('../reducers/featuregrid'),
    grid: require('../reducers/grid')
});

const rootReducer = (state = {}, action) => {
    let mapState = mapConfig({
        map: state && state.map,
        layers: state && state.layers
    }, action);

    if (mapState && isArray(mapState.layers)) {
        let groups = LayersUtils.getLayersByGroup(mapState.layers);
        mapState.layers = {flat: LayersUtils.reorder(groups, mapState.layers), groups: groups};
    }

    let queryformconfigState = queryformconfig(state.queryformconfig, action);
    let queryformState = queryform(state.queryform, action);

    if (!queryformState.searchUrl && (queryformconfigState.queryform && queryformconfigState.queryform.searchUrl)) {
        queryformState = assign(queryformState, queryformconfigState.queryform);
    }

    let newState = assign({}, {...allReducers(state, action)}, {
        queryformconfig: queryformconfigState,
        queryform: queryformState,
        map: mapState && mapState.map ? map(mapState.map, action) : null,
        layers: mapState ? layers(mapState.layers, action) : null
    });

    return newState;
};

const store = DebugUtils.createDebugStore(rootReducer, {}, [reduxRouterMiddleware]);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

module.exports = store;
