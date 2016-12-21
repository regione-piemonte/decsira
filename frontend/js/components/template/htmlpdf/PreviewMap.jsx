/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const mapType = "openlayers";
const CoordinatesUtils = require('../../../../MapStore2/web/client/utils/CoordinatesUtils');
const SnapshotSupport = require('../../../../MapStore2/web/client/components/mapcontrols/Snapshot/SnapshotSupport')(mapType);
const {mapImageReady} = require('../../../actions/card');
const assign = require('object-assign');

const ConfigUtils = require('../../../../MapStore2/web/client/utils/ConfigUtils');

const PDFMap = React.createClass({
    propTypes: {
            map: React.PropTypes.object,
            layers: React.PropTypes.array,
            style: React.PropTypes.object,
            pointSRS: React.PropTypes.string,
            center: React.PropTypes.object,
            zoom: React.PropTypes.number,
            activeSections: React.PropTypes.object,
            authParam: React.PropTypes.object,
            imageReady: React.PropTypes.func,
            withMap: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            map: null,
            layers: [],
            style: {height: "300px", width: "100%", display: "block", border: "1px solid black"},
            pointSRS: "EPSG:4326",
            center: null,
            zoom: 15,
            activeSections: {},
            authParam: null,
            withMap: true
        };
    },
    getInitialState() {
        return {
            image: null
        };
    },
    fillUrl(layer) {
        if (layer.url) {
            return assign({}, layer, {
                url: layer.url.replace("{geoserverUrl}", ConfigUtils.getConfigProp('geoserverUrl'))
            });
        }
        return layer;
    },
    getLayers() {
        return this.props.layers.map((ul) => this.fillUrl(ul));
    },
    componentDidMount() {
        if (!(this.props.layers.length > 0 && this.props.center && this.props.center.coordinates)) {
            this.props.imageReady(true);
        }
    },
    renderGrabMaps() {
        const map = this.props.map || {};
        const mapconf = {
            "config": {
                  "projection": map.projection ? map.projection : "EPSG:3857",
                  "units": map.units ? map.units : "m",
                  "center": this.getCenter([this.props.center]),
                  "zoom": this.props.zoom,
                  "mapId": false,
                  "size": {
                    "width": 760,
                    "height": 300
                  },
                  "mapStateSource": "map"
              },
            "layers": this.getLayers(),
            "allowTaint": false,
            "snapstate": {
                    "state": "READY"
            }
        };
        return this.props.layers.length > 0 && this.props.center && this.props.center.coordinates && this.props.withMap ? (
            <div
                key="hiddenGrabMaps"
                style={{zIndex: -9999}}>
                <SnapshotSupport.GrabMap
                    active={true}
                    snapstate="SHOOTING"
                    timeout={0}
                    onSnapshotReady={(canvas) => { this.imageReady(canvas); }}
                {...mapconf}/>
            </div>) : <noscript className="pdf-nomap"/>;
    },
    renderImage() {
        return (
            <img className="pdf-map" style={{width: 760, height: 300}} src={this.state.image}/>
        );
    },
    render() {
        return this.state.image ? this.renderImage() : this.renderGrabMaps();
    },
    imageReady(canvas) {
        const dataURL = canvas.toDataURL("image/png");
        this.setState({image: dataURL});
        this.props.imageReady(true);
    },
    getCenter(geometries) {
        if (!geometries[0]) {
            return null;
        }
        let extent = geometries.reduce((prev, next) => {
            return CoordinatesUtils.extendExtent(prev, CoordinatesUtils.getGeoJSONExtent(next));
        }, CoordinatesUtils.getGeoJSONExtent(geometries[0]));

        let point = {crs: this.props.pointSRS, x: (extent[0] + extent[2]) / 2, y: (extent[1] + extent[3]) / 2};
        return this.props.pointSRS !== "EPSG:4326" ?
            CoordinatesUtils.reproject(point, this.props.pointSRS, "EPSG:4326") : point;
    }
});

module.exports = connect((state) => {
    return {
        map: state.mapInitialConfig || {}
    };
}, {
    imageReady: mapImageReady
})(PDFMap);
