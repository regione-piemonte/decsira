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
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');

const SistemaConoscenzeAmbientaliBox = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        panelStyle: React.PropTypes.object,
        show: React.PropTypes.string,
        closePanel: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            title: 'title',
            show: 'none',
            panelStyle: {
                      height: "500px",
                      width: "550px",
                      zIndex: 100,
                      position: "absolute",
                      overflow: "auto"
                  },
            closePanel: () => {}
        };
    },

    render() {
        return (
          <div className="infobox-container" style={{display: this.props.show}}>
          <Draggable start={{x: 300, y: 100}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
              <Panel
                  className = "infobox-content toolbar-panel modal-dialog-container react-draggable"
                  style={this.props.panelStyle}
                  header={
                      <span>
                          <span className="snapshot-panel-title">
                              <I18N.Message msgId={"RightMenu.ConoscenzeAmbTitle"}/>
                          </span>
                          <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                      </span>}>
                      <h3>Presentazione</h3>
                      <p>
                          Il Sistema Conoscenze Ambientali è una piattaforma di fruizione delle conoscenze alfanumeriche e geografiche prodotte nel contesto del SIRA Piemonte (Sistema Informativo Ambientale della Regione Piemonte).
                          Si configura come una rete di cooperazione tra soggetti produttori e/o detentori di informazioni di interesse ambientale (Regione, Province e ARPA) e nasce allo scopo di supportare lo sviluppo delle conoscenze ambientali per le attività di: governo e pianificazione partecipata; promozione della competitività del territorio; sensibilizzazione e coinvolgimento (empowerment); accessibilità alle informazioni pubbliche.
                      </p>
                      <p>
                          Il sistema &egrave; rivolto a fruitori pubblici e privati diversi:
                      </p>
                      <ul>
                          <li>Pubblica Amministrazione (Regione, Province, ARPA, &hellip;)</li>
                          <li>Cittadini</li>
                      </ul>
                      <p>
                          I dati messi a disposizione nel sistema sono raccolti attraverso processi molteplici: Dematerializzazione procedimenti amministrativi; Sistemi di monitoraggio (manuali o automatici) stato/pressione ambiente; Raccolta dati su specifiche matrici (es. Osservatori Rifiuti/Acque&hellip;), fattori di pressione/rischio, &hellip;<br />
                          Il sistema permette di accedere alla consultazione dei dati attraverso ricerca libera e/o tramite un accesso organizzato in categorie tematiche (cataloghi dati come Catalogo Direttiva INSPIRE e Catalogo Informazioni Ambientali; categorie tematiche ambientali - Aria, Bonifiche, Imprese autorizzate in campo ambientale, Rifiuti, etc.).
                      </p>
                      <p>
                          Per ogni dato viene resa disponibile:<br />
                          <ul>
                              <li>la descrizione sintetica del singolodato/ dataset e vista tematica;</li>
                              <li>la scheda metadati pubblicata sul Geoportale dell&rsquo;ente fornitore e/o distributore del dato (servizio CSW);</li>
                          </ul>
                          con le specifiche funzioni di consultazione quali:
                      </p>
                      <ul>
                          <li>semplice consultazione su Mappa dei dati geografici (servizi WMS)</li>
                          <li>consultazione di informazioni di dettaglio sui dataset basate su ricerche alfanumeriche e/o geografiche sui dati che restituiscono viste di tipo reportistico e singole schede di dettaglio sugli oggetti (servizi WFS di tipo complex feature)</li>
                          <li>I dati della vista report - dati di sintesi - sono esportabili in formato csv e/o&nbsp; Shapefile ESRI;</li>
                          <li>la scheda di dettaglio &egrave; esportabile in formato pdf</li>
                          <li>Tutti i dati messi a disposizione nella piattaforma sono esposti e/o usano servizi di interoperabilità standard OGC (Open Spatial Consortium) come previsto dalla Direttiva INSPIRE.</li>
                      </ul>
                </Panel>
              </Draggable>
            </div>
          );
    }
});
module.exports = SistemaConoscenzeAmbientaliBox;
