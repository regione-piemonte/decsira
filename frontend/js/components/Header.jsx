const PropTypes = require('prop-types');
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
const cs = require('classnames');
const isEmpty = require('lodash/isEmpty');
const {
    showLoginPanel,
    hideLoginPanel
} = require('../actions/userprofile');

// const SiraUtils = require('../utils/SiraUtils');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const {showPanel, hidePanel, removeServiceFromCart, removeLayersFromCart, prepareDataToMap} = require('../actions/cart');
const {showHideRightMenu, showHideRightConoscenzaAmbBox, showHideCreditsBox} = require('../actions/header');
const { loadLocale } = require('@mapstore/actions/locale');
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

const SistemaConoscenzeAmbientaliBox = connect((state) => ({
    show: state.header?.showSistemaConoscenzeAmbientaliBox
}), (dispatch) => {
    return {
        closePanel: () => {
            dispatch(showHideRightConoscenzaAmbBox());
        }
    };
})(require('./SistemaConoscenzeAmbientaliBox'));

const Credits = connect((state) => ({
    show: state.header?.showCreditsBox
}), (dispatch) => {
    return {
        closePanel: () => {
            dispatch(showHideCreditsBox());
        }
    };
})(require('./Credits'));

const RightMenu = connect((state) => ({
    open: state.header?.showRightMenu
}), (dispatch) => {
    return {
        clickOnIconButton: () => {
            dispatch(showHideRightMenu());
        },
        clickOnHelp: () => {
            let helpUrl = ConfigUtils.getConfigProp('decsiraHelpUrl');
            window.open(helpUrl, '_blank');
        },
        clickOnSistemaCA: () => {
            dispatch(showHideRightConoscenzaAmbBox());
            dispatch(showHideRightMenu());
        },
        clickOnCredits: () => {
            dispatch(showHideCreditsBox());
            dispatch(showHideRightMenu());
        }
    };
})(require('./RightMenu'));

const LangBar = connect((state) => ({
    currentLocale: state.locale && state.locale.current
}), {
    onLanguageChange: loadLocale.bind(null, null)
})(require('@mapstore/components/I18N/LangBar'));

const LoginNav = connect((state) => ({
    user: state.userprofile.user,
    nav: false,
    renderButtonText: false,
    renderButtonContent: () => { return <div><Glyphicon glyph="user" /><span className="sr-only"><I18N.Message msgId="sr-only.userMenu" /></span></div>; },
    bsStyle: "primary",
    showAccountInfo: false,
    showPasswordChange: false,
    showLogout: true,
    renderUnsavedMapChangesDialog: false,
    onCloseUnsavedDialog: () => {},
    onLogout: () => {
        window.location.href = ConfigUtils.getConfigProp('logOutService');
    },
    className: cs("btn btn-default btn-login dropdown-toggle sira-login", {'login-success': !isEmpty(state.userprofile.user?.name)})
}), {
    onShowLogin: showLoginPanel
})(require('@mapstore/components/security/UserMenu'));

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
    };
})(require('./CartPanel'));

const Cart = connect((state) => ({
    showCart: false,
    servicesNumber: state.cart.servicesNumber
}),
(dispatch) => {
    return {
        showCartPanel: () => {
            dispatch(showPanel());
        }
    };
})(require('./Cart'));

const LoginPanel = connect((state) => ({
    showLoginPanel: state.userprofile.showLoginPanel
}), {
    onClosePanel: hideLoginPanel,
    onConfirm: () => {
        window.location.href = ConfigUtils.getConfigProp('secureDecsirawebUrl');
    }
})(require('./LoginPanel'));


class Header extends React.Component {
    static propTypes = {
        showCart: PropTypes.bool,
        cartMappaStyle: PropTypes.string,
        cartListaStyle: PropTypes.string,
        goToDataset: PropTypes.func,
        goToHome: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        cartMappaStyle: 'btn btn-primary',
        cartListaStyle: 'btn btn-primary active',
        showCart: false,
        goToDataset: () => {},
        goToHome: () => {}
    };

    renderCart = () => {
        const lStyle = this.props.cartListaStyle;
        const mStyle = this.props.cartMappaStyle;
        return this.props.showCart ? <Cart onListaClick={this.props.goToDataset} listaStyle={lStyle} mappaStyle={mStyle}/> : null;
    };

    render() {
        return (
            <div className="navbar-header">
                <header className="navbar">
                    <div className="row-fluid">

                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8 testalino-sx">
                            <div className="navbar-header-title"><a onClick={this.props.goToHome} href="#" title={LocaleUtils.getMessageById(this.context.messages, "Header.linkTitle")}><span><I18N.Message msgId={"Header.appAcronym"}/></span> <I18N.Message msgId={"Header.appName"}/></a></div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 testalino-dx">
                            <div className="pull-right">
                                {this.renderCart()}
                                <LoginNav />
                                <LangBar/>
                            </div>
                            <RightMenu />
                        </div>

                    </div>
                </header>
                <SistemaConoscenzeAmbientaliBox />
                <Credits />
                <CartPanel />
                <LoginPanel />
            </div>
        );
    }
}

module.exports = Header;
