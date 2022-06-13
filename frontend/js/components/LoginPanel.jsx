const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Modal, Button} = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');

class LoginPanel extends React.Component {
    static propTypes = {
        showLoginPanel: PropTypes.bool,
        onClosePanel: PropTypes.func,
        onConfirm: PropTypes.func
    };

    static defaultProps = {
        showLoginPanel: false,
        onClosePanel: () => {},
        onConfirm: () => {}
    };

    render() {
        return (
            <div className="infobox-container" style={{display: this.props.showLoginPanel}}>
                <Modal
                    show= {this.props.showLoginPanel}>
                    <Modal.Header closeButton onClick={this.props.onClosePanel}>
                        <Modal.Title><I18N.Message msgId={"loginpanel.title"}/></Modal.Title>
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
}

module.exports = LoginPanel;
