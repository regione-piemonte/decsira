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
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const PMap = require('../../../MapStore2/web/client/components/map/' + mapType + '/Map');
const Layer = require('../../../MapStore2/web/client/components/map/' + mapType + '/Layer');
require('../../../MapStore2/web/client/components/map/' + mapType + '/plugins/index');
const assign = require('object-assign');


const PreviewMap = React.createClass({

    propTypes: {
            map: React.PropTypes.object,
            layers: React.PropTypes.array,
            style: React.PropTypes.object,
            pointSRS: React.PropTypes.string,
            center: React.PropTypes.object,
            zoom: React.PropTypes.number,
            activeSections: React.PropTypes.object,
            authParam: React.PropTypes.object
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
            authParam: {}
        };
    },
    componentDidUpdate() {
        let m = this.refs.mappa;
        if (m) {
            m.map.setTarget("scheda_pMap");
        }
    },
    render() {
        return this.props.map && this.props.center && this.props.center.coordinates ?
        (
                <PMap
                ref="mappa"
                {...this.props.map}
                style={this.props.style}
                mapOptions={{interactions: {
                    doubleClickZoom: false,
                    dragPan: false,
                    altShiftDragRotate: false,
                    keyboard: false,
                    mouseWheelZoom: false,
                    shiftDragZoom: false,
                    pinchRotate: false,
                    pinchZoom: false
                }}}
                zoomControl={false}
                zoom={this.props.zoom}
                center={this.getCenter()}
                id="scheda_pMap">
                {this.props.layers.map((layer, index) =>
                    <Layer key={layer.name} position={index} type={layer.type}
                        options={assign({}, layer, {params: {authkey: this.props.authParam.authkey}})}/>
                )}
                </PMap>
        ) : <span/>;
    },
    getCenter() {
        let point = {crs: this.props.pointSRS, x: this.props.center.coordinates[0], y: this.props.center.coordinates[1]};
        return this.props.pointSRS !== "EPSG:4326" ?
            CoordinatesUtils.reproject(point, this.props.pointSRS, "EPSG:4326") : point;
    }
});

module.exports = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        layers: state.config && state.config.layers || [],
        activeSections: state.cardtemplate.activeSections || {}
    };
})(PreviewMap);

