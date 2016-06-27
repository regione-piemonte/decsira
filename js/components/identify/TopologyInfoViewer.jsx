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

const FeatureInfoUtils = require('../../../MapStore2/web/client/utils/FeatureInfoUtils');

const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

const I18N = require('../../../MapStore2/web/client/components/I18N/I18N');

const TemplateUtils = require('../../utils/TemplateUtils');

const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const {changeMapView} = require('../../../MapStore2/web/client/actions/map');
const {selectFeatures} = require('../../actions/featuregrid');

const FeatureGrid = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        features: state.featuregrid && state.featuregrid.features || []
    };
}, dispatch => {
    return bindActionCreators({
            selectFeatures: selectFeatures,
            changeMapView: changeMapView
        }, dispatch);
})(require('../../../MapStore2/web/client/components/data/featuregrid/FeatureGrid'));

const Spinner = require('../../../MapStore2/web/client/components/misc/spinners/BasicSpinner/BasicSpinner');

const TopologyInfoViewer = React.createClass({
    propTypes: {
        responses: React.PropTypes.array,
        missingRequests: React.PropTypes.number,
        infoTopologyResponse: React.PropTypes.object,
        display: React.PropTypes.string,
        // modelConfig: React.PropTypes.object,
        topologyConfig: React.PropTypes.object,
        actions: React.PropTypes.shape({
            setFeatures: React.PropTypes.func
        })
    },
    getDefaultProps() {
        return {
            display: "accordion",
            responses: [],
            missingRequests: 0,
            actions: {
                setFeatures: () => {}
            }
        };
    },
    getValidator(infoFormat) {
        const infoFormats = MapInfoUtils.getAvailableInfoFormat();
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
     * Render a single layer feature info
     */
    renderInfoPage(layerId) {
        let columns;
        if (this.props.infoTopologyResponse &&
            this.props.infoTopologyResponse[layerId] &&
            this.props.topologyConfig &&
            this.props.topologyConfig[layerId] &&
            this.props.topologyConfig[layerId].modelConfig) {
            columns = this.props.topologyConfig[layerId].modelConfig.columns.filter((element) => element.type !== TemplateUtils.GEOMETRY_TYPE);
            columns = columns.map((element) => {
                return {
                    headerName: element.header,
                    field: "properties." + element.field,
                    width: element.width
                };
            });
        }

        return this.props.infoTopologyResponse &&
            this.props.infoTopologyResponse[layerId] &&
            this.props.topologyConfig &&
            this.props.topologyConfig[layerId] &&
            this.props.topologyConfig[layerId].modelConfig ? (
            <FeatureGrid
                columnDefs={columns}
                toolbar={{
                    zoom: false,
                    exporter: false,
                    toolPanel: false
                }}
                style={{height: "300px", width: "100%"}}/>
        ) : (
            <div style={{height: "100px", width: "100%"}}>
                <div style={{
                    position: "relative",
                    width: "60px",
                    top: "50%",
                    left: "40%"}}>
                    <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                </div>
            </div>
        );
    },
    renderLeftButton() {
        return <a style={{"float": "left"}} onClick={() => {this.refs.container.swipe.prev(); }}><Glyphicon glyph="chevron-left" /></a>;
    },
    renderRightButton() {
        return <a style={{"float": "right"}} onClick={() => {this.refs.container.swipe.next(); }}><Glyphicon glyph="chevron-right" /></a>;
    },
    renderPageHeader(layerId) {
        return (<span>{this.props.display === "accordion" ? "" : this.renderLeftButton()} <span>{this.props.topologyConfig ? this.props.topologyConfig[layerId].layerTitle : ""}</span> {this.props.display === "accordion" ? "" : this.renderRightButton()}</span>);
    },
    /**
     * render all the feature info pages
     */
    renderPages(responses) {
        if (this.props.missingRequests === 0 && responses.length === 0) {
            return (
                <Alert bsStyle={"danger"}>
                    <h4><I18N.HTML msgId={"noFeatureInfo"}/></h4>
                </Alert>
            );
        }
        return responses.map((res, i) => {
            const pageHeader = this.renderPageHeader(res.queryParams.id);
            return (
                <Panel
                    eventKey={i}
                    key={i}
                    collapsible={this.props.display === "accordion"}
                    header={pageHeader}
                    style={this.props.display === "accordion" ?
                        {maxHeight: "500px", overflow: "auto"} : {maxHeight: "500px", overflow: "auto"}}>
                    {this.renderInfoPage(res.queryParams.id)}
                </Panel>
            );
        });
    },
    render() {
        const Container = this.props.display === "accordion" ? Accordion : ReactSwipe;
        let validResponses = [];
        this.props.responses.forEach((response) => {
            let validator = this.getValidator(response.queryParams.info_format);
            if (validator.getValidResponses([response])[0]) {
                validResponses.push(validator.getValidResponses([response])[0]);
            }
        });

        return (
            <div>
                <Container ref="container" defaultActiveKey={0} key={"swiper-" + this.props.responses.length + "-" + this.props.missingRequests} shouldUpdate={(nextProps, props) => {return nextProps !== props; }}>
                    {this.renderPages(validResponses)}
                </Container>
            </div>
        );
    }
});

module.exports = TopologyInfoViewer;
