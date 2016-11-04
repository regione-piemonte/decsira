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
        activeSections: React.PropTypes.object,
        selectSection: React.PropTypes.func,
        header: React.PropTypes.string,
        expanded: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            activeSections: {},
            selectSection: () => {},
            expanded: false
        };
    },
    renderHeader() {
        let isActive = this.isActive();
        return (
            <span className="sectionHader">
                <span style={{"cursor": "pointer"}} onClick={this.props.selectSection.bind(null, this.props.eventKey, (isActive) ? false : true )}>{this.props.header}</span>
                <button onClick={this.props.selectSection.bind(null, this.props.eventKey, (isActive) ? false : true )} className="close"><Glyphicon glyph={(isActive) ? "glyphicon glyphicon-collapse-down" : "glyphicon glyphicon-expand"}/></button>
            </span>
        );
    },
    render() {
        return (
            <Panel collapsible header={this.renderHeader()} expanded={this.isActive()}>
                {this.props.children}
            </Panel>
        );
    },
    isActive() {
        let active = false;
        if (this.props.activeSections.hasOwnProperty(this.props.eventKey)) {
            active = this.props.activeSections[this.props.eventKey];
        } else {
            active = this.props.expanded;
        }
        return active;
    }
});

module.exports = connect((state) => {
    return {
        activeSections: state.cardtemplate.activeSections || {}
    };
}, dispatch => {
    return bindActionCreators({selectSection: selectSection}, dispatch);
})(Section);
