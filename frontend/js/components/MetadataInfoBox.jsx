/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Panel, Image} = require('react-bootstrap');
const Draggable = require('react-draggable');
// const Message = require('../../MapStore2/web/client/components/I18N/Message');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');

const MetadataInfoBox = React.createClass({
    propTypes: {
        show: React.PropTypes.string,
        showButtonLegend: React.PropTypes.string,
        openLegendPanel: React.PropTypes.bool,
        panelTitle: React.PropTypes.string,
        header: React.PropTypes.string,
        panelStyle: React.PropTypes.object,
        title: React.PropTypes.string,
        text: React.PropTypes.string,
        dataProvider: React.PropTypes.string,
        urlMetadato: React.PropTypes.string,
        dataUrl: React.PropTypes.string,
        numDatasetObjectCalc: React.PropTypes.number,
        urlWMS: React.PropTypes.array,
        urlWFS: React.PropTypes.array,
        urlLegend: React.PropTypes.array,
        error: React.PropTypes.string,
        closePanel: React.PropTypes.func,
        toggleLegendPanel: React.PropTypes.func,
        loadLegend: React.PropTypes.func,
        loadMetadataInfo: React.PropTypes.func
    },

    getDefaultProps() {
        return {
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
    },

    onOpenLegendPanel() {
        this.props.loadLegend(this.props.urlWMS, this.props.urlLegend);
    },

    renderLegend() {
        return this.props.urlLegend.map((url) => {
            return (<Image src={url} />);
        });
    },

    renderError() {
        if (this.props.error) {
            return (
              <p className="infobox-error">
                <I18N.Message msgId={"metadataInfoBox.errorLoadMetadata"}/>
              </p>
            );
        }
        return ('');
    },

    renderSingleLegend(legends) {
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
    },

    renderLegends() {
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
    },

    render() {
        let renderWmsUrl = [];
        if (this.props.urlWMS && this.props.urlWMS.length > 0) {
            renderWmsUrl.push(<h4><I18N.Message msgId={"metadataInfoBox.urlWMS"}/></h4>);
            this.props.urlWMS.map((val, index) =>
            renderWmsUrl.push(
              <a className="infobox-service-url"
                title="wms" key={'wms_' + index}
                href={val} target="_blank" >
                <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"}/>
              </a>
              )
            );
        }
        let renderWfsUrl = [];
        if (this.props.urlWFS && this.props.urlWFS.length > 0) {
            renderWfsUrl.push(<h4><I18N.Message msgId={"metadataInfoBox.urlWFS"}/></h4>);
            this.props.urlWFS.map((val, index) =>
            renderWfsUrl.push(
              <a className="infobox-service-url"
                title="wfs" key={'wfs_' + index}
                href={val} target="_blank" >
                 <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"}/>
              </a>
          ));
        }
        // let renderLegendUrl = this.renderLegends();
        let renderLegendPanel = null;
        // let content = renderLegendUrl;
        if (this.props.openLegendPanel) {
            renderLegendPanel =
           (<Panel
                className = "toolbar-panel modal-dialog-container react-draggable"
                collapsible expanded={this.props.openLegendPanel}>
                {this.renderLegends()}
            </Panel>);
        }

        return (
          <div className="infobox-container" style={{display: this.props.show}}>
          <Draggable start={{x: 30, y: 180}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
              <Panel
                  className = "infobox-content toolbar-panel modal-dialog-container react-draggable"
                  style={this.props.panelStyle}
                  header={
                      <span>
                          <span className="snapshot-panel-title">
                              <I18N.Message msgId={"metadataInfoBox.panelTitle"}/>
                          </span>
                          <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                      </span>}>
                    {this.renderError()}
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                    <h4><I18N.Message msgId={"metadataInfoBox.entePA"}/></h4>
                    <p>{this.props.dataProvider}</p>
                    <h4><I18N.Message msgId={"metadataInfoBox.urlMetadato"}/></h4>
                    <a className="infobox-metadata-url"
                      title="metadato"
                      href={this.props.urlMetadato} target="_blank" >
                      <I18N.Message msgId={"metadataInfoBox.link_to_metadata"}/>
                    </a>
                    {renderWmsUrl}
                    {renderWfsUrl}
                    <button style={{display: this.props.showButtonLegend}} onClick={this.onOpenLegendPanel}><I18N.Message msgId={"metadataInfoBox.legendPanelTitle"} /></button>
                    {renderLegendPanel}
              </Panel>
          </Draggable>
        </div>
        );
    }
});
module.exports = MetadataInfoBox;
