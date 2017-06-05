/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const assign = require('object-assign');
const {Glyphicon, Panel} = require('react-bootstrap');

const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');

const {setFeatures} = require('../../../MapStore2/web/client/actions/featuregrid');

const TopologyInfoViewer = connect((state) => ({
    // modelConfig: state.mapInfo.modelConfig,
    topologyConfig: state.mapInfo.topologyConfig,
    infoTopologyResponse: state.mapInfo.infoTopologyResponse
}), (dispatch) => {
    return {
        actions: bindActionCreators({
            setFeatures
        }, dispatch)
    };
})(require('./TopologyInfoViewer'));

const {loadInfoTopologyConfig} = require('../../actions/mapInfo');

const GetFeatureInfoViewer = require('./GetFeatureInfoViewer');

const Draggable = require('react-draggable');

const I18N = require('../../../MapStore2/web/client/components/I18N/I18N');
const Spinner = require('../../../MapStore2/web/client/components/misc/spinners/BasicSpinner/BasicSpinner');

const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const FilterUtils = require('../../../MapStore2/web/client/utils/FilterUtils');

const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

const {isArray, head} = require('lodash');

const GetFeatureInfo = React.createClass({
    propTypes: {
        params: React.PropTypes.object,
        infoFormat: React.PropTypes.oneOf(
            MapInfoUtils.getAvailableInfoFormatValues()
        ),
        featureCount: React.PropTypes.number,
        htmlResponses: React.PropTypes.array,
        htmlRequests: React.PropTypes.object,
        btnConfig: React.PropTypes.object,
        infoEnabled: React.PropTypes.bool,
        topologyInfoEnabled: React.PropTypes.bool,
        map: React.PropTypes.object,
        layers: React.PropTypes.array,
        layerFilter: React.PropTypes.func,
        actions: React.PropTypes.shape({
            getFeatureInfo: React.PropTypes.func,
            purgeMapInfoResults: React.PropTypes.func,
            changeMousePointer: React.PropTypes.func,
            showMapinfoMarker: React.PropTypes.func,
            hideMapinfoMarker: React.PropTypes.func,
            loadGetFeatureInfoConfig: React.PropTypes.func,
            selectFeatures: React.PropTypes.func,
            setFeatures: React.PropTypes.func,
            setModelConfig: React.PropTypes.func
        }),
        clickedMapPoint: React.PropTypes.object,
        display: React.PropTypes.string,
        draggable: React.PropTypes.bool,
        style: React.PropTypes.object,
        collapsible: React.PropTypes.bool,

        siraFeatureTypeName: React.PropTypes.string,
        siraFeatureInfoDetails: React.PropTypes.object,
        siraTopology: React.PropTypes.object,
        siraTopologyConfig: React.PropTypes.object,
        profile: React.PropTypes.string,
        detailsConfig: React.PropTypes.object,
        // modelConfig: React.PropTypes.object,
        template: React.PropTypes.object,
        infoType: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            siraFeatureTypeName: null,
            siraFeatureInfoDetails: null,
            siraTopology: null,
            siraTopologyConfig: null,
            profile: null,
            infoEnabled: false,
            topologyInfoEnabled: false,
            featureCount: 10,
            draggable: true,
            display: "accordion",
            htmlResponses: [],
            htmlRequests: {length: 0},
            map: {},
            layers: [],
            layerFilter(l) {
                return l.visibility &&
                    l.type === 'wms' &&
                    (l.queryable === undefined || l.queryable) &&
                    l.group !== "background";
            },
            actions: {
                getFeatureInfo() {},
                purgeMapInfoResults() {},
                changeMousePointer() {},
                showMapinfoMarker() {},
                hideMapinfoMarker() {}
            },
            infoFormat: MapInfoUtils.getDefaultInfoFormatValue(),
            clickedMapPoint: {},
            style: {
                position: "absolute",
                maxWidth: "500px",
                top: "56px",
                left: "45px",
                zIndex: 1010,
                boxShadow: "2px 2px 4px #A7A7A7"
            }
        };
    },
    getInitialState() {
        return { showModal: true };
    },
    componentWillReceiveProps(newProps) {
        // if there's a new clicked point on map and GetFeatureInfo is active
        // it composes and sends a getFeatureInfo action.
        var refreshInfo = () => {
            if ((newProps.infoEnabled || newProps.topologyInfoEnabled) && newProps.clickedMapPoint && newProps.clickedMapPoint.pixel) {
                if (!this.props.clickedMapPoint.pixel || this.props.clickedMapPoint.pixel.x !== newProps.clickedMapPoint.pixel.x ||
                        this.props.clickedMapPoint.pixel.y !== newProps.clickedMapPoint.pixel.y ) {
                    return true;
                }
                if (!this.props.clickedMapPoint.pixel || newProps.clickedMapPoint.pixel && this.props.infoFormat !== newProps.infoFormat) {
                    return true;
                }
            }
            return false;
        };
        if (refreshInfo()) {
            const {bounds, crs} = this.reprojectBbox(newProps.map.bbox, newProps.map.projection);

            if (newProps.infoType === "getfeatureinfo") {
                this.props.actions.purgeMapInfoResults();
                const wmsVisibleLayers = newProps.layers.filter(newProps.layerFilter);
                for (let l = 0; l < wmsVisibleLayers.length; l++) {
                    const layer = wmsVisibleLayers[l];
                    const {url, requestConf, layerMetadata} = this.calculateRequestParameters(layer, bounds, crs, newProps);
                    this.props.actions.getFeatureInfo(url, requestConf, layerMetadata, layer.featureInfoParams);

                    // Load the template if required
                    if (layer.featureType) {
                        this.props.actions.loadGetFeatureInfoConfig(layer.id, layer.featureType, this.props.params);
                    }
                }

                this.props.actions.showMapinfoMarker();

            } else if (newProps.infoType === "topology") {
                this.props.actions.purgeMapInfoResults();
                const wmsVisibleLayers = newProps.layers.filter((layer) => {
                    return layer.topologyConfig &&
                        layer.visibility &&
                        layer.type === 'wms' &&
                        (layer.queryable === undefined || layer.queryable) &&
                        layer.group !== "background";
                });

                for (let l = 0; l < wmsVisibleLayers.length; l++) {
                    const layer = wmsVisibleLayers[l];
                    const {url, requestConf, layerMetadata} = this.calculateRequestParameters(layer, bounds, crs, newProps);

                    // Load the template if required
                    let topologyOptions = {};
                    if (layer.topologyConfig) {
                        let topologyConfig = assign({}, layer.topologyConfig, {clickedMapPoint: newProps.clickedMapPoint});

                        let filterObj = {
                            spatialField: {
                                attribute: topologyConfig.geomAttribute,
                                geometry: {
                                    coordinates: [
                                        topologyConfig.wfsVersion === "1.1.0" || topologyConfig.wfsVersion === "2.0" ?
                                        [[
                                            topologyConfig.clickedMapPoint.latlng.lat,
                                            topologyConfig.clickedMapPoint.latlng.lng
                                        ]] : [[
                                            topologyConfig.clickedMapPoint.latlng.lng,
                                            topologyConfig.clickedMapPoint.latlng.lat
                                        ]]
                                    ],
                                    projection: "EPSG:4326",
                                    type: "Point"
                                },
                                method: "POINT",
                                operation: "INTERSECTS"
                            }
                        };

                        let filter = FilterUtils.toOGCFilter(topologyConfig.layerName, filterObj, "1.1.0");

                        topologyOptions.topologyConfig = topologyConfig;
                        topologyOptions.modelConfig = this.props.siraTopology.grid;
                        topologyOptions.layerId = layer.id;
                        topologyOptions.filter = filter;
                        topologyOptions.callback = loadInfoTopologyConfig;

                        this.props.actions.selectFeatures([]);
                        this.props.actions.setFeatures([]);
                        this.props.actions.setModelConfig({});
                    }

                    this.props.actions.getFeatureInfo(url, requestConf, layerMetadata, layer.featureInfoParams, topologyOptions);
                }
            }
        }

        if ((newProps.infoEnabled && !this.props.infoEnabled) ||
            (newProps.topologyInfoEnabled && !this.props.topologyInfoEnabled)) {
            this.props.actions.changeMousePointer('pointer');
        } else if ((!newProps.infoEnabled && this.props.infoEnabled) ||
            (!newProps.topologyInfoEnabled && this.props.topologyInfoEnabled)) {
            this.props.actions.changeMousePointer('auto');
            this.props.actions.hideMapinfoMarker();
            this.props.actions.purgeMapInfoResults();
        }
    },
    onModalHiding() {
        this.props.actions.hideMapinfoMarker();
        this.props.actions.purgeMapInfoResults();
    },
    renderInfo(missingRequests) {
        let component;

        if (this.props.infoType === "getfeatureinfo") {
            component = (
                <GetFeatureInfoViewer
                    missingRequests={missingRequests}
                    responses={this.props.htmlResponses}
                    contentConfig={{
                        template: this.props.template || {},
                        detailsConfig: this.props.detailsConfig,
                        featureConfigs: this.props.siraFeatureInfoDetails
                        // modelConfig: this.props.modelConfig
                    }}
                    profile={this.props.profile}
                    params={this.props.params}
                    display={this.props.display}/>
            );
        } else {
            if (/*this.props.modelConfig*/ this.props.siraTopologyConfig) {
                component = (
                    <TopologyInfoViewer
                        missingRequests={missingRequests}
                        responses={this.props.htmlResponses}
                        display={this.props.display}/>
                );
            } else {
                component = (
                    <div style={{height: "100px", width: "100%"}}>
                        <div style={{
                            position: "relative",
                            width: "60px",
                            top: "50%",
                            left: "45%"}}>
                            <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                        </div>
                    </div>
                );
            }
        }

        return component;
    },
    renderHeader(missingRequests) {
        let glyph = this.props.infoType === "getfeatureinfo" ? "info-sign" : "glyphicon glyphicon-picture";

        return (
            <div className="handle_infopanel">
                { (missingRequests !== 0 ) ? <Spinner value={missingRequests} sSize="sp-small" /> : null }
                <Glyphicon glyph={glyph} />&nbsp;<I18N.Message msgId="getFeatureInfoTitle" />
                <button onClick={this.onModalHiding} className="close"><span>×</span></button>
            </div>
        );
    },
    renderContent() {
        let missingRequests = this.props.htmlRequests.length - this.props.htmlResponses.length;
        return (
            <Panel
                defaultExpanded={true}
                collapsible={this.props.collapsible}
                id="mapstore-getfeatureinfo"
                header={this.renderHeader(missingRequests)}
                style={this.props.style}>
                {this.renderInfo(missingRequests)}
            </Panel>
        );
    },
    render() {
        if (this.props.htmlRequests.length !== 0) {
            return this.props.draggable ? (
                <Draggable handle=".handle_infopanel, .handle_infopanel *">
                    {this.renderContent()}
                </Draggable>
            ) : this.renderContent();
        }
        return null;
    },
    infoFormat(layerInfoFormat, propsInfoFormat) {
        const infoFormats = isArray(layerInfoFormat) && layerInfoFormat || [layerInfoFormat];
        return head(infoFormats.filter((f) => f === propsInfoFormat)) || head(infoFormats);
    },
    calculateRequestParameters(layer, bounds, crs, newProps) {
        const infoFormat = layer.infoFormat ? this.infoFormat(layer.infoFormat, newProps.infoFormat) : newProps.infoFormat;
        let requestConf = {
            id: layer.id,
            layers: layer.name,
            query_layers: layer.name,
            styles: layer.style,
            x: parseInt(newProps.clickedMapPoint.pixel.x, 10),
            y: parseInt(newProps.clickedMapPoint.pixel.y, 10),
            height: parseInt(newProps.map.size.height, 10),
            width: parseInt(newProps.map.size.width, 10),
            srs: crs,
            bbox: bounds.minx + "," +
                  bounds.miny + "," +
                  bounds.maxx + "," +
                  bounds.maxy,
            feature_count: newProps.featureCount,
            info_format: infoFormat
        };

        if (newProps.params) {
            requestConf = assign({}, requestConf, newProps.params);
        }

        const layerMetadata = {
            title: layer.title,
            regex: layer.featureInfoRegex
        };

        const url = isArray(layer.url) ?
            layer.url[0] :
            layer.url.replace(/[?].*$/g, '');

        return assign({}, {
            url: url,
            layerMetadata: layerMetadata,
            requestConf: requestConf
        });
    },
    reprojectBbox(bbox, destSRS) {
        let newBbox = CoordinatesUtils.reprojectBbox([
            bbox.bounds.minx,
            bbox.bounds.miny,
            bbox.bounds.maxx,
            bbox.bounds.maxy
        ], bbox.crs, destSRS);
        return assign({}, {
            crs: destSRS,
            bounds: {
                minx: newBbox[0],
                miny: newBbox[1],
                maxx: newBbox[2],
                maxy: newBbox[3]
            }
        });
    }
});

module.exports = GetFeatureInfo;
