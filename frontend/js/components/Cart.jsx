/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Cart = React.createClass({
     propTypes: {
         // showCart: React.PropTypes.bool,
         servicesNumber: React.PropTypes.number,
         showChooseLayersPanel: React.PropTypes.func,
         showCartPanel: React.PropTypes.func
     },
     getDefaultProps() {
         return {
             showChooseLayersPanel: () => {},
             showCartPanel: () => {}
        };
     },

     render() {
         return (
            <div data-toggle="buttons" className="btn-group map-list">
                 <label className="btn btn-primary ">
                     <input type="radio" checked="" autoComplete="off" id="option1" name="options"/>
                        <i className="fa fa-list" aria-hidden="true"></i> <span className="label-text">Lista</span>
                 </label>
                 <label className="btn btn-primary active">
                     <input type="radio" onChange={this.props.showCartPanel} autoComplete="off" id="option2" name="options"/>
                        <i className="fa fa-map-o" aria-hidden="true"></i>
                        <span className="label-text">Mappa</span>
                        <span className="badge" >{this.props.servicesNumber}</span>
                 </label>
            </div>
        );
     }
 });

module.exports = Cart;
