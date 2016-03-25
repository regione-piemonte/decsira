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
require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const SiraTable = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        style: React.PropTypes.object,
        features: React.PropTypes.oneOfType([
                        React.PropTypes.array,
                        React.PropTypes.func]),
        selectRows: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            id: "SiraTable",
            style: {height: "200px", width: "100%"},
            features: [],
            selectRows: () => {}
        };
    },
    render() {
        return (
            <div fluid={false} style={this.props.style} className="ag-blue">
                <AgGridReact
                    rowSelection="single"
                    rowData={(typeof this.props.features === 'function') ? this.props.features() : this.props.features}
                    onSelectionChanged={this.selectRows}
                    enableColResize={true}
                    {...this.props}/>
            </div>);
    },
    selectRows(params) {
        this.props.selectRows(this.props.id, (params.selectedRows[0]) ? params.selectedRows[0].id : null);
    }

});
module.exports = connect(null, dispatch => {
    return bindActionCreators({
        selectRows: selectRows }, dispatch);
})(SiraTable);
