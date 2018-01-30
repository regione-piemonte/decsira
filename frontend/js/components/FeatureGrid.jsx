const React = require('react');
const {connect} = require('react-redux');
const {isObject} = require('lodash');

const {Modal, Panel, Grid, Row, Col, Button} = require('react-bootstrap');

const FilterUtils = require('../utils/SiraFilterUtils');

const {getWindowSize} = require('../../MapStore2/web/client/utils/AgentUtils');
const {getFeaturesAndExport, getFileAndExport} = require('../actions/siraexporter');

const {head} = require('lodash');
const {verifyProfiles} = require('../utils/TemplateUtils');

const SiraExporter = connect((state) => {
    return {
        show: state.siraControls.exporter,
        exportParams: state.siraexporter.params,
        featuregrid: state.grid && state.grid.featuregrid,
        loading: state.siraexporter.loading,
        errormsg: state.siraexporter.errormsg,
        csvName: state.siraexporter.csvName,
        shpName: state.siraexporter.shpName,
        addFile: (state.grid && state.grid.featuregrid && state.grid.featuregrid.grid && state.grid.featuregrid.grid.exporter && state.grid.featuregrid.grid.exporter.addFile) || state.siraexporter.addFile
    };
}, {
    getFeaturesAndExport,
    getFileAndExport
})(require('./SiraExporter'));

const FeatureGrid = connect((state) => {
    return {
        select: state.featuregrid && state.featuregrid.select || [],
        selectAllActive: state.featuregrid && state.featuregrid.selectAll
    };
})(require('../../MapStore2/web/client/components/data/featuregrid/FeatureGrid'));

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');
const Message = require('../../MapStore2/web/client/components/I18N/Message');
const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('./GoToDetail');
const GridCellDate = require('./GridCellDate');
const Spinner = require('react-spinkit');
const assign = require('object-assign');

const SiraGrid = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        detailOpen: React.PropTypes.bool,
        expanded: React.PropTypes.bool,
        header: React.PropTypes.string,
        features: React.PropTypes.oneOfType([ React.PropTypes.array, React.PropTypes.object]),
        exporterConfig: React.PropTypes.object,
        detailsConfig: React.PropTypes.object,
        columnsDef: React.PropTypes.array,
        map: React.PropTypes.object,
        loadingGrid: React.PropTypes.bool,
        exportCsvMimeType: React.PropTypes.string,
        loadingGridError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        initWidth: React.PropTypes.number,
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
        modeBackToDataset: React.PropTypes.bool,
        backToDataset: React.PropTypes.func,
        filterFields: React.PropTypes.array,
        groupFields: React.PropTypes.array,
        spatialField: React.PropTypes.object,
        featureTypeName: React.PropTypes.string,
        ogcVersion: React.PropTypes.string,
        onQuery: React.PropTypes.func,
        searchUrl: React.PropTypes.string,
        dataSourceOptions: React.PropTypes.object,
        withMap: React.PropTypes.bool.isRequired,
        onConfigureQuery: React.PropTypes.func,
        attributes: React.PropTypes.array,
        cleanError: React.PropTypes.func,
        selectAllToggle: React.PropTypes.func,
        templateProfile: React.PropTypes.string,
        zoomToFeatureAction: React.PropTypes.func,
        backToSearch: React.PropTypes.string,
        gridType: React.PropTypes.string,
        setExportParams: React.PropTypes.func,
        maxFeatures: React.PropTypes.number,
        nameSpaces: React.PropTypes.object,
        exporter: React.PropTypes.bool.isRequired,
        fullScreen: React.PropTypes.bool.isRequired,
        selectAll: React.PropTypes.bool.isRequired,
        configureExporter: React.PropTypes.func

    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getInitialState() {
        return {};
    },
    getDefaultProps() {
        return {
            open: true,
            detailOpen: true,
            loadingGrid: false,
            modeBackToDataset: false,
            loadingGridError: null,
            attributes: [],
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
            dataSourceOptions: {
                rowCount: -1,
                pageSize: 20
            },
            initWidth: 600,
            withMap: true,
            templateProfile: 'default',
            backToSearch: "featuregrid.backtosearch",
            gridType: "search",
            exporter: true,
            fullScreen: false,
            selectAll: true,
            onDetail: () => {},
            onShowDetail: () => {},
            toggleSiraControl: () => {},
            changeMapView: () => {},
            // loadFeatureGridConfig: () => {},
            onExpandFilterPanel: () => {},
            selectFeatures: () => {},
            onQuery: () => {},
            onConfigureQuery: () => {},
            cleanError: () => {},
            configureExporter: () => {}
        };
    },
    componentWillMount() {
        const hOffset = this.props.fullScreen ? 150 : 181;
        let height = getWindowSize().maxHeight - hOffset;
        this.setState({width: this.props.initWidth - 30, height});
        if (this.props.pagination && this.props.gridType === 'search') {
            this.dataSource = this.getDataSource(this.props.dataSourceOptions);
        }else if ( this.props.pagination && this.props.gridType === 'all_results' && this.props.attributes[0]) {
            let newFilter = FilterUtils.getOgcAllPropertyValue(this.props.featureTypeName, this.props.attributes[0].attribute);
            this.props.onConfigureQuery(this.props.searchUrl, newFilter, this.props.params, {
                "maxFeatures": this.props.dataSourceOptions.pageSize || 20,
                "startIndex": 0
                });
        }
    },
    componentWillReceiveProps(nextProps) {
        const hOffset = nextProps.fullScreen ? 150 : 181;
        if (nextProps.initWidth !== this.props.initWidth) {
            let height = getWindowSize().maxHeight - hOffset;
            this.setState({width: nextProps.initWidth - 30, height});
        }
    },
    shouldComponentUpdate(nextProps) {
        return Object.keys(this.props).reduce((prev, prop) => {
            if ( !prev && (prop !== 'map' && this.props[prop] !== nextProps[prop])) {
                return true;
            }
            return prev;
        }, false);
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
    onGridClose(filter) {
        this.props.selectFeatures([]);
        if (this.props.selectAllToggle) {
            this.props.selectAllToggle();
        }
        this.props.toggleSiraControl('grid');
        if (filter) {
            this.props.onExpandFilterPanel(true);
        }
        if (this.props.modeBackToDataset && !filter) {
            this.props.backToDataset();
        }
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
                let filterObj = this.props.gridType === 'search' ? {
                groupFields: this.props.groupFields,
                filterFields: this.props.filterFields.filter((field) => field.value),
                spatialField: this.props.spatialField,
                pagination
                } : {
                groupFields: [],
                filterFields: [],
                spatialField: {},
                pagination
                };
                let filter = FilterUtils.toOGCFilterSira(this.props.featureTypeName, filterObj, this.props.ogcVersion, this.getSortOptions(params));
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
                            <button onClick={() => this.onGridClose(false)} className="close grid-close"><span>X</span></button>
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
            <Modal show={loadingError ? true : false} bsSize="small" onHide={() => {
                this.props.cleanError(false);
               // this.onGridClose(true);
            }}>
                <Modal.Header className="dialog-error-header-side" closeButton>
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
                this.renderLoadingException(loadingError, "queryform.query_request_exception")
            );
        }

        const cols = this.props.columnsDef.map((column) => {
            // if (!column.profiles || (column.profiles && column.profiles.indexOf(this.props.profile) !== -1)) {
            if (verifyProfiles(column.profiles, this.props.profile)) {
                return assign({}, column, {field: "properties." + column.field});
            }
        }).filter((c) => c);
        const vCols = cols.filter((c) => !c.hide).length;
        const px = this.props.withMap ? 50 : 25;
        const defWidth = (this.state.width - (px + 2)) / vCols;
        let columns = [{
            onCellClicked: this.goToDetail,
            headerName: "",
            cellRenderer: reactCellRendererFactory(GoToDetail),
            suppressSorting: true,
            suppressMenu: true,
            pinned: true,
            width: 25,
            suppressResize: true
        }, ...(cols.map((c) => {
            return assign({}, {width: defWidth}, c, c.dateFormat ? {cellRenderer: reactCellRendererFactory(GridCellDate)} : {});
        }
            ))];
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
                    <Panel className="featuregrid-container sidepanel-featuregrid" collapsible expanded={this.props.expanded} header={this.renderHeader()} bsStyle="primary">
                    <SiraExporter
                        toggleExporter={this.props.toggleSiraControl}
                        searchUrl={this.props.searchUrl}
                        params={this.props.params}
                        csvMimeType={this.props.exportCsvMimeType}
                    />
                            <div style={this.props.loadingGrid ? {display: "none"} : {height: this.state.height, width: this.state.width}}>
                                <Button
                                    className="back-to-query"
                                    style={{marginBottom: "12px"}}
                                    onClick={() => this.onGridClose(true)}><span><Message msgId={this.props.backToSearch}/></span>
                                </Button>
                                <h5>Risultati - {this.props.totalFeatures !== -1 ? this.props.totalFeatures : (<I18N.Message msgId={"sira.noQueryResult"}/>)}</h5>

                                <FeatureGrid
                                    changeMapView={this.props.changeMapView}
                                    srs="EPSG:4326"
                                    ref={(r)=> {this.grid = r; }}
                                    map={this.props.map}
                                    columnDefs={columns}
                                    style={{height: this.state.height - 120, width: "100%"}}
                                    maxZoom={16}
                                    selectFeatures={this.selectFeatures}
                                    selectAll={this.props.selectAllToggle ? this.selectAll : undefined}
                                    paging={this.props.pagination}
                                    zoom={15}
                                    enableZoomToFeature={this.props.withMap}
                                    agGridOptions={{enableServerSideSorting: true, suppressMultiSort: true, overlayNoRowsTemplate: "Nessun risultato trovato"}}
                                    zoomToFeatureAction={this.props.zoomToFeatureAction}
                                    toolbar={{
                                        zoom: this.props.withMap,
                                        exporter: this.props.exporter,
                                        toolPanel: true,
                                        selectAll: this.props.selectAll
                                    }}
                                    exportAction={this.exportFeatures}

                                    {...gridConf}
                                    />
                            </div>
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
            );
        }

        return null;
    },
    selectAll(select) {
        if (select) {
            let filterObj = this.props.gridType === 'search' ? {
                groupFields: this.props.groupFields,
                filterFields: this.props.filterFields.filter((field) => field.value),
                spatialField: this.props.spatialField
            } : {
                groupFields: [],
                filterFields: [],
                spatialField: {}
            };
            this.props.selectAllToggle(this.props.featureTypeName, filterObj, this.props.ogcVersion, this.props.params, this.props.searchUrl, this.props.nameSpaces);
        } else {
            this.props.selectAllToggle();
        }
    },
    selectFeatures(features) {
        if (this.props.selectAllToggle) {
            this.props.selectAllToggle();
        }
        this.props.selectFeatures(features);
    },
    goToDetail(params) {
        let url = this.props.detailsConfig.service.url;
        let urlParams = this.props.detailsConfig.service.params;
        for (let param in urlParams) {
            if (urlParams.hasOwnProperty(param)) {
                url += "&" + param + "=" + urlParams[param];
            }
        }

        let templateUrl = typeof this.props.detailsConfig.template === "string" ? this.props.detailsConfig.template : this.props.detailsConfig.template[this.props.templateProfile];
        this.props.onDetail(
             templateUrl,
            // this.props.detailsConfig.cardModelConfigUrl,
            url + "&FEATUREID=" + params.data.id + (this.props.params.authkey ? "&authkey=" + this.props.params.authkey : "")
        );

        if (!this.props.detailOpen) {
            this.props.onShowDetail();
        }
    },
    exportFeatures(api) {
        const {exporterConfig, configureExporter, toggleSiraControl, maxFeatures, gridType,
                groupFields, filterFields, spatialField} = this.props;
        if ( exporterConfig ) {
            configureExporter(exporterConfig);
        }
        toggleSiraControl("exporter", true);
        const pagination = (exporterConfig && exporterConfig.maxFeatures || maxFeatures) ? {
            startIndex: 0,
            maxFeatures: exporterConfig && exporterConfig.maxFeatures || maxFeatures
        } : null;
        let filterObj = gridType === 'search' ? {
            groupFields: groupFields,
            filterFields: filterFields.filter((field) => field.value),
            spatialField: spatialField,
            pagination
            } : {
            groupFields: [],
            filterFields: [],
            spatialField: {},
            pagination
            };
        let filter = FilterUtils.toOGCFilterSira(this.props.featureTypeName, filterObj, this.props.ogcVersion);
        let features = [];
        api.forEachNode((n) => (features.push(n.data)));
        let columns = api.columnController.getAllDisplayedColumns().reduce((cols, c) => {
            if ( c.colId.indexOf("properties.") === 0) {
                cols.push(c.colDef);
            }
            return cols;
        }, []);
        this.props.setExportParams({filter, features, columns, featureType: this.props.featureTypeName});
    }
});

module.exports = SiraGrid;
