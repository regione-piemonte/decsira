/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Modal, Button} = require('react-bootstrap');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');
const LoginPanel = React.createClass({

    propTypes: {
        showLoginPanel: React.PropTypes.bool,
        onClosePanel: React.PropTypes.func,
        onConfirm: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            showLoginPanel: false,
            onClosePanel: () => {},
            onConfirm: () => {}
        };
    },

    render() {
        return (
            <div className="infobox-container" style={{display: this.props.showLoginPanel}}>
                <Modal
                    show= {this.props.showLoginPanel}>
                    <Modal.Header closeButton onClick={this.props.onClosePanel}>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4><I18N.Message msgId={"loginpanel.panelMsg"}/></h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onConfirm}><I18N.Message msgId={"loginpanel.okButton"}/></Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

});

module.exports = LoginPanel;
