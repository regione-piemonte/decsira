/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');


require('../../assets/css/sira.css');
require('../../MapStore2/web/client/product/assets/css/viewer.css');

const {connect} = require('react-redux');

const SidePanel = require('./SidePanel');
const Card = require('../components/template/Card');
const Header = require('../components/Header');

const {bindActionCreators} = require('redux');
const {toggleSiraControl} = require('../actions/controls');
// const {setProfile, loadUserIdentity} = require('../actions/userprofile');
const {setProfile} = require('../actions/userprofile');
const {configureInlineMap} = require('../actions/siradec');
const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;
require("../components/WMSLayer.js");
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
    },
    C: {
        userName: "profiloc",
        authkey: "0505bb64-21b6-436c-86f9-9c1280f15a6c"
    },
    D: {
        userName: "profilod",
        authkey: "4176ea85-9a9a-42a5-8913-8f6f85813dab"
    }
};
const {hideBox, loadLegends, toggleLegendBox} = require('../actions/metadatainfobox');
const mapStateToPropsMIB = (state) => {
    return {
      show: state.metadatainfobox.show,
      openLegendPanel: state.metadatainfobox.openLegendPanel,
      title: state.metadatainfobox.title,
      text: state.metadatainfobox.text,
      numDatasetObjectCalc: state.metadatainfobox.numDatasetObjectCalc,
      dataProvider: state.metadatainfobox.dataProvider,
      urlMetadato: state.metadatainfobox.urlMetadato,
      urlWMS: state.metadatainfobox.urlWMS,
      urlWFS: state.metadatainfobox.urlWFS,
      urlLegend: state.metadatainfobox.urlLegend,
      error: state.metadatainfobox.error,
      showButtonLegend: state.metadatainfobox.showButtonLegend
  };
};

const mapDispatchToPropsMIB = (dispatch) => {
    return {
    loadLegend: (u, actualUrl) => {
        if (actualUrl && actualUrl.length === 0) {
            dispatch(loadLegends(u));
        }
        dispatch(toggleLegendBox());
    },
    closePanel: () => {
        dispatch(hideBox());
    }
  };
};

const MetadataInfoBox = connect(
    mapStateToPropsMIB,
    mapDispatchToPropsMIB
    )(require('../components/MetadataInfoBox'));

const { changeMousePointer} = require('../../MapStore2/web/client/actions/map');

const MapViewer = require('../../MapStore2/web/client/containers/MapViewer');

const {getFeatureInfo, purgeMapInfoResults, showMapinfoMarker, hideMapinfoMarker} = require('../actions/mapInfo');
const {loadGetFeatureInfoConfig, setModelConfig} = require('../actions/mapInfo');
const {selectFeatures, setFeatures} = require('../actions/featuregrid');

const GetFeatureInfo = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
    siraFeatureTypeName: activeConfig.featureTypeName,
    siraFeatureInfoDetails: state.siradec.configOggetti,
    siraTopology: state.siradec.topology,
    siraTopologyConfig: state.mapInfo.topologyConfig,
    infoEnabled: state.mapInfo && state.mapInfo.infoEnabled || false,
    topologyInfoEnabled: state.mapInfo && state.mapInfo.topologyInfoEnabled || false,
    htmlResponses: state.mapInfo && state.mapInfo.responses || [],
    htmlRequests: state.mapInfo && state.mapInfo.requests || {length: 0},
    infoFormat: state.mapInfo && state.mapInfo.infoFormat,
    detailsConfig: state.mapInfo.detailsConfig,
    // modelConfig: state.mapInfo.modelConfig,
    template: state.mapInfo.template,
    map: state.map && state.map.present,
    infoType: state.mapInfo.infoType,
    layers: state.layers && state.layers.flat || [],
    clickedMapPoint: state.mapInfo && state.mapInfo.clickPoint};
}, (dispatch) => {
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

let MapInfoUtils = require('../../MapStore2/web/client/utils/MapInfoUtils');

MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

const Sira = React.createClass({
    propTypes: {
        mode: React.PropTypes.string,
        params: React.PropTypes.object,
        roles: React.PropTypes.object,
        profile: React.PropTypes.object,
        loadMapConfig: React.PropTypes.func,
        reset: React.PropTypes.func,
        error: React.PropTypes.object,
        loading: React.PropTypes.bool,
        nsResolver: React.PropTypes.func,
        controls: React.PropTypes.object,
        toggleSiraControl: React.PropTypes.func,
        setProfile: React.PropTypes.func,
        // loadUserIdentity: React.PropTypes.func,
        plugins: React.PropTypes.object,
        viewerParams: React.PropTypes.object,
        configureInlineMap: React.PropTypes.func,
        configLoaded: React.PropTypes.bool
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            toggleSiraControl: () => {},
            setProfile: () => {},
            // loadUserIdentity: () => {},
            onLoadFeatureTypeConfig: () => {},
            mode: 'desktop',
            viewerParams: {mapType: "openlayers"},
            configLoaded: false
        };
    },
    componentWillMount() {
        document.body.className = "body_map";
        if (urlQuery.map) {
            this.props.configureInlineMap(JSON.parse(urlQuery.map));
        }
        // if (this.props.params.profile) {
        //    this.props.setProfile(this.props.params.profile, authParams[this.props.params.profile]);
        // }
        // this.props.loadUserIdentity();
    },
    render() {
        return (
            <div>
                <Header
                    goToDataset={this.goToDataset}
                    goToHome={this.goToHome}
                    showCart="false"
                    cartListaStyle="btn btn-primary"
                    cartMappaStyle="btn btn-primary active"
                    onBack={this.back}
                    />

                <div className="mapbody">
                    <span className={this.props.error && 'error' || !this.props.loading && 'hidden' || ''}>
                        {this.props.error && ("Error: " + this.props.error) || (this.props.loading)}
                    </span>
                    <SidePanel auth={authParams[this.props.params.profile]} profile={this.props.profile.profile}/>
                    <MapViewer
                    plugins={this.props.plugins}
                    params={this.props.viewerParams}
                    />
                    <Card profile={this.props.profile.profile} authParam={authParams[this.props.params.profile]}/>
                    <GetFeatureInfo
                        display={"accordion"}
                        params={{authkey: this.props.params.profile ? authParams[this.props.params.profile].authkey : ''}}
                        profile={this.props.profile.profile}
                        key="getFeatureInfo"/>
                    <MetadataInfoBox panelStyle={{
                        height: "500px",
                        width: "650px",
                        zIndex: 100,
                        left: 400,
                        top: -128,
                        position: "absolute",
                        overflow: "auto"}}/>
                </div>
            </div>
        );
    },
    goToDataset() {
        this.context.router.push('/dataset/');
    },
    goToHome() {
        this.context.router.push('/');
    }
});

module.exports = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        profile: state.userprofile,
        mode: 'desktop',
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        // card: state.cardtemplate,
        controls: state.siraControls,
        configLoaded: activeConfig && activeConfig.card ? true : false
    };
}, {
    toggleSiraControl,
    setProfile,
    // loadUserIdentity,
    configureInlineMap
})(Sira);
