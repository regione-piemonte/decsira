const PropTypes = require('prop-types');
const I18N = require('@mapstore/components/I18N/I18N');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class RightMenu extends React.Component {
    static propTypes = {
        open: PropTypes.bool,
        iconStyleOpen: PropTypes.string,
        iconStyleClose: PropTypes.string,
        clickOnIconButton: PropTypes.func,
        clickOnHelp: PropTypes.func,
        clickOnCredits: PropTypes.func,
        clickOnSistemaCA: PropTypes.func
    };

    static defaultProps = {
        open: false,
        iconStyleOpen: "glyphicon  glyphicon-question-sign",
        iconStyleClose: "glyphicon  glyphicon-question-sign",
        clickOnIconButton: () => {},
        clickOnHelp: () => {},
        clickOnCredits: () => {},
        clickOnSistemaCA: () => {}
    };

    static contextTypes = {
        messages: PropTypes.object,
        router: PropTypes.object
    };

    renderIconStyle = () => {
        let style = this.props.open ? this.props.iconStyleOpen : this.props.iconStyleClose;
        return style;
    };

    goToCredits = () => {
        this.props.clickOnCredits();
        this.context.router.history.push("/credits/");
    };

    renderMenu = () => {
        let toReturn = this.props.open ?
            (
                <div className="navbar-on" id="offcanvas-sidebar">
                    <ul id="menu" className="nav navbar-nav navbar-right">
                        <li tabIndex="0" data-menuanchor="piemontepay" onClick={this.goToCredits} onKeyPress={this.props.clickOnCredits}><I18N.Message msgId={"RightMenu.CreditsTitle"}/></li>
                        <li tabIndex="0" data-menuanchor="pagamenti" onClick={this.props.clickOnHelp} onKeyPress={this.props.clickOnHelp}><I18N.Message msgId={"RightMenu.HelpTitle"}/></li>
                    </ul>
                </div>
            ) : '';
        return toReturn;
    };

    render() {
        return (
            <div>
                <button className="btn btn-link offcanvas-toggle" aria-expanded="false" onClick={this.props.clickOnIconButton}>
                    <span className="sr-only"><I18N.Message msgId={"sr-only.navigationMenu"}/></span>
                    <span className={this.renderIconStyle()}></span>
                </button>
                {this.renderMenu()}
            </div>
        );
    }
}

module.exports = RightMenu;
