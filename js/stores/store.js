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

const queryform = require('../../MapStore2/web/client/reducers/queryform');
const queryformconfig = require('../reducers/queryform');

const assign = require('object-assign');

const allReducers = combineReducers({
    browser: require('../../MapStore2/web/client/reducers/browser'),
    config: require('../../MapStore2/web/client/reducers/config'),
    locale: require('../../MapStore2/web/client/reducers/locale'),
    map: require('../../MapStore2/web/client/reducers/map'),
    draw: require('../../MapStore2/web/client/reducers/draw'),
    controls: require('../reducers/controls'),
    routing: routeReducer,
    queryform: () => {return {}; },
    queryformconfig: () => {return {}; },
    cardtemplate: require('../reducers/card'),
    grid: require('../reducers/grid'),
    rifiuti: require('../reducers/rifiuti')
});

const rootReducer = (state = {}, action) => {
    let queryformconfigState = queryformconfig(state.queryformconfig, action);
    let queryformState = queryform(state.queryform, action);

    if (!queryformState.searchUrl && (queryformconfigState.queryform && queryformconfigState.queryform.searchUrl)) {
        queryformState = assign(queryformState, queryformconfigState.queryform);
    }

    let newState = assign({}, {...allReducers(state, action)}, {
        queryformconfig: queryformconfigState,
        queryform: queryformState
    });

    return newState;
};

const store = DebugUtils.createDebugStore(rootReducer, {}, [reduxRouterMiddleware]);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

module.exports = store;
