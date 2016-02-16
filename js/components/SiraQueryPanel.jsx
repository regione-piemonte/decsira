/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const {isObject} = require('lodash');

// include application component
const QueryBuilder = require('../../MapStore2/web/client/components/QueryForm/QueryBuilder');
const {Panel, Glyphicon, Modal} = require('react-bootstrap');
const Draggable = require('react-draggable');

const {bindActionCreators} = require('redux');

const {
    // QueryBuilder action functions
    addGroupField,
    addFilterField,
    removeFilterField,
    updateFilterField,
    updateExceptionField,
    updateLogicCombo,
    removeGroupField
} = require('../../MapStore2/web/client/actions/queryform');

const {
    // SiraQueryPanel action functions
    expandFilterPanel
} = require('../actions/queryform');

const SiraQueryPanel = React.createClass({
    propTypes: {
        attributes: React.PropTypes.array,
        filterFields: React.PropTypes.array,
        groupLevels: React.PropTypes.number,
        groupFields: React.PropTypes.array,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        maxHeight: React.PropTypes.number,
        removeButtonIcon: React.PropTypes.string,
        filterPanelExpanded: React.PropTypes.bool,
        loadingQueryFormConfigError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        header: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ]),
        featureTypeName: React.PropTypes.string,
        siraActions: React.PropTypes.object,
        queryFormActions: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            groupLevels: 1,
            groupFields: [],
            attributes: [],
            filterFields: [],
            width: 750,
            height: 550,
            maxHeight: 550,
            removeButtonIcon: "glyphicon glyphicon-trash",
            filterPanelExpanded: true,
            loadingQueryFormConfigError: null,
            header: "Filtri",
            featureTypeName: null,
            siraActions: {
                onExpandFilterPanel: () => {}
            },
            queryFormActions: {
                onAddGroupField: () => {},
                onAddFilterField: () => {},
                onRemoveFilterField: () => {},
                onUpdateFilterField: () => {},
                onUpdateExceptionField: () => {},
                onUpdateLogicCombo: () => {},
                onRemoveGroupField: () => {}
            }
        };
    },
    renderHeader() {
        return this.props.filterPanelExpanded ? (
            <span>
                <span>{this.props.header} - {this.props.featureTypeName}</span>
                <button onClick={this.props.siraActions.onExpandFilterPanel.bind(null, false)} className="close"><Glyphicon glyph="glyphicon glyphicon-collapse-down"/></button>
            </span>
        ) : (
            <span>
                <span>{this.props.header} - {this.props.featureTypeName}</span>
                <button onClick={this.props.siraActions.onExpandFilterPanel.bind(null, true)} className="close"><Glyphicon glyph="glyphicon glyphicon-expand"/></button>
            </span>
        );
    },
    renderQueryPanel() {
        const panelWidth = this.props.width;
        const panelHeight = this.props.height;
        const panelMaxHeight = this.props.maxHeight;

        return (
            <div style={{
                    "position": "absolute",
                    "top": "100px",
                    "left": "450px",
                    "height": panelHeight + "px",
                    "width": panelWidth + 60 + "px",
                    "maxHeight": panelMaxHeight + "px"}}>
                <Panel id="querypanel">
                    <Panel collapsible expanded={this.props.filterPanelExpanded} header={this.renderHeader()}>
                        <div style={{height: panelHeight + "px", width: panelWidth + "px", maxHeight: panelMaxHeight + "px", overflowX: "hidden", overflowY: "auto"}}>
                            <QueryBuilder
                                removeButtonIcon={this.props.removeButtonIcon}
                                groupLevels={this.props.groupLevels}
                                groupFields={this.props.groupFields}
                                filterFields={this.props.filterFields}
                                attributes={this.props.attributes}
                                actions={this.props.queryFormActions}/>
                        </div>
                    </Panel>
                </Panel>
            </div>
        );
    },
    renderLoadConfigException() {
        let exception;
        if (isObject(this.props.loadingQueryFormConfigError)) {
            exception = this.props.loadingQueryFormConfigError.status + ": " + this.props.loadingQueryFormConfigError.data;
        } else {
            exception = this.props.loadingQueryFormConfigError;
        }

        return (
            <Modal show={this.props.loadingQueryFormConfigError ? true : false} bsSize="small">
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
    render() {
        if (this.props.loadingQueryFormConfigError) {
            return (
                this.renderLoadConfigException()
            );
        }

        return this.props.attributes ?
            (
                this.renderQueryPanel()
            ) : (
                <span/>
            );
    }
});

module.exports = connect((state) => {
    return {
        // SiraQueryPanel prop
        filterPanelExpanded: state.queryformconfig.filterPanelExpanded,
        loadingQueryFormConfigError: state.queryformconfig.loadingQueryFormConfigError,
        featureTypeName: state.queryformconfig.featureTypeName,
        // QueryBuilder props
        groupLevels: state.queryform.groupLevels,
        groupFields: state.queryform.groupFields,
        filterFields: state.queryform.filterFields,
        attributes: state.queryformconfig.attributes
    };
}, dispatch => {
    return {
        siraActions: bindActionCreators({
            // SiraQueryPanel actions
            onExpandFilterPanel: expandFilterPanel
        }, dispatch),
        queryFormActions: bindActionCreators({
            // QueryBuilder actions
            onAddGroupField: addGroupField,
            onAddFilterField: addFilterField,
            onRemoveFilterField: removeFilterField,
            onUpdateFilterField: updateFilterField,
            onUpdateExceptionField: updateExceptionField,
            onUpdateLogicCombo: updateLogicCombo,
            onRemoveGroupField: removeGroupField
        }, dispatch)
    };
})(SiraQueryPanel);
