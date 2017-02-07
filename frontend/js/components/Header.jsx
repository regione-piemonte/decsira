/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');

const {Glyphicon} = require('react-bootstrap');
const {
    showLoginPanel,
    hideLoginPanel
} = require('../actions/userprofile');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const {showPanel, hidePanel, addServiceIncart, refreshNumberOfServices} = require('../actions/cart');
const {toggleAddMap, loadNodeMapRecords, addLayersInCart} = require('../actions/addmap');

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
      onShowLogin: showLoginPanel,
      onLogout: () => {
          window.location.href = ConfigUtils.getConfigProp('decsirawebUrl');
      }
})(require('../../MapStore2/web/client/components/security/UserMenu'));

// only dev
const demoNode = {
    "id": 41297,
    "functions": [
        {
         "type": "Mappa",
         "url": "http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_cds?"
    }],
    "layers": [{
        "id": "41297_0",
        "name": "41297_0",
        "type": "wms",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_cds?"
    }],
    "name": 41297,
    "text": "Dato relativo al Monitoraggio del Consum",
    "title": "Consumo di suolo (Aggiornamento 2013)",
    "type": "node"
};

// only dev
const demoNode2 = {
    "id": 41322,
    "functions": [
        {
         "type": "Mappa",
         "url": "http://geomap.reteunitaria.piemonte.it/ws/esiri/rp-01/siriogc/wms_corpi_idrici_wfd?"

    }],
    "layers": [{
        "id": "41322_0",
        "name": "41322_0",
        "type": "wms",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/esiri/rp-01/siriogc/wms_corpi_idrici_wfd?"
    }],
    "name": 41322,
    "text": "Rappresentazione spaziale dei corpi idrici sotterranei (GWB GroundWater Body) che sono costituiti dai sistemi acquiferi superficiali, di fondovalle e profondi  ovvero di volumi di acqua con simili caratteristiche qualitative e quantitative, relativi al territorio di pianura della Regione Piemonte alla scala 1:250.000.",
    "title": "Corpi idrici sotterranei GWB ai sensi delle Direttive Europee 2000/60/CE (WFD) e 2006/118/CE",
    "type": "node"
};

const AddMapModal = connect(({addmap = {}}) => ({
         error: addmap.error,
         records: addmap.records,
         loading: addmap.loading,
         node: demoNode,
         show: addmap.show
    }), {
    close: toggleAddMap.bind(null, false),
    addLayers: addLayersInCart
})(require('../components/addmap/AddMapModal'));

const CartPanel = connect((state) => ({
        showPanel: state.cart.showPanel,
        layers: state.cart.layers,
        wmsservices: state.cart.wmsservices
    }), (dispatch) => {
        return {
        onClosePanel: () => {
            dispatch(hidePanel());
        }
    }; })(require('./CartPanel'));

const Cart = connect((state) => ({
    servicesNumber: state.cart.servicesNumber
}),
(dispatch) => {
    return {
    showCartPanel: () => {
        dispatch(showPanel());
    },
    showChooseLayersPanel: () => {
        // charge node in cart
        dispatch(addServiceIncart(demoNode));
        // use AddMapModal actions ...
        dispatch(toggleAddMap(true));
        dispatch(loadNodeMapRecords(demoNode));
        dispatch(refreshNumberOfServices());
    },
    // todo remove
    showChooseLayersPanel2: () => {
        // charge node in cart
        dispatch(addServiceIncart(demoNode2));
        // use AddMapModal actions ...
        dispatch(toggleAddMap(true));
        dispatch(loadNodeMapRecords(demoNode2));
        dispatch(refreshNumberOfServices());
    }
}; })(require('./Cart'));

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
                <Cart />
                <AddMapModal />
                <nav className="pimenu-navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                    <li className="item-113"><a id="profileALink" href="#">Profilo A</a></li>
                    <li className="item-125"><a id="profileBLink" href="#">Profilo B</a></li>
                        </ul>
                </nav>


            </div>
        </div>
        <CartPanel />
        </div>
    );
    }
});

module.exports = Header;
