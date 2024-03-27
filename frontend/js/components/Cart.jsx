const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { Tooltip, OverlayTrigger } = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');

class Cart extends React.Component {
    static propTypes = {
        // showCart: React.PropTypes.bool,
        servicesNumber: PropTypes.number,
        showChooseLayersPanel: PropTypes.func,
        showCartPanel: PropTypes.func
        
    };

    static contextTypes = {
        router: PropTypes.object
    };

    static defaultProps = {
        showChooseLayersPanel: () => {},
        showCartPanel: () => {}
    };

    render() {
        return (
            <span>Oggetti caricati in mappa: <button onClick={this.props.showCartPanel}>{this.props.servicesNumber}</button></span>
        );
    }
}

module.exports = Cart;
