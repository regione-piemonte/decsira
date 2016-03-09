/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {isObject} = require('lodash');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const FeatureGrid = require('../../../MapStore2/web/client/components/data/featuregrid/FeatureGrid');
const agGrid = require('ag-grid');
const {AgGridReact} = require('ag-grid-react');
require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-fresh.css");

const TipoRifiuto = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        features: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            style: {height: "200px"},
            features: []
        };
    },
    render() {
        return (
            <div fluid={false} style={this.props.style} className="ag-fresh">
                <AgGridReact columnDefs={[
                            {headerName: "Tipologia", width: 100, field: "codice"},
                            {headerName: "Descrizione", width: 500, field: "descrizione"}
                            ]}
                            rowSelection="single"
                            rowData={this.props.features}
                            />
            </div>);
    }

});

module.exports = TipoRifiuto;
