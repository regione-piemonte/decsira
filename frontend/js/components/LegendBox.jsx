/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const { Image, Panel, Modal } = require('react-bootstrap');
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
            <Modal show={this.props.showLegend === 'block'} bsSize="small" onHide={() => {
                this.props.closeLegend();
            }}>
                <Modal.Header className="dialog-error-header-side" closeButton>
                    <Modal.Title><I18N.Message msgId={"legendBox.panelTitle"} /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Panel className="info-content infobox-content">
                        {this.renderLegends()}
                    </Panel>
                </Modal.Body>
            </Modal>
        );
    }

}

module.exports = LegendBox;
