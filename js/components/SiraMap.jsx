/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');

const assign = require('object-assign');

const {changeMapView, clickOnMap} = require('../../MapStore2/web/client/actions/map');

const {
    changeDrawingStatus,
    endDrawing
} = require('../../MapStore2/web/client/actions/draw');

const mapType = "openlayers";
const WMap = require('../../MapStore2/web/client/components/map/' + mapType + '/Map');
const Layer = require('../../MapStore2/web/client/components/map/' + mapType + '/Layer');
require('../../MapStore2/web/client/components/map/' + mapType + '/plugins/index');

const DrawSupport = require('../../MapStore2/web/client/components/map/' + mapType + '/DrawSupport');

const MeasurementSupport = require('../../MapStore2/web/client/components/map/' + mapType + '/MeasurementSupport');
const Locate = require('../../MapStore2/web/client/components/map/' + mapType + '/Locate');
const ScaleBar = require('../../MapStore2/web/client/components/map/' + mapType + '/ScaleBar');
const Overview = require('../../MapStore2/web/client/components/map/' + mapType + '/Overview');

const {changeMeasurementState} = require('../../MapStore2/web/client/actions/measurement');
const {changeLocateState, onLocateError} = require('../../MapStore2/web/client/actions/locate');

const Feature = require('../../MapStore2/web/client/components/map/' + mapType + '/Feature');

const SiraMap = (props) => {
    let features = (props.selFeatures && props.selFeatures.length > 0) ? props.selFeatures : props.features;
    return props.map ?
        (
            <WMap {...props.map} {...props.actions}>
                {
                    props.layers.map((layer, index) => {
                        let options = assign({}, layer, {srs: props.map.projection});
                        if (layer.params) {
                            options.params = layer.type === "wms" && layer.group !== "background" ? assign({}, options.params, props.params) : options.params;
                        } else {
                            options = layer.type === "wms" && layer.group !== "background" ? assign({}, options, {params: props.params}) : options;
                        }

                        return (
                            <Layer key={layer.name || layer.title} position={index} type={layer.type}
                                options={options}/>
                        );
                    })
                }

                <Layer type="vector" position={1} options={{name: "ZONES_IPR"}}>
                    {
                        features.map( (feature) => {
                            return (<Feature
                                key={feature.id}
                                type={feature.type}
                                geometry={feature.geometry}/>);
                        })
                    }
                </Layer>

                <DrawSupport
                    map={props.map}
                    drawStatus={props.drawStatus}
                    drawOwner={props.drawOwner}
                    drawMethod={props.drawMethod}
                    features={props.drawFeatures}
                    onChangeDrawingStatus={props.actions.onChangeDrawingStatus}
                    onEndDrawing={props.actions.onEndDrawing}/>

                <ScaleBar
                    className={'sira-scalebar ol-scale-line'}
                    key="scaleBar"/>

                <Locate
                    key="locate"
                    status={props.locate.state}
                    changeLocateState={props.actions.changeLocateState}
                    onLocateError={props.actions.onLocateError}
                    messages={props.locateMessages}/>

                <MeasurementSupport
                    key="measuresupport"
                    changeMeasurementState={props.actions.changeMeasurementState}
                    measurement={props.measurement}/>

                <Overview
                    key="overview"
                    overviewOpt={{ // overviewOpt accept config param for ol and leflet overview control
                            // refer to https://github.com/Norkart/Leaflet-MiniMap and http://openlayers.org/en/v3.10.1/apidoc/ol.control.OverviewMap.html
                            position: 'bottomright',
                            collapsedWidth: 25,
                            collapsedHeight: 25,
                            zoomLevelOffset: -5,
                            toggleDisplay: true
                    }}// If not passed overview will use osm as default layer
                    layers={[{type: "osm"}]}/>
            </WMap>
        ) : <span/>;
};

SiraMap.propTypes = {
    mapType: React.PropTypes.string,
    drawStatus: React.PropTypes.string,
    drawOwner: React.PropTypes.string,
    drawMethod: React.PropTypes.string,
    drawFeatures: React.PropTypes.array,
    params: React.PropTypes.object,
    locate: React.PropTypes.object,
    locateMessages: React.PropTypes.object,
    features: React.PropTypes.array,
    selFeatures: React.PropTypes.array
};

SiraMap.defaultProps = {
    mapType: 'openlayers',
    drawStatus: null,
    drawOwner: null,
    drawMethod: null,
    drawFeatures: [],
    params: null,
    features: [],
    selFeatures: []
};

module.exports = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        layers: state.layers && state.layers.flat || [],
        drawStatus: state.draw.drawStatus,
        drawOwner: state.draw.drawOwner,
        drawMethod: state.draw.drawMethod,
        drawFeatures: state.draw.features,
        locate: state.locate || {},
        measurement: state.measurement || {},
        features: state.featuregrid && state.featuregrid.features || [],
        selFeatures: state.featuregrid && state.featuregrid.select || null
    };
}, dispatch => {
    return {
        actions: bindActionCreators({
            onMapViewChanges: changeMapView,
            onChangeDrawingStatus: changeDrawingStatus,
            onEndDrawing: endDrawing,
            onClick: clickOnMap,
            changeLocateState: changeLocateState,
            onLocateError: onLocateError,
            changeMeasurementState: changeMeasurementState
        }, dispatch)
    };
})(SiraMap);
