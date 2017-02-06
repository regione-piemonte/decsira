/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');
const Dialog = require('../../MapStore2/web/client/components/misc/Dialog');
const {Button} = require('react-bootstrap');

const CartPanel = React.createClass({
     propTypes: {
         showPanel: React.PropTypes.bool,
         wmsservices: React.PropTypes.array,
         layers: React.PropTypes.array,
         onClosePanel: React.PropTypes.func
     },
     getDefaultProps() {
         return {
             layers: [],
             onClosePanel: () => {}
        };
     },

     contextTypes: {
         router: React.PropTypes.object
     },

    goToMap() {
        this.context.router.push("/map.html");
    },

     renderServicesList() {
         return this.props.wmsservices.map((service) => {
             return (<h4>{service.title}</h4>);
         });
     },

     render() {
         return this.props.showPanel ?
             (
             <Dialog id="decsiraweb-cartpanel">
                 <span role="header"><span className="cartpanel-panel-title" ><I18N.Message msgId={"cartpanel.title"}/></span><button className="print-panel-close close" onClick={this.props.onClosePanel}><span>×</span></button></span>
                 <div role="body">
                     {this.renderServicesList()}
                 </div>
                 <div role="footer">
                     <Button onClick={this.goToMap} className="cart button-goToMap" bsStyle="primary" >
                         <I18N.Message msgId={"cartpanel.goToMap"}/>
                     </Button>
                 </div>
             </Dialog>
            ) : null;
     }
 });

module.exports = CartPanel;
