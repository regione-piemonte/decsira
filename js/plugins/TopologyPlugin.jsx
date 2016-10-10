/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const {Tooltip} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/plugins/locale/Message');

const assign = require('object-assign');
const {changeTopologyMapInfoState} = require('../actions/mapInfo');

const TopologyInfo = connect((state) => ({
    pressed: state.mapInfo && state.mapInfo.topologyInfoEnabled,
    key: "topologyInfoButton",
    glyphicon: "glyphicon glyphicon-picture",
    isButton: true,
    tooltip: <Tooltip id="InfoTooltip"><Message msgId="topology.tooltip"/></Tooltip>,
    defaultStyle: "primary",
    pressedStyle: "success",
    btnConfig: {"className": "square-button"},
    tooltipPlace: "left"
}), {
    onClick: changeTopologyMapInfoState
})(require('../../MapStore2/web/client/components/buttons/ToggleButton'));

module.exports = {
    TopologyPlugin: assign(TopologyInfo, {
        Toolbar: {
            name: 'topology',
            position: 3,
            tool: true
        }
    }),
    reducers: {}
};
