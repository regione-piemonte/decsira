const PropTypes = require('prop-types');
const React = require('react');
const {connect} = require('react-redux');
const {isObject} = require('lodash');
const {bindActionCreators} = require('redux');

const {Modal, Panel, Grid, Row, Col, Button} = require('react-bootstrap');

const FilterUtils = require('../utils/SiraFilterUtils');

const {getWindowSize} = require('@mapstore/utils/AgentUtils');
const {getFeaturesAndExport, getFileAndExport} = require('../actions/siraexporter');
const {setTreeFeatureType} = require('../actions/siradec');
const {closeTree} = require('../actions/siraTree');
const { head, isEqual, isEmpty } = require('lodash');
const {verifyProfiles} = require('../utils/TemplateUtils');
const MultiSelectLayer = require('./MultiSelectLayer');
const CoordinatesUtils = require('@mapstore/utils/CoordinatesUtils');
const mapUtils = require('@mapstore/utils/MapUtils');
const configUtils = require('@mapstore/utils/ConfigUtils');

const SiraExporter = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        show: state.siraControls.exporter,
        exportParams: state.siraexporter.params,
        confMaxFeatures: (activeConfig.exporter ? activeConfig.exporter.maxFeatures : undefined),
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
})(require('../components/identify/featuregrid/FeatureGrid'));

const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const I18N = require('@mapstore/components/I18N/I18N');
const Message = require('@mapstore/components/I18N/Message');
const {reactCellRendererFactory} = require('../components/identify/featuregrid/CellRendererFactory');
const GoToDetail = require('./GoToDetail');
const GridCellDate = require('./GridCellDate');
const GridCellNumber = require('./GridCellNumber');
const Spinner = require('react-spinkit');
const assign = require('object-assign');

class SiraGrid extends React.Component {
    static propTypes = {
        open: PropTypes.bool,
        detailOpen: PropTypes.bool,
        expanded: PropTypes.bool,
        header: PropTypes.string,
        features: PropTypes.oneOfType([ PropTypes.array, PropTypes.object]),
        exporterConfig: PropTypes.object,
        detailsConfig: PropTypes.object,
        columnsDef: PropTypes.array,
        map: PropTypes.object,
        loadingGrid: PropTypes.bool,
        exportCsvMimeType: PropTypes.string,
        loadingGridError: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        initWidth: PropTypes.number,
        params: PropTypes.object,
        // featureGrigConfigUrl: React.PropTypes.string,
        profile: PropTypes.string,
        onDetail: PropTypes.func,
        onShowDetail: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        changeMapView: PropTypes.func,
        // loadFeatureGridConfig: React.PropTypes.func,
        onExpandFilterPanel: PropTypes.func,
        selectFeatures: PropTypes.func,
        totalFeatures: PropTypes.number,
        pagination: PropTypes.bool,
        modeBackToDataset: PropTypes.bool,
        backToDataset: PropTypes.func,
        filterFields: PropTypes.array,
        groupFields: PropTypes.array,
        spatialField: PropTypes.object,
        featureTypeName: PropTypes.string,
        ogcVersion: PropTypes.string,
        onQuery: PropTypes.func,
        searchUrl: PropTypes.string,
        dataSourceOptions: PropTypes.object,
        withMap: PropTypes.bool.isRequired,
        onConfigureQuery: PropTypes.func,
        attributes: PropTypes.array,
        cleanError: PropTypes.func,
        selectAllToggle: PropTypes.func,
        templateProfile: PropTypes.string,
        zoomToFeatureAction: PropTypes.func,
        backToSearch: PropTypes.string,
        gridType: PropTypes.string,
        setExportParams: PropTypes.func,
        maxFeatures: PropTypes.number,
        nameSpaces: PropTypes.object,
        exporter: PropTypes.bool.isRequired,
        fullScreen: PropTypes.bool.isRequired,
        selectAll: PropTypes.bool.isRequired,
        configureExporter: PropTypes.func,
        setTreeFeatureType: PropTypes.func,
        closeTree: PropTypes.func,
        datasetHeader: PropTypes.string,
        featureTypeNameLabel: PropTypes.string,
        viewParams: PropTypes.string,
        configureMLS: PropTypes.func,
        multiLayerSelect: PropTypes.array,
        setFeatureRowData: PropTypes.func,
        isIndicatore: PropTypes.bool,
        indicaTitle: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        open: true,
        detailOpen: true,
        loadingGrid: false,
        modeBackToDataset: false,
        loadingGridError: null,
        attributes: [],
        profile: null,
        expanded: true,
        header: "featuregrid.header",
        datasetHeader: "queryform.form.dataset_header",
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
        featureTypeNameLabel: null,
        viewParams: null,
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

    state = {};

    componentWillMount() {
        const hOffset = this.props.fullScreen ? 150 : 181;
        let height = getWindowSize().maxHeight - hOffset;
        this.setState({width: this.props.initWidth - 30, height});
        if (this.props.pagination && this.props.gridType === 'search') {
            this.dataSource = this.getDataSource(this.props.dataSourceOptions);
        } else if ( this.props.pagination && this.props.gridType === 'all_results' && this.props.attributes[0]) {
            this.props.onConfigureQuery({
                "maxFeatures": this.props.dataSourceOptions.pageSize || 20,
                "startIndex": 0
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        const hOffset = nextProps.fullScreen ? 150 : 181;
        if (nextProps.initWidth !== this.props.initWidth) {
            let height = getWindowSize().maxHeight - hOffset;
            this.setState({width: nextProps.initWidth - 30, height});
        }
    }

    shouldComponentUpdate(nextProps) {
        return Object.keys(this.props).reduce((prev, prop) => {
            if ( !prev && (prop !== 'map' && !isEqual(this.props[prop], nextProps[prop]))) {
                return true;
            }
            return prev;
        }, false);
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.loadingGrid && nextProps.pagination && (nextProps.dataSourceOptions !== this.props.dataSourceOptions)) {
            this.dataSource = this.getDataSource(nextProps.dataSourceOptions);
        }
        if (!nextProps.loadingGrid && this.featureLoaded && nextProps.features !== this.props.features && Object.keys(nextProps.features).length > 0) {
            let rowsThisPage = nextProps.features[this.getRequestId(this.featureLoaded)] || [];
            this.featureLoaded.successCallback(rowsThisPage, nextProps.totalFeatures);
            this.featureLoaded = null;
        }
    }

    onGridClose = (filter) => {
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
    };

    onResize = (event, resize) => {
        let size = resize.size;
        this.setState({width: size.width, height: size.height});

    };

    getRequestId = (params) => {
        return `${params.startRow}_${params.endRow}_${params.sortModel.map((m) => `${m.colId}_${m.sort}` ).join('_')}`;
    };

    getSortAttribute = (colId) => {
        let col = head(this.props.columnsDef.filter((c) => colId === `properties.${c.field}`));
        return col && col.sortAttribute ? col.sortAttribute : '';
    };

    getSortOptions = (params) => {
        return params.sortModel.reduce((o, m) => ({sortBy: this.getSortAttribute(m.colId), sortOrder: m.sort}), {});
    };

    getFeatures = (params) => {
        if (!this.props.loadingGrid) {
            let reqId = this.getRequestId(params);
            let rowsThisPage = this.props.features[reqId];
            if (rowsThisPage) {
                params.successCallback(rowsThisPage, this.props.totalFeatures);
            } else {
                let pagination = {startIndex: params.startRow, maxFeatures: params.endRow - params.startRow};
                let filterObj = this.props.gridType === 'search' ? {
                    groupFields: this.props.groupFields,
                    filterFields: this.props.filterFields.filter(({value = ''}) => value !== null && value !== ''),
                    spatialField: this.props.spatialField,
                    pagination,
                    options: { viewParams: this.props.viewParams }
                } : {
                    groupFields: [],
                    filterFields: [],
                    spatialField: {},
                    pagination,
                    options: { viewParams: this.props.viewParams }
                };
                let filter = FilterUtils.toOGCFilterSira(this.props.featureTypeName, filterObj, this.props.ogcVersion, this.getSortOptions(params));
                this.featureLoaded = params;
                this.sortModel = params.sortModel;
                this.props.onQuery(this.props.searchUrl, filter, this.props.params, reqId);
            }
        }
    };

    getDataSource = (dataSourceOptions) => {
        return {
            rowCount: dataSourceOptions.rowCount,
            getRows: this.getFeatures,
            pageSize: dataSourceOptions.pageSize,
            overflowSize: 20
        };
    };

    renderHeader = () => {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);

        return (
            <div className="handle_featuregrid">
                <Grid className="featuregrid-title" fluid>
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
    };

    renderLoadingException = (loadingError, msg) => {
        let exception;
        if (isObject(loadingError)) {
            exception = loadingError.status +
                "(" + loadingError.statusText + ")" +
                ": " + loadingError.data;
        } else {
            exception = loadingError;
        }

        return (
            <Modal show={!!loadingError} bsSize="small" onHide={() => {
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
    };

    renderDatasetHeader = () => {
        const datasetHeader = LocaleUtils.getMessageById(this.context.messages, this.props.datasetHeader);
        const indicaTitle = this.props.isIndicatore ? (
            <div className="dhContainer">
                <b>Indicatore selezionato</b> <br /> {this.props.indicaTitle}
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

    render() {
        let loadingError = this.props.loadingGridError;
        if (loadingError) {
            return (
                this.renderLoadingException(loadingError, "queryform.query_request_exception")
            );
        }

        const cols = this.props.columnsDef.map((column) => {
            // if (!column.profiles || (column.profiles && column.profiles.indexOf(this.props.profile) !== -1)) {
            return verifyProfiles(column.profiles, this.props.profile) &&
                 assign({}, column, {field: "properties." + column.field});
        })?.filter((c) => c);
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
            hide: !this.props.detailsConfig.service,
            width: 25,
            suppressResize: true
        },
        // Multi select layer button when mls configured for the feature
        {
            onCellClicked: this.multiLayerSelect,
            headerName: "",
            cellRenderer: reactCellRendererFactory(MultiSelectLayer),
            suppressSorting: true,
            suppressMenu: true,
            pinned: true,
            hide: isEmpty(this.props.multiLayerSelect) || !this.props.withMap,
            width: 25,
            suppressResize: true
        }, ...(cols.map((c) => {
            let renderer = c.dateFormat ? {cellRenderer: reactCellRendererFactory(GridCellDate)} : {};
            renderer = c.type === 1 ? {cellRenderer: reactCellRendererFactory(GridCellNumber)} : renderer;
            return assign({}, {
                width: defWidth},
            c,
            renderer
            );
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
                        totalFeatures={this.props.totalFeatures}
                        maxFeatures={this.props.maxFeatures}
                    />
                    {this.renderDatasetHeader()}
                    <div style={this.props.loadingGrid ? {display: "none"} : {height: this.state.height, width: this.state.width}}>
                        <Button
                            className="back-to-query"
                            style={{marginBottom: "12px"}}
                            onClick={() => this.onGridClose(true)}><span><Message msgId={this.props.backToSearch}/></span>
                        </Button>
                        <h5>Risultati - {this.props.totalFeatures !== -1 ? this.props.totalFeatures : (<I18N.Message msgId={"sira.noQueryResult"}/>)}</h5>
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
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
                                changeMapViewGrid={this.changeMapView}
                                agGridOptions={{enableServerSideSorting: true,  rowBuffer: 20, suppressMultiSort: true, overlayNoRowsTemplate: "Nessun risultato trovato"}}
                                zoomToFeature={this.zoomToFeature}
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
    }

    selectAll = (select) => {
        if (select) {
            let filterObj = this.props.gridType === 'search' ? {
                groupFields: this.props.groupFields,
                filterFields: this.props.filterFields.filter((field) => field.value),
                spatialField: this.props.spatialField,
                options: { viewParams: this.props.viewParams }
            } : {
                groupFields: [],
                filterFields: [],
                spatialField: {},
                options: { viewParams: this.props.viewParams }
            };
            this.props.selectAllToggle(this.props.featureTypeName, filterObj, this.props.ogcVersion, this.props.params, this.props.searchUrl, this.props.nameSpaces);
        } else {
            this.props.selectAllToggle();
        }
    };

    selectFeatures = (features) => {
        if (this.props.selectAllToggle) {
            this.props.selectAllToggle();
        }
        this.props.selectFeatures(features);
    };

    goToDetail = (params) => {
        this.props.setTreeFeatureType(undefined);
        this.props.closeTree();

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

        params?.data && this.props.setFeatureRowData(params?.data);

        if (!this.props.detailOpen) {
            this.props.onShowDetail();
        }
    };

    multiLayerSelect = (params) => {
        if (params.data?.geometry?.coordinates) {
            this.props.setTreeFeatureType(undefined);
            this.props.closeTree();

            // Configure and add the MLS layer to TOC
            this.props.configureMLS(this.props.columnsDef, params.data?.geometry, params.data);
        }
        // Zoom to feature when zoom enabled
        this.zoomToFeature(params);
    };

    zoomToFeature = (params) => {
        let geometry = params.data.geometry;
        if (geometry.coordinates) {
            if (this.props.zoomToFeatureAction) {
                this.props.zoomToFeatureAction(params.data);
            } else {
                this.changeMapView([geometry], 15);
            }
        }
    };

    changeMapView = (geometries, zoom) => {
        let extent = geometries.reduce((prev, next) => {
            return CoordinatesUtils.extendExtent(prev, CoordinatesUtils.getGeoJSONExtent(next));
        }, CoordinatesUtils.getGeoJSONExtent(geometries[0]));

        const srs = "EPSG:4326";
        const maxZoom = 16;
        const mapSize = this.props.map.size;
        let newZoom = 1;
        let newCenter = this.props.map.center;
        const proj = this.props.map.projection || "EPSG:3857";

        if (extent) {
            extent = (srs !== proj) ? CoordinatesUtils.reprojectBbox(extent, srs, proj) : extent;
            // zoom by the max. extent defined in the map's config
            newZoom = zoom ? zoom : mapUtils.getZoomForExtent(extent, mapSize, 0, 21);
            newZoom = (maxZoom && newZoom > maxZoom) ? maxZoom : newZoom;

            // center by the max. extent defined in the map's config
            newCenter = mapUtils.getCenterForExtent(extent, proj);

            // do not reproject for 0/0
            if (newCenter.x !== 0 || newCenter.y !== 0) {
                // reprojects the center object
                newCenter = configUtils.getCenter(newCenter, "EPSG:4326");
            }
            // adapt the map view by calling the corresponding action
            this.props.changeMapView(newCenter, newZoom,
                this.props.map.bbox, this.props.map.size, null, proj);
        }
    };

    exportFeatures = (api) => {
        const {exporterConfig, /* configureExporter,*/ toggleSiraControl, maxFeatures, gridType,
            groupFields, filterFields, spatialField } = this.props;
        /*
        if (exporterConfig) {
            configureExporter(exporterConfig);
        }*/
        toggleSiraControl("exporter", true);
        const pagination = (exporterConfig && exporterConfig.maxFeatures || maxFeatures) ? {
            startIndex: 0,
            maxFeatures: exporterConfig && exporterConfig.maxFeatures || maxFeatures
        } : null;
        let filterObj = gridType === 'search' ? {
            groupFields: groupFields,
            filterFields: filterFields.filter((field) => field.value),
            spatialField: spatialField,
            pagination,
            options: { viewParams: this.props.viewParams }
        } : {
            groupFields: [],
            filterFields: [],
            spatialField: {},
            pagination,
            options: { viewParams: this.props.viewParams }
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
    };
}

module.exports = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    const layers = state.layers.flat;
    const layerId = state.siradec.currentNodeId ? state.siradec.currentNodeId : null;
    const currLayer = layerId ? layers.filter((l) => l.featureType === state.siradec.activeFeatureType && l.id === layerId)[0] : null;
    return {
        featureTypeNameLabel: activeConfig.featureTypeNameLabel,
        viewParams: currLayer ? currLayer.viewparams : undefined,
        // Indica title props
        isIndicatore: currLayer && currLayer.isIndicatore ? true : false,
        indicaTitle: currLayer ? currLayer.indicaTitle : ""
    };
}, dispatch => {
    return bindActionCreators({
        setTreeFeatureType,
        closeTree
    }, dispatch);
})(SiraGrid);
