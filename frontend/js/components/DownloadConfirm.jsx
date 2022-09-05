const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { Modal, Button } = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');

class DownloadConfirm extends React.Component {
    static propTypes = {
        showConfirm: PropTypes.bool,
        onClose: PropTypes.func,
        onConfirm: PropTypes.func
    };

    static defaultProps = {
        showConfirm: false,
        onClose: () => {},
        onConfirm: () => {}
    };

    render() {
        return (
            <div className="infobox-container" style={{display: this.props.showConfirm}}>
                <Modal
                    show= {this.props.showConfirm}>
                    <Modal.Header closeButton onClick={this.props.onClose}>
                        <Modal.Title><I18N.Message msgId="DownloadConfirm.title"/></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4><I18N.Message msgId="DownloadConfirm.message"/></h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onConfirm}><I18N.Message msgId="DownloadConfirm.confirm"/></Button>
                        <Button onClick={this.props.onClose}><I18N.Message msgId="DownloadConfirm.close"/></Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

module.exports = DownloadConfirm;
