const PropTypes = require('prop-types');
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
const QueryBuilder = require('@mapstore/components/data/query/QueryBuilder');
const {mapSelector} = require('@mapstore/selectors/map');
const {Panel, Glyphicon, Modal, Tooltip, OverlayTrigger} = require('react-bootstrap');
const {bindActionCreators} = require('redux');

const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const I18N = require('@mapstore/components/I18N/I18N');

const assign = require('object-assign');
const Spinner = require('react-spinkit');

const {hideQueryError, queryFormPreloaded} = require('../actions/siradec');

const FilterUtils = require('@mapstore/utils/FilterUtils');

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
} = require('@mapstore/actions/queryform');

const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig
} = require('../actions/siradec');

const {
    changeDrawingStatus,
    endDrawing
} = require('@mapstore/actions/draw');

const {
    loadGridModelWithFilter,
    loadGridModelWithPagination,
    setGridType
} = require('../actions/grid');

class SideQueryPanel extends React.Component {
    static propTypes = {

        // Sira Query Panel props
        removeButtonIcon: PropTypes.string,
        filterPanelExpanded: PropTypes.bool,
        loadingQueryFormConfigError: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        header: PropTypes.string,
        datasetHeader: PropTypes.string,
        featureTypeName: PropTypes.string,
        featureTypeNameLabel: PropTypes.string,
        siraActions: PropTypes.object,

        // QueryBuilder props
        params: PropTypes.object,
        featureTypeConfigUrl: PropTypes.string,
        useMapProjection: PropTypes.bool,
        attributes: PropTypes.array,
        filterFields: PropTypes.array,
        groupLevels: PropTypes.number,
        groupFields: PropTypes.array,
        spatialField: PropTypes.object,
        showDetailsPanel: PropTypes.bool,
        toolbarEnabled: PropTypes.bool,
        autocompleteEnabled: PropTypes.bool,
        searchUrl: PropTypes.string,
        showGeneratedFilter: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        attributePanelExpanded: PropTypes.bool,
        spatialPanelExpanded: PropTypes.bool,
        spatialMethodOptions: PropTypes.array,
        spatialOperations: PropTypes.array,
        queryFormActions: PropTypes.object,
        pagination: PropTypes.object,
        sortOptions: PropTypes.object,
        hits: PropTypes.bool,
        withMap: PropTypes.bool.isRequired,
        collapsible: PropTypes.bool,
        hideSpatialFilter: PropTypes.bool,
        toggleControl: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {

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
        autocompleteEnabled: false,
        searchUrl: "",
        showGeneratedFilter: false,
        pagination: null,
        sortOptions: null,
        hits: false,
        withMap: true,
        collapsible: false,
        toggleControl: () => {},
        spatialMethodOptions: [
            {id: "BBOX", name: "queryform.spatialfilter.methods.box"},
            {id: "Circle", name: "queryform.spatialfilter.methods.circle"},
            {id: "Polygon", name: "queryform.spatialfilter.methods.poly"}
        ],
        spatialOperations: [
            {id: "INTERSECTS", name: "queryform.spatialfilter.operations.intersects"},
            {id: "BBOX", name: "queryform.spatialfilter.operations.bbox"},
            {id: "CONTAINS", name: "queryform.spatialfilter.operations.contains"},
            {id: "DWITHIN", name: "queryform.spatialfilter.operations.dwithin"},
            {id: "WITHIN", name: "queryform.spatialfilter.operations.within"}
        ],
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
                onLoadFeatureTypeConfig: () => { },
                onQueryFormPreloaded: () => {}
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

    componentWillMount() {
        let filterFieldsCount = this.props.filterFields.length;
        let preloadedAttr = this.props.attributes.filter((attr) => { return attr.preload === true; });
        if (filterFieldsCount === 1 && preloadedAttr.length === 1 && !this.props.queryformPreloaded) {
            this.props.queryFormActions.attributeFilterActions.onUpdateFilterField(this.props.filterFields[0].rowId, "attribute", preloadedAttr[0].attribute, preloadedAttr[0].type, { currentPage: 1 });
            this.props.queryFormActions.attributeFilterActions.onQueryFormPreloaded(true);
        } else if (filterFieldsCount < preloadedAttr.length && !this.props.queryformPreloaded) {
            for (let index = 0; index < preloadedAttr.length - 1; index++) {
                setTimeout(() => { this.props.queryFormActions.attributeFilterActions.onAddFilterField(1);}, 10);
            }
        }
    }

    componentWillUpdate(nextProps) {
        let filterFieldsCount = nextProps.filterFields.length;
        let preloadedAttr = nextProps.attributes.filter((attr) => { return attr.preload === true; });
        if (filterFieldsCount === preloadedAttr.length && !nextProps.queryformPreloaded) {
            preloadedAttr.forEach((attr, index) => {
                let filterField = nextProps.filterFields[index];
                nextProps.queryFormActions.attributeFilterActions.onUpdateFilterField(filterField.rowId, "attribute", attr.attribute, attr.type, { currentPage: 1 });
            });
            this.props.queryFormActions.attributeFilterActions.onQueryFormPreloaded(true);
        }
    }

    renderHeader = () => {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);
        let tooltip = <Tooltip id="header_tp">{LocaleUtils.getMessageById(this.context.messages, "queryPanel.closeSearchTooltip")}</Tooltip>;
        let heading;
        if (this.props.collapsible) {
            heading = this.props.filterPanelExpanded ? (
                <span>
                    {header}
                    <button style={{paddingRight: "10px"}} onClick={this.props.siraActions.onExpandFilterPanel.bind(null, false)} className="close">
                        <Glyphicon glyph="glyphicon glyphicon-triangle-bottom collapsible"/>
                    </button>
                </span>
            ) : (
                <span>
                    <span style={{paddingLeft: "15px"}}>{header}</span>

                    <button style={{paddingRight: "10px"}} onClick={this.props.siraActions.onExpandFilterPanel.bind(null, true)} className="close">
                        <Glyphicon glyph="glyphicon glyphicon-triangle-left collapsible"/> <I18N.Message msgId={"back"}/>
                    </button>
                </span>
            );
        } else {
            heading = (
                <span>
                    {header}
                    <OverlayTrigger key={"header_tp_over"} rootClose placement="left" overlay={tooltip}>
                        <button style={{paddingRight: "10px"}} onClick={this.props.toggleControl} className="close">
                            <Glyphicon glyph="glyphicon glyphicon-triangle-left collapsible"/>  <I18N.Message msgId={"back"}/>
                        </button>
                    </OverlayTrigger>
                </span>
            );
        }

        return (
            <div className="handle_querypanel">
                {heading}
            </div>
        );
    };

    renderDatasetHeader = () => {
        const datasetHeader = LocaleUtils.getMessageById(this.context.messages, this.props.datasetHeader);
        const indicaTitle = this.props.isIndicatore ? (
            <div className="dhContainer">
                <b><I18N.Message msgId={"IndicaBuilder.selectedIndica"}/></b> <br /> {this.props.indicaTitle}
            </div>
        ) : "";
        return (
            <div>
                <div className="dhContainer">
                    <label>{datasetHeader}</label>
                    <h4 className="ftheader">{this.props.featureTypeNameLabel}</h4>
                </div>
                {indicaTitle}
            </div>
        );
    };

    renderQueryPanel = () => {
        return (

            <Panel className={this.props.withMap ? "querypanel-container side-querypanel widthclass" : "querypanel-container side-querypanel hideSpatialFilter widthclass" } collapsible={this.props.collapsible} expanded={this.props.filterPanelExpanded} header={this.renderHeader()} bsStyle="primary">
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
                    autocompleteEnabled={this.props.autocompleteEnabled}
                    toolsOptions= {{
                        hideCrossLayer: true,
                        hideSpatialFilter: this.props.hideSpatialFilter || false
                    }}
                    spatialMethodOptions = {this.props.spatialMethodOptions}
                    spatialOperations = {this.props.spatialOperations}
                    showDetailsPanel={this.props.showDetailsPanel}
                    toolbarEnabled={this.props.toolbarEnabled}
                    searchUrl={this.props.searchUrl}
                    showGeneratedFilter={this.props.showGeneratedFilter}
                    featureTypeName={this.props.featureTypeName}
                    attributePanelExpanded={this.props.attributePanelExpanded}
                    spatialPanelExpanded={this.props.spatialPanelExpanded}
                    attributeFilterActions={this.props.queryFormActions.attributeFilterActions}
                    spatialFilterActions={this.props.queryFormActions.spatialFilterActions}
                    projection={this.props.projection}
                    queryToolbarActions={assign({}, this.props.queryFormActions.queryToolbarActions, {onQuery: this.onQuery})}
                />
            </Panel>
        );
    };

    renderLoadConfigException = (loadingError, msg) => {
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
                <Modal.Header className="dialog-error-header-side" closeButton>
                    <Modal.Title><I18N.Message msgId={msg}/></Modal.Title>
                </Modal.Header>
                <Modal.Body className="dialog-error-body">
                    <div>{exception}</div>
                </Modal.Body>
                <Modal.Footer className="dialog-error-footer">
                </Modal.Footer>
            </Modal>
        );
    };

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
    }

    onQuery = (url, filterObj, params) => {
        this.props.siraActions.onExpandFilterPanel(false);
        this.props.siraActions.setGridType('search');
        const filter = filterObj.filterType === "OGC" ?
            FilterUtils.toOGCFilter(filterObj.featureTypeName, filterObj, filterObj.ogcVersion, filterObj.sortOptions, filterObj.hits) :
            FilterUtils.toCQLFilter(filterObj);
        if (this.props.pagination && (this.props.pagination.startIndex || this.props.pagination.startIndex === 0)) {
            this.props.queryFormActions.queryToolbarActions.onQueryPagination(this.props.pagination);
        } else {
            this.props.queryFormActions.queryToolbarActions.onQuery(url, filter, params);
        }
    };
}

module.exports = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    const layers = state.layers.flat;
    const layerId = state.siradec.currentNodeId ? state.siradec.currentNodeId : null;
    const currLayer = layerId ? layers.filter((l) => l.featureType === state.siradec.activeFeatureType && l.id === layerId)[0] : null;
    return {
        // SiraQueryPanel prop
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        loadingQueryFormConfigError: state.siradec.loadingQueryFormConfigError,
        featureTypeName: activeConfig.featureTypeName,
        featureTypeNameLabel: activeConfig.featureTypeNameLabel,

        // Indica title props
        isIndicatore: currLayer && currLayer.params && currLayer.params.isIndicatore ? true : false,
        indicaTitle: currLayer && currLayer.params ? currLayer.params.indicaTitle : "",

        // QueryBuilder props
        groupLevels: state.queryform.groupLevels,
        groupFields: state.queryform.groupFields,
        filterFields: state.queryform.filterFields,
        attributes: activeConfig.attributes,
        spatialField: state.queryform.spatialField,
        showDetailsPanel: state.queryform.showDetailsPanel,
        toolbarEnabled: state.queryform.toolbarEnabled,
        attributePanelExpanded: state.queryform.attributePanelExpanded,
        spatialPanelExpanded: state.queryform.spatialPanelExpanded,
        useMapProjection: state.queryform.useMapProjection,
        searchUrl: state.queryform.searchUrl || activeConfig?.queryform?.searchUrl,
        showGeneratedFilter: state.queryform.showGeneratedFilter,
        featureTypeConfigUrl: state.queryform.featureTypeConfigUrl,
        pagination: state.queryform.pagination,
        sortOptions: state.queryform.sortOptions,
        projection: (mapSelector(state) || {}).projection,
        queryformPreloaded: state.siradec.queryformPreloaded
    };
}, dispatch => {
    return {
        siraActions: bindActionCreators({
            // SiraQueryPanel actions
            onExpandFilterPanel: expandFilterPanel,
            onCloseError: hideQueryError,
            setGridType
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
                onLoadFeatureTypeConfig: loadFeatureTypeConfig,
                onQueryFormPreloaded: queryFormPreloaded
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
})(SideQueryPanel);
