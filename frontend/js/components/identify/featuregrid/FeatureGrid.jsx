/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');

const DataGrid = require('./DataGrid').default;
const {keys, isEqual, isFunction} = require('lodash');
const {ButtonToolbar, Button, Glyphicon, Popover, OverlayTrigger} = require('react-bootstrap');
const assign = require("object-assign");

const ZoomToFeature = require("./ZoomToFeature");
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const { reactCellRendererFactory } = require('./CellRendererFactory');

require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-fresh.css");

// const DownloadResultsComponent = require('../../download/DownloadResultsComponent').default;

const calcVisibility = (def, state) => {
    if (state === true) {
        return true;
    }
    if (state === false) {
        return false;
    }
    return def;
};

class FeatureGrid extends React.Component {
    static propTypes = {
        features: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        select: PropTypes.array,
        columnDefs: PropTypes.array,
        changeMapView: PropTypes.func,
        selectFeatures: PropTypes.func,
        highlightedFeatures: PropTypes.array,
        style: PropTypes.object,
        virtualPaging: PropTypes.bool,
        paging: PropTypes.bool,
        pageSize: PropTypes.number,
        overflowSize: PropTypes.number,
        agGridOptions: PropTypes.object,
        columnDefaultOptions: PropTypes.object,
        excludeFields: PropTypes.array,
        map: PropTypes.object,
        enableZoomToFeature: PropTypes.bool,
        srs: PropTypes.string,
        maxZoom: PropTypes.number,
        zoom: PropTypes.number,
        toolbar: PropTypes.object,
        dataSource: PropTypes.object,
        selectAll: PropTypes.func,
        selectAllActive: PropTypes.bool,
        zoomToFeatureAction: PropTypes.func,
        exportAction: PropTypes.func,
        totalFeatures: PropTypes.number,
        tools: PropTypes.array,
        useIcons: PropTypes.bool,
        changeMapViewGrid: PropTypes.func,
        zoomToFeature: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        highlightedFeatures: null,
        features: null,
        select: [],
        columnDefs: null,
        changeMapView: () => {},
        selectFeatures: () => {},
        style: {
            height: "325px",
            width: "800px"
        },
        virtualPaging: false,
        paging: false,
        overflowSize: 10,
        pageSize: 10,
        agGridOptions: {},
        columnDefaultOptions: {
            width: 125
        },
        excludeFields: [],
        map: {},
        zoom: null,
        enableZoomToFeature: true,
        srs: "EPSG:4326",
        tools: [],
        toolbar: {
            zoom: true,
            exporter: true,
            toolPanel: true,
            selectAll: true
        },
        dataSource: null,
        selectAllActive: false,
        totalFeatures: 0,
        exportAction: (api) => {
            if ( api) {
                api.exportDataAsCsv();
            }
        }
    };

    state = {
        columnsVisibility: {}
    };

    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    componentWillUpdate(nextProps) {
        if (!isEqual(nextProps.features, this.props.features) && (this.api.getSelectedNodes().length > 0)) {
            this.suppresSelectionEvent = true;
        }
    }

    componentDidUpdate() {
        if (this.props.highlightedFeatures) {
            this.selectHighlighted();
        }
    }

    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
        if (this.props.highlightedFeatures) {
            this.selectHighlighted();
        }
    };

    onColumnVisible = (event) => {
        this.setState({
            columnsVisibility: assign({}, this.state.columnsVisibility, {
                [event.column.colId]: event.visible
            })
        });
    };

    // Internal function that simulate data source getRows for in memory data
    getRows = (params) => {
        let data = this.props.features;
        if (params.sortModel && params.sortModel.length > 0) {
            data = this.sortData(params.sortModel, data);
        }
        let rowsThisPage = data.slice(params.startRow, params.endRow);
        let lastRow = -1;
        if (data.length <= params.endRow) {
            lastRow = data.length;
        }
        params.successCallback(rowsThisPage, lastRow);
    };

    render() {
        let isPagingOrVirtual = (this.props.virtualPaging || this.props.paging);

        let tools = [];
        if (this.props.toolbar.zoom) {
            tools.push(<Button key="zoom" onClick={this.zoomToFeatures}>&nbsp;<Glyphicon glyph="search"/></Button>);
        }

        if (this.props.toolbar.exporter) {
            tools.push(<Button key="exporter" onClick={() => this.props.exportAction(this.api)}>
                <Glyphicon glyph="download"/>&nbsp;<I18N.Message msgId={"featuregrid.export"}/>
            </Button>);
        }

        if (this.props.toolbar.toolPanel) {
            tools.push(<Button key="toolPanel" onClick={() => { this.api.showToolPanel(!this.api.isToolPanelShowing()); }}>
                <Glyphicon glyph="cog"/>&nbsp;<I18N.Message msgId={"featuregrid.tools"}/>
            </Button>);
        }

        if (this.props.toolbar.selectAll) {
            let nOfFeatures = this.props.features && this.props.features.length;
            if (this.props.paging && this.api) {
                nOfFeatures = 0;
                this.api.forEachNode(() => {nOfFeatures++; });
            }
            let allSelected = false;
            if (this.props.selectAll) {
                allSelected = this.props.selectAllActive;
            } else {
                allSelected = !(this.props.select.length < nOfFeatures);
            }
            const popoverAlert = (
                <Popover id="popover-positioned-top" title="Attenzione">
                    <div className="alert alert-info">
                        <I18N.Message msgId={"featuregrid.popoverMessage"}/>
                    </div>
                </Popover>
            );
            const buttonSelectAll = (
                <Button key="allrowsselection" onClick={() => {
                    if (this.props.selectAll) {
                        if (!allSelected && this.api) {
                            this.api.deselectAll();
                        }
                        this.props.selectAll(!allSelected);
                    } else {
                        this.selectAllRows(!allSelected);
                    }
                }}><Glyphicon glyph="check"/>&nbsp;
                    {
                        (!allSelected) ? (
                            <I18N.Message msgId={"featuregrid.selectall"}/>
                        ) : (
                            <I18N.Message msgId={"featuregrid.deselectall"}/>
                        )
                    }
                </Button>
            );
            let trigger = !allSelected ? "click" : "none";
            if (this.props.totalFeatures > 50000) {
                tools.push(<OverlayTrigger trigger={trigger} placement="top" overlay={popoverAlert} rootClose>
                    {buttonSelectAll}
                </OverlayTrigger>);
            } else {
                tools.push(buttonSelectAll);
            }
        }
        tools = [...tools, this.props.tools];

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }}>
                <div style={this.props.style} className="ag-fresh">
                    <DataGrid
                        virtualPaging={this.props.virtualPaging}
                        columnDefs={this.setColumnDefs()}
                        rowData={(!isPagingOrVirtual) ? this.props.features : null}
                        datasource={(isPagingOrVirtual) ? this.setDataSource() : null}
                        enableServerSideSorting={(isPagingOrVirtual)}
                        // or provide props the old way with no binding
                        onSelectionChanged={this.selectFeatures}
                        rowSelection="multiple"
                        enableColResize
                        enableSorting={(!isPagingOrVirtual)}
                        toolPanelSuppressValues
                        toolPanelSuppressGroups
                        showToolPanel={false}
                        rowDeselection
                        localeText={{
                            page: LocaleUtils.getMessageById(this.context.messages, "featuregrid.pagination.page") || 'Page',
                            of: LocaleUtils.getMessageById(this.context.messages, "featuregrid.pagination.of") || 'of',
                            to: LocaleUtils.getMessageById(this.context.messages, "featuregrid.pagination.to") || 'to',
                            more: LocaleUtils.getMessageById(this.context.messages, "featuregrid.pagination.more") || 'more',
                            next: '>',
                            last: '>|',
                            first: '|<',
                            previous: '<'}}
                        onGridReady={this.onGridReady}
                        onColumnVisible={this.onColumnVisible}
                        {...this.props.agGridOptions}
                    />
                </div>
                <ButtonToolbar className="featuregrid-tools" style={{marginTop: "5px", marginLeft: "0px", flex: "none"}} bsSize="sm">
                    {tools.map((tool) => tool)}
                </ButtonToolbar>
            </div>);
    }

    // If props.columnDefs is missing try to generate from features, add zoomTo as first column
    setColumnDefs = () => {
        let defs = this.props.columnDefs;
        let defaultOptions = this.props.columnDefaultOptions;
        let exclude = this.props.excludeFields;
        if (!defs && this.props.features && this.props.features[0]) {
            defs = keys(this.props.features[0].properties).filter((val) => {
                return exclude.indexOf(val) === -1;
            }).map(function(key) {
                return assign({}, defaultOptions, {headerName: key, field: "properties." + key});
            });
        }

        defs = defs.map((def) => assign({}, def, {
            hide: !calcVisibility(!def.hide, this.state.columnsVisibility[def.field])
        }));
        return (this.props.enableZoomToFeature) ? [
            {
                onCellClicked: this.props.zoomToFeature,
                headerName: '',
                cellRenderer: reactCellRendererFactory(ZoomToFeature),
                suppressSorting: true,
                suppressMenu: true,
                pinned: true,
                width: 25,
                suppressResize: true
            }].concat(defs) : defs;

    };

    // Generate datasource for pagination or virtual paging and infinite scrolling
    setDataSource = () => {
        return (this.props.dataSource) ? this.props.dataSource : {
            rowCount: (isFunction(this.props.features)) ? -1 : this.props.features.length,
            getRows: (isFunction(this.props.features)) ? this.props.features : this.getRows,
            pageSize: this.props.pageSize,
            overflowSize: this.props.overflowSize
        };
    };

    zoomToFeatures = () => {
        let geometries = [];

        let getGeoms = function(nodes) {
            let geom = [];
            nodes.forEach(function(node) {
                if (node.group) {
                    geom = geom.concat(getGeoms(node.children));
                } else {
                    geom.push(node.data.geometry);
                }
            });
            return geom;
        };

        let model = this.api.getModel();
        model.forEachNode(function(node) {
            if (node.group) {
                geometries = geometries.concat(getGeoms(node.children));
            } else {
                geometries.push(node.data.geometry);
            }
        });

        geometries = geometries.filter((geometry) => geometry.coordinates);

        if (geometries.length > 0) {
            this.props.changeMapViewGrid(geometries);
        }
    };

    selectAllRows = (select) => {
        if (select === true) {
            this.api.selectAll();
        } else {
            this.api.deselectAll();
        }
    };

    selectFeatures = (params) => {
        if (!this.suppresSelectionEvent) {
            this.props.selectFeatures(params.selectedRows.slice());
        } else {
            this.suppresSelectionEvent = false;
        }
    };

    sortData = (sortModel, data) => {
        // do an in memory sort of the data, across all the fields
        let resultOfSort = data.slice();
        resultOfSort.sort(function(a, b) {
            for (let k = 0; k < sortModel.length; k++) {
                let sortColModel = sortModel[k];
                let colId = sortColModel.colId.split(".");
                /*eslint-disable */
                let valueA = colId.reduce(function(d, key) {
                    return (d) ? d[key] : null;
                }, a);
                let valueB = colId.reduce(function(d, key) {
                    return (d) ? d[key] : null;
                }, b);
                /* eslint-enable */
                // this filter didn't find a difference, move onto the next one
                if (valueA === valueB) {
                    continue;
                }
                let sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
                return (valueA > valueB) ? sortDirection : sortDirection * -1;

            }
            // no filters found a difference
            return 0;
        });
        return resultOfSort;
    };

    // If highlighted features are passed we try to select corresponding row
    // using geojson feature id
    selectHighlighted = () => {
        let selectedId = this.props.highlightedFeatures;
        let me = this;
        this.api.forEachNode((n) => {
            if (selectedId.indexOf(n.data.id) !== -1) {
                me.api.selectNode(n, true, true);
            } else if (me.api.isNodeSelected(n)) {
                me.suppresSelectionEvent = true;
                me.api.deselectNode(n);
            }
        });
    };
}

module.exports = FeatureGrid;
