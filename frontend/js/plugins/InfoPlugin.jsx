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
const {changeMapInfoState} = require('../actions/mapInfo');

const InfoPlugin = connect((state) => ({
    id: "mapInfoButton",
    pressed: state.mapInfo && state.mapInfo.infoEnabled,
    key: "infoButton",
    isButton: true,
    tooltip: <Tooltip id="InfoTooltip"><Message msgId="info.tooltip"/></Tooltip>,
    glyphicon: "map-marker",
    defaultStyle: "primary",
    pressedStyle: "success",
    btnConfig: {"className": "square-button"},
    tooltipPlace: "left"
}), {
    onClick: changeMapInfoState
})(require('../../MapStore2/web/client/components/buttons/ToggleButton'));

module.exports = {
    InfoPlugin: assign(InfoPlugin, {
        Toolbar: {
            name: 'info',
            position: 2,
            tool: true,
            tooltip: "info.tooltip"
        }
    }),
    reducers: {mapInfo: require('../reducers/mapInfo')}
};
