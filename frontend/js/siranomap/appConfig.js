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
    draw: require('@mapstore/reducers/draw'),
    security: require('../reducers/siraSecurity'),
    siraexporter: require('../reducers/siraexporter')
};

module.exports = {
    pages: [
        { path: "/:profile", component: require('../containers/NoMap')}
    ],
    pluginsDef: {plugins: {}},
    initialState: {
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    appReducers,
    storeOpts: {}
};
