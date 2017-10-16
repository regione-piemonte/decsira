/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Tooltip, OverlayTrigger} = require('react-bootstrap');
const Cart = React.createClass({
     propTypes: {
         // showCart: React.PropTypes.bool,
         servicesNumber: React.PropTypes.number,
         showChooseLayersPanel: React.PropTypes.func,
         showCartPanel: React.PropTypes.func,
         onListaClick: React.PropTypes.func,
         mappaStyle: React.PropTypes.string,
         listaStyle: React.PropTypes.string
     },
     contextTypes: {
         router: React.PropTypes.object
     },
     getDefaultProps() {
         return {
             showChooseLayersPanel: () => {},
             showCartPanel: () => {},
             onListaClick: () => {},
             mappaStyle: 'btn btn-primary',
             listaStyle: 'btn btn-primary active'
        };
     },
     render() {
         const mappaStyle = this.props.mappaStyle;
         const listaStyle = this.props.listaStyle;
         let tooltip = <Tooltip id="toolbar-map-layers-button">Vai a Mappa</Tooltip>;
         let listTooltip = <Tooltip id="toolbar-map-layers-button">Vai a Lista</Tooltip>;
         return (
            <div data-toggle="buttons" className="btn-group map-list">
                 <OverlayTrigger key={"cart-item-tp-list"} rootClose placement="left" overlay={listTooltip}>
                     <label className={listaStyle}>
                         <input type="radio" onChange={this.props.onListaClick} checked="" autoComplete="off" id="option1" name="options"/>
                            <i className="fa fa-list" aria-hidden="true"></i> <span className="label-text">Lista</span>
                     </label>
                 </OverlayTrigger>
                 <OverlayTrigger key={"cart-item-tp-map"} rootClose placement="left" overlay={tooltip}>
                     <label className={mappaStyle}>
                         <input type="radio" onChange={this.props.showCartPanel} autoComplete="off" id="option2" name="options"/>
                            <i className="fa fa-map-o" aria-hidden="true"></i>
                            <span className="label-text">Mappa</span>
                            <span className="badge" >{this.props.servicesNumber}</span>
                     </label>
                </OverlayTrigger>
            </div>
        );
     }

 });
module.exports = Cart;
