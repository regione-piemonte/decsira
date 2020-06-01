/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {addProjection, Projection} = require('ol/proj');
const Proj4js = require('@geosolutions/proj4').default;

module.exports = function addProjs() {
    Proj4js.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs");
    addProjection(new Projection({
        code: 'EPSG:32632',
        extent: [-250000, -200000, 1250000, 8400000],
        worldExtent: [6.0000, 0.0000, 12.0000, 84.0000]
    }));
};
