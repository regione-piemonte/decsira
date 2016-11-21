/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Dialog = require('../../MapStore2/web/client/components/misc/Dialog.jsx');
const Select = require('react-select');
const {Button, Glyphicon} = require('react-bootstrap');
const ExporterUtils = require('../utils/ExporterUtils');
require('react-select/dist/react-select.css');
const SiraExporter = React.createClass({
    propTypes: {
        show: React.PropTypes.bool.isRequired,
        exportParams: React.PropTypes.object,
        params: React.PropTypes.object,
        toggleExporter: React.PropTypes.func,
        searchUrl: React.PropTypes.string.isRequired,
        getFeaturesAndExport: React.PropTypes.func,
        featuregrid: React.PropTypes.object,
        loading: React.PropTypes.bool,
        errormsg: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            show: false,
            toggleExporter: () => {},
            exportparams: {}
        };
    },
    getInitialState() {
        return {
            outputformat: "csv",
            type: "all"
        };
    },
    renderError() {
        return (<div role="body" style={{height: "150px", display: "flex",
                    flexDirection: "column", justifyContent: "space-between"}}>
                    <span><strong style={{color: "red", textAlign: "center"}}>{this.props.errormsg}</strong></span>
                    </div>);
    },
    renderSelectors() {
        return (
            <div role="body" style={{height: "150px", display: "flex",
                    flexDirection: "column", justifyContent: "space-between"}}>
            <Select
                name="outputformat"
                clearable={false}
                value={this.state.outputformat}
                options={[
                    { value: 'csv', label: 'CSV' },
                    { value: 'shp', label: 'Shape file' }]}
                onChange={(val) => this.setState({outputformat: val.value})}
            />
            <Select
                name="type"
                clearable={false}
                value={this.state.type}
                options={[
                    { value: 'all', label: 'Tutti gli oggetti' },
                    { value: 'page', label: 'Pagina corrente' }]}
                onChange={(val) => this.setState({type: val.value})}
            />
            <Button bsStyle="primary" style={{alignSelf: "flex-end"}} onClick={this.exportFeatures}><span>Export</span><Glyphicon glyph="download-alt" /></Button>
            </div>);
    },
    render() {
        return this.props.show ? (<Dialog
            id="SiraExporter"
            modal={true}
            maskLoading={this.props.loading}
            start={{x: 0, y: 0}}
            style={{position: "fixed", display: "block", zIndex: 1030, width: "100%", height: "100%"}}
            onClickOut={this.props.toggleExporter.bind(null, 'exporter')}
            >
            <div role="header">Export Data</div>
            {this.props.errormsg ? this.renderError() : this.renderSelectors()}
            </Dialog>) : null;
    },
    exportFeatures() {
        const params = this.props.exportParams;
        if (this.state.type === 'page' && params.features && params.columns) {
            ExporterUtils.exportFeatures(this.state.outputformat, params.features, params.columns, params.featureType);
        }else if (this.state.type === 'all' && params.filter && params.columns) {
            this.props.getFeaturesAndExport(this.props.searchUrl, this.props.params, params.filter, params.columns, this.state.outputformat, this.props.featuregrid, params.featureType);
        }
    }
});

module.exports = SiraExporter;
