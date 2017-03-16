/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    pages: [
        { path: "/", component: require('./containers/Home')},
        { path: "/dataset/", component: require('./containers/Dataset')},
        { path: "/dataset/:profile", component: require('./containers/Dataset')},
        { path: "/map/", component: require('./containers/Sira')},
        { path: "/map/:profile", component: require('./containers/Sira')},
        { path: "/nomap/", component: require('./containers/NoMap')},
        { path: "/nomap/:profile", component: require('./containers/NoMap')},
        { path: "/full/", component: require('./containers/FullScreenPanel')},
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
                    enabled: true,
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
