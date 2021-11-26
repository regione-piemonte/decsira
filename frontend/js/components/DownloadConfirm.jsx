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
                        <Modal.Title>Scarica allegato</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>L'allegato sarà scaricato in locale, vuoi procedere?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onConfirm}>Si</Button>
                        <Button onClick={this.props.onClose}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

module.exports = DownloadConfirm;
