/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const { Image, Panel } = require('react-bootstrap');
const Draggable = require('react-draggable');
const I18N = require('@mapstore/components/I18N/I18N');

class LegendBox extends React.Component {
    static propTypes = {
        showLegend: PropTypes.string,
        urlLegend: PropTypes.array,
        closeLegend: PropTypes.func
    };

    static defaultProps = {
        showLegend: 'none',
        urlLegend: [],
        closeLegend: () => { }
    };

    renderLegend = () => {
        return this.props.urlLegend.map((url) => {
            return (<Image src={url} />);
        });
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
        return (
            <Draggable
                bounds="parent"
                start={{ x: 0, y: 300 }}
                handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div tabIndex="0"
                    id="legendBox"
                    className="scheda-info"
                    style={{ display: this.props.showLegend }}
                    role="contentinfo"
                    aria-label="Informazioni aggiuntive">
                    <Panel
                        className="info-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    <I18N.Message msgId={"legendBox.panelTitle"} />
                                </span>
                                <button className="print-panel-close close" onClick={this.props.closeLegend}><span>×</span></button>
                            </span>}>
                        <Panel className="info-content infobox-content">
                            {this.renderLegends()}
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

module.exports = LegendBox;
