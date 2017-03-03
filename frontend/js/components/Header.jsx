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
const {showPanel, hidePanel, removeServiceFromCart, prepareDataToMap} = require('../actions/cart');
const {toggleAddMap, addLayersInCart} = require('../actions/addmap');

const LoginNav = connect((state) => ({
    user: state.userprofile.user,
    nav: false,
    renderButtonText: false,
    renderButtonContent: () => {return <Glyphicon glyph="user" />; },
    bsStyle: "primary",
    showAccountInfo: false,
    showPasswordChange: false,
    showLogout: true,
    className: "btn btn-default btn-login dropdown-toggle"
}), {
      onShowLogin: showLoginPanel,
      onLogout: () => {
          window.location.href = ConfigUtils.getConfigProp('decsirawebUrl');
      }
})(require('../../MapStore2/web/client/components/security/UserMenu'));

const AddMapModal = connect(({addmap = {}}) => ({
         error: addmap.error,
         records: addmap.records,
         loading: addmap.loading,
         // node: demoNode,
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
        },
        removeService: (id) => {
            dispatch(removeServiceFromCart(id));
            dispatch(removeLayersFromCart(id));
        },
        goToMap: () => {
            dispatch(prepareDataToMap());
            dispatch(hidePanel());
        }
    }; })(require('./CartPanel'));

const Cart = connect((state) => ({
    showCart: false,
    servicesNumber: state.cart.servicesNumber
}),
(dispatch) => {
    return {
    showCartPanel: () => {
        dispatch(showPanel());
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
    propTypes: {
        showCart: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            showCart: false
       };
    },

    renderCart() {
        return this.props.showCart ? <Cart /> : null;
    },

    render() {
        return (
            <div className="navbar-header">
                <header className="navbar">
                    <div className="row-fluid">

                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8 testalino-sx">
                            <h1><a href="http://www.sistemapiemonte.it/cms/privati/" title="Home page Sistemapiemonte"><span>SP</span></a></h1>
                            <h2><span>Sistema</span> Conoscenze Ambientali</h2>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 testalino-dx">
                            <div className="pull-right">
                                {this.renderCart()}
                                {/* cart }
                                <div data-toggle="buttons" className="btn-group map-list">
                                    <label className="btn btn-primary active">
                                        <input type="radio" checked="" autoComplete="off" id="option1" name="options" >
                                            <i className="fa fa-list" aria-hidden="true"></i>
                                            <span className="label-text">Lista</span>
                                        </input>
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" autoComplete="off" id="option2" name="options">
                                            <i className="fa fa-map-o" aria-hidden="true"></i>
                                            <span className="label-text">Mappa</span>
                                            <span className="badge">4</span>
                                        </input>
                                    </label>
                                </div>
                                { cart end */}
                                <LoginNav />
                            </div>
                            <a className="offcanvas-toggle" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <i className="fa fa-bars fa-2x"></i>
                            </a>

                            <div className="collapse navbar-collapse" id="offcanvas-sidebar">
                                <ul id="menu" className="nav navbar-nav navbar-right">
                                    <li data-menuanchor="home"><a href="#">Sistema Conoscenze Ambientali</a></li>
                                    <li data-menuanchor="piemontepay"><a href="#">Credits</a></li>
                                    <li data-menuanchor="pagamenti"><a href="#">Help</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </header>
                <AddMapModal />
                <CartPanel />
                <LoginPanel />
            </div>
    );
    }
});

module.exports = Header;
