/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var ol = require('openlayers');
const {isEqual} = require('lodash');

let Feature = React.createClass({
    propTypes: {
        type: React.PropTypes.string,
        properties: React.PropTypes.object,
        container: React.PropTypes.object, // TODO it must be a ol.layer.vector (maybe pass the source is more correct here?)
        geometry: React.PropTypes.object, // TODO check for geojson format for geometry
        msId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
        featuresCrs: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            featuresCrs: "EPSG:4326"
        };
    },
    componentDidMount() {
        const format = new ol.format.GeoJSON();
        const geometry = this.props.geometry && this.props.geometry.coordinates;
        if (this.props.container && geometry) {
            this._feature = format.readFeatures({type: this.props.type, properties: this.props.properties, geometry: this.props.geometry, id: this.props.msId}, {dataProjection: this.props.featuresCrs, featureProjection: this.props.container.get('srs') || "EPSG:3857"});
            this.props.container.getSource().addFeatures(this._feature);
        }
    },
    componentWillReceiveProps({container, featuresCrs, geometry, properties, type} = {}) {
        const {geometry: oldGeometry, properties: oldProperties} = this.props;
        const srs = container && container.get('srs') || "EPSG:3857";
        if (!isEqual(properties, oldProperties) || !isEqual(geometry, oldGeometry)) {
            this.removeFromContainer();
            const format = new ol.format.GeoJSON();
            const coords = geometry && geometry.coordinates;

            if (container && coords) {
                this._feature = format.readFeatures({type: type, properties: properties, geometry: geometry, id: this.props.msId}, {dataProjection: featuresCrs, featureProjection: srs});
                container.getSource().addFeatures(this._feature);
            }
        }
    },
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps.properties, this.props.properties) || !isEqual(nextProps.geometry, this.props.geometry);
    },
    componentWillUnmount() {
        this.removeFromContainer();
    },
    render() {
        return null;
    },
    removeFromContainer() {
        if (this._feature) {
            if (Array.isArray(this._feature)) {
                const layersSource = this.props.container.getSource();
                this._feature.map((feature) => {
                    let fetureId = feature.getId();
                    if (fetureId === undefined) {
                        layersSource.removeFeature(feature);
                    }else {
                        layersSource.removeFeature(layersSource.getFeatureById(fetureId));
                    }
                });
            } else {
                this.props.container.getSource().removeFeature(this._feature);
            }
        }
    }
});

module.exports = Feature;
