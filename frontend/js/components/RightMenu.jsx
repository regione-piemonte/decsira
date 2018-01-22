/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const RightMenu = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        iconStyleOpen: React.PropTypes.string,
        iconStyleClose: React.PropTypes.string,
        clickOnIconButton: React.PropTypes.func,
        clickOnHelp: React.PropTypes.func,
        clickOnCredits: React.PropTypes.func,
        clickOnSistemaCA: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            open: false,
            iconStyleOpen: "fa fa-times fa-2x",
            iconStyleClose: "fa fa-ellipsis-v fa-2x",
            clickOnIconButton: () => {},
            clickOnHelp: () => {},
            clickOnCredits: () => {},
            clickOnSistemaCA: () => {}
       };
    },

    renderIconStyle() {
        let style = this.props.open ? this.props.iconStyleOpen : this.props.iconStyleClose;
        return style;
    },

    renderMenu() {
        let toReturn = this.props.open ?
        (
            <div className="navbar-on" id="offcanvas-sidebar">
                <ul id="menu" className="nav navbar-nav navbar-right">
                    <li data-menuanchor="home" onClick={this.props.clickOnSistemaCA} >Sistema Conoscenze Ambientali</li>
                    <li data-menuanchor="piemontepay" onClick={this.props.clickOnCredits}>Credits e Copyright</li>
                    <li data-menuanchor="pagamenti" onClick={this.props.clickOnHelp}>Help</li>
                </ul>
            </div>
        ) : '';
        return toReturn;
    },

    render() {
        return (
            <div>
                <a className="offcanvas-toggle" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <i className={this.renderIconStyle()} onClick={this.props.clickOnIconButton}></i>
                </a>
                {this.renderMenu()}
            </div>
    );
    }
});

module.exports = RightMenu;
