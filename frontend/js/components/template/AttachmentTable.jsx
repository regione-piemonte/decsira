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
const GridCellDownload = require('../GridCellDownload');
const TemplateUtils = require('../../utils/TemplateUtils');
const {reactCellRendererFactory} = require('../identify/featuregrid/CellRendererFactory');
const assign = require('object-assign');
const uuid = require('uuid');

require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const { showConfirmDownload, hideConfirmDownload } = require('../../actions/card');
const DownloadConfirm = require('../DownloadConfirm');

class AttachmentTable extends React.Component {
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
        selectRows: PropTypes.func,
        showModal: PropTypes.bool,
        showConfirm: PropTypes.func,
        hideConfirm: PropTypes.func
    };

    static defaultProps = {
        id: "AttachmentTable",
        style: {height: "200px", width: "100%"},
        features: [],
        wfsVersion: null,
        card: null,
        columns: [],
        profile: null,
        selectedRow: null,
        selectRows: () => {}
    };

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
                    column.download ? {onCellClicked: this.selectRows, cellRenderer: reactCellRendererFactory(GridCellDownload)} : {}
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
                });
                return f;
            }, this);
        }

        let numRows = features.length;
        let height = (70 * numRows > 200) ? 200 : 70 * numRows;
        let style = {height: height, width: "100%"};
        return (
            <div fluid={false} style={style} className="ag-blue">
                <DataGrid
                    rowData={features}
                    onSelectionChanged={this.selectRows}
                    enableColResize
                    columnDefs={columns}
                    onGridReady={this.onGridReady}
                    {...this.props}
                />
                <DownloadConfirm
                    showConfirm={this.props.showModal}
                    onConfirm={this.downloadAttachment}
                    onClose={this.props.hideConfirm}
                />
            </div>);
    }

    downloadAttachment = () => {
        this.props.hideConfirm();
        let url = this.props.card[this.props.id].url;
        if (url.endsWith(".zip")) {
            window.open(url, '_self');
        } else {
            window.open(url, '_blank');
        }

        /* let filename = this.props.card[this.props.id].filename;
        let anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        anchor.target = "_blank";
        anchor.dispatchEvent(
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );*/
    }

    /* selectRows = (params) => {
        // this.props.selectRows(this.props.id, (params.selectedRows[0]) ? params.selectedRows[0].id : null);
        if (params.selectedRows[0]) {
            this.props.selectRows(this.props.id, params.selectedRows[0].id || params.selectedRows[0][this.idFieldName]);
            this.props.showConfirm();
        }
    };*/

    selectRows = (params) => {
        // this.props.selectRows(this.props.id, (params.selectedRows[0]) ? params.selectedRows[0].id : null);
        if (params.node && params.node.data) {
            this.props.selectRows(this.props.id, params.node.data);
            if (params.colDef.confirm) {
                this.props.showConfirm();
            } else {
                this.downloadAttachment();
            }
        }
    };
}

module.exports = connect((state) => {
    return {
        configOggetti: state.siradec.configOggetti,
        card: state.cardtemplate || {},
        authParams: state.userprofile.authParams,
        waitingForConfig: state.siradec.waitingForConfig,
        showModal: state.cardtemplate.showConfirmDownload
    };
}, dispatch => {
    return bindActionCreators({
        selectRows: selectRows,
        showConfirm: showConfirmDownload,
        hideConfirm: hideConfirmDownload
    }, dispatch);
})(AttachmentTable);
