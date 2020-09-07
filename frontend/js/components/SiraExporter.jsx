/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const Dialog = require('@mapstore/components/misc/Dialog');
const Select = require('react-select').default;
const {Button, Glyphicon, Alert} = require('react-bootstrap');
const ExporterUtils = require('../utils/ExporterUtils');
require('react-select/dist/react-select.css');

class SiraExporter extends React.Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        exportParams: PropTypes.object,
        params: PropTypes.object,
        toggleExporter: PropTypes.func,
        searchUrl: PropTypes.string.isRequired,
        getFeaturesAndExport: PropTypes.func,
        getFileAndExport: PropTypes.func,
        featuregrid: PropTypes.object,
        loading: PropTypes.bool,
        errormsg: PropTypes.string,
        csvName: PropTypes.string,
        shpName: PropTypes.string,
        addFile: PropTypes.string,
        csvMimeType: PropTypes.string,
        srs: PropTypes.string
    };

    static defaultProps = {
        show: false,
        toggleExporter: () => {},
        exportparams: {}
    };

    state = {
        outputformat: "csv",
        type: "all"
    };

    renderError = () => {
        return (<div role="body" style={{height: "150px", display: "flex",
            flexDirection: "column", justifyContent: "space-between"}}>
            <span><strong style={{color: "red", textAlign: "center"}}>{this.props.errormsg}</strong></span>
        </div>);
    };

    renderSelectors = () => {
        const height = this.state.outputformat === 'shp' ? "260px" : "150px";
        return (
            <div role="body" style={{height, display: "flex",
                flexDirection: "column", justifyContent: "space-between"}}>
                <Select
                    clearable={false}
                    value={this.state.outputformat}
                    options={[
                        { value: 'csv', label: 'CSV' },
                        { value: 'shp', label: 'Shape file' }]}
                    onChange={(val) => this.setState({outputformat: val.value})}
                />

                <Select
                    clearable={false}
                    value={this.state.type}
                    options={[
                        { value: 'all', label: 'Tutti gli oggetti' },
                        { value: 'page', label: 'Pagina corrente' }]}
                    onChange={(val) => this.setState({type: val.value})}
                />
                {this.state.outputformat === 'shp' ? (<Alert bsStyle="info" >
                Solo gli elementi dotati di geometria verranno esportati
                </Alert>) : null}
                <Button bsStyle="primary" style={{alignSelf: "flex-end"}} onClick={this.exportFeatures}><span>Export</span><Glyphicon glyph="download-alt" /></Button>
            </div>);
    };

    render() {
        return this.props.show ? (<Dialog
            id="SiraExporter"
            modal
            draggable
            maskLoading={this.props.loading}
            start={{x: 0, y: 0}}
            style={{position: "fixed", display: "block", top: "calc(50% - 20px)", left: 100, width: 400, zIndex: 1030}}
            onClickOut={this.props.toggleExporter.bind(null, 'exporter')}
        >
            <span role="header">
                <span>Export Data</span>
                <button onClick={this.props.toggleExporter.bind(null, 'exporter')} className="exporter-close close"><Glyphicon glyph="1-close"/></button>
            </span>
            <div role="header"/>
            {this.props.errormsg ? this.renderError() : this.renderSelectors()}
        </Dialog>) : null;
    }

    exportFeatures = () => {
        const params = this.props.exportParams;
        let ftName = params.featureType.split(":").pop();
        let name = this.state.outputformat === 'shp' ? this.props.shpName : this.props.csvName;
        (name.match(/\{featureType\}/g) || []).forEach((placeholder) => {
            name = name.replace(placeholder, ftName);
        });
        if (this.state.type === 'page' && params.features && params.columns) {
            if (this.props.addFile) {
                this.props.getFileAndExport(params.features, params.columns, this.state.outputformat, this.props.featuregrid, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
            } else {
                ExporterUtils.exportFeatures(this.state.outputformat, params.features, params.columns, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
            }
        } else if (this.state.type === 'all' && params.filter && params.columns) {
            this.props.getFeaturesAndExport(this.props.searchUrl, this.props.params, params.filter, params.columns, this.state.outputformat, this.props.featuregrid, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
        }
    };
}

module.exports = SiraExporter;
