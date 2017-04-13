/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {isObject} = require('lodash');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const TemplateSira = require('./TemplateSira');
const {Modal, Button, Glyphicon} = require('react-bootstrap');
const {toggleSiraControl} = require("../../actions/controls");
const toggleDetail = toggleSiraControl.bind(null, 'detail');
const {generatePDF} = require("../../actions/card");
const assign = require('object-assign');
const SchedaToPDF = require('./SchedaToPDF');
const TemplateUtils = require('../../utils/TemplateUtils');
const {getWindowSize} = require('../../../MapStore2/web/client/utils/AgentUtils');

const Draggable = require('react-draggable');

require("./card.css");

const Card = React.createClass({
    propTypes: {
        card: React.PropTypes.shape({
            template: React.PropTypes.oneOfType([
                    React.PropTypes.string,
                    React.PropTypes.func]),
            loadingCardTemplateError: React.PropTypes.oneOfType([
                    React.PropTypes.string,
                    React.PropTypes.object]),
            xml: React.PropTypes.oneOfType([
                    React.PropTypes.string])
        }),
        authParam: React.PropTypes.object,
        profile: React.PropTypes.array,
        open: React.PropTypes.bool,
        withMap: React.PropTypes.bool,
        draggable: React.PropTypes.bool,
        // model: React.PropTypes.object,
        // impiantoModel: React.PropTypes.object,
        toggleDetail: React.PropTypes.func,
        generatePDF: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            card: {
                template: "",
                xml: null,
                loadingCardTemplateError: null
            },
            withMap: true,
            authParam: null,
            open: false,
            draggable: true,
            profile: [],
            // model: {},
            toggleDetail: () => {}
        };
    },
     renderLoadTemplateException() {
        let exception = this.props.card.loadingCardTemplateError;
        if (isObject(exception)) {
            exception = exception.status + ": " + exception.data;
        }

        return (
            <Modal
                show={ (exception) ? true : false}
                bsSize="small"
                onHide={this.props.toggleDetail} >
                <Modal.Header closeButton>
                    <Modal.Title>Data Exception</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mapstore-error">{exception}</div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    },
    renderCard() {
        const {maxWidth} = getWindowSize();
        const xml = this.props.card.xml;
        const authParam = this.props.authParam;
        const profile = this.props.profile;
        const model = assign({}, this.props.card, {
            authParam: authParam,
            profile: profile,
            withMap: this.props.withMap,
            getValue: (element) => TemplateUtils.getValue(xml, element),
            getList: (element) => TemplateUtils.getList(xml, element)
        });
        if (this.props.card.loadingCardTemplateError) {
            return this.renderLoadTemplateException();
        }
        const Template = (
            <div className="scheda-sira">
                    <TemplateSira template={this.props.card.template} model={model}/>
                    <div id="card-btn-group">
                    <Button id="scheda2pdf" onClick={this.props.generatePDF}>
                        <Glyphicon glyph="print"/>
                    </Button>
                    </div>
                    <SchedaToPDF profile={this.props.profile} authParam={authParam} withMap={this.props.withMap}/>
            </div>
            );
        return (this.props.draggable) ? (
            <Draggable start={{x: (maxWidth / 2) - 425, y: 0}} handle=".panel-heading, .panel-heading *">
                {Template}
            </Draggable>) : Template;
    },
    render() {
        return (this.props.open) ? this.renderCard() : null;
    }
});

module.exports = connect((state) => {
    return {
        // impiantoModel: state.cardtemplate.impiantoModel,
        card: state.cardtemplate || {},
        open: state.siraControls.detail
    };
}, dispatch => {
    return bindActionCreators({
        toggleDetail: toggleDetail,
        generatePDF: generatePDF.bind(null, true)
    }, dispatch);
})(Card);
