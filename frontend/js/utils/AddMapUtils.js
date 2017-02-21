/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const assign = require('object-assign');
const {isArray, memoize} = require('lodash');
const uuid = require('node-uuid');
const urlUtil = require('url');
const CoordinatesUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');
const {Promise} = require('es6-promise');

// Add here default layer config for layer added by sira catalog
const layerDefaultConfig = {
    type: "wms",
    tiled: true,
    tileSize: 512,
    visibility: false
};


const isInLayer = function(layers, name) {
    return (isArray(layers) && layers || [layers]).filter((layer) => {
        return layer.Name === name || (layer.Layer && isInLayer(layer.Layer, name));
    }).length > 0;
};

const buildSRSMap = memoize((srs) => {
    return srs.reduce((previous, current) => {
        return assign(previous, {[current]: true});
    }, {});
});

const getWMSBBox = (layer) => {
    let bbox = layer.BoundingBox && layer.BoundingBox.$;
    if (bbox) {
        const {minx, miny, maxx, maxy, CRS: crs} = bbox;
        return {crs, bounds: {minx, miny, maxx, maxy}};
    }
    return {crs: '4326', bounds: { minx: -180.0, maxx: 180.0, miny: -90.0, maxy: 90.0}};
};

const AddMapUtils = {
    prepareGroupLayer: function({records, group, groupTitle, wmsUrl} = {}) {
        return (isArray(records) && records || [records]).reduce((acc, r)=> {
            const props = {
                id: uuid.v1()};
            if (!r.Layer) {
                props.group = group;
                props.groupTitle = groupTitle;
                props.nodetype = 'layer';
                props.infoFormat = r.infoFormat;
                props.url = r.onlineResource && r.onlineResource["xlink:href"] || wmsUrl;
                return acc.concat(assign({}, r, props));
            }
            props.nodetype = 'group';
            const name = (r.Name || "").replace(/\./g, '${dot}');
            const title = (r.Title || "").replace(/\./g, '${dot}');
            const newGroup = group ? `${group}.${name}` : name;
            const newGroupTitle = groupTitle ? `${groupTitle}.${title}` : title;
            props.Layer = this.prepareGroupLayer({records: r.Layer, group: newGroup, groupTitle: newGroupTitle, wmsUrl});
            return acc.concat(assign({}, r, props));
        }, []);
    },
    getRootLayers: function({records, wmsUrl} = {}) {
        let layers = records.slice(0).reverse().reduce((acc, l) => {
            return isInLayer(acc, l.Name) ? acc : acc.concat(l);
        }, []);
        return this.prepareGroupLayer({records: layers, wmsUrl});
    },
    setUrl: function(url, params = {}) {
        const parsed = urlUtil.parse(url, true);
        return urlUtil.format(assign({}, parsed, params));
    },
    setSelectionState: function(nodes, flatLayers, selected) {
        return (isArray(nodes) && nodes || [nodes]).reduce((acc, node) => {
            acc[node.id] = assign({expanded: true}, flatLayers[node.id] || {}, {selected});
            return node.Layer ? assign({}, acc, this.setSelectionState(node.Layer, flatLayers, selected)) : acc;
        }, {});
    },
    isSelected: function(layers, flatLayers) {
        return (isArray(layers) && layers || [layers]).reduce((selected, layer) => {
            return selected && ((layer.Layer && this.isSelected(layer.Layer, flatLayers)) || (!layer.Layer && flatLayers[layer.id] && flatLayers[layer.id].selected));
        }, true);
    },
    normalizeSelection: function(nodes, newFlatLayers) {
        return (isArray(nodes) && nodes || [nodes]).filter((node) => node.Layer && node.Layer.length > 0).reduce((acc, node) => {
            const subGroups = this.normalizeSelection(node.Layer, newFlatLayers);
            const fl = assign({}, newFlatLayers, subGroups);
            const isSelected = this.isSelected(node.Layer, fl);
            acc[node.id] = assign({expanded: true}, fl[node.id] || {}, {selected: isSelected});
            return assign({}, acc, subGroups);
        }, {});
    },
    getLayerConfing(layer, projection = 'EPSG:3857', useTitle = true, useGroup = true, params = {}, node = {}) {
        return new Promise((resolve, reject) => {
            const srs = layer.CRS && (isArray(layer.CRS) && layer.CRS || [layer.CRS]) || layer.SRS;
            const allowedSRS = buildSRSMap(srs);
            if (srs > 0 && !CoordinatesUtils.isAllowedSRS(projection, allowedSRS)) {
                reject(new Error("'catalog.srs_not_allowed"));
            }
            const nodeGroup = (node.title || "").replace(/\./g, '${dot}');
            const group = useTitle ? layer.groupTitle : layer.group;
            resolve(assign({}, {
                    url: layer.url,
                    name: layer.Name,
                    title: useTitle ? layer.Title : layer.Name,
                    bbox: getWMSBBox(layer),
                    params: params,
                    allowedSRS: allowedSRS,
                    siraId: node.id,
                    infoFormat: layer.infoFormat,
                    group: useGroup ? group || nodeGroup : nodeGroup
                }, layerDefaultConfig));
        });
    }
};

module.exports = AddMapUtils;
