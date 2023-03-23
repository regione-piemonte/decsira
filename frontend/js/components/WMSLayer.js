/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Layers from '@mapstore/utils/openlayers/Layers';
import {Image, Tile} from 'ol/layer';
import {ImageWMS, TileWMS} from 'ol/source';
import objectAssign from 'object-assign';
import CoordinatesUtils from '@mapstore/utils/CoordinatesUtils';

import {isArray} from 'lodash';
import SecurityUtils from '@mapstore/utils/SecurityUtils';
import {version} from '../utils/WMS';
import axios from '@mapstore/libs/ajax';
import urllib from 'url';

function wmsToOpenlayersOptions(options) {
    // NOTE: can we use opacity to manage visibility?
    return objectAssign({}, options.baseParams, {
        LAYERS: options.name,
        STYLES: options.style || "",
        FORMAT: options.format || 'image/png',
        TRANSPARENT: options.transparent !== undefined ? options.transparent : true,
        SRS: CoordinatesUtils.normalizeSRS(options.srs),
        CRS: CoordinatesUtils.normalizeSRS(options.srs),
        TILED: options.tiled || false,
        VERSION: options.version || version,
        viewparams: options.params ? options.params.viewparams : undefined
    }, options.params || {});
}

function getWMSURLs( urls ) {
    return urls.map((url) => url.split("\?")[0]);
}

// Works with geosolutions proxy
function postTileLoadFunction(queryParameters, imageTile, src) {
    const parsedUrl = urllib.parse(src, true);
    const urlQuery = parsedUrl.query;
    const newSrc = Object.keys(urlQuery).reduce((url, param, idx) => {
        return (param !== "SLD_BODY" && param !== "SLD") ? `${url}${idx ? '&' : '?'}${param}=${urlQuery[param]}` : url;
    }, `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`);
    const srs = queryParameters.SRS.split(":")[1];
    const BBOX = urlQuery.BBOX.split(',');
    let viewparams = queryParameters.viewparams ? 'viewParams="' + queryParameters.viewparams + '"'  : '';
    const request = `<?xml version="1.0" encoding="UTF-8"?>
<ogc:GetMap xmlns:ogc="http://www.opengis.net/ows"
            xmlns:gml="http://www.opengis.net/gml"
            ${viewparams}
   version="1.3.0" service="WMS">
   ${queryParameters.SLD_BODY}
   <BoundingBox srsName="http://www.opengis.net/gml/srs/epsg.xml#${srs}">
   <gml:coord><gml:X>${BBOX[0]}</gml:X><gml:Y>${BBOX[1]}</gml:Y></gml:coord>
   <gml:coord><gml:X>${BBOX[2]}</gml:X><gml:Y>${BBOX[3]}</gml:Y></gml:coord>
   </BoundingBox>
   <Output>
      <Transparent>${queryParameters.TRANSPARENT}</Transparent>
      <Format>${queryParameters.FORMAT}</Format>
      <Size><Width>${urlQuery.WIDTH}</Width><Height>${urlQuery.HEIGHT}</Height></Size>
   </Output>
   </ogc:GetMap>`;
    axios.post(newSrc, request, {
        timeout: 60000,
        responseType: 'blob',
        headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
    }).then((response) => {
        let image = imageTile.getImage();
        image.onload = function() {
            window.URL.revokeObjectURL(image.src); // Clean up after yourself.
        };
        image.src = window.URL.createObjectURL(response.data);
    });
}

/* function getTileLoadFunction(queryParameters, imageTile, src) {
    const parsedUrl = urllib.parse(src, true);
    const urlQuery = parsedUrl.query;
    let newSrc = Object.keys(urlQuery).reduce((url, param, idx) => {
        return (param !== "SLD") ? `${url}${idx ? '&' : '?'}${param}=${encodeURIComponent(urlQuery[param])}` : url;
    }, `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`);
    axios.get(newSrc, {
        timeout: 60000,
        responseType: 'blob',
        headers: {'Accept': 'text/xml', 'Content-Type': 'text/plain'}
    }).then((response) => {
        let image = imageTile.getImage();
        image.onload = function() {
            window.URL.revokeObjectURL(image.src); // Clean up after yourself.
        };
        image.src = window.URL.createObjectURL(response.data);
    });
} */

Layers.registerType('wmspost', {
    create: (options) => {
        const urls = getWMSURLs(isArray(options.url) ? options.url : [options.url]);
        const queryParameters = wmsToOpenlayersOptions(options) || {};
        urls.forEach(url => SecurityUtils.addAuthenticationParameter(url, queryParameters));
        if (options.singleTile) {
            return new Image({
                opacity: options.opacity !== undefined ? options.opacity : 1,
                visible: options.visibility !== false,
                zIndex: options.zIndex,
                source: new ImageWMS({
                    url: urls[0],
                    params: queryParameters
                })
            });
        }
        return new Tile({
            opacity: options.opacity !== undefined ? options.opacity : 1,
            visible: options.visibility !== false,
            zIndex: options.zIndex,
            source: new TileWMS({
                urls: urls,
                params: queryParameters,
                tileLoadFunction: postTileLoadFunction.bind(null, queryParameters)
                // tileLoadFunction: getTileLoadFunction.bind(null, queryParameters)
                // tileLoadFunction: queryParameters.viewparams ?
                //    getTileLoadFunction.bind(null, queryParameters) :
                //    postTileLoadFunction.bind(null, queryParameters)
            })
        });
    },
    update: (layer, newOptions, oldOptions) => {
        if (oldOptions && layer && layer.getSource() && layer.getSource().updateParams) {
            let changed = false;
            if (oldOptions.params && newOptions.params) {
                changed = Object.keys(oldOptions.params).reduce((found, param) => {
                    if (newOptions.params[param] !== oldOptions.params[param]) {
                        return true;
                    }
                    return found;
                }, false);
            } else if (!oldOptions.params && newOptions.params) {
                changed = true;
            }
            let oldParams = wmsToOpenlayersOptions(oldOptions);
            let newParams = wmsToOpenlayersOptions(newOptions);
            changed = changed || ["LAYERS", "STYLES", "FORMAT", "TRANSPARENT", "TILED", "VERSION" ].reduce((found, param) => {
                if (oldParams[param] !== newParams[param]) {
                    return true;
                }
                return found;
            }, false);

            if (changed) {
                layer.getSource().updateParams(objectAssign(newParams, newOptions.params));
            }
        }
    }
});
