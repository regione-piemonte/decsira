/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {AgGridReact} = require('ag-grid-react');
const {connect} = require('react-redux');
require("ag-grid/dist/styles/ag-grid.css");
require("ag-grid/dist/styles/theme-blue.css");

const Cer = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        features: React.PropTypes.array,
        activeFeature: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            style: {height: "200px", width: "100%"},
            features: [],
            activeFeature: ''
        };
    },
    render() {
        let filtredFeaturs = this.filterFeatures();
        return (
            <div fluid={false} style={this.props.style} className="ag-blue">
                <AgGridReact
                        columnDefs={[
                            {headerName: "Tipologia", width: 100, field: "codice"},
                            {headerName: "Descrizione", width: 500, field: "descrizione"}
                        ]}
                        rowData={(filtredFeaturs[0]) ? filtredFeaturs[0].codiceCER : []}
                        enableColResize={true}

                />
            </div>);
    },
    filterFeatures() {
        return this.props.features.filter(function(value) {
            return value.id === this.props.activeFeature;
        }, this);
    }

});
module.exports = connect((state) => {
    return {
            activeFeature: state.rifiuti && state.rifiuti.id_rifiuto || ''
    };
})(Cer);
