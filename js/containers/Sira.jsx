/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

require('../../assets/css/sira.css');

const {connect} = require('react-redux');
const assign = require('object-assign');

const {Glyphicon, Tooltip} = require('react-bootstrap');

const SiraMap = require('../components/SiraMap');
const SiraQueryPanel = require('../components/SiraQueryPanel');
const SiraFeatureGrid = require('../components/SiraFeatureGrid');
const Card = require('../components/template/Card');
const Header = require('../components/MapHeader');

const {bindActionCreators} = require('redux');
const {toggleSiraControl} = require('../actions/controls');

const authParams = {
    admin: {
        userName: "admin",
        authkey: "84279da9-f0b9-4e45-ac97-48413a48e33f"
    },
    A: {
        userName: "profiloa",
        authkey: "59ccadf2-963e-448c-bc9a-b3a5e8ed20d7"
    },
    B: {
        userName: "profilob",
        authkey: "d6e5f5a5-2d26-43aa-8af3-13f8dcc0d03c"
    }
};

const Message = require('../../MapStore2/web/client/components/I18N/Message');

const {changeMapView, changeZoomLevel, changeMousePointer} = require('../../MapStore2/web/client/actions/map');

const {textSearch, resultsPurge} = require("../../MapStore2/web/client/actions/search");
const SearchBar = connect(() => ({}), {
     onSearch: textSearch,
     onSearchReset: resultsPurge
})(require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar'));

const NominatimResultList = connect((state) => ({
    results: state.search || null,
    mapConfig: state.map || {}
}), {
    onItemClick: changeMapView,
    afterItemClick: resultsPurge
})(require('../../MapStore2/web/client/components/mapcontrols/search/geocoding/NominatimResultList'));

const MapToolBar = require("../../MapStore2/web/client/product/components/viewer/MapToolBar");

const {changeMapInfoState} = require('../actions/mapInfo');
const Info = connect((state) => ({
    pressed: state.mapInfo && state.mapInfo.infoEnabled
}), {
    onClick: changeMapInfoState
})(require('../../MapStore2/web/client/components/buttons/ToggleButton'));

const {changeTopologyMapInfoState} = require('../actions/mapInfo');
const TopologyInfo = connect((state) => ({
    pressed: state.mapInfo && state.mapInfo.topologyInfoEnabled
}), {
    onClick: changeTopologyMapInfoState
})(require('../../MapStore2/web/client/components/buttons/ToggleButton'));

const {getFeatureInfo, purgeMapInfoResults, showMapinfoMarker, hideMapinfoMarker} = require('../actions/mapInfo');
const {loadGetFeatureInfoConfig, setModelConfig} = require('../actions/mapInfo');
const {selectFeatures, setFeatures} = require('../actions/featuregrid');

const GetFeatureInfo = connect((state) => ({
    infoEnabled: state.mapInfo && state.mapInfo.infoEnabled || false,
    topologyInfoEnabled: state.mapInfo && state.mapInfo.topologyInfoEnabled || false,
    htmlResponses: state.mapInfo && state.mapInfo.responses || [],
    htmlRequests: state.mapInfo && state.mapInfo.requests || {length: 0},
    infoFormat: state.mapInfo && state.mapInfo.infoFormat,
    detailsConfig: state.mapInfo.detailsConfig,
    modelConfig: state.mapInfo.modelConfig,
    template: state.mapInfo.template,
    map: state.map,
    infoType: state.mapInfo.infoType,
    layers: state.layers && state.layers.flat || [],
    clickedMapPoint: state.mapInfo && state.mapInfo.clickPoint
}), (dispatch) => {
    return {
        actions: bindActionCreators({
            getFeatureInfo,
            purgeMapInfoResults,
            changeMousePointer,
            showMapinfoMarker,
            hideMapinfoMarker,
            loadGetFeatureInfoConfig,
            setFeatures,
            selectFeatures,
            setModelConfig
        }, dispatch)
    };
})(require('../components/identify/GetFeatureInfo'));

const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');
const {changeLayerProperties, toggleNode, sortNode} = require('../../MapStore2/web/client/actions/layers');
const layersIcon = require('../../MapStore2/web/client/product/assets/img/layers.png');

const LayerTree = connect((state) => ({
    groups: state.layers && state.layers.groups && LayersUtils.denormalizeGroups(state.layers.flat, state.layers.groups).groups || []
}), {
    propertiesChangeHandler: changeLayerProperties,
    onToggleGroup: LayersUtils.toggleByType('groups', toggleNode),
    onToggleLayer: LayersUtils.toggleByType('layers', toggleNode),
    onSort: LayersUtils.sortUsing(LayersUtils.sortLayers, sortNode)
})(require('../../MapStore2/web/client/product/components/viewer/LayerTree'));

const BackgroundSwitcher = connect((state) => ({
    layers: state.layers && state.layers.flat && state.layers.flat.filter((layer) => layer.group === "background") || []
}), {
    propertiesChangeHandler: changeLayerProperties
})(require('../../MapStore2/web/client/components/TOC/background/BackgroundSwitcher'));

const ScaleBox = connect((state) => ({
    currentZoomLvl: state.map && state.map.zoom
}), {
    onChange: changeZoomLevel
})(require("../../MapStore2/web/client/components/mapcontrols/scale/ScaleBox"));

const ZoomToMaxExtentButton = connect((state) => ({
    mapConfig: state.map || {}
}), (dispatch) => {
    return {
        actions: bindActionCreators({
            changeMapView
        }, dispatch)
    };
})(require("../../MapStore2/web/client/components/buttons/ZoomToMaxExtentButton"));

const ToggleButton = require('../../MapStore2/web/client/components/buttons/ToggleButton');

const {changeLocateState} = require('../../MapStore2/web/client/actions/locate');
const LocateBtn = connect((state) => ({
    locate: state.locate && state.locate.state || 'DISABLED'
}), {
    onClick: changeLocateState
})(require('../../MapStore2/web/client/components/mapcontrols/locate/LocateBtn'));

const lineRuleIcon = require('../../MapStore2/web/client/product/assets/img/line-ruler.png');

const {changeMeasurementState} = require('../../MapStore2/web/client/actions/measurement');
const MeasureComponent = connect((state) => {
    return {
        measurement: state.measurement || {},
        lineMeasureEnabled: state.measurement && state.measurement.lineMeasureEnabled || false,
        areaMeasureEnabled: state.measurement && state.measurement.areaMeasureEnabled || false,
        bearingMeasureEnabled: state.measurement && state.measurement.bearingMeasureEnabled || false
    };
}, {
    toggleMeasure: changeMeasurementState
})(require('../../MapStore2/web/client/components/mapcontrols/measure/MeasureComponent'));

let MapInfoUtils = require('../../MapStore2/web/client/utils/MapInfoUtils');
MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

const Sira = React.createClass({
    propTypes: {
        params: React.PropTypes.shape({
            profile: React.PropTypes.string
        }),
        featureGrigConfigUrl: React.PropTypes.string,
        error: React.PropTypes.object,
        loading: React.PropTypes.bool,
        cardModel: React.PropTypes.object,
        nsResolver: React.PropTypes.func,
        controls: React.PropTypes.object,
        toggleSiraControl: React.PropTypes.func
    },
    getDefaultProps() {
        return {};
    },
    render() {
        let card = this.props.cardModel ? (
            <Card model={assign({}, this.props.cardModel, {authParam: authParams[this.props.params.profile]})}/>
        ) : (
            <span/>
        );

        let tooltip = <Tooltip id="toolbar-home-button">{<Message msgId="gohome"/>}</Tooltip>;
        let homeButton = (
            <ToggleButton
                id="home-button"
                key="gohome"
                isButton={true}
                pressed={false}
                glyphicon="home"
                helpText={<Message msgId="helptexts.gohome"/>}
                onClick={() => {location.href = "/"; }}
                tooltip={tooltip}
                tooltipPlace="left"/>
        );

        return (
            <div className="mappaSiraDecisionale">
                <Header/>
                <div className="mapbody">
                    <span className={this.props.error && 'error' || !this.props.loading && 'hidden' || ''}>
                        {this.props.error && ("Error: " + this.props.error) || (this.props.loading)}
                    </span>
                    <div className="info">Profile: {this.props.params.profile}</div>
                    <SiraMap
                        params={{authkey: authParams[this.props.params.profile].authkey}}/>
                    <SiraQueryPanel
                        authParam={authParams[this.props.params.profile]}/>
                    <SiraFeatureGrid
                        authParam={authParams[this.props.params.profile]}
                        featureGrigConfigUrl={this.props.featureGrigConfigUrl}
                        profile={this.props.params.profile}/>

                    {card}

                    <MapToolBar
                        key="mapToolbar"
                        containerStyle={{
                            position: "absolute",
                            top: "50px",
                            right: "5px",
                            marginRight: "10px",
                            marginTop: "5px",
                            zIndex: 1000
                        }}>

                        {homeButton}

                        <LocateBtn
                            key="locate"
                            tooltip={<Message msgId="locate.tooltip"/>}/>

                        <Info
                            key="infoButton"
                            isButton={true}
                            glyphicon="info-sign"/>

                        <LayerTree
                            key="layerSwitcher"
                            isPanel={true}
                            buttonTooltip={<Message msgId="layers"/>}
                            title={<Message msgId="layers"/>}
                            helpText={<Message msgId="helptexts.layerSwitcher"/>}
                            icon={<img src={layersIcon}/>}/>

                        <BackgroundSwitcher
                            key="backgroundSwitcher"
                            isPanel={true}
                            title={<div><Message msgId="background"/></div>}
                            helpText={<Message msgId="helptexts.backgroundSwitcher"/>}
                            buttonTooltip={<Message msgId="backgroundSwither.tooltip"/>}
                            icon={<Glyphicon glyph="globe"/>}/>

                        <MeasureComponent
                            key="measureComponent"
                            icon={<img src={lineRuleIcon}/>}
                            isPanel={true}
                            title={<div><Message msgId="measureComponent.title"/></div>}
                            buttonTooltip={<Message msgId="measureComponent.tooltip"/>}
                            helpText={<Message msgId="helptexts.measureComponent"/>}
                            lengthButtonText={<Message msgId="measureComponent.lengthButtonText"/>}
                            areaButtonText={<Message msgId="measureComponent.areaButtonText"/>}
                            resetButtonText={<Message msgId="measureComponent.resetButtonText"/>}
                            lengthLabel={<Message msgId="measureComponent.lengthLabel"/>}
                            areaLabel={<Message msgId="measureComponent.areaLabel"/>}
                            bearingLabel={<Message msgId="measureComponent.bearingLabel"/>}/>

                        <TopologyInfo
                            key="topologyInfoButton"
                            isButton={true}
                            glyphicon="glyphicon glyphicon-picture"/>
                    </MapToolBar>

                    <SearchBar
                        key="seachBar"/>
                    <NominatimResultList
                        key="nominatimresults"/>
                    <GetFeatureInfo
                        display={"accordion"}
                        params={{authkey: authParams[this.props.params.profile].authkey}}
                        profile={this.props.params.profile}
                        key="getFeatureInfo"/>
                    <ScaleBox
                        key="scaleBox"/>
                    <ZoomToMaxExtentButton
                        key="zoomToMaxExtent"/>
                </div>
            </div>
        );
    },
    toggleGrid(evt) {
        evt.preventDefault();
        this.props.toggleSiraControl('grid');
    },
    toggleDetail(evt) {
        evt.preventDefault();
        this.props.toggleSiraControl('detail');
    }
});

module.exports = connect((state) => {
    return {
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        cardModel: state.cardtemplate.model,
        controls: state.siraControls,
        featureGrigConfigUrl: state.grid.featureGrigConfigUrl
    };
}, {
    toggleSiraControl
})(Sira);
