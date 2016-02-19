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

const {bindActionCreators} = require('redux');

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');

const {
    // QueryBuilder action functions
    addGroupField,
    addFilterField,
    removeFilterField,
    updateFilterField,
    updateExceptionField,
    updateLogicCombo,
    removeGroupField,
    changeCascadingValue,
    expandAttributeFilterPanel,
    expandSpatialFilterPanel
} = require('../../MapStore2/web/client/actions/queryform');

const {
    // SiraQueryPanel action functions
    expandFilterPanel
} = require('../actions/queryform');

const SiraQueryPanel = React.createClass({
    propTypes: {
        // Sira Query Panel props
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        maxHeight: React.PropTypes.number,
        removeButtonIcon: React.PropTypes.string,
        filterPanelExpanded: React.PropTypes.bool,
        loadingQueryFormConfigError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        header: React.PropTypes.string,
        datasetHeader: React.PropTypes.string,
        featureTypeName: React.PropTypes.string,
        siraActions: React.PropTypes.object,
        // QueryBuilder props
        attributes: React.PropTypes.array,
        filterFields: React.PropTypes.array,
        groupLevels: React.PropTypes.number,
        groupFields: React.PropTypes.array,
        attributePanelExpanded: React.PropTypes.bool,
        spatialPanelExpanded: React.PropTypes.bool,
        queryFormActions: React.PropTypes.object
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            // Sira Query Panel default props
            width: 850,
            height: 700,
            maxHeight: 700,
            removeButtonIcon: "glyphicon glyphicon-trash",
            filterPanelExpanded: true,
            loadingQueryFormConfigError: null,
            header: "queryform.form.header",
            datasetHeader: "queryform.form.dataset_header",
            featureTypeName: null,
            siraActions: {
                onExpandFilterPanel: () => {}
            },
            // QueryBuilder default props
            groupLevels: 1,
            groupFields: [],
            attributes: [],
            filterFields: [],
            attributePanelExpanded: true,
            spatialPanelExpanded: true,
            queryFormActions: {
                attributeFilterActions: {
                    onAddGroupField: () => {},
                    onAddFilterField: () => {},
                    onRemoveFilterField: () => {},
                    onUpdateFilterField: () => {},
                    onUpdateExceptionField: () => {},
                    onUpdateLogicCombo: () => {},
                    onRemoveGroupField: () => {},
                    onChangeCascadingValue: () => {},
                    onExpandAttributeFilterPanel: () => {}
                },
                spatialFilterActions: {
                    onExpandSpatialFilterPanel: () => {}
                }
            }
        };
    },
    renderHeader() {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);

        return this.props.filterPanelExpanded ? (
            <span>
                <span>{header}</span>
                <button onClick={this.props.siraActions.onExpandFilterPanel.bind(null, false)} className="close">
                    <Glyphicon glyph="glyphicon glyphicon-collapse-down collapsible"/>
                </button>
            </span>
        ) : (
            <span>
                <span>{header}</span>
                <button onClick={this.props.siraActions.onExpandFilterPanel.bind(null, true)} className="close">
                    <Glyphicon glyph="glyphicon glyphicon-expand collapsible"/>
                </button>
            </span>
        );
    },
    renderDatasetHeader() {
        const datasetHeader = LocaleUtils.getMessageById(this.context.messages, this.props.datasetHeader);
        return (
            <div className="dhContainer">
                <h4>{datasetHeader}</h4>
                <h4 className="ftheader">{this.props.featureTypeName}</h4>
            </div>
        );
    },
    renderQueryPanel() {
        const panelWidth = this.props.width;
        const panelHeight = this.props.height;
        const panelMaxHeight = this.props.maxHeight;

        return (
            <div style={{
                    "position": "absolute",
                    "top": "50px",
                    "left": "670px",
                    "height": panelHeight + "px",
                    "width": panelWidth + 60 + "px",
                    "maxHeight": panelMaxHeight + "px"}}>
                <Panel id="querypanel">
                    <Panel collapsible expanded={this.props.filterPanelExpanded} header={this.renderHeader()} bsStyle="primary">
                        <div style={{height: panelHeight + "px", width: panelWidth + "px", maxHeight: panelMaxHeight + "px", overflowX: "hidden", overflowY: "auto"}}>
                            {this.renderDatasetHeader()}
                            <QueryBuilder
                                removeButtonIcon={this.props.removeButtonIcon}
                                groupLevels={this.props.groupLevels}
                                groupFields={this.props.groupFields}
                                filterFields={this.props.filterFields}
                                attributes={this.props.attributes}
                                actions={this.props.queryFormActions}
                                attributePanelExpanded={this.props.attributePanelExpanded}
                                spatialPanelExpanded={this.props.spatialPanelExpanded}
                                attributeFilterActions={this.props.queryFormActions.attributeFilterActions}
                                spatialFilterActions={this.props.queryFormActions.spatialFilterActions}/>
                        </div>
                    </Panel>
                </Panel>
            </div>
        );
    },
    renderLoadConfigException() {
        let exception;
        if (isObject(this.props.loadingQueryFormConfigError)) {
            exception = this.props.loadingQueryFormConfigError.status +
                "(" + this.props.loadingQueryFormConfigError.statusText + ")" +
                ": " + this.props.loadingQueryFormConfigError.data;
        } else {
            exception = this.props.loadingQueryFormConfigError;
        }

        return (
            <Modal show={this.props.loadingQueryFormConfigError ? true : false} bsSize="small">
                <Modal.Header closeButton>
                    <Modal.Title><I18N.Message msgId={"queryform.config.load_config_exception"}/></Modal.Title>
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
        attributes: state.queryformconfig.attributes,
        attributePanelExpanded: state.queryform.attributePanelExpanded,
        spatialPanelExpanded: state.queryform.spatialPanelExpanded
    };
}, dispatch => {
    return {
        siraActions: bindActionCreators({
            // SiraQueryPanel actions
            onExpandFilterPanel: expandFilterPanel
        }, dispatch),
        queryFormActions: {
            // QueryBuilder actions
            attributeFilterActions: bindActionCreators({
                onAddGroupField: addGroupField,
                onAddFilterField: addFilterField,
                onRemoveFilterField: removeFilterField,
                onUpdateFilterField: updateFilterField,
                onUpdateExceptionField: updateExceptionField,
                onUpdateLogicCombo: updateLogicCombo,
                onRemoveGroupField: removeGroupField,
                onChangeCascadingValue: changeCascadingValue,
                onExpandAttributeFilterPanel: expandAttributeFilterPanel
            }, dispatch),
            spatialFilterActions: bindActionCreators({
                onExpandSpatialFilterPanel: expandSpatialFilterPanel
            }, dispatch)
        }
    };
})(SiraQueryPanel);
