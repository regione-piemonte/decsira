/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const msLayers = require('../../MapStore2/web/client/reducers/layers');
const assign = require('object-assign');
const {isObject, head, findIndex} = require('lodash');
const {SHOW_SETTINGS, HIDE_SETTINGS, TOGGLE_NODE, addLayer} = require('../../MapStore2/web/client/actions/layers');
const {SELECT_FEATURES, SET_FEATURES, SELECT_ALL} = require('../actions/featuregrid');
const {CONFIGURE_INFO_TOPOLOGY, CHANGE_MAPINFO_STATE, CHANGE_TOPOLOGY_MAPINFO_STATE} = require('../actions/mapInfo');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const getVector = (state) => {
    return state?.flat?.length > 0 ? head(state.flat.filter((l) => l.id === "gridItems" )) : undefined;
};

const checkSelectLayer = (state, vector) => {
    if (state.flat && state.flat.length > 1 && (state.flat[state.flat.length - 1]).id !== "gridItems") {
        const newLayers = state.flat.filter((l) => l.id !== "gridItems").concat(getVector(state) || vector).filter((l) => l);
        return assign({}, state, {flat: newLayers});
    }
    return state;
};
const filterHiddenGroup = (state) => {
    if (state.groups) {
        return assign({}, state, {groups: state.groups.filter((g) => g.id !== "hidden")});
    }
    return state;
};
const checkState = (state, vector) => {
    return filterHiddenGroup(checkSelectLayer(state, vector));
};
const getAction = (layer, features) => {
    return {
        type: "CHANGE_LAYER_PROPERTIES",
        layer,
        newProperties: { features }
    };
};
const cloneLayer = (layer) => {
    let newLayer = {};
    Object.keys(layer).reduce((pr, next) => {
        pr[next] = isObject(layer[next]) ? assign({}, layer[next]) : layer[next];
        return pr;
    }, newLayer);
    return newLayer;
};

const initialState = {
    flat: [
        {
            type: 'ol',
            title: 'None',
            name: 'None',
            source: 'ol',
            group: 'background',
            visibility: false,
            id: 'None__0'
        },
        {
            type: 'wms',
            url: 'http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif_bn',
            name: 'SfondoCartRifBN',
            title: 'Sfondo Cartografico BN',
            group: 'background',
            visibility: true,
            format: 'image/png',
            tiled: true,
            tileSize: 512,
            id: 'SfondoCartRifBN__1',
            loading: false,
            loadingError: false
        },
        {
            type: 'wms',
            url: 'http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif',
            name: 'SfondoCartRif',
            title: 'Sfondo Cartografico a colori',
            group: 'background',
            visibility: false,
            format: 'image/png',
            tiled: true,
            tileSize: 512,
            id: 'SfondoCartRif__2'
        },
        {
            type: 'wms',
            url: 'http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsortoregp/wms_ortoregp2010',
            name: 'OrtofotoRegione2010',
            title: 'Ortoimmagini Piemonte 2009-2011',
            group: 'background',
            visibility: false,
            format: 'image/png',
            tiled: true,
            id: 'OrtofotoRegione2010__3'
        },
        {
            url: 'http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?',
            name: 'Bacini primo livello',
            title: 'Bacini primo livello',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 654,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 654,
            id: 'Bacini primo livello__5'
        },
        {
            url: 'http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?',
            name: 'Bacini secondo livello',
            title: 'Bacini secondo livello',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 654,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 654,
            id: 'Bacini secondo livello__5'
        },
        {
            url: 'http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?',
            name: 'Bacini terzo livello',
            title: 'Bacini terzo livello',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 654,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 654,
            id: 'Bacini terzo livello__6'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Uranio 238 - Bq/kg',
            title: 'Misure radiometriche nelle acque - Uranio 238 - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Uranio 238 - Bq/kg__7'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Uranio 234 - Bq/kg',
            title: 'Misure radiometriche nelle acque - Uranio 234 - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Uranio 234 - Bq/kg__8'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Trizio - Bq/kg',
            title: 'Misure radiometriche nelle acque - Trizio - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Trizio - Bq/kg__9'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Radon - Bq/kg',
            title: 'Misure radiometriche nelle acque - Radon - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Radon - Bq/kg__10'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Beta - Bq/kg',
            title: 'Misure radiometriche nelle acque - Beta - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: false,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Beta - Bq/kg__11'
        },
        {
            url: 'http://localhost/ags101free/services/Radioattivita/misure_radiometriche_nelle_acque/MapServer/WmsServer?',
            name: 'Misure radiometriche nelle acque - Alfa - Bq/kg',
            title: 'Misure radiometriche nelle acque - Alfa - Bq/kg',
            bbox: {
                crs: '4326',
                bounds: {
                    minx: -180,
                    maxx: 180,
                    miny: -90,
                    maxy: 90
                }
            },
            params: {},
            allowedSRS: {
                'CRS:84': true,
                'EPSG:4326': true,
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:102092': true,
                'EPSG:3003': true,
                'EPSG:102091': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:3857': true,
                'EPSG:102100': true
            },
            siraId: 673,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Layers',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: true,
            idnode: 673,
            id: 'Misure radiometriche nelle acque - Alfa - Bq/kg__12',
            loading: false,
            loadingError: 'Error'
        },
        {
            url: 'https://geomap.reteunitaria.piemonte.it/ws/esiri/rp-01/siriogc/wms_corpi_idrici_wfd?language=ita&',
            name: 'AcquiferiProfondiStatChim',
            title: 'Corpi idrici WFD acquiferi profondi - Stato Chimico 2009-2011',
            bbox: {
                crs: 'EPSG:32632',
                bounds: {
                    minx: '290748',
                    miny: '4.86138e+06',
                    maxx: '536649',
                    maxy: '5.16517e+06'
                }
            },
            params: {},
            allowedSRS: {
                'EPSG:32632': true,
                'EPSG:32633': true,
                'EPSG:23032': true,
                'EPSG:3064': true,
                'EPSG:4326': true,
                'EPSG:4258': true,
                'EPSG:3035': true,
                'EPSG:3034': true,
                'EPSG:3044': true,
                'EPSG:3045': true,
                'EPSG:3004': true,
                'EPSG:3003': true,
                'EPSG:23033': true,
                'EPSG:3065': true,
                'EPSG:32634': true,
                'EPSG:4806': true,
                'EPSG:4265': true,
                'EPSG:4230': true,
                'EPSG:4670': true,
                'EPSG:4267': true,
                'EPSG:4269': true,
                'EPSG:900913': true,
                'EPSG:25832': true,
                'EPSG:3857': true
            },
            siraId: 146,
            infoFormat: [
                'text/html',
                'text/plain'
            ],
            group: 'Corpi idrici WFD 2000/60/CE Triennio 2009-2011',
            type: 'wms',
            tiled: true,
            tileSize: 512,
            visibility: true,
            idnode: 146,
            id: 'AcquiferiProfondiStatChim__13',
            loading: false,
            loadingError: false
        },
        {
            type: 'vector',
            position: 1,
            queryable: false,
            visibility: true,
            name: 'Selected Feature',
            id: 'gridItems',
            group: 'hidden',
            style: {
                type: 'Point',
                radius: 10,
                stroke: {
                    width: 3,
                    color: 'blue'
                },
                fill: {
                    color: 'blue'
                }
            },
            features: []
        }
    ],
    groups: [
        {
            id: 'Corpi idrici WFD 2000/60/CE Triennio 2009-2011',
            title: 'Corpi idrici WFD 2000/60/CE Triennio 2009-2011',
            name: 'Corpi idrici WFD 2000/60/CE Triennio 2009-2011',
            nodes: [
                'AcquiferiProfondiStatChim__13'
            ],
            expanded: false
        },
        {
            id: 'Layers',
            title: 'Layers',
            name: 'Layers',
            nodes: [
                'Misure radiometriche nelle acque - Alfa - Bq/kg__12',
                'Misure radiometriche nelle acque - Beta - Bq/kg__11',
                'Misure radiometriche nelle acque - Radon - Bq/kg__10',
                'Misure radiometriche nelle acque - Trizio - Bq/kg__9',
                'Misure radiometriche nelle acque - Uranio 234 - Bq/kg__8',
                'Misure radiometriche nelle acque - Uranio 238 - Bq/kg__7',
                'Bacini terzo livello__6',
                'Bacini secondo livello__5',
                'Bacini primo livello__5'
            ],
            expanded: false
        }
    ]
};


function layers(state = [], action) {
    console.log("siraLayers.js");
    switch (action.type) {
    case CHANGE_TOPOLOGY_MAPINFO_STATE:
    case CHANGE_MAPINFO_STATE: {
        let tmpState = msLayers(state, getAction("gridItems", []) );
        return msLayers(tmpState, getAction("topologyItems", []));
    }
    case SELECT_FEATURES:
        return msLayers(state, getAction("gridItems", action.features) );
    case SET_FEATURES:
    case CONFIGURE_INFO_TOPOLOGY:
        return msLayers(state, getAction("topologyItems", action.features || action.infoTopologyResponse.features));
    case SHOW_SETTINGS: {
        return msLayers(msLayers(state, {
            type: TOGGLE_NODE,
            node: action.node,
            nodeType: "layers",
            status: true}), action);

    }
    case HIDE_SETTINGS: {
        return msLayers(msLayers(state, {
            type: 'TOGGLE_NODE',
            node: action.node,
            nodeType: "layers",
            status: false}), action);
    }
    case SELECT_ALL: {
        if (action.sldBody && action.featureTypeName) {
            let layer = head(state.flat.filter(l => l.name === `${action.featureTypeName}`));
            if (layer) {
                let allLayer = head(state.flat.filter(l => l.id === "selectAll"));
                if (allLayer) {
                    let params = {params: {...allLayer.params, SLD_BODY: action.sldBody}};
                    return msLayers(state, { type: "CHANGE_LAYER_PROPERTIES",
                        layer: allLayer.id,
                        newProperties: params
                    });
                }
                let newLayer = cloneLayer(layer);
                newLayer.id = "selectAll";
                newLayer.type = "wmspost";
                newLayer.visibility = true;
                delete newLayer.group;
                newLayer.params = assign({}, newLayer.params, {SLD_BODY: action.sldBody});
                return msLayers(state, { type: "ADD_LAYER", layer: newLayer});
            }
        }
        let allLayer = head(state.flat.filter(l => l.id === "selectAll"));
        return allLayer ? msLayers(state, { type: "REMOVE_NODE", nodeType: 'layers', node: 'selectAll'}) : msLayers(state, action);
    }
    case 'THEMATIC_VIEW_CONFIG_LOADED': {
        // We exclude background layers and we add the rest
        const oldLayers = state.flat;
        if ( action.config && action.config.map && action.config && action.config.map.layers) {
            return action.config.map.layers.filter((l) => l.group !== 'background' && findIndex(oldLayers, (ol) => ol.name === l.name) === -1).reduce((st, layer) => {
                return msLayers(st, addLayer(ConfigUtils.setUrlPlaceholders(layer)));
            }, state);
        }
        return state;
    }
    case 'UPDATE_SIRA_LAYER_STATE': {
        return action.state;
    }
    case 'SIRA_ADD_LAYERS': {
        // return msLayers(tempState, {type: 'ADD_LAYER', layer});
        console.log("action.layers", action);
        // const layersms = action.msLayers;
        return action.layers.reduce((layersms, layer) => {
            return msLayers(layersms, {type: 'ADD_LAYER', layer});
        }, state);
    }
    default:
        return msLayers(state, action);
    }
}

// function checkedLayers(state = [], action) {
//     const newState = layers(state, action);
//     if ( newState !== state) {
//         const vector = getVector(state);
//         return checkState(newState, vector);
//     }
//     return newState;
// }

module.exports = layers;
