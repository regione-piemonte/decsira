/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    pages: [
        { path: "/:profile", component: require('./containers/Sira')},
        { path: "/map/:profile", component: require('./containers/Sira')},
        { path: "/new/:profile", component: require('./containers/Home')},
        { path: "/dataset/:profile", component: require('./containers/Dataset')},
        { path: "/nomap/:profile", component: require('./containers/NoMap')},
        { path: "/full/:profile", component: require('./containers/FullScreenPanel')}
        ],
    pluginsDef: require('./plugins.js'),
    initialState: {
        defaultState: {
            controls: {
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                }
            }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    storeOpts: {}
};
