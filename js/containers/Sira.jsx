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

const {changeMapInfoState} = require('../../MapStore2/web/client/actions/mapInfo');
const Info = connect((state) => ({
    pressed: state.mapInfo && state.mapInfo.enabled
}), {
    onClick: changeMapInfoState
})(require('../../MapStore2/web/client/components/buttons/ToggleButton'));

const {getFeatureInfo, purgeMapInfoResults, showMapinfoMarker, hideMapinfoMarker} = require('../../MapStore2/web/client/actions/mapInfo');

const GetFeatureInfo = connect((state) => ({
    enabled: state.mapInfo && state.mapInfo.enabled || false,
    htmlResponses: state.mapInfo && state.mapInfo.responses || [],
    htmlRequests: state.mapInfo && state.mapInfo.requests || {length: 0},
    // infoFormat: state.mapInfo && state.mapInfo.infoFormat,
    map: state.map,
    layers: state.layers && state.layers.flat || [],
    clickedMapPoint: state.mapInfo && state.mapInfo.clickPoint
}), (dispatch) => {
    return {
        actions: bindActionCreators({
            getFeatureInfo,
            purgeMapInfoResults,
            changeMousePointer,
            showMapinfoMarker,
            hideMapinfoMarker
        }, dispatch)
    };
})(require('../../MapStore2/web/client/product/components/viewer/mapInfo/GetFeatureInfo'));

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
            <div>
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
                </MapToolBar>

                <SearchBar
                    key="seachBar"/>
                <NominatimResultList
                    key="nominatimresults"/>
                <GetFeatureInfo
                    infoFormat={'text/html'}
                    display={"accordion"}
                    params={{authkey: authParams[this.props.params.profile].authkey}}
                    key="getFeatureInfo"/>
                <ScaleBox
                    key="scaleBox"/>
                <ZoomToMaxExtentButton
                    key="zoomToMaxExtent"/>
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
