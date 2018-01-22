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

const Credits = React.createClass({
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
                                  <I18N.Message msgId={"RightMenu.CreditsTitle"}/>
                              </span>
                              <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                          </span>}>
                          <h3>Credits</h3>
                          <p>Il Sistema Conoscenze Ambientali, realizzato  da CSI Piemonte per  conto  di  Regione  Piemonte, utilizza il seguente software open source <a href="https://mapstore.geo-solutions.it/mapstore/" target="_blank"> Mapstore2</a>.</p>
                          <h3>Copyright</h3>
                          <p>
                              Tranne per i materiali specificatamente ed espressamente indicati come diversamente tutelati, i contenuti del sito sono soggetti alla licenza Creative Commons Attribution CC BY 2.5 , in conformità con la normativa regionale sugli open data
                              (<a href="http://arianna.consiglioregionale.piemonte.it/ariaint/TESTO?LAYOUT=PRESENTAZIONE&&TIPODOC=LEGGI&&LEGGE=24&&LEGGEANNO=2011" target="_blank"> l.r. 24/2011</a> e <a href="http://www.regione.piemonte.it/governo/bollettino/abbonati/2012/45/attach/dgr_04687_815_08102012.pdf" target="_blank"> D.G.R. 22-4687 del 8 ottobre 2012 </a>).
                              Immagini, filmati, marchi, loghi, banner, testate, domini, e ogni altro segno distintivo che compaiono in questo sito sono di proprietà della Regione Piemonte e/o di terzi e sono protetti ai sensi della vigente normativa sul diritto d'autore, sui brevetti, e su quelle relative alla proprietà intellettuale. Le basi di dati, i geoservizi e le mappe sono di proprietà dei rispettivi titolari, indicati nei metadati, e sono soggetti alle licenze associate.
                          </p>
                          <h3>Utilizzo del Sito</h3>
                          <p>In nessun caso Regione Piemonte potrà essere ritenuta responsabile dei danni di qualsiasi natura causati direttamente o indirettamente dall'accesso al Sistema Conoscenze Ambientali, dall'utilizzo degli strumenti interattivi, dall'incapacità o impossibilità di accedervi, dall'utilizzo off-line dei contenuti scaricati. Regione Piemonte si riserva il diritto di modificare i contenuti del sito (testi, immagini, dataset, geoservizi, ...) e delle note legali in qualsiasi momento e senza alcun preavviso. Nonostante si presti grande attenzione all’esattezza delle informazioni pubblicate su questo sito, fedeltà, esattezza, attualità, affidabilità e completezza dei contenuti restano responsabilità dei titolari indicati nei metadati. L’utente si impegna a non abusare del servizio offerto ed a rinunciare ad un suo utilizzo per pratiche illegali.</p>
                          <h3>Segnalazione di Errori</h3>
                          <p>Errori o malfunzionamenti del Sistema Conoscenze Ambientali possono essere segnalati a <a href="mailto:redazione@html.it">assistenza.sira@regione.piemonte.it</a> .</p>
                  </Panel>
            </Draggable>
        </div>
          );
    }
});
module.exports = Credits;
