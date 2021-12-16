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
                            <div className="row">
                                <div className="col-md-4 footer-sx">
                                    <a href="#"><img alt="conoscenze ambientali" src="assets/application/conoscenze_ambientali/css/images/logo_footer.png" /></a>
                                </div>
                                <div className="col-md-4 text-center">
                                    <a href="http://www.sistemapiemonte.it/cms/privati/cookies-policy" target="_blank">Cookie policy</a><br/><br/>
                                    <a href="#" onClick={this.showAccessibilityModal} >Accessibilità</a>
                                </div>
                                <div className="col-md-4 footer-dx">
                                    <a href="https://servizi.regione.piemonte.it" target="_blank"><img alt="sistema piemonte" src="assets/application/conoscenze_ambientali/css/images/logo_servizi_rp.png" /></a>
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
