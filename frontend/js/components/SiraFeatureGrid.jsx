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

const Draggable = require('react-draggable');

const {Modal, Panel, Grid, Row, Col, Button} = require('react-bootstrap');

const {Resizable} = require('react-resizable');

const {bindActionCreators} = require('redux');
const {changeMapView} = require('../../MapStore2/web/client/actions/map');
const {selectFeatures} = require('../actions/featuregrid');
const FilterUtils = require('../../MapStore2/web/client/utils/FilterUtils');
const {verifyProfiles} = require('../utils/TemplateUtils');
const {head} = require('lodash');

const {
    loadFeaturesWithPagination
} = require('../actions/grid');

const FeatureGrid = connect((state) => {
    return {
        select: state.featuregrid && state.featuregrid.select || []
    };
}, dispatch => {
    return bindActionCreators({
        selectFeatures: selectFeatures
    }, dispatch);
})(require('../../MapStore2/web/client/components/data/featuregrid/FeatureGrid'));

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('./GoToDetail');

const {loadCardTemplate} = require('../actions/card');
const {toggleSiraControl} = require('../actions/controls');
// const {loadFeatureGridConfig} = require('../actions/grid');

const Spinner = require('react-spinkit');

const {
    // SiraQueryPanel action functions
    expandFilterPanel
} = require('../actions/siradec');

const assign = require('object-assign');
require('react-resizable/css/styles.css');
require('./SiraFeatureGrid.css');

const SiraFeatureGrid = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        detailOpen: React.PropTypes.bool,
        expanded: React.PropTypes.bool,
        header: React.PropTypes.string,
        features: React.PropTypes.oneOfType([ React.PropTypes.array, React.PropTypes.object]),
        detailsConfig: React.PropTypes.object,
        columnsDef: React.PropTypes.array,
        map: React.PropTypes.object,
        loadingGrid: React.PropTypes.bool,
        loadingGridError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        params: React.PropTypes.object,
        // featureGrigConfigUrl: React.PropTypes.string,
        profile: React.PropTypes.string,
        onDetail: React.PropTypes.func,
        onShowDetail: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        changeMapView: React.PropTypes.func,
        // loadFeatureGridConfig: React.PropTypes.func,
        onExpandFilterPanel: React.PropTypes.func,
        selectFeatures: React.PropTypes.func,
        totalFeatures: React.PropTypes.number,
        pagination: React.PropTypes.bool,
        filterFields: React.PropTypes.array,
        groupFields: React.PropTypes.array,
        spatialField: React.PropTypes.object,
        featureTypeName: React.PropTypes.string,
        ogcVersion: React.PropTypes.string,
        onQuery: React.PropTypes.func,
        searchUrl: React.PropTypes.string,
        newQuery: React.PropTypes.bool,
        dataSourceOptions: React.PropTypes.object,
        backToSearch: React.PropTypes.string
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getInitialState() {
        return {
            width: 800,
            height: 400
        };
    },
    getDefaultProps() {
        return {
            open: true,
            detailOpen: true,
            loadingGrid: false,
            loadingGridError: null,
            // featureGrigConfigUrl: null,
            profile: null,
            expanded: true,
            header: "featuregrid.header",
            features: [],
            featureTypeName: null,
            ogcVersion: "2.0",
            detailsConfig: {},
            columnsDef: [],
            pagination: false,
            params: {},
            groupFields: [],
            filterFields: [],
            spatialField: {},
            searchUrl: null,
            newQuery: false,
            dataSourceOptions: {
                rowCount: -1,
                pageSize: 20
            },
            backToSearch: "featuregrid.backtosearch",
            onDetail: () => {},
            onShowDetail: () => {},
            toggleSiraControl: () => {},
            changeMapView: () => {},
            // loadFeatureGridConfig: () => {},
            onExpandFilterPanel: () => {},
            selectFeatures: () => {},
            onQuery: () => {}
        };
    },
    /*componentDidMount() {
        if (this.props.featureGrigConfigUrl && this.props.profile) {
            this.props.loadFeatureGridConfig(this.props.featureGrigConfigUrl + this.props.profile + ".json");
        }
    },
    componentWillReceiveProps(props) {
        let url = props.featureGrigConfigUrl;
        let profile = props.profile;
        if (url !== this.props.featureGrigConfigUrl && profile !== this.props.profile) {
            this.props.loadFeatureGridConfig(this.props.featureGrigConfigUrl + this.props.profile + ".json");
        }
    },*/
    componentWillMount() {
        if (this.props.pagination) {
            this.dataSource = this.getDataSource(this.props.dataSourceOptions);
        }
    },
    shouldComponentUpdate() {
        return true;
    },
    componentWillUpdate(nextProps) {
        if (!nextProps.loadingGrid && nextProps.pagination && (nextProps.dataSourceOptions !== this.props.dataSourceOptions)) {
            this.dataSource = this.getDataSource(nextProps.dataSourceOptions);
        }
        if (!nextProps.loadingGrid && this.featureLoaded && nextProps.features !== this.props.features && Object.keys(nextProps.features).length > 0) {
            let rowsThisPage = nextProps.features[this.getRequestId(this.featureLoaded)] || [];
            this.featureLoaded.successCallback(rowsThisPage, nextProps.totalFeatures);
            this.featureLoaded = null;
        }
    },
    onGridClose() {
        this.props.selectFeatures([]);
        this.props.toggleSiraControl();
        this.props.onExpandFilterPanel(true);
    },
    onResize(event, resize) {
        let size = resize.size;
        this.setState({width: size.width, height: size.height});

    },
    getRequestId(params) {
        return `${params.startRow}_${params.endRow}_${params.sortModel.map((m) => `${m.colId}_${m.sort}` ).join('_')}`;
    },
    getSortAttribute(colId) {
        let col = head(this.props.columnsDef.filter((c) => colId === `properties.${c.field}`));
        return col && col.sortAttribute ? col.sortAttribute : '';
    },
    getSortOptions(params) {
        return params.sortModel.reduce((o, m) => ({sortBy: this.getSortAttribute(m.colId), sortOrder: m.sort}), {});
    },
    getFeatures(params) {
        if (!this.props.loadingGrid) {
            let reqId = this.getRequestId(params);
            let rowsThisPage = this.props.features[reqId];
            if (rowsThisPage) {
                params.successCallback(rowsThisPage, this.props.totalFeatures);
            }else {
                let pagination = {startIndex: params.startRow, maxFeatures: params.endRow - params.startRow};
                let filterObj = {
                groupFields: this.props.groupFields,
                filterFields: this.props.filterFields.filter((field) => field.value),
                spatialField: this.props.spatialField,
                pagination
                };
                let filter = FilterUtils.toOGCFilter(this.props.featureTypeName, filterObj, this.props.ogcVersion, this.getSortOptions(params));
                this.featureLoaded = params;
                this.sortModel = params.sortModel;
                this.props.onQuery(this.props.searchUrl, filter, this.props.params, reqId);
            }
        }
    },
    getDataSource(dataSourceOptions) {
        return {
            rowCount: dataSourceOptions.rowCount,
            getRows: this.getFeatures,
            pageSize: dataSourceOptions.pageSize,
            overflowSize: 20
        };
    },
    renderHeader() {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);

        return (
            <div className="handle_featuregrid">
                <Grid className="featuregrid-title" fluid={true}>
                    <Row>
                        <Col xs={11} sm={11} md={11} lg={11}>
                            <span>{header}</span>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1}>
                            <button onClick={this.onGridClose} className="close grid-close"><span>X</span></button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    },
    renderLoadingException(loadingError, msg) {
        let exception;
        if (isObject(loadingError)) {
            exception = loadingError.status +
                "(" + loadingError.statusText + ")" +
                ": " + loadingError.data;
        } else {
            exception = loadingError;
        }

        return (
            <Modal show={loadingError ? true : false} bsSize="small">
                <Modal.Header>
                    <Modal.Title><I18N.Message msgId={msg}/></Modal.Title>
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
        let loadingError = this.props.loadingGridError;
        if (loadingError) {
            return (
                this.renderLoadingException(loadingError, "Error while loading the features")
            );
        }

        let columns = [{
            onCellClicked: this.goToDetail,
            headerName: "",
            cellRenderer: reactCellRendererFactory(GoToDetail),
            suppressSorting: true,
            suppressMenu: true,
            pinned: true,
            width: 25,
            suppressResize: true
        }, ...(this.props.columnsDef.map((column) => {
            // if (!column.profiles || (column.profiles && column.profiles.indexOf(this.props.profile) !== -1)) {
            if (verifyProfiles(column.profiles, this.props.profile)) {
                return assign({}, column, {field: "properties." + column.field});
            }
        })).filter((c) => c )];
        if (this.sortModel && this.sortModel.length > 0) {
            columns = columns.map((c) => {
                let model = head(this.sortModel.filter((m) => m.colId === c.field));
                if ( model ) {
                    c.sort = model.sort;
                }
                return c;
            });
        }

        let gridConf = this.props.pagination ? {dataSource: this.dataSource, features: []} : {features: this.props.features};

        if (this.props.open) {
            return (
                 <Draggable start={{x: 760, y: 120}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                    <Panel className="featuregrid-container" collapsible expanded={this.props.expanded} header={this.renderHeader()} bsStyle="primary">
                        <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize} minConstraints={[500, 250]}>
                            <div style={this.props.loadingGrid ? {display: "none"} : {height: this.state.height, width: this.state.width}}>
                                <Button
                                    style={{marginBottom: "12px"}}
                                    onClick={this.onGridClose}><span><Message msgId={this.props.backToSearch}/></span>
                                </Button>
                                <h5>Risultati - {this.props.totalFeatures !== -1 ? this.props.totalFeatures : (<I18N.Message msgId={"sira.noQueryResult"}/>)}</h5>

                                <FeatureGrid
                                    changeMapView={this.props.changeMapView}
                                    srs="EPSG:4326"
                                    map={this.props.map}
                                    columnDefs={columns}
                                    style={{height: this.state.height - 120, width: this.state.width}}
                                    maxZoom={16}
                                    paging={this.props.pagination}
                                    zoom={15}
                                    agGridOptions={{enableServerSideSorting: true, suppressMultiSort: true}}
                                    toolbar={{
                                        zoom: true,
                                        exporter: true,
                                        toolPanel: true,
                                        selectAll: true
                                    }}
                                    {...gridConf}
                                    />

                            </div>
                            </Resizable>
                            {this.props.loadingGrid ? (<div style={{height: "300px", width: this.state.width}}>
                                <div style={{
                                    position: "relative",
                                    width: "60px",
                                    top: "50%",
                                    left: "45%"}}>
                                    <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                                </div>
                            </div>) : null}
                    </Panel>
              </Draggable>
            );
        }

        return null;
    },
    goToDetail(params) {
        let url = this.props.detailsConfig.service.url;
        let urlParams = this.props.detailsConfig.service.params;
        for (let param in urlParams) {
            if (urlParams.hasOwnProperty(param)) {
                url += "&" + param + "=" + urlParams[param];
            }
        }

        this.props.onDetail(
            this.props.detailsConfig.template,
            // this.props.detailsConfig.cardModelConfigUrl,
            url + "&FEATUREID=" + params.data.id + (this.props.params.authkey ? "&authkey=" + this.props.params.authkey : "")
        );

        if (!this.props.detailOpen) {
            this.props.onShowDetail();
        }
    }
});

module.exports = connect((state) => ({
    open: state.siraControls.grid,
    detailOpen: state.siraControls.detail,
    detailsConfig: state.siradec && state.siradec.card || {},
    columnsDef: state.grid.featuregrid && state.grid.featuregrid.grid ? state.grid.featuregrid.grid.columns : [],
    features: state.grid && state.grid.data || [],
    totalFeatures: state.grid.totalFeatures,
    map: (state.map && state.map) || (state.config && state.config.map),
    loadingGrid: state.grid.loadingGrid,
    loadingGridError: state.grid.loadingGridError,
    pagination: (state.queryform.pagination && state.queryform.pagination.maxFeatures) ? true : false,
    groupFields: state.queryform.groupFields,
    filterFields: state.queryform.filterFields,
    spatialField: state.queryform.spatialField,
    featureTypeName: state.siradec.featureTypeName,
    searchUrl: state.queryform.searchUrl,
    dataSourceOptions: state.grid.dataSourceOptions
}), {
    onDetail: loadCardTemplate,
    onShowDetail: toggleSiraControl.bind(null, 'detail'),
    toggleSiraControl: toggleSiraControl.bind(null, 'grid'),
    changeMapView: changeMapView,
    // loadFeatureGridConfig: loadFeatureGridConfig,
    onExpandFilterPanel: expandFilterPanel,
    selectFeatures: selectFeatures,
    onQuery: loadFeaturesWithPagination
})(SiraFeatureGrid);
