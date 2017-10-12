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
const ConfirmButton = require('../../MapStore2/web/client/components/buttons/ConfirmButton');
const {Button} = require('react-bootstrap');
const {Glyphicon} = require('react-bootstrap');

const CartPanel = React.createClass({
     propTypes: {
         showPanel: React.PropTypes.bool,
         wmsservices: React.PropTypes.array,
         layers: React.PropTypes.array,
         onClosePanel: React.PropTypes.func,
         removeService: React.PropTypes.func,
         goToMap: React.PropTypes.func
     },
     getDefaultProps() {
         return {
             layers: [],
             onClosePanel: () => {},
             removeService: () => {},
             goToMap: () => {}
        };
     },

     contextTypes: {
         router: React.PropTypes.object
     },

     goMap() {
         this.context.router.replace("/map/");
     },

    renderServicesList() {
         return this.props.wmsservices.map((service) => {
             const rows = [];
             rows.push(
             <div className="cart-panel-sevices-list-container">
                 <h4 className="cart-panel-sevices-list-element">{service.title}</h4>
                 <ConfirmButton key="removelayer"
                    text={(<Glyphicon glyph="1-close"/>)}
                    style={{"float": "right", "cursor": "pointer", "marginTop": -45}}
                    confirming={{text: "Sei sicuro",
                        style: {"float": "right", cursor: "pointer", marginTop: -35}}}
                         onConfirm={() => {
                             this.props.removeService(service.id);
                         }}
                    />
            </div>
                );
             return (
                 rows
             );
         });
     },

     render() {
         return this.props.showPanel ?
             (
             <Dialog style ={{position: "absolute", right: "100px", backgroundColor: "white", width: "600px"}} className="cartpanel-panel" id="decsiraweb-cartpanel">
                 <span role="header"><span className="cartpanel-panel-title" ><I18N.Message msgId={"cartpanel.title"}/></span><button className="print-panel-close close" onClick={this.props.onClosePanel}><span>×</span></button></span>
                 <div role="body">
                     {this.renderServicesList()}
                 </div>
                 <div role="footer" >
                     <Button onClick={() => {this.props.goToMap(); this.goMap(); }} className="cart button-goToMap" bsStyle="primary" >
                         <I18N.Message msgId={"cartpanel.goToMap"}/>
                     </Button>
                 </div>
             </Dialog>
            ) : null;
     }
 });

module.exports = CartPanel;
