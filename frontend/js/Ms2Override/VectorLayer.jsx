/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Layers = require('../../MapStore2/web/client/utils/openlayers/Layers');
var markerIcon = require('../../MapStore2/web/client/components/map/openlayers/img/marker-icon.png');
var markerShadow = require('../../MapStore2/web/client/components/map/openlayers/img/marker-shadow.png');
var ol = require('openlayers');

const assign = require('object-assign');

const image = new ol.style.Circle({
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({color: 'red', width: 1})
});

const defaultStyles = {
  'Point': [new ol.style.Style({
      image: image
  })],
  'LineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  })],
  'MultiLineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  })],
  'MultiPoint': [new ol.style.Style({
    image: image
  })],
  'MultiPolygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        lineDash: [4],
        width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  })],
  'Polygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  })],
  'GeometryCollection': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  })],
  'Circle': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
})],
  'marker': [new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [14, 41],
      anchorXUnits: 'pixels',
      anchorYUnits: 'pixels',
      src: markerShadow
    }))
}), new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [0.5, 1],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: markerIcon
    }))
    })]
};

var styleFunction = function(feature) {
    return defaultStyles[feature.getGeometry().getType()];
};

Layers.registerType('vector', {
    create: (options) => {
        let layerCrs = options.srs || 'EPSG:3857';
        const source = new ol.source.Vector({
            features: []
        });
        let style = options.nativeStyle;
        if (!style && options.style) {
            style = {
                stroke: new ol.style.Stroke( options.style.stroke ? options.style.stroke : {
                    color: 'blue',
                    width: 1
                }),
                fill: new ol.style.Fill(options.style.fill ? options.style.fill : {
                    color: 'blue'
                })
            };

            if (options.style.type === "Point") {
                style = {
                    image: new ol.style.Circle(assign({}, style, {radius: options.style.radius || 5}))
                };
            }

            if (options.style.iconUrl) {
                style = {
                    image: new ol.style.Icon(({
                      anchor: [0.5, 1],
                      anchorXUnits: 'fraction',
                      anchorYUnits: 'fraction',
                      src: options.style.iconUrl
                    }))
                };
            }

            style = new ol.style.Style(style);
        }

        return new ol.layer.Vector({
            msId: options.id,
            srs: layerCrs,
            source: source,
            zIndex: options.zIndex,
            style: (options.styleName && !options.overrideOLStyle) ? () => {return defaultStyles[options.styleName]; } : style || styleFunction
        });
    },
    update: (layer, newOptions) => {
        const oldCrs = layer.get('srs') || 'EPSG:3857';
        const newCrs = newOptions.srs || 'EPSG:3857';
        if (newCrs !== oldCrs) {
            layer.set('srs', newCrs);
            layer.getSource().forEachFeature((f) => {
                f.getGeometry().transform(oldCrs, newCrs);
            });
        }
    },
    render: () => {
        return null;
    }
});
