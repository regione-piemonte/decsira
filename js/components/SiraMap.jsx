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

const {changeMapView} = require('../../MapStore2/web/client/actions/map');

const {
    changeDrawingStatus,
    endDrawing
} = require('../../MapStore2/web/client/actions/draw');

const mapType = "openlayers";
const WMap = require('../../MapStore2/web/client/components/map/' + mapType + '/Map');
const Layer = require('../../MapStore2/web/client/components/map/' + mapType + '/Layer');
require('../../MapStore2/web/client/components/map/' + mapType + '/plugins/index');

const DrawSupport = require('../../MapStore2/web/client/components/map/' + mapType + '/DrawSupport');

const SiraMap = (props) => {
    return props.map ?
        (
            <WMap {...props.map} {...props.actions}>
                {props.layers.map((layer, index) =>
                    <Layer key={layer.name} position={index} type={layer.type}
                        options={assign({}, layer, {params: {authkey: props.authParam.authkey}})}/>
                )}
                <DrawSupport
                    map={props.map}
                    drawStatus={props.drawStatus}
                    drawOwner={props.drawOwner}
                    drawMethod={props.drawMethod}
                    features={props.features}
                    onChangeDrawingStatus={props.actions.onChangeDrawingStatus}
                    onEndDrawing={props.actions.onEndDrawing}/>
            </WMap>
        ) : <span/>;
};

SiraMap.propTypes = {
    mapType: React.PropTypes.string,
    drawStatus: React.PropTypes.string,
    drawOwner: React.PropTypes.string,
    drawMethod: React.PropTypes.string,
    features: React.PropTypes.array,
    authParam: React.PropTypes.object
};

SiraMap.defaultProps = {
    mapType: 'openlayers',
    drawStatus: null,
    drawOwner: null,
    drawMethod: null,
    features: [],
    authParam: null
};

module.exports = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        layers: state.config && state.config.layers || [],
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
            onEndDrawing: endDrawing
        }, dispatch)
    };
})(SiraMap);
