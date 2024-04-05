const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const I18N = require('@mapstore/components/I18N/I18N');
const Dialog = require('@mapstore/components/misc/Dialog');
const ConfirmButton = require('@mapstore/components/buttons/ConfirmButton');
const {Button} = require('react-bootstrap');
const { Glyphicon } = require('react-bootstrap');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

class CartPanel extends React.Component {
    static propTypes = {
        showPanel: PropTypes.bool,
        wmsservices: PropTypes.array,
        layers: PropTypes.array,
        onClosePanel: PropTypes.func,
        removeService: PropTypes.func,
        goToMap: PropTypes.func
    };

    static defaultProps = {
        layers: [],
        onClosePanel: () => {},
        removeService: () => {},
        goToMap: () => {}
    };

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    renderServicesList = () => {
        return this.props.wmsservices.map((service) => {
            const rows = [];
            rows.push(
                <div className="cart-panel-sevices-list-container">
                    <h4 className="cart-panel-sevices-list-element">{service.title}</h4>
                    <ConfirmButton key="removelayer"
                        text={(<Glyphicon glyph="1-close"/>)}
                        style={{"float": "right", "cursor": "pointer", "marginTop": -45}}
                        confirming={{text: LocaleUtils.getMessageById(this.context.messages, "layerProperties.confirmDelete"),
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
    };

    render() {
        return this.props.showPanel ?
            (
                <Dialog tabIndex="0" style ={{position: "absolute", right: "100px", backgroundColor: "white", width: "600px"}} className="cartpanel-panel" id="decsiraweb-cartpanel">
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
}

module.exports = CartPanel;
