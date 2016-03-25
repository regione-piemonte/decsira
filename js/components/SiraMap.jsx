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

const ScaleBar = require("../../MapStore2/web/client/components/map/" + mapType + "/ScaleBar");

const SiraMap = (props) => {
    return props.map ?
        (
            <WMap {...props.map} {...props.actions}>
                {
                    props.layers.map((layer, index) => {
                        let options = assign({}, layer, {srs: props.map.projection});
                        options = layer.type === "wms" ? assign({}, options, {params: props.params}) : options;
                        return (
                            <Layer key={layer.name || layer.title} position={index} type={layer.type}
                                options={options}/>
                        );
                    }
                )}

                <DrawSupport
                    map={props.map}
                    drawStatus={props.drawStatus}
                    drawOwner={props.drawOwner}
                    drawMethod={props.drawMethod}
                    features={props.features}
                    onChangeDrawingStatus={props.actions.onChangeDrawingStatus}
                    onEndDrawing={props.actions.onEndDrawing}/>

                <ScaleBar
                    className={'sira-scalebar ol-scale-line'}
                    key="scaleBar"/>
            </WMap>
        ) : <span/>;
};

SiraMap.propTypes = {
    mapType: React.PropTypes.string,
    drawStatus: React.PropTypes.string,
    drawOwner: React.PropTypes.string,
    drawMethod: React.PropTypes.string,
    features: React.PropTypes.array,
    params: React.PropTypes.object
};

SiraMap.defaultProps = {
    mapType: 'openlayers',
    drawStatus: null,
    drawOwner: null,
    drawMethod: null,
    features: [],
    params: null
};

module.exports = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        layers: state.layers && state.layers.flat || [],
        drawStatus: state.draw.drawStatus,
        drawOwner: state.draw.drawOwner,
        drawMethod: state.draw.drawMethod,
        features: state.draw.features
    };
}, dispatch => {
    return {
        actions: bindActionCreators({
            onMapViewChanges: changeMapView,
            onChangeDrawingStatus: changeDrawingStatus,
            onEndDrawing: endDrawing,
            onClick: clickOnMap
        }, dispatch)
    };
})(SiraMap);
