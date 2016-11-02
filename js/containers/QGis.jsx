/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
// const {Button, Glyphicon} = require('react-bootstrap');

const {getWindowSize} = require('../../MapStore2/web/client/utils/AgentUtils');

require('../../assets/css/qgis.css');
require('../../MapStore2/web/client/product/assets/css/viewer.css');

const {connect} = require('react-redux');

const SideQueryPanel = require('../components/SideQueryPanel');
const QGisFeatureGrid = require('../components/QGisFeatureGrid');
const Card = require('../components/template/Card');

const {setProfile} = require('../actions/userprofile');

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

const CoordinatesUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');
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

const {
    loadFeatureTypeConfig,
    expandFilterPanel
} = require('../actions/siradec');

const {toggleSiraControl} = require('../actions/controls');
const {selectFeatures} = require('../actions/featuregrid');
const QGis = React.createClass({
    propTypes: {
        params: React.PropTypes.object,
        featureType: React.PropTypes.string,
        error: React.PropTypes.object,
        setProfile: React.PropTypes.func,
        filterPanelExpanded: React.PropTypes.bool,
        onLoadFeatureTypeConfig: React.PropTypes.func,
        expandFilterPanel: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        configLoaded: React.PropTypes.bool,
        profile: React.PropTypes.object,
        siraControls: React.PropTypes.object,
        selectFeatures: React.PropTypes.func

    },
    getDefaultProps() {
        return {
            setProfile: () => {},
            onLoadFeatureTypeConfig: () => {},
            configLoaded: false,
            filterPanelExpanded: true,
            toggleSiraControl: () => {}
        };
    },
    componentWillMount() {
        let profile = this.props.params.profile ? this.props.params.profile : urlQuery.profile;
        this.props.setProfile(profile, authParams[profile]);
    },
    componentDidMount() {
        let profile = this.props.params.profile ? this.props.params.profile : urlQuery.profile;
        if (!this.props.configLoaded && this.props.featureType) {
            this.props.onLoadFeatureTypeConfig(
                `assets/${this.props.featureType}.json`, {authkey: authParams[profile].authkey});
        }
    },
    componentWillReceiveProps(props) {
        if (props.featureType !== this.props.featureType) {
            this.props.onLoadFeatureTypeConfig(`assets/${props.featureType}.json`, {authkey: this.props.profile.authParams.authkey});
        }
    },
    renderQueryPanel() {
        return (
          <SideQueryPanel
               withMap={false}
               params={{authkey: this.props.profile.authParams.authkey}}
               toggleControl={this.toggleControl}/>
            );
    },
    renderGrid() {
        return (
            <QGisFeatureGrid
                withMap={true}
                initWidth={getWindowSize().maxWidth}
                params={{authkey: this.props.profile.authParams.authkey}}
                profile={this.props.profile.profile}
                templateProfile="QGIS"
                selectFeatures={this.selectFeatures}
                zoomToFeatureAction={this.zoomToFeature}/>
            );
    },
    render() {
        return (
            <div id="qgis-container" className="mappaSiraDecisionale">
             {this.props.siraControls.grid ? this.renderGrid() : this.renderQueryPanel()}
             <Card draggable={false} authParam={this.props.profile}/>
            </div>
        );
    },
    toggleControl() {
        this.props.toggleSiraControl('grid');
    },
    selectFeatures(features) {
        let ids = JSON.stringify(features.map((f) => {
            return f.id;
        }));
        if (window.VALAMB && window.VALAMB.viewOnMapById) {
            window.VALAMB.viewOnMapById(`'${this.props.featureType}','${ids}'`);
        }else {
        /*eslint-disable */
            console.log(`VALAMB.viewOnMapById('${this.props.featureType}',${ids})`);
        /*eslint-enable */
        }
        this.props.selectFeatures(features);
    },
    zoomToFeature(data) {
        let [minX, minY, maxX, maxY] = CoordinatesUtils.getGeoJSONExtent(data.geometry);
        if (window.VALAMB && window.VALAMB.zoomOn) {
            window.VALAMB.zoomOn(`'${minX}'`, `'${minY}'`, `'${maxX}'`, `'${maxY}'`, "EPSG:4326");
        }else {
            /*eslint-disable */
            console.log(`window.VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
            /*eslint-enable */
        }
    }
});

module.exports = connect((state) => {
    return {
        mode: 'desktop',
        profile: state.userprofile,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        featureType: state.siradec && state.siradec.featureType,
        configLoaded: state.siradec && state.siradec.card ? true : false,
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        siraControls: state.siraControls
    };
}, {
    setProfile,
    onLoadFeatureTypeConfig: loadFeatureTypeConfig,
    expandFilterPanel,
    toggleSiraControl,
    selectFeatures
})(QGis);
