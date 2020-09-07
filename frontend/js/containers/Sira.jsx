const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');


require('../../assets/css/sira.css');
require('@mapstore/product/assets/css/viewer.css');

const {connect} = require('react-redux');

const SidePanel = require('./SidePanel');
const Card = require('../components/template/Card');
const Header = require('../components/Header');

const {bindActionCreators} = require('redux');
const {toggleSiraControl} = require('../actions/controls');
const {setProfile, loadUserIdentity} = require('../actions/userprofile');
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

const { changeMousePointer, registerEventListener, unRegisterEventListener} = require('@mapstore/actions/map');

const MapViewer = require('@mapstore/containers/MapViewer');

const {getFeatureInfo, purgeMapInfoResults, showMapinfoMarker, hideMapinfoMarker} = require('../actions/mapInfo');
const {toggleControl} = require('@mapstore/actions/controls');
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

let MapInfoUtils = require('@mapstore/utils/MapInfoUtils');

MapInfoUtils.AVAILABLE_FORMAT = ['TEXT', 'JSON', 'HTML', 'GML3'];

class Sira extends React.Component {
    static propTypes = {
        mode: PropTypes.string,
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        roles: PropTypes.object,
        profile: PropTypes.object,
        loadMapConfig: PropTypes.func,
        reset: PropTypes.func,
        error: PropTypes.object,
        loading: PropTypes.bool,
        nsResolver: PropTypes.func,
        controls: PropTypes.object,
        toggleSiraControl: PropTypes.func,
        setProfile: PropTypes.func,
        loadUserIdentity: PropTypes.func,
        plugins: PropTypes.object,
        viewerParams: PropTypes.object,
        configureInlineMap: PropTypes.func,
        configLoaded: PropTypes.bool,
        registerEventListener: PropTypes.func,
        toggleControl: PropTypes.func,
        mapConfigLoaded: PropTypes.bool,
        panelEnabled: PropTypes.bool
    };

    static contextTypes = {
        router: PropTypes.object
    };

    static defaultProps = {
        toggleSiraControl: () => {},
        setProfile: () => {},
        loadUserIdentity: () => {},
        onLoadFeatureTypeConfig: () => {},
        mode: 'desktop',
        viewerParams: {mapType: "openlayers"},
        configLoaded: false
    };

    componentWillMount() {
        document.body.className = "body_map sira-ms2";
        if (urlQuery.map) {
            this.props.configureInlineMap(JSON.parse(urlQuery.map));
        }
        if (this.props?.match?.params?.profile) {
            this.props.setProfile(this.props?.match?.params?.profile, authParams[this.props?.match?.params?.profile]);
        }
        this.props.loadUserIdentity();
    }

    componentDidMount() {
        if (this.props.mapConfigLoaded) {
            this.props.registerEventListener('mousemove', 'mouseposition');
            !this.props.panelEnabled && this.props.toggleControl('drawer');
        }

    }

    componentWillUnmount() {
        // this.props.unRegisterEventListener('mousemove', 'mouseposition');
    }

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
                    <SidePanel auth={authParams[this.props?.match?.params?.profile]} profile={this.props.profile.profile}/>
                    <MapViewer
                        plugins={this.props.plugins}
                        params={this.props.viewerParams}
                    />
                    <Card profile={this.props.profile.profile} authParam={authParams[this.props?.match?.params?.profile]}/>
                    <GetFeatureInfo
                        display={"accordion"}
                        params={{authkey: this.props?.match?.params?.profile ? authParams[this.props?.match?.params?.profile].authkey : ''}}
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
    }

    goToDataset = () => {
        this.context.router.history.push('/dataset/');
    };

    goToHome = () => {
        this.context.router.history.push('/');
    };
}

module.exports = connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        profile: state.userprofile,
        mode: 'desktop',
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        card: state.cardtemplate,
        controls: state.siraControls,
        configLoaded: !!(activeConfig && activeConfig.card),
        mapConfigLoaded: state?.map?.present || false,
        panelEnabled: state?.controls?.drawer?.enabled || false
    };
}, {
    toggleSiraControl,
    setProfile,
    loadUserIdentity,
    configureInlineMap,
    registerEventListener,
    unRegisterEventListener,
    toggleControl
})(Sira);
