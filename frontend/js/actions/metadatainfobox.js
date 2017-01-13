/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const xml2js = require('xml2js');
const urlUtil = require('url');
const axios = require('../../MapStore2/web/client/libs/ajax');
const assign = require('object-assign');

const HIDE_BOX = 'HIDE_BOX';
const SHOW_BOX = 'SHOW_BOX';
const LOAD_METADATA = 'LOAD_METADATA';
const LOAD_METADATA_ERROR = 'LOAD_METADATA_ERROR';
const TOGGLE_LEGEND_PANEL = 'TOGGLE_LEGEND_PANEL';
const LEGEND_LOADED = 'LEGEND_LOADED';
const LEGEND_LOADED_ERROR = 'LEGEND_LOADED_ERROR';
const ADD_URL_LEGEND = 'ADD_URL_LEGEND';


const makeGetCapabilitiesUrl = (url) => {
    const parsed = urlUtil.parse(url, true);
    return urlUtil.format(assign({}, parsed, {search: null}, {
         query: assign({
             service: "WMS",
             version: "1.3.0",
             request: "GetCapabilities"
         }, parsed.query)
     }));
};

const makeGetLegendUrl = (url, layer) => {
    const parsed = urlUtil.parse(url, true);
    return urlUtil.format(assign({}, parsed, {search: null}, {
        query: assign({
            service: "WMS",
            version: "1.1.0",
            request: "GetLegendGraphic",
            format: "image/png",
            layer: layer
        }, parsed.query)
    }));
};

/*
 Private function
 Search layers in obj
 if(obj is layer) param.add(obj)
 else for all property of obj --> iterate(obj.property)
*/
function iterate(obj, param) {
    if (obj && obj.isLayer) {
        param.push(obj);
    }
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] === "object") {
                if (property === "Layer") {
                    if (Array.isArray(obj[property])) {
                        for (let i = 0; i < obj[property].length; i++) {
                            obj[property][i].isLayer = true;
                        }
                    }else {
                        obj[property].isLayer = true;
                    }
                }
                iterate(obj[property], param);
            }
        }
    }
}

/*
 * action
 */
function hideBox() {
    return {
        type: HIDE_BOX,
        show: 'none'
    };
}

function showBox() {
    return {
        type: SHOW_BOX,
        show: 'block'
    };
}

function toggleLegendBox() {
    return {
        type: TOGGLE_LEGEND_PANEL
    };
}

function legendLoaded() {
    return {
      type: LEGEND_LOADED
  };
}

function legendLoadedError(error) {
    return {
      type: LEGEND_LOADED_ERROR,
      errorLoadLegend: error
  };
}


function metadataLoaded(data) {
    return {
        type: LOAD_METADATA,
        data: data
    };
}

function loadMetadataError(error) {
    return {
        type: LOAD_METADATA_ERROR,
        error: error
    };
}

function addLegendUrl(urls) {
    return {
        type: ADD_URL_LEGEND,
        infolegend: urls
    };
}

function loadLegend(url) {
    return (dispatch) => {
        let layers = [];
        let capabilitiesUrl = url;
        let parsedUrl = makeGetCapabilitiesUrl(capabilitiesUrl);
        return axios.get(parsedUrl).then((response) => {
            let json;
            xml2js.parseString(response.data, {explicitArray: false}, (ignore, result) => {
                json = result;
            });

            iterate(json, layers);
            let infoLegends = [];
            let infoLegend = {};
            let tmpUrls = [];
            if (json && json.WMS_Capabilities && json.WMS_Capabilities.Service) {
                infoLegend.serviceTitle = json.WMS_Capabilities.Service.Title;
            }else {
                infoLegend.serviceTitle = "";
            }
            for (let i = 0; i < layers.length; i++) {
            // excluded the group layers
                if ( layers[i] && ( typeof layers[i].Layer === "undefined")) {
                    let tmpUrl = {};
                    tmpUrl.url = makeGetLegendUrl(capabilitiesUrl, layers[i].Name);
                    tmpUrl.title = layers[i].Title ? layers[i].Title : '';
                    // tmpUrl.title = layers[i].Name;
                    tmpUrls.push(tmpUrl);
                }
            }
            if (tmpUrls) {
                infoLegend.urls = tmpUrls;
            }else {
                infoLegend.urls = [];
            }
            infoLegends.push(infoLegend);
            dispatch(addLegendUrl(infoLegends));
        }).catch((error) => {
            dispatch(loadMetadataError(error));
        });
    };
}

function loadLegends(urls) {
    return (dispatch) => {
        for (let i = 0; i < urls.length && urls; i++) {
            dispatch(loadLegend((urls[i])));
        }
    };
}

function loadMetadata(idMetadato) {
    return (dispatch) => {
        return axios.post('services/metadata/getInfoBox', 'metadato=' + idMetadato, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            if (typeof response.data === 'object') {
                if (response.data && (response.data.urlWMS || response.data.urlWFS)) {
                    response.data.showButtonLegend = 'block';
                }else {
                    response.data.showButtonLegend = 'none';
                }
                dispatch(metadataLoaded(response.data));
                // dispatch(showBox());
            } else {
                try {
                    JSON.parse(response.data);
                } catch(e) {
                    dispatch(loadMetadataError('Configuration file for tiles broken: ' + e.message));
                }
            }
        }).catch((e) => {
            dispatch(loadMetadataError(e));
        });
    };
}

module.exports = {
    HIDE_BOX,
    SHOW_BOX,
    LOAD_METADATA,
    LOAD_METADATA_ERROR,
    TOGGLE_LEGEND_PANEL,
    LEGEND_LOADED_ERROR,
    ADD_URL_LEGEND,
    showBox,
    hideBox,
    metadataLoaded,
    loadMetadataError,
    loadMetadata,
    toggleLegendBox,
    legendLoaded,
    legendLoadedError,
    loadLegend,
    loadLegends
  };
