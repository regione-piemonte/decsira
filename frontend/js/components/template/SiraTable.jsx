/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const DataGrid = require('../identify/featuregrid/DataGrid').default;
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const {selectRows} = require('../../actions/card');
const GridCellDate = require('../GridCellDate');
const GridCellLink = require('../GridCellLink');
const TemplateUtils = require('../../utils/TemplateUtils');
const {reactCellRendererFactory} = require('../identify/featuregrid/CellRendererFactory');
const assign = require('object-assign');
const uuid = require('uuid');

require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const {loadCardTemplate} = require('../../actions/card');
const {loadFeatureTypeConfig, setWaitingForConfig} = require('../../actions/siradec');

class SiraTable extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        card: PropTypes.object,
        style: PropTypes.object,
        columns: PropTypes.array,
        dependsOn: PropTypes.object,
        detailsTemplateConfigURL: PropTypes.string,
        configOggetti: PropTypes.object,
        authParams: PropTypes.object,
        features: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.func,
            PropTypes.object
        ]),
        selectedRow: PropTypes.string,
        wfsVersion: PropTypes.string,
        profile: PropTypes.string,
        rowSelection: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        waitingForConfig: PropTypes.object,
        selectRows: PropTypes.func,
        onDetail: PropTypes.func,
        loadFeatureTypeConfig: PropTypes.func,
        setWaitingForConfig: PropTypes.func
    };

    static defaultProps = {
        id: "SiraTable",
        style: {height: "200px", width: "100%"},
        features: [],
        wfsVersion: null,
        card: null,
        dependsOn: null,
        columns: [],
        profile: null,
        rowSelection: "single",
        selectedRow: null,
        waitingForConfig: null,
        selectRows: () => {},
        onDetail: () => {},
        setWaitingForConfig: () => {}
    };

    componentWillMount() {
        if (this.props.waitingForConfig && this.props.waitingForConfig.params) {
            const params = this.props.waitingForConfig.params;
            this.props.setWaitingForConfig(null);
            this.goToDetail(params);
        }
    }

    // componentWillReceiveProps(nextProps) {
    //    if (this.props.waitingForConfig && nextProps.configOggetti && nextProps.configOggetti[this.waitingForConfig.featureType] && nextProps.configOggetti[this.props.waitingForConfig.featureType].card) {
    //        const params = this.props.waitingForConfig.params;
    //        this.props.setWaitingForConfig(null);
    //        this.goToDetail(params, nextProps);
    //    }
    // },
    componentDidUpdate() {
        if (this.api && this.props.selectedRow) {
            let me = this;
            this.api.forEachNode((n) => {
                if (n.data[this.idFieldName] === this.props.selectedRow) {
                    me.api.selectNode(n, true, true);
                }
            });
        }
    }

    onGridReady = (params) => {
        this.api = params.api;
    };

    render() {
        let features;
        let columns = this.props.columns.map((column) => {
            // if (!column.profiles || (column.profiles && this.props.profile && column.profiles.indexOf(this.props.profile) !== -1)) {
            if (TemplateUtils.verifyProfiles(column.profiles, this.props.profile)) {
                let fieldName = !column.field ? uuid.v1() : column.field;
                this.idFieldName = column.id === true ? fieldName : this.idFieldName;
                return assign({},
                    column,
                    {field: fieldName},
                    column.dateFormat ? {cellRenderer: reactCellRendererFactory(GridCellDate)} : {},
                    column.linkToDetail ? {onCellClicked: this.goToDetail, cellRenderer: reactCellRendererFactory(GridCellLink)} : {}
                );
            }
            return null;
        }, this).filter((c) => c);

        if (typeof this.props.features === 'function') {
            features = this.props.features();
        } else {
            features = this.props.features instanceof Array ? this.props.features : [this.props.features];
            features = features.map((feature) => {
                let f = {};
                columns.forEach((column) => {
                    if (column.field) {
                        f[column.field] = TemplateUtils.getElement({xpath: column.xpath}, feature, this.props.wfsVersion);
                    }
                    if (column.linkToDetail) {
                        f.link = TemplateUtils.getElement({xpath: column.linkToDetail.xpath}, feature, this.props.wfsVersion);
                    }
                });
                return f;
            }, this);
        }

        if (this.props.dependsOn) {
            features = features.filter(function(feature) {
                return feature[this.idFieldName] === this.props.card[this.props.dependsOn.tableId];
            }, this);
        }

        let numRows = features.length;
        let height = ((25 * numRows) + 50 > 200) ? 200 : (25 * numRows) + 50;
        let style = {height: height, width: "100%"};
        let noRowsTemplate = "<noscript/>";

        return (
            <div fluid={false} style={style} className="ag-blue">
                <DataGrid
                    rowData={features}
                    onSelectionChanged={this.selectRows}
                    enableColResize
                    columnDefs={
                        this.props.rowSelection === "single" ? [{
                            checkboxSelection: true,
                            width: 30,
                            headerName: ''
                        }, ...columns] : columns
                    }
                    onGridReady={this.onGridReady}
                    {...this.props}
                    overlayNoRowsTemplate={noRowsTemplate}
                />
            </div>);
    }

    goToDetail = (params, props) => {
        let detailProps = props || this.props;
        const id = params.data.link;
        const cqlFilter = params.colDef.linkToDetail.cqlFilter;
        const featureType = params.colDef.linkToDetail.featureType.indexOf(":") > 1 ? params.colDef.linkToDetail.featureType.split(":")[1] : params.colDef.linkToDetail.featureType;
        if (detailProps.configOggetti[featureType]) {
            const detailsConfig = detailProps.configOggetti[featureType];
            const templateUrl = params.colDef.linkToDetail.templateUrl ? params.colDef.linkToDetail.templateUrl : (detailsConfig.card.template.default || detailsConfig.card.template);
            let url;
            if (cqlFilter) {
                url = detailsConfig.card.service.url;
                Object.keys(detailsConfig.card.service.params).forEach((param) => {
                    url += `&${param}=${detailsConfig.card.service.params[param]}`;
                });
                url = url += "&cql_filter=" + cqlFilter;
            } else if (id) {
                url = detailsConfig.card.service.url;
                Object.keys(detailsConfig.card.service.params).forEach((param) => {
                    url += `&${param}=${detailsConfig.card.service.params[param]}`;
                });
                url = `${url}&FEATUREID=${id}&authkey=${detailProps.authParams.authkey}`;
            }
            detailProps.onDetail(templateUrl, url);
        } else {
            let waitingForConfig = {
                featureType,
                params
            };
            detailProps.setWaitingForConfig(waitingForConfig);
            detailProps.loadFeatureTypeConfig(null, {authkey: detailProps.authParams.authkey ? detailProps.authParams.authkey : ''}, featureType, false);
        }

    };

    selectRows = (params) => {
        // this.props.selectRows(this.props.id, (params.selectedRows[0]) ? params.selectedRows[0].id : null);
        if (params.selectedRows[0]) {
            this.props.selectRows(this.props.id, params.selectedRows[0].id || params.selectedRows[0][this.idFieldName]);
        }
    };
}

module.exports = connect((state) => {
    return {
        configOggetti: state.siradec.configOggetti,
        card: state.cardtemplate || {},
        authParams: state.userprofile.authParams,
        waitingForConfig: state.siradec.waitingForConfig
    };
}, dispatch => {
    return bindActionCreators({
        selectRows: selectRows,
        onDetail: loadCardTemplate,
        setWaitingForConfig: setWaitingForConfig,
        loadFeatureTypeConfig
    }, dispatch);
})(SiraTable);
