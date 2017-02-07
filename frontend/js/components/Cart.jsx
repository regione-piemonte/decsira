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
         servicesNumber: React.PropTypes.number,
         showChooseLayersPanel: React.PropTypes.func,
         // todo to remove
         showChooseLayersPanel2: React.PropTypes.func,
         showCartPanel: React.PropTypes.func
     },
     getDefaultProps() {
         return {
             showChooseLayersPanel: () => {},
             // todo to remove
             showChooseLayersPanel2: () => {},
             showCartPanel: () => {}
        };
     },

     render() {
         return (
            <div data-toggle="buttons" className="btn-group map-list">
                 <label className="btn btn-primary ">
                     <input type="radio" checked="" autoComplete="off" id="option1"
                      name="options"/> Lista
                 </label>
                 <label className="btn btn-primary active">
                     <input type="radio" onChange={this.props.showCartPanel} autoComplete="off" id="option2" name="options"/> Mappa
                     <span className="badge" >{this.props.servicesNumber}</span>
                 </label>
                 <label className="btn btn-primary ">
                     <input type="radio" onChange={this.props.showChooseLayersPanel} autoComplete="off" id="option3" name="options"/> Demo
                 </label>
                 <label className="btn btn-primary ">
                     <input type="radio" onChange={this.props.showChooseLayersPanel2} autoComplete="off" id="option3" name="options"/> Demo 2
                 </label>
            </div>
         );
     }
 });

module.exports = Cart;
