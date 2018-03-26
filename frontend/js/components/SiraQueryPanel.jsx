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
const QueryBuilder = require('../../MapStore2/web/client/components/data/query/QueryBuilder');
const {Panel, Glyphicon, Modal} = require('react-bootstrap');

const {bindActionCreators} = require('redux');

const Draggable = require('react-draggable');

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');

const assign = require('object-assign');
const Spinner = require('react-spinkit');

const {hideQueryError} = require('../actions/siradec');

require('../../assets/css/sira.css');

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
    expandSpatialFilterPanel,
    selectSpatialMethod,
    selectSpatialOperation,
    removeSpatialSelection,
    showSpatialSelectionDetails,
    reset,
    changeDwithinValue
} = require('../../MapStore2/web/client/actions/queryform');

const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig
} = require('../actions/siradec');

const {
    changeDrawingStatus,
    endDrawing
} = require('../../MapStore2/web/client/actions/draw');

const {
    loadGridModelWithFilter,
    loadGridModelWithPagination
} = require('../actions/grid');

const SiraQueryPanel = React.createClass({
    propTypes: {

        // Sira Query Panel props
        removeButtonIcon: React.PropTypes.string,
        filterPanelExpanded: React.PropTypes.bool,
        loadingQueryFormConfigError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        header: React.PropTypes.string,
        datasetHeader: React.PropTypes.string,
        featureTypeName: React.PropTypes.string,
        featureTypeNameLabel: React.PropTypes.string,
        siraActions: React.PropTypes.object,

        // QueryBuilder props
        params: React.PropTypes.object,
        featureTypeConfigUrl: React.PropTypes.string,
        useMapProjection: React.PropTypes.bool,
        attributes: React.PropTypes.array,
        filterFields: React.PropTypes.array,
        groupLevels: React.PropTypes.number,
        groupFields: React.PropTypes.array,
        spatialField: React.PropTypes.object,
        showDetailsPanel: React.PropTypes.bool,
        toolbarEnabled: React.PropTypes.bool,
        searchUrl: React.PropTypes.string,
        showGeneratedFilter: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.string
        ]),
        attributePanelExpanded: React.PropTypes.bool,
        spatialPanelExpanded: React.PropTypes.bool,
        queryFormActions: React.PropTypes.object,
        pagination: React.PropTypes.object,
        sortOptions: React.PropTypes.object,
        hits: React.PropTypes.bool
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {

            // Sira Query Panel default props
            removeButtonIcon: "glyphicon glyphicon-remove",
            filterPanelExpanded: true,
            loadingQueryFormConfigError: null,
            header: "queryform.form.header",
            datasetHeader: "queryform.form.dataset_header",
            featureTypeName: null,
            featureTypeNameLabel: null,
            siraActions: {
                onExpandFilterPanel: () => {}
            },

            // QueryBuilder default props
            params: {},
            featureTypeConfigUrl: null,
            useMapProjection: true,
            attributes: [],
            groupLevels: 1,
            groupFields: [],
            filterFields: [],
            spatialField: {},
            attributePanelExpanded: true,
            spatialPanelExpanded: true,
            showDetailsPanel: false,
            toolbarEnabled: true,
            searchUrl: "",
            showGeneratedFilter: false,
            pagination: null,
            sortOptions: null,
            hits: false,
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
                    onExpandAttributeFilterPanel: () => {},
                    onLoadFeatureTypeConfig: () => {}
                },
                spatialFilterActions: {
                    onExpandSpatialFilterPanel: () => {},
                    onSelectSpatiaslMethod: () => {},
                    onSelectSpatialOperation: () => {},
                    onChangeDrawingStatus: () => {},
                    onRemoveSpatialSelection: () => {},
                    onShowSpatialSelectionDetails: () => {},
                    onEndDrawing: () => {},
                    onChangeDwithinValue: () => {}
                },
                queryToolbarActions: {
                    onQuery: () => {},
                    onReset: () => {},
                    onQueryPagination: () => {},
                    onChangeDrawingStatus: () => {}
                }
            }
        };
    },
    renderHeader() {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);

        const heading = this.props.filterPanelExpanded ? (
            <span>
                <span style={{paddingLeft: "15px"}}>{header}</span>
                <button style={{paddingRight: "10px"}} onClick={this.props.siraActions.onExpandFilterPanel.bind(null, false)} className="close">
                    <Glyphicon glyph="glyphicon glyphicon-triangle-bottom collapsible"/>
                </button>
            </span>
        ) : (
            <span>
                <span style={{paddingLeft: "15px"}}>{header}</span>
                <button style={{paddingRight: "10px"}} onClick={this.props.siraActions.onExpandFilterPanel.bind(null, true)} className="close">
                    <Glyphicon glyph="glyphicon glyphicon-triangle-left collapsible"/>
                </button>
            </span>
        );

        return (
            <div className="handle_querypanel">
                {heading}
            </div>
        );
    },
    renderDatasetHeader() {
        const datasetHeader = LocaleUtils.getMessageById(this.context.messages, this.props.datasetHeader);
        return (
            <div className="dhContainer">
                <label>{datasetHeader}</label>
                <h4 className="ftheader">{this.props.featureTypeNameLabel}</h4>
            </div>
        );
    },
    renderQueryPanel() {
        return (
            <Draggable start={{x: 760, y: 55}} handle=".handle_querypanel,.handle_querypanel *">
                <Panel className="querypanel-container widthclass" collapsible expanded={this.props.filterPanelExpanded} header={this.renderHeader()} bsStyle="primary">
                    {this.renderDatasetHeader()}
                    <QueryBuilder
                        params={this.props.params}
                        featureTypeConfigUrl={this.props.featureTypeConfigUrl}
                        useMapProjection={this.props.useMapProjection}
                        removeButtonIcon={this.props.removeButtonIcon}
                        groupLevels={this.props.groupLevels}
                        groupFields={this.props.groupFields}
                        filterFields={this.props.filterFields}
                        spatialField={this.props.spatialField}
                        attributes={this.props.attributes}
                        showDetailsPanel={this.props.showDetailsPanel}
                        toolbarEnabled={this.props.toolbarEnabled}
                        searchUrl={this.props.searchUrl}
                        showGeneratedFilter={this.props.showGeneratedFilter}
                        featureTypeName={this.props.featureTypeName}
                        attributePanelExpanded={this.props.attributePanelExpanded}
                        spatialPanelExpanded={this.props.spatialPanelExpanded}
                        attributeFilterActions={this.props.queryFormActions.attributeFilterActions}
                        spatialFilterActions={this.props.queryFormActions.spatialFilterActions}
                        queryToolbarActions={assign({}, this.props.queryFormActions.queryToolbarActions, {onQuery: this.onQuery})}
                        />
                </Panel>
            </Draggable>
        );
    },
    renderLoadConfigException(loadingError, msg) {
        let exception;
        if (isObject(loadingError)) {
            exception = loadingError.status +
                "(" + loadingError.statusText + ")" +
                ": " + loadingError.data;
        } else {
            exception = loadingError;
        }

        return (
            <Modal show={loadingError ? true : false} bsSize="small" onHide={this.props.siraActions.onCloseError} id="loading-error-dialog">
                <Modal.Header className="dialog-error-header" closeButton>
                    <Modal.Title><I18N.Message msgId={msg}/></Modal.Title>
                </Modal.Header>
                <Modal.Body className="dialog-error-body">
                    <div>{exception}</div>
                </Modal.Body>
                <Modal.Footer className="dialog-error-footer">
                </Modal.Footer>
            </Modal>
        );
    },
    render() {
        let loadingError = this.props.loadingQueryFormConfigError;
        if (loadingError) {
            return (
                this.renderLoadConfigException(loadingError,
                    this.props.loadingQueryFormConfigError ? "queryform.config.load_config_exception" : "queryform.query_request_exception")
            );
        }

        return this.props.attributes ?
            (
                this.renderQueryPanel()
            ) : (
                <div style={{
                    position: "fixed",
                    width: "60px",
                    top: "50%",
                    left: "50%"}}>
                    <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                </div>
            );
    },
    onQuery: function(url, filter, params) {
        this.props.siraActions.onExpandFilterPanel(false);
        if (this.props.pagination && (this.props.pagination.startIndex || this.props.pagination.startIndex === 0)) {
            let newFilter = filter.replace("<wfs:GetFeature", "<wfs:GetPropertyValue valueReference='" + this.props.attributes[0].attribute + "' ");
            newFilter = newFilter.replace("</wfs:GetFeature", "</wfs:GetPropertyValue");
            this.props.queryFormActions.queryToolbarActions.onQueryPagination(url, newFilter, params, this.props.pagination);
        }else {
            this.props.queryFormActions.queryToolbarActions.onQuery(url, filter, params);
        }
    }
});

module.exports = connect((state) => {
    return {
        // SiraQueryPanel prop
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        loadingQueryFormConfigError: state.siradec.loadingQueryFormConfigError,
        featureTypeName: state.siradec.featureTypeName,
        featureTypeNameLabel: state.siradec.featureTypeNameLabel,

        // QueryBuilder props
        groupLevels: state.queryform.groupLevels,
        groupFields: state.queryform.groupFields,
        filterFields: state.queryform.filterFields,
        attributes: state.siradec.attributes,
        spatialField: state.queryform.spatialField,
        showDetailsPanel: state.queryform.showDetailsPanel,
        toolbarEnabled: state.queryform.toolbarEnabled,
        attributePanelExpanded: state.queryform.attributePanelExpanded,
        spatialPanelExpanded: state.queryform.spatialPanelExpanded,
        useMapProjection: state.queryform.useMapProjection,
        searchUrl: state.queryform.searchUrl,
        showGeneratedFilter: state.queryform.showGeneratedFilter,
        featureTypeConfigUrl: state.queryform.featureTypeConfigUrl,
        pagination: state.queryform.pagination,
        sortOptions: state.queryform.sortOptions
    };
}, dispatch => {
    return {
        siraActions: bindActionCreators({
            // SiraQueryPanel actions
            onExpandFilterPanel: expandFilterPanel,
            onCloseError: hideQueryError
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
                onExpandAttributeFilterPanel: expandAttributeFilterPanel,
                onLoadFeatureTypeConfig: loadFeatureTypeConfig
            }, dispatch),
            spatialFilterActions: bindActionCreators({
                onExpandSpatialFilterPanel: expandSpatialFilterPanel,
                onSelectSpatialMethod: selectSpatialMethod,
                onSelectSpatialOperation: selectSpatialOperation,
                onChangeDrawingStatus: changeDrawingStatus,
                onRemoveSpatialSelection: removeSpatialSelection,
                onShowSpatialSelectionDetails: showSpatialSelectionDetails,
                onEndDrawing: endDrawing,
                onChangeDwithinValue: changeDwithinValue
            }, dispatch),
            queryToolbarActions: bindActionCreators({
                onQuery: loadGridModelWithFilter,
                onQueryPagination: loadGridModelWithPagination,
                onReset: reset,
                onChangeDrawingStatus: changeDrawingStatus
            }, dispatch)
        }
    };
})(SiraQueryPanel);
