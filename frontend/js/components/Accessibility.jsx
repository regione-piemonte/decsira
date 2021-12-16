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

class Accessibility extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        show: PropTypes.string,
        closePanel: PropTypes.func
    };

    static defaultProps = {
        title: 'title',
        show: false,
        closePanel: () => {}
    };

    render() {
        return (
            <div className="scheda-accessibility" style={{display: this.props.show}}>
                <Modal
                    show= {this.props.show}>
                    <Modal.Header closeButton onClick={this.props.closePanel}>
                        <Modal.Title>Accessibilità</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Accessibilità</h3>
                        <p>Regione Piemonte pone grande attenzione al tema dell'accessibilità delle informazioni.</p>
                        <p>La pubblicazione sul sito AGID è in corso. Il link sarà aggiornato non appena disponibile.</p>
                        <p>
                        Per segnalare casi di mancata conformità ai requisiti di accessibilità, per richiedere informazioni e contenuti che siano stati esclusi dall'ambito di applicazione della Direttiva UE 2016/2102 scrivere a <a href="mailto:sita@regione.piemonte.it">sita@regione.piemonte.it</a>
                        </p>
                        <p>
                        Grazie, il vostro contributo è prezioso.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closePanel}>Chiudi</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

module.exports = Accessibility;
