/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {AgGridReact} = require('ag-grid-react');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const {selectRows} = require('../../actions/card');
const GridCellDate = require('../GridCellDate');
const GridCellLink = require('../GridCellLink');
const TemplateUtils = require('../../utils/TemplateUtils');
const {reactCellRendererFactory} = require('ag-grid-react');
const assign = require('object-assign');
const uuid = require('node-uuid');

require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const {loadCardTemplate} = require('../../actions/card');

const {
    loadFeatureTypeConfig
} = require('../../actions/siradec');

const SiraTable = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        card: React.PropTypes.object,
        style: React.PropTypes.object,
        columns: React.PropTypes.array,
        dependsOn: React.PropTypes.object,
        detailsTemplateConfigURL: React.PropTypes.string,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        features: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.func,
            React.PropTypes.object
        ]),
        selectedRow: React.PropTypes.string,
        wfsVersion: React.PropTypes.string,
        profile: React.PropTypes.string,
        rowSelection: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        selectRows: React.PropTypes.func,
        onDetail: React.PropTypes.func,
        loadFeatureTypeConfig: React.PropTypes.func
    },
    getDefaultProps() {
        return {
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
            selectRows: () => {},
            onDetail: () => {}
        };
    },
    componentWillReceiveProps(nextProps) {
        if (this.waitingForConfig && nextProps.configOggetti && nextProps.configOggetti[this.waitingForConfig.featureType] && nextProps.configOggetti[this.waitingForConfig.featureType].card) {
            const params = this.waitingForConfig.params;
            this.goToDetail(params, nextProps);
            this.waitingForConfig = null;
        }
    },
    componentDidUpdate() {
        if (this.api && this.props.selectedRow) {
            let me = this;
            this.api.forEachNode((n) => {
                if (n.data[this.idFieldName] === this.props.selectedRow) {
                    me.api.selectNode(n, true, true);
                }
            });
        }
    },
    onGridReady(params) {
        this.api = params.api;
    },
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

        return (
            <div fluid={false} style={this.props.style} className="ag-blue">
                <AgGridReact
                    rowData={features}
                    onSelectionChanged={this.selectRows}
                    enableColResize={true}
                    columnDefs={
                        this.props.rowSelection === "single" ? [{
                            checkboxSelection: true,
                            width: 30,
                            headerName: ''
                        }, ...columns] : columns
                    }
                    onGridReady={this.onGridReady}
                    {...this.props}
                    />
            </div>);
    },
    goToDetail(params, props) {
        let detailProps = props || this.props;
        const id = params.data.link;
        const featureType = params.colDef.linkToDetail.featureType;
        if (detailProps.configOggetti[featureType]) {
            const detailsConfig = detailProps.configOggetti[featureType];
            const templateUrl = params.colDef.linkToDetail.templateUrl ? params.colDef.linkToDetail.templateUrl : (detailsConfig.card.template.default || detailsConfig.card.template);
            let url;
            if (id) {
                url = detailsConfig.card.service.url;
                Object.keys(detailsConfig.card.service.params).forEach((param) => {
                    url += `&${param}=${detailsConfig.card.service.params[param]}`;
                });
                url = `${url}&FEATUREID=${id}&authkey=${detailProps.authParams.authkey}`;
            }
            detailProps.onDetail(templateUrl, url);
        } else {
            this.waitingForConfig = {
                featureType,
                params
            };
            detailProps.loadFeatureTypeConfig(null, {authkey: detailProps.authParams.authkey ? detailProps.authParams.authkey : ''}, featureType, false);
        }

    },
    selectRows(params) {
        // this.props.selectRows(this.props.id, (params.selectedRows[0]) ? params.selectedRows[0].id : null);
        if (params.selectedRows[0]) {
            this.props.selectRows(this.props.id, params.selectedRows[0].id || params.selectedRows[0][this.idFieldName]);
        }
    }
});

module.exports = connect((state) => {
    return {
        configOggetti: state.siradec.configOggetti,
        card: state.cardtemplate || {},
        authParams: state.userprofile.authParams
    };
}, dispatch => {
    return bindActionCreators({
        selectRows: selectRows,
        onDetail: loadCardTemplate,
        loadFeatureTypeConfig
    }, dispatch);
})(SiraTable);
