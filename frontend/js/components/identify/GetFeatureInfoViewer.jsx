/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Alert, Accordion, Panel, Glyphicon} = require('react-bootstrap');
const ReactSwipe = require('react-swipe');
const JSONFeatureInfoViewer = require('../../../MapStore2/web/client/components/data/identify/viewers/JSONViewer');
const HTMLFeatureInfoViewer = require('../../../MapStore2/web/client/components/data/identify/viewers/HTMLViewer');
const TEXTFeatureInfoViewer = require('../../../MapStore2/web/client/components/data/identify/viewers/TextViewer');

const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const {toggleSiraControl} = require('../../actions/controls');
const {loadCardTemplate} = require('../../actions/card');
const {loadFeatureInfoTemplateConfig} = require('../../actions/mapInfo');

const GMLFeatureInfoViewer = connect((state) => ({
    detailOpen: state.siraControls.detail
}), (dispatch) => {
    return {
        actions: bindActionCreators({
            onShowDetail: toggleSiraControl.bind(null, 'detail'),
            onDetail: loadCardTemplate,
            loadTemplate: loadFeatureInfoTemplateConfig
        }, dispatch)
    };
})(require('./viewers/GMLViewer'));

const FeatureInfoUtils = require('../../../MapStore2/web/client/utils/FeatureInfoUtils');

const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

const I18N = require('../../../MapStore2/web/client/components/I18N/I18N');

const GetFeatureInfoViewer = React.createClass({
    propTypes: {
        infoFormat: React.PropTypes.oneOf(
            MapInfoUtils.getAvailableInfoFormatValues()
        ),
        profile: React.PropTypes.string,
        responses: React.PropTypes.array,
        missingRequests: React.PropTypes.number,
        display: React.PropTypes.string,
        params: React.PropTypes.object,
        contentConfig: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            display: "accordion",
            profile: null,
            responses: [],
            missingRequests: 0,
            contentConfig: {}
        };
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.responses !== this.props.responses || nextProps.missingRequests !== this.props.missingRequests ||
          nextProps.contentConfig !== this.props.contentConfig;
    },
    getValidator(infoFormat) {
        var infoFormats = MapInfoUtils.getAvailableInfoFormat();
        switch (infoFormat) {
            case infoFormats.JSON:
                return FeatureInfoUtils.Validator.JSON;
            case infoFormats.HTML:
                return FeatureInfoUtils.Validator.HTML;
            case infoFormats.TEXT:
                return FeatureInfoUtils.Validator.TEXT;
            case infoFormats.GML3:
                return FeatureInfoUtils.Validator.GML3;
            default:
                return null;
        }
    },
    /**
     * render empty layers or not valid responses section.
     */
    renderEmptyLayers(validator) {
        const notEmptyResponses = validator.getValidResponses(this.props.responses).length;
        const filteredResponses = validator.getNoValidResponses(this.props.responses);
        if (this.props.missingRequests === 0 && notEmptyResponses === 0) {
            return null;
        }
        if (filteredResponses.length !== 0) {
            const titles = filteredResponses.map((res) => {
                const {layerMetadata} = res;
                return layerMetadata.title;
            });
            return (
                <Alert bsStyle={"info"}>
                    <I18N.Message msgId={"noInfoForLayers"} />
                    <b>{titles.join(', ')}</b>
                </Alert>
            );
        }
        return null;
    },
    /**
     * Render a single layer feature info
     */
    renderInfoPage(response, requesInfoFormat, layerId) {
        var infoFormats = MapInfoUtils.getAvailableInfoFormat();
        switch (requesInfoFormat) {
            case infoFormats.JSON:
                return <JSONFeatureInfoViewer display={this.props.display} response={response} />;
            case infoFormats.HTML:
                return <HTMLFeatureInfoViewer display={this.props.display} response={response} />;
            case infoFormats.TEXT:
                return <TEXTFeatureInfoViewer display={this.props.display} response={response} />;
            case infoFormats.GML3:
                return this.props.contentConfig &&
                    // this.props.contentConfig.template[layerId] &&
                    this.props.contentConfig.template[layerId] &&
                    this.props.contentConfig.detailsConfig[layerId] &&
                    this.props.contentConfig.featureConfigs[this.props.contentConfig.detailsConfig[layerId]]
                    /*&&
                    this.props.contentConfig.modelConfig[layerId]*/ ? (
                        <GMLFeatureInfoViewer
                            display={this.props.display}
                            response={response}
                            profile={this.props.profile}
                            contentConfig={{
                                layerId,
                                template: this.props.contentConfig.template[layerId],
                                detailsConfig: this.props.contentConfig.featureConfigs[this.props.contentConfig.detailsConfig[layerId]]
                                // modelConfig: this.props.contentConfig.modelConfig[layerId]
                            }}
                            params={this.props.params}/>
                    ) : (
                        <span/>
                    );
            default:
                return null;
        }
    },
    /**
     * Some info about the event
     */
    renderAdditionalInfo() {
        var infoFormats = MapInfoUtils.getAvailableInfoFormat();
        switch (this.props.infoFormat) {
            case infoFormats.JSON:
                return this.renderEmptyLayers(FeatureInfoUtils.Validator.JSON);
            case infoFormats.HTML:
                return this.renderEmptyLayers(FeatureInfoUtils.Validator.HTML);
            case infoFormats.TEXT:
                return this.renderEmptyLayers(FeatureInfoUtils.Validator.TEXT);
            case infoFormats.GML3:
                return this.renderEmptyLayers(FeatureInfoUtils.Validator.TEXT);
            default:
                return null;
        }
    },
    renderLeftButton() {
        return <a style={{"float": "left"}} onClick={() => {this.refs.container.swipe.prev(); }}><Glyphicon glyph="chevron-left" /></a>;
    },
    renderRightButton() {
        return <a style={{"float": "right"}} onClick={() => {this.refs.container.swipe.next(); }}><Glyphicon glyph="chevron-right" /></a>;
    },
    renderPageHeader(res, layerMetadata) {
        return (
            <span>
                {this.props.display === "accordion" ? "" : this.renderLeftButton()}
                <span>{layerMetadata.title}</span>
                {this.props.display === "accordion" ? "" : this.renderRightButton()}
            </span>
        );
    },
    /**
     * render all the feature info pages
     */
    renderPages(responses) {
        if ((this.props.missingRequests === 0 && responses.length === 0) || !responses) {
            return (
                <Alert bsStyle={"danger"}>
                    <h4><I18N.HTML msgId={"noFeatureInfo"}/></h4>
                </Alert>
            );
        }
        return responses.map((res, i) => {
            const {response, layerMetadata} = res;
            var pageHeader = this.renderPageHeader(res, layerMetadata, i);
            return (
                <Panel
                    eventKey={i}
                    key={i}
                    collapsible={this.props.display === "accordion"}
                    header={pageHeader}
                    style={this.props.display === "accordion" ?
                        {maxHeight: "500px", overflow: "auto"} : {maxHeight: "500px", overflow: "auto"}}>
                    {this.renderInfoPage(response, res.queryParams.info_format, res.queryParams.id)}
                </Panel>
            );
        });
    },
    render() {
        const Container = this.props.display === "accordion" ? Accordion : ReactSwipe;
        let validResponses = [];

        if (this.props.responses.length > 0) {
            this.props.responses.forEach((response) => {
                let validator = this.getValidator(response.queryParams.info_format);
                if (validator.getValidResponses([response])[0]) {
                    validResponses.push(validator.getValidResponses([response])[0]);
                }
            });
        }

        return (
            <div>
                <Container ref="container" defaultActiveKey={0} key={"swiper-" + this.props.responses.length + "-" + this.props.missingRequests} shouldUpdate={(nextProps, props) => {return nextProps !== props; }}>
                    {this.renderPages(validResponses)}
                </Container>
                {this.renderAdditionalInfo()}
            </div>
        );
    }
});

module.exports = GetFeatureInfoViewer;
