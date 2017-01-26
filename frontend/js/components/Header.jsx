/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');

// require('../../assets/global/css/skin.css');
// require('../../assets/application/conoscenze_ambientali/css/skin-home.css');
// require('../../assets/application/conoscenze_ambientali/css/skin-interna.css');

const {Glyphicon} = require('react-bootstrap');
const {logoutWithReload} = require('../../MapStore2/web/client/actions/security');
const {setControlProperty} = require('../../MapStore2/web/client/actions/controls');
const {showLoginPanel, hideLoginPanel} = require('../actions/userprofile');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const LoginNav = connect((state) => ({
    user: state.userprofile.user,
    nav: false,
    renderButtonText: false,
    renderButtonContent: () => {return <Glyphicon glyph="user" />; },
    bsStyle: "primary",
    showAccountInfo: false,
    showPasswordChange: false,
    showLogout: true,
    className: "square-button"
}), {
      // onShowLogin: setControlProperty.bind(null, "LoginForm", "enabled", true),
      onShowLogin: showLoginPanel,
      onShowAccountInfo: setControlProperty.bind(null, "AccountInfo", "enabled", true),
      onShowChangePassword: setControlProperty.bind(null, "ResetPassword", "enabled", true),
      onLogout: () => {
          window.location.href = ConfigUtils.getConfigProp('decsirawebUrl');
      }
})(require('../../MapStore2/web/client/components/security/UserMenu'));

const LoginPanel = connect((state) => ({
    showLoginPanel: state.userprofile.showLoginPanel
}), {
    onClosePanel: hideLoginPanel,
    onConfirm: () => {
        window.location.href = ConfigUtils.getConfigProp('secureDecsirawebUrl');
    }
})(require('./LoginPanel'));

const Header = React.createClass({
    render() {
        return (
        <div id="header-servizio" className="container-fluid">
        <div className="row-fluid">
        <div className="container testalino">
            <div className="row">

                <div id="portalHeader">
                    <noscript className="alert_js">
                    <p>ATTENZIONE! Il browser in uso non supporta le applicazioni Javascript.<br />
                    Per usufruire in maniera completa di alcuni servizi presenti in RuparPiemonte,
                    potrebbe essere necessario l&acute;utilizzo dei Javascript.</p></noscript>

                    <div className="header" >
                        <h1><a href="http://www.sistemapiemonte.it/cms/privati/" title="Home page Sistemapiemonte">SP</a></h1>
                    </div>

                </div>
                <div id="sx">
                </div>

                <div id="dx">
                </div>
                <div className="titoloServizio col-lg-11 col-md-11 col-sm-11 col-xs-11">
                    <h2>Sira</h2>
                </div>
                <LoginNav />
                <LoginPanel />
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 menu-righe">
                  <button className="pimenu-navbar-toggle pull-right" type="button" data-toggle="collapse" data-target=".pimenu-navbar-collapse">
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
                </div>

                <nav className="pimenu-navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                    <li className="item-113"><a id="profileALink" href="#">Profilo A</a></li>
                    <li className="item-125"><a id="profileBLink" href="#">Profilo B</a></li>
                        </ul>
                </nav>


            </div>
        </div>
        </div>
    );
    }
});

module.exports = Header;
