/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    pages: [
        { path: "/:profile", component: require('../containers/NoMap')}
        ],
    pluginsDef: {plugins: {}},
    initialState: {
        defaultState: {
            controls: {
                toolbar: {
                    active: null,
                    expanded: false
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
