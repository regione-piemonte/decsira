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
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
require('react-select/dist/react-select.css');

class SiraExporter extends React.Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        exportParams: PropTypes.object,
        params: PropTypes.object,
        toggleExporter: PropTypes.func,
        searchUrl: PropTypes.string.isRequired,
        getFeaturesAndExport: PropTypes.func,
        downloadFeatures: PropTypes.func,
        getFileAndExport: PropTypes.func,
        featuregrid: PropTypes.object,
        loading: PropTypes.bool,
        errormsg: PropTypes.string,
        csvName: PropTypes.string,
        shpName: PropTypes.string,
        addFile: PropTypes.string,
        csvMimeType: PropTypes.string,
        srs: PropTypes.string,
        totalFeatures: PropTypes.number,
        maxFeatures: PropTypes.number,
        confMaxFeatures: PropTypes.number,
        exportAsync: PropTypes.bool,
        wpsUrl: PropTypes.string,
        layerName: PropTypes.string,
        layerTitle: PropTypes.string
    };

    static defaultProps = {
        show: false,
        toggleExporter: () => {},
        exportparams: {}
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    state = {
        outputformat: "csv",
        type: "all"
    };

    renderError = () => {
        let errorMsg = this.props.errormsg;
        if (errorMsg === "downloadEstimatorFailed") {
            errorMsg = LocaleUtils.getMessageById(this.context.messages, "SiraExporter.downloadEstimatorFailed");
        }
        return (<div role="body" style={{height: "150px", display: "flex",
            flexDirection: "column", justifyContent: "space-between"}}>
            <Alert bsStyle="danger" >{errorMsg}</Alert>
        </div>);
    };

    renderSelectors = () => {
        // const height = this.state.outputformat === 'shp' ? "260px" : "150px";
        let maxFeat = this.props.confMaxFeatures ? this.props.confMaxFeatures : this.props.maxFeatures;
        let h = this.state.outputformat === 'shp' ? 210 : 150;
        let height = this.state.type === 'all' && (this.props.totalFeatures > maxFeat || this.props.exportAsync) ? (h + 60) + "px" : h + "px";

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
                {!this.props.exportAsync ? (
                    <Select
                        clearable={false}
                        value={this.state.type}
                        options={[
                            { value: 'all', label: LocaleUtils.getMessageById(this.context.messages, "featuregrid.exportAll") },
                            { value: 'page', label: LocaleUtils.getMessageById(this.context.messages, "featuregrid.exportPage") }]}
                        onChange={(val) => this.setState({type: val.value})}
                    />) : null}
                {this.state.outputformat === 'shp' ? (<Alert bsStyle="info" >
                    <I18N.Message msgId="SiraExporter.shpMsg" />
                </Alert>) : null}
                {this.props.exportAsync ? (<Alert bsStyle="info" >
                    <I18N.Message msgId="SiraExporter.asynch" />
                </Alert>) : null}
                {!this.props.exportAsync && this.state.type === 'all' && this.props.totalFeatures > maxFeat ? (<Alert bsStyle="info" >
                    <I18N.Message msgId="SiraExporter.maxFeatures" msgParams={{ maxFeat, totalFeatures: this.props.totalFeatures }} />
                </Alert>) : null}
                <Button bsStyle="primary" style={{alignSelf: "flex-end"}} onClick={this.exportFeatures}><span>Export&nbsp;</span><Glyphicon glyph="download-alt" /></Button>
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
                <span><I18N.Message msgId="featuregrid.export" /></span>
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
        if (this.props.exportAsync) {
            // Nuova funzione download WPS
            this.props.downloadFeatures(this.props.wpsUrl, this.props.layerName, this.props.layerTitle, params.filter, this.state.outputformat, name, this.props.csvMimeType, this.props.addFile);
        } else {
            // Vecchia funzione export WFS
            if (this.state.type === 'page' && params.features && params.columns) {
                if (this.props.addFile) {
                    this.props.getFileAndExport(params.features, params.columns, this.state.outputformat, this.props.featuregrid, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
                } else {
                    ExporterUtils.exportFeatures(this.state.outputformat, params.features, params.columns, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
                }
            } else if (this.state.type === 'all' && params.filter && params.columns) {
                this.props.getFeaturesAndExport(this.props.searchUrl, this.props.params, params.filter, params.columns, this.state.outputformat, this.props.featuregrid, name, this.props.csvMimeType, this.props.addFile, this.props.srs);
            }
        }
    };
}

module.exports = SiraExporter;
