/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const MapInfoUtils = require('../../MapStore2/web/client/utils/MapInfoUtils');
const urlUtil = require('url');
const assign = require('object-assign');

const xml2js = require('xml2js');

const capabilitiesCache = {};

const {isArray} = require('lodash');

const parseUrl = (url) => {
    const parsed = urlUtil.parse(url, true);
    return urlUtil.format(assign({}, parsed, {search: null}, {
        query: assign({
            service: "WMS",
            version: "1.3.0",
            request: "GetCapabilities"
        }, parsed.query)
    }));
};

const addParamsToLayers = (root, params = {}) => {
    return root.Layer ? (isArray(root.Layer) && root.Layer || [root.Layer]).reduce((previous, current) => {
        return current.Layer ? previous.concat(assign({}, params, current, {Layer: addParamsToLayers(current, params)})) : previous.concat(assign({}, params, current));
    }, []) : (root.Name && [assign({}, params, root)] || []);
};
const getOnlineResource = (c) => {
    return c.Request && c.Request.GetMap && c.Request.GetMap.DCPType && c.Request.GetMap.DCPType.HTTP && c.Request.GetMap.DCPType.HTTP.Get && c.Request.GetMap.DCPType.HTTP.Get.OnlineResource && c.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$ || undefined;
};
const isFormatAvailable = (aF, f) => {
    return aF.filter((fo) => fo === f).length > 0 || false;
};
const getFeatureInfoFormat = (c) => {
    const formats = MapInfoUtils.getAvailableInfoFormatValues();
    const layerFormats = c.Request && c.Request.GetFeatureInfo && c.Request.GetFeatureInfo.Format || undefined;
    return layerFormats ? layerFormats.reduce((acc, f) => {
        return isFormatAvailable(formats, f) ? acc.concat(f) : acc;
    }, []) : undefined;
};
const searchAndPaginate = (json) => {
    const root = (json.WMS_Capabilities || json.WMT_MS_Capabilities).Capability;
    const onlineResource = getOnlineResource(root);
    const infoFormat = getFeatureInfoFormat(root);
    const SRSList = (root.Layer && (root.Layer.SRS || root.Layer.CRS)) || [];
    const layersObj = addParamsToLayers(root, {onlineResource, SRS: SRSList, infoFormat});
    const layers = isArray(layersObj) ? layersObj : [layersObj];
    return {
        service: (json.WMS_Capabilities || json.WMT_MS_Capabilities).Service,
        records: layers
    };
};

const Api = {
    getCapabilities: function(url) {
        const parsed = urlUtil.parse(url, true);
        const getCapabilitiesUrl = urlUtil.format(assign({}, parsed, {
            query: assign({
                service: "WMS",
                version: "1.1.1",
                request: "GetCapabilities"
            }, parsed.query)
        }));
        return new Promise((resolve) => {
            require.ensure(['../../MapStore2/web/client/utils/ogc/WMS'], () => {
                const {unmarshaller} = require('../../MapStore2/web/client/utils/ogc/WMS');
                resolve(axios.get(parseUrl(getCapabilitiesUrl)).then((response) => {
                    let json = unmarshaller.unmarshalString(response.data);
                    return json && json.value;
                }));
            });
        });
    },
    describeLayer: function(url, layers) {
        const parsed = urlUtil.parse(url, true);
        const describeLayerUrl = urlUtil.format(assign({}, parsed, {
            query: assign({
                service: "WMS",
                version: "1.1.1",
                layers: layers,
                request: "DescribeLayer"
            }, parsed.query)
        }));
        return new Promise((resolve) => {
            require.ensure(['../../MapStore2/web/client/utils/ogc/WMS'], () => {
                const {unmarshaller} = require('../../MapStore2/web/client/utils/ogc/WMS');
                resolve(axios.get(parseUrl(describeLayerUrl)).then((response) => {
                    let json = unmarshaller.unmarshalString(response.data);
                    return json && json.value && json.value.layerDescription && json.value.layerDescription[0];

                }));
            });
        });
    },
    getRecords: function(url, startPosition, maxRecords, text) {
        const cached = capabilitiesCache[url];
        if (cached && new Date().getTime() < cached.timestamp + (ConfigUtils.getConfigProp('cacheExpire') || 60) * 1000) {
            return new Promise((resolve) => {
                resolve(searchAndPaginate(cached.data, startPosition, maxRecords, text));
            });
        }
        return axios.get(parseUrl(url)).then((response) => {
            let json;
            xml2js.parseString(response.data, {explicitArray: false}, (ignore, result) => {
                json = result;
            });
            capabilitiesCache[url] = {
                timestamp: new Date().getTime(),
                data: json
            };
            return searchAndPaginate(json, startPosition, maxRecords, text);
        });
    },
    describeLayers: function(url, layers) {
        const parsed = urlUtil.parse(url, true);
        const describeLayerUrl = urlUtil.format(assign({}, parsed, {
            query: assign({
                service: "WMS",
                version: "1.1.1",
                layers: layers,
                request: "DescribeLayer"
            }, parsed.query)
        }));
        return axios.get(parseUrl(describeLayerUrl)).then((response) => {
            let decriptions;
            xml2js.parseString(response.data, {explicitArray: false}, (ignore, result) => {
                decriptions = result && result.WMS_DescribeLayerResponse && result.WMS_DescribeLayerResponse.LayerDescription;
            });
            decriptions = Array.isArray(decriptions) ? decriptions : [decriptions];
            // make it compatible with json format of describe layer
            return decriptions.map(desc => ({
                ...(desc && desc.$ || {}),
                layerName: desc.$ && desc.$.name,
                query: {
                    ...(desc && desc.query && desc.query.$ || {})
                }
            }));
        });
    },
    textSearch: function(url, startPosition, maxRecords, text) {
        return Api.getRecords(url, startPosition, maxRecords, text);
    }
};

module.exports = Api;
