/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const appReducers = {
    userprofile: require('../reducers/userprofile'),
    siraControls: require('../reducers/controls'),
    queryform: require('../reducers/queryform'),
    siradec: require('../reducers/siradec'),
    grid: require('../reducers/grid'),
    cardtemplate: require('../reducers/card'),
    featuregrid: require('../reducers/featuregrid'),
    security: require('../reducers/siraSecurity'),
    siraexporter: require('../reducers/siraexporter'),
    siraTree: require('../reducers/siraTree')
};

module.exports = {
    pages: [
        { path: "/", component: require('../containers/QGis')},
        { path: "/:profile", component: require('../containers/QGis')}
    ],
    pluginsDef: {plugins: {}},
    initialState: {
        defaultState: {
        }
    },
    appReducers,
    storeOpts: {}
};
