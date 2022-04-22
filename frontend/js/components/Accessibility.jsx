const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Modal, Button} = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

class Accessibility extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        show: PropTypes.string,
        closePanel: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        title: 'title',
        show: false,
        closePanel: () => {}
    };

    render() {
        return (
            <div className="scheda-accessibility" style={{display: this.props.show}}>
                <Modal
                    show= {this.props.show}>
                    <Modal.Header closeButton onClick={this.props.closePanel}>
                        <Modal.Title><I18N.Message msgId="Accessibility.title"/></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div dangerouslySetInnerHTML={{ __html: LocaleUtils.getMessageById(this.context.messages, "Accessibility.body") }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closePanel}><I18N.Message msgId="Accessibility.button"/></Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

module.exports = Accessibility;
