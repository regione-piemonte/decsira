/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Panel, Glyphicon} = require('react-bootstrap');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const {selectSection} = require('../../actions/card');

const Section = React.createClass({
    propTypes: {
        eventKey: React.PropTypes.string,
        activeSection: React.PropTypes.string,
        selectSection: React.PropTypes.func,
        header: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            activeSection: '',
            selectSection: () => {}
        };
    },
    renderHeader() {
        let isActive = (this.props.activeSection === this.props.eventKey);
        return (
            <span>
                <span>{this.props.header}</span>
                <button onClick={this.props.selectSection.bind(null, (isActive) ? '' : this.props.eventKey)} className="close"><Glyphicon glyph={(isActive) ? "glyphicon glyphicon-collapse-down" : "glyphicon glyphicon-expand"}/></button>
            </span>
        );
    },
    render() {
        return (<Panel collapsible header={this.renderHeader()} expanded={this.props.activeSection === this.props.eventKey} >
                 {this.props.children}
                </Panel>);
    }
});
module.exports = connect((state) => {
    return {
            activeSection: state.cardtemplate.activeSection || ''
    };
}, dispatch => {
    return bindActionCreators({selectSection: selectSection}, dispatch);
})(Section);

