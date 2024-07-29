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
const {selectRows, loadAttachments} = require('../../actions/card');
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

class AttachmentTableApi extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        card: PropTypes.object,
        style: PropTypes.object,
        idIstanza: PropTypes.string,
        columns: PropTypes.array,
        attachments: PropTypes.array,
        dependsOn: PropTypes.object,
        detailsTemplateConfigURL: PropTypes.string,
        configOggetti: PropTypes.object,
        authParams: PropTypes.object,
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
        hideConfirm: PropTypes.func,
        loadAttachments: PropTypes.func
    };

    static defaultProps = {
        id: "AttachmentTableApi",
        style: {height: "200px", width: "100%"},
        attachments: [],
        wfsVersion: null,
        card: null,
        columns: [],
        profile: null,
        selectedRow: null,
        selectRows: () => {}
    };

    componentWillMount() {
        if (this.props.idIstanza) {
            this.props.loadAttachments(this.props.idIstanza, this.props.columns);
        }
    }

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
        let columns = this.props.columns.map((column) => {
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

        let numRows = this.props.attachments.length;
        let height = ((25 * numRows) + 50 > 200) ? 200 : (25 * numRows) + 50;
        let style = {height: height, width: "100%"};
        let noRowsTemplate = "<noscript/>";
        return (
            <div fluid={false} style={style} className="ag-blue">
                <DataGrid
                    rowData={this.props.attachments}
                    onSelectionChanged={this.selectRows}
                    enableColResize
                    columnDefs={columns}
                    onGridReady={this.onGridReady}
                    {...this.props}
                    overlayNoRowsTemplate={noRowsTemplate}
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
    }

    selectRows = (params) => {
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
        showModal: state.cardtemplate.showConfirmDownload,
        attachments: state.cardtemplate.attachments
    };
}, dispatch => {
    return bindActionCreators({
        selectRows: selectRows,
        loadAttachments: loadAttachments,
        showConfirm: showConfirmDownload,
        hideConfirm: hideConfirmDownload
    }, dispatch);
})(AttachmentTableApi);
