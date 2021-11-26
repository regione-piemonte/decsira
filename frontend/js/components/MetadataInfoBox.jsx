/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const {Image, Panel} = require('react-bootstrap');
const Draggable = require('react-draggable');
const I18N = require('@mapstore/components/I18N/I18N');

class MetadataInfoBox extends React.Component {
    static propTypes = {
        show: PropTypes.string,
        showButtonLegend: PropTypes.string,
        openLegendPanel: PropTypes.bool,
        panelTitle: PropTypes.string,
        header: PropTypes.string,
        panelStyle: PropTypes.object,
        title: PropTypes.string,
        text: PropTypes.string,
        dataProvider: PropTypes.string,
        urlMetadato: PropTypes.string,
        dataUrl: PropTypes.string,
        numDatasetObjectCalc: PropTypes.number,
        urlWMS: PropTypes.array,
        urlWFS: PropTypes.array,
        urlLegend: PropTypes.array,
        error: PropTypes.string,
        closePanel: PropTypes.func,
        toggleLegendPanel: PropTypes.func,
        loadLegend: PropTypes.func,
        loadMetadataInfo: PropTypes.func
    };

    static defaultProps = {
        show: 'none',
        showButtonLegend: 'none',
        openLegendPanel: false,
        panelTitle: "",
        error: '',
        title: '',
        text: '',
        dataUrl: '',
        urlWMS: [],
        urlWFS: [],
        urlLegend: [],
        numDatasetObjectCalc: 0,
        dataProvider: '',
        urlMetadato: '',
        header: "featuregrid.header",
        closePanel: () => {},
        loadMetadataInfo: () => {},
        toggleLegendPanel: () => {},
        loadLegend: () => {},
        panelStyle: {
            height: "500px",
            width: "450px",
            zIndex: 100,
            position: "absolute",
            overflow: "auto"
        }
    };

    onOpenLegendPanel = () => {
        this.props.loadLegend(this.props.urlWMS, this.props.urlLegend);
    };

    renderLegend = () => {
        return this.props.urlLegend.map((url) => {
            return (<Image src={url} />);
        });
    };

    renderError = () => {
        if (this.props.error) {
            return (
                <p className="infobox-error">
                    <I18N.Message msgId={"metadataInfoBox.errorLoadMetadata"}/>
                </p>
            );
        }
        return ('');
    };

    renderSingleLegend = (legends) => {
        if (legends) {
            return (
                legends.map((legend, index) =>
                    <div className="infobox-legendpanel">
                        <h4 className="infobox-legend-title" key={'legend_' + index}>{legend.title}</h4>
                        <Image key={'im_legend_' + index} src={legend.url} />
                    </div>
                ));
        }
        return ('');
    };

    renderLegends = () => {
        if (this.props.urlLegend) {
            return (
                this.props.urlLegend.map((urlObject, index) =>
                    <Panel className="infobox-legend-container" key={'lc_' + index}>
                        <h4 className="infobox-legend-service-title" key={'h4_lc_' + index} >{urlObject.serviceTitle}</h4>
                        {this.renderSingleLegend(urlObject.urls)}
                    </Panel>
                ));
        }
        return ('');
    };

    render() {
        let renderWmsUrl = [];
        if (this.props.urlWMS && this.props.urlWMS.length > 0) {
            renderWmsUrl.push(<h4><b><I18N.Message msgId={"metadataInfoBox.urlWMS"}/></b></h4>);
            this.props.urlWMS.map((val, index) =>
                renderWmsUrl.push(
                    <p>
                        <a tabIndex="0" className="infobox-service-url"
                            title="wms" key={'wms_' + index}
                            href={val} target="_blank" >
                            <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"}/>
                        </a>
                    </p>
                )
            );
        }
        let renderWfsUrl = [];
        if (this.props.urlWFS && this.props.urlWFS.length > 0) {
            renderWfsUrl.push(<h4><I18N.Message msgId={"metadataInfoBox.urlWFS"}/></h4>);
            this.props.urlWFS.map((val, index) =>
                renderWfsUrl.push(
                    <a tabIndex="0" className="infobox-service-url"
                        title="wfs" key={'wfs_' + index}
                        href={val} target="_blank" >
                        <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"}/>
                    </a>
                ));
        }
        let renderLegendPanel = null;
        if (this.props.openLegendPanel) {
            renderLegendPanel =
           (<Panel
               className = "toolbar-panel modal-dialog-container react-draggable"
               collapsible expanded={this.props.openLegendPanel}>
               {this.renderLegends()}
           </Panel>);
        }

        return (
            <Draggable bounds="parent" start={{x: 0, y: 300}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div tabIndex="0" id="metadataInfoBox" className="scheda-info" style={{display: this.props.show}} role="contentinfo" aria-label="Informazioni aggiuntive">
                    <Panel
                        className="info-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    <I18N.Message msgId={"metadataInfoBox.panelTitle"}/>
                                </span>
                                <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}>
                        <Panel className="info-content infobox-content">
                            {this.renderError()}
                            <h4><b>{this.props.title}</b></h4>
                            <p>{this.props.text}</p>
                            <h4><b><I18N.Message msgId={"metadataInfoBox.entePA"}/></b></h4>
                            <p>{this.props.dataProvider}</p>
                            <h4><b><I18N.Message msgId={"metadataInfoBox.urlMetadato"}/></b></h4>
                            <a tabIndex="0" className="infobox-metadata-url"
                                title="metadato"
                                href={this.props.urlMetadato} target="_blank" >
                                <I18N.Message msgId={"metadataInfoBox.link_to_metadata"}/>
                            </a>
                            {renderWmsUrl}
                            {renderWfsUrl}
                            <button aria-expanded={this.props.showButtonLegend} style={{display: this.props.showButtonLegend}} onClick={this.onOpenLegendPanel}><I18N.Message msgId={"metadataInfoBox.legendPanelTitle"} /></button>
                            {renderLegendPanel}
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

module.exports = MetadataInfoBox;
