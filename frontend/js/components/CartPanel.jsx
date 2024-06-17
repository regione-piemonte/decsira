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
const ConfirmButton = require('@mapstore/components/buttons/ConfirmButton');
const { Modal, Panel} = require('react-bootstrap');
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

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    static defaultProps = {
        layers: [],
        onClosePanel: () => {},
        removeService: () => {},
        goToMap: () => {}
    };

    renderServicesList = () => {
        return this.props.wmsservices.map((service) => {
            const rows = [];
            rows.push(
                <div className="cart-panel-sevices-list-container">
                    <h4 className="cart-panel-sevices-list-element">{service.title}</h4>
                    <ConfirmButton key="removelayer"
                        text={(<Glyphicon glyph="trash"/>)}
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
        return (
            <Modal show={this.props.showPanel} bsSize="small" onHide={() => {this.props.onClosePanel();}}>
                <Modal.Header className="dialog-header-side" closeButton>
                    <Modal.Title><I18N.Message msgId={"cartpanel.title"}/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Panel className="info-content infobox-content">
                        {this.renderServicesList()}
                    </Panel>
                </Modal.Body>
            </Modal>
        );
    }

    goMap = () => {
        this.context.router.history.replace("/map/");
    };
}

module.exports = CartPanel;
