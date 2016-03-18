/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {AgGridReact} = require('ag-grid-react');
const {selectRifiuto} = require('../../actions/rifiuti');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const TipoRifiuto = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        features: React.PropTypes.array,
        selectRifiuto: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            style: {height: "200px", width: "100%"},
            features: [],
            selectRifiuto: () => {}
        };
    },
    render() {
        return (
            <div fluid={false} style={this.props.style} className="ag-blue">
                <AgGridReact columnDefs={[
                            {checkboxSelection: true, width: 30, headerName: ''},
                            {headerName: "Tipologia", width: 100, field: "codice"},
                            {headerName: "Descrizione", width: 500, field: "descrizione"}
                            ]}
                            rowSelection="single"
                            rowData={this.props.features}
                            onSelectionChanged={this.selectDettaglio}
                            enableColResize={true}
                            />
            </div>);
    },
    selectDettaglio(params) {
        this.props.selectRifiuto((params.selectedRows[0]) ? params.selectedRows[0].id : '');
    }

});
module.exports = connect(null, dispatch => {
    return bindActionCreators({selectRifiuto: selectRifiuto}, dispatch);
})(TipoRifiuto);

