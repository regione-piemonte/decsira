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
const CoordinatesUtils = require('@mapstore/utils/CoordinatesUtils');
const PMap = require('@mapstore/components/map/' + mapType + '/Map').default;
const Layer = require('@mapstore/components/map/' + mapType + '/Layer').default;
require('@mapstore/components/map/' + mapType + '/plugins/index');
const {changeMapView} = require('@mapstore/actions/map');
const {Button} = require("react-bootstrap");
const img = require('../../../assets/img/magnifier.png');
const assign = require('object-assign');
const PropTypes = require('prop-types');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const MapUtils = require('@mapstore/utils/MapUtils');
const {goToMapPage} = require('../../utils/SiraUtils');

class PreviewMap extends React.Component {
    static propTypes = {
        map: PropTypes.object,
        layers: PropTypes.array,
        style: PropTypes.object,
        pointSRS: PropTypes.string,
        center: PropTypes.object,
        zoom: PropTypes.number,
        activeSections: PropTypes.object,
        authParam: PropTypes.object,
        changeMapView: PropTypes.func,
        withMap: PropTypes.bool
    };

    static defaultProps = {
        map: null,
        layers: [],
        style: {height: "300px", width: "100%", display: "block", border: "1px solid black"},
        pointSRS: "EPSG:4326",
        center: null,
        zoom: 15,
        activeSections: {},
        authParam: null,
        withMap: true,
        changeMapView: () => {}
    };

    componentDidUpdate() {
        let m = this.refs.mappa;
        if (m) {
            m.map.setTarget("scheda_pMap");
        }
    }

    fillUrl = (layer) => {
        if (layer.url) {
            return assign({}, layer, {
                url: layer.url.replace("{geoserverUrl}", ConfigUtils.getConfigProp('geoserverUrl'))
            });
        }
        return layer;
    };

    render() {
        const extent = this.getExtent();
        const zoom = this.getZoom(extent);
        const center = this.getCenter(extent);
        return this.props.map && this.props.center && this.props.center.coordinates ?
            (
                <div>
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
                        }, view: {resolutions: this.props.map.resolutions}}}
                        registerHooks={false}
                        zoomControl={false}
                        zoom={zoom}
                        center={center}
                        id="scheda_pMap">
                        {
                            this.props.layers.map((layer, index) =>
                                <Layer key={layer.title || layer.name} position={index} type={layer.type}
                                    options={assign({}, this.fillUrl(layer), {params: {authkey: this.props.authParam && this.props.authParam.authkey ? this.props.authParam.authkey : ''}})}/>
                            )
                        }
                    </PMap>
                    <Button onClick={this.changeMapView} style={{position: "relative", top: "-" + this.props.style.height, 'float': "right", margin: "2px"}}>
                        <img src={img} width={16}/>
                    </Button>
                </div>
            ) : <span/>;
    }

    getExtent = () => {
        const geometries = [this.props.center];
        return geometries.reduce((prev, next) => {
            return CoordinatesUtils.extendExtent(prev, CoordinatesUtils.getGeoJSONExtent(next));
        }, CoordinatesUtils.getGeoJSONExtent(geometries[0]));
    };

    getCenter = (extent) => {
        return MapUtils.getCenterForExtent(extent, "EPSG:4326");
    };

    getZoom = (extent) => {
        let extentObj = extent;
        const srs = "EPSG:4326";
        const proj = this.props.map.projection || "EPSG:3857";
        extentObj = (srs !== proj) ? CoordinatesUtils.reprojectBbox(extentObj, srs, proj) : extentObj;
        return MapUtils.getZoomForExtent(extentObj, this.props.map.size || {
            width: 600,
            height: 300
        }, 0, 16);
    }

    changeMapView = () => {
        const extent = this.getExtent();
        const center = this.getCenter(extent);
        const proj = this.props.map.projection || "EPSG:3857";
        const zoom = this.getZoom(extent);
        this.props.changeMapView(center, zoom, MapUtils.getBbox(center, zoom), this.props.map.size, null, proj);
        if (!this.props.withMap) {
            goToMapPage(center, zoom);
        }
    };
}

module.exports = connect((state) => {
    return {
        map: (state.map && state.map && state.map.present) || (state.config && state.config.map),
        activeSections: state.cardtemplate.activeSections || {}
    };
}, {
    changeMapView: changeMapView
})(PreviewMap);
