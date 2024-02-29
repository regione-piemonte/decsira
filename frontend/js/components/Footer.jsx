/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const PropTypes = require('prop-types');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const { showHideAccessibilityBox } = require('../actions/footer');
const I18N = require('@mapstore/components/I18N/I18N');
const Accessibility = require('../components/Accessibility');

class Footer extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        showHideAccessibilityBox: PropTypes.func
    };

    static defaultProps = {
        show: false,
        showHideAccessibilityBox: () => {}
    };

    render() {
        return (
            <footer className="footer" role="contentinfo" aria-label="informazioni">
                <div className="container-fluid">
                    <div className="custom footerCsi row-fluid">

                        <div className="container">
                            <div className="row hr">
 
                                <div className="col-md-8 footer-sx">
                                    <p className='small'>Questo servizio è parte di</p>
                                    <a href="https://servizi.regione.piemonte.it" target="_blank"><img alt="sistema piemonte" src="assets/application/conoscenze_ambientali/css/images/logo_servizi_rp.png" /></a>
                                    <a href="#"><img alt="conoscenze ambientali" src="assets/application/conoscenze_ambientali/css/images/logo_footer.png" /></a>
                                  
                                </div>
                                
                                <div className="col-md-4 footer-dx">
                                    <a href="http://www.csipiemonte.it"><img alt="csi piemonte" src="assets/application/conoscenze_ambientali/css/images/logo-csi.svg" /></a>                                
                                </div>
                            </div>
                            
                            <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <ul>
                                        <li><a href="#" onClick={this.showAccessibilityModal} ><I18N.Message msgId={"Footer.accessibility"}/></a></li>
                                        <li><a href="https://servizi.regione.piemonte.it/cookie-policy" target="_blank" title="Si apre in una nuova finestra">Cookie policy <i class="fas fa-external-link-alt"></i></a></li>
                                        <li><a href="#" target="_blank" title="Si apre in una nuova finestra">Dichiarazione di accessibilità <i class="fas fa-external-link-alt"></i></a></li> 
                                        <li><a href="https://www.regione.piemonte.it/web/note-legali-privacy" target="_blank" title="Si apre in una nuova finestra">Note legali e privacy <i class="fas fa-external-link-alt"></i></a></li>
                                        <li><a href="https://www.regione.piemonte.it/web/redazione" target="_blank" title="Si apre in una nuova finestra">Meccanismo di feedback <i class="fas fa-external-link-alt"></i></a></li>
                                        </ul>
                                    </div>
                                   <div className="col-sm-12 col-md-12 col-lg-12 text-right">
                                    <p className='small'>Un servizio a cura della Regione Piemonte P.Iva 02843860012 - CF 80087670016 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Accessibility show={this.props.show} closePanel={ this.props.showHideAccessibilityBox}/>
            </footer>
        );
    }

    showAccessibilityModal = (e) => {
        e.preventDefault();
        this.props.showHideAccessibilityBox();
    }

}

module.exports = Footer;

module.exports = connect((state) => {
    return {
        show: state.footer.showAccessibilityBox
    };
}, dispatch => {
    return bindActionCreators({
        showHideAccessibilityBox
    }, dispatch);
})(Footer);
