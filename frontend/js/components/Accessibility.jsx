const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Panel} = require('react-bootstrap');
const Draggable = require('react-draggable');
const {getWindowSize} = require('@mapstore/utils/AgentUtils');

class Accessibility extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        show: PropTypes.string,
        closePanel: PropTypes.func
    };

    static defaultProps = {
        title: 'title',
        show: 'none',
        closePanel: () => {}
    };

    render() {
        const {maxWidth, maxHeight} = getWindowSize();
        return (
            <Draggable bounds={{left: 0, top: 0, right: maxWidth - 100, bottom: maxHeight - 100}} start={{x: 300, y: 100}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div className="scheda-accessibility" style={{display: this.props.show}} role="contentinfo" arial-label="credits">
                    <Panel
                        className="info-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    Accessibilità
                                </span>
                                <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}>
                        <Panel className="accessibility-content infobox-content">
                            <h3>Accessibilità</h3>
                            <p>Regione Piemonte pone grande attenzione al tema dell'accessibilità delle informazioni.</p>
                            <p>La pubblicazione sul sito AGID è in corso. Il link sarà aggiornato non appena disponibile.</p>
                            <p>
                            Per segnalare casi di mancata conformità ai requisiti di accessibilità, per richiedere informazioni e contenuti che siano stati esclusi dall'ambito di applicazione della Direttiva UE 2016/2102 scrivere a <a href="mailto:sita@regione.piemonte.it">sita@regione.piemonte.it</a>
                            </p>
                            <p>
                            Grazie, il vostro contributo è prezioso.
                            </p>
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
        /*
        <p>Consulta la  <a href="#" target="_blank">Dichiarazione di accessibilità rilasciata dall'Agenzia per l'Italia Digitale (AgID)</a></p>
         */
    }
}

module.exports = Accessibility;
