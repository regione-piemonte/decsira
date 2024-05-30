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
const {Button} = require('react-bootstrap');
const cs = require('classnames');
const isEmpty = require('lodash/isEmpty');
const {
    resetUserIdentity
} = require('../actions/userprofile');

const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const {showHideRightMenu} = require('../actions/header');
const { loadLocale } = require('@mapstore/actions/locale');
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const DownloadResultsComponent = require('./download/DownloadResultsComponent').default;
const { Glyphicon } = require('react-bootstrap');

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
        clickOnCredits: () => {
            dispatch(showHideRightMenu());
        }
    };
})(require('./RightMenu'));

const LangBar = connect((state) => ({
    currentLocale: state.locale && state.locale.current
}), {
    onLanguageChange: loadLocale.bind(null, null)
})(require('./LangBar'));

const LoginNav = connect((state) => ({
    user: state.userprofile.user,
    nav: false,
    renderButtonText: false,
    renderButtonContent: () => {
        let user = state.userprofile.user;
        let btnText = <I18N.Message msgId={"user.login"}/>;
        if (user) {
            btnText = <Glyphicon glyph="user" />;
        }
        return <div>{btnText}<span className="sr-only"><I18N.Message msgId="sr-only.userMenu" /></span></div>;
    },
    bsStyle: "primary",
    showAccountInfo: false,
    showPasswordChange: false,
    showLogout: true,
    renderUnsavedMapChangesDialog: false,
    onCloseUnsavedDialog: () => {},
    className: cs("btn dropdown-toggle sira-login btn-sm", {'login-success': !isEmpty(state.userprofile.user?.name)})
}), (dispatch) => {
    return {
        onLogout: () => {
            dispatch((resetUserIdentity()));
            let newWindow = window.open(ConfigUtils.getConfigProp('logOutService'), '_blank');
            // SiraUtils.sendLogOut();
            setTimeout(() => {
                window.location.href = ConfigUtils.getConfigProp('decsirawebUrl');
                newWindow.close();
            }, 1500);
        }
    };
})(require('./UserMenu'));

class Header extends React.Component {
    static propTypes = {
        showCart: PropTypes.bool,
        cartMappaStyle: PropTypes.string,
        cartListaStyle: PropTypes.string,
        goToDataset: PropTypes.func,
        goToHome: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object,
        router: PropTypes.object
    };

    static defaultProps = {
        cartMappaStyle: 'btn btn-primary',
        cartListaStyle: 'btn btn-primary active',
        showCart: false,
        goToDataset: () => {},
        goToHome: () => {}
    };

    render() {
        return (
            <header>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-4">
                                <div className="navbar-header">
                                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Menu d</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a onClick={this.props.goToHome} href="#" title={LocaleUtils.getMessageById(this.context.messages, "Header.linkTitle")} className="navbar-brand"><I18N.Message msgId={"Header.appAcronym"}/> <I18N.Message msgId={"Header.appName"}/></a>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-5">
                                <div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <Button onClick={() => {this.goToSca(); }} className="btn-link">
                                                <I18N.Message msgId={"Header.info"}/>
                                            </Button>
                                        </li>
                                        <li className="nav-item">
                                            <Button onClick={() => {this.goToMap(); }} className="btn-link">
                                                <I18N.Message msgId={"Header.mappa"}/>
                                            </Button>
                                        </li>
                                        <li className="nav-item">
                                            <Button onClick={() => {this.goToCatalog(); }} className="btn-link">
                                                <I18N.Message msgId={"Header.catalogo"}/>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-lg-3 text-right">
                                <RightMenu />
                                <LangBar />
                                <LoginNav />
                            </div>

                        </div>

                    </div>
                </nav>

                <DownloadResultsComponent />

            </header>
        );
    }

    goToSca = () => {
        this.context.router.history.replace("/sca/");
    };

    goToMap = () => {
        this.context.router.history.replace("/map/");
    };

    goToCatalog = () => {
        this.context.router.history.replace("/dataset/");
    };
}

module.exports = Header;
