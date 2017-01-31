/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ModalDialog = require('react-bootstrap/lib/ModalDialog');
const Draggable = require('react-draggable');

module.exports = React.createClass({
    render() {
        return <Draggable handle=".modal-title, .modal-header"><ModalDialog {...this.props} id="add-map-modal"/></Draggable>;
    }
});
