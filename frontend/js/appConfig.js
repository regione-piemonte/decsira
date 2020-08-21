/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const appReducers = {
    userprofile: require('./reducers/userprofile'),
    siraControls: require('./reducers/controls'),
    queryform: require('./reducers/queryform'),
    siradec: require('./reducers/siradec'),
    grid: require('./reducers/grid'),
    cardtemplate: require('./reducers/card'),
    featuregrid: require('./reducers/featuregrid'),
    draw: require('../MapStore2/web/client/reducers/draw'),
    security: require('./reducers/siraSecurity'),
    mosaic: require('./reducers/mosaic'),
    metadatainfobox: require('./reducers/metadatainfobox'),
    platformnumbers: require('./reducers/platformnumbers'),
    siraexporter: require('./reducers/siraexporter'),
    addmap: require('./reducers/addmap'),
    cart: require('./reducers/cart'),
    header: require('./reducers/header'),
    siraTree: require('./reducers/siraTree'),
    treeData: require('./reducers/treeData')
    // layers: require('./reducers/siraLayers')
};

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
    pluginsDef: require('./plugins'),
    initialState: {
        defaultState: {
            mousePosition: {enabled: false},
            controls: {
                help: {
                    enabled: false
                },
                details: {
                    enabled: false
                },
                print: {
                    enabled: false
                },
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                },
                RefreshLayers: {
                    enabled: false,
                    options: {
                        bbox: true,
                        search: true,
                        title: false,
                        dimensions: false
                    }
                },
                cookie: {
                    enabled: false,
                    seeMore: false
                }
            },
            maps: {
                mapType: "openlayers"
            },
            maptype: {
                mapType: "openlayers"
            },
            catalog: {
                format: "wms",
                "supportedFormats": [{"name": "wms", "label": "WMS"}, {"name": "csw", "label": "CSW"}]
            },
            mapInfo: {enabled: true, infoFormat: 'application/json' }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'application/json' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    appReducers,
    storeOpts: {}
};
