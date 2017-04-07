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
// require('../../MapStore2/web/client/product/assets/css/viewer.css');

const {connect} = require('react-redux');

const SideQueryPanel = require('../components/SideQueryPanel');
const QGisFeatureGrid = require('../components/QGisFeatureGrid');
const Card = require('../components/template/Card');

const {setProfile} = require('../actions/userprofile');
const Spinner = require('react-spinkit');
const parsedUrl = require('url').parse(window.location.href, true);
const urlQuery = parsedUrl.query;
const {
    loadGridModelWithFilter,
    loadGridModelWithPagination
} = require('../actions/grid');
const {selectAllQgis} = require('../actions/featuregrid');

const {head} = require('lodash');

const CoordinatesUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');
const SiraFilterUtils = require('../utils/SiraFilterUtils');
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
const {loadCardTemplate} = require('../actions/card');
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
        selectFeatures: React.PropTypes.func,
        detailsConfig: React.PropTypes.object,
        gridConfig: React.PropTypes.object,
        pagination: React.PropTypes.object,
        loadCardTemplate: React.PropTypes.func,
        selectAllToggle: React.PropTypes.func
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
    getInitialState() {
        return {
            loadList: true
        };
    },
    componentWillMount() {
        this.setState({width: getWindowSize().maxWidth, qGisType: this.getQGisType(parsedUrl.pathname)});
        window.onresize = () => {
            this.setState({width: window.innerWidth});
        };
        // profile is array with max length = 1
        let profile = [];
        profile = (this.props.params && this.props.params.profile) ? this.props.params.profile : new Array(urlQuery.profile);
        this.props.setProfile(profile, authParams[profile]);
    },
    componentDidMount() {
        // profile is array with max length = 1
        let profile = [];
        profile = (this.props.params && this.props.params.profile) ? this.props.params.profile : new Array(urlQuery.profile);
        this.props.setProfile(profile, authParams[profile]);
        if (!this.props.configLoaded && this.props.featureType) {
            this.props.onLoadFeatureTypeConfig(
                `assets/${this.props.featureType}.json`, {authkey: authParams[profile].authkey}, this.props.featureType, true);
        }
    },
    componentWillReceiveProps(props) {
        if (props.featureType !== this.props.featureType) {
            this.props.onLoadFeatureTypeConfig(`assets/${props.featureType}.json`, {authkey: this.props.profile.authParams.authkey}, props.featureType, true);
        }
        if (this.state.qGisType === "detail" && urlQuery.featureTypeId && props.configLoaded && !props.siraControls.detail) {
            this.props.toggleSiraControl('detail', true);
            this.goToDetail(urlQuery.featureTypeId, props.detailsConfig);
        }
        if (this.state.qGisType === "list" && this.state.loadList && urlQuery.featureTypeIds && props.configLoaded && props.gridConfig && props.featureTypeName) {
            // find id field
            this.setState({loadList: false});
            let idField = head(props.gridConfig.grid.columns.filter((c) => c.id === true));
            let filter = SiraFilterUtils.getFilterByIds(props.featureTypeName, urlQuery.featureTypeIds.split(','), idField);
            props.onQuery(props.searchUrl, filter);
        }
    },
    getQGisType(pathname) {
        if (pathname.search(/search.html$/) !== -1) {
            return "search";
        }
        if (pathname.search(/detail.html$/) !== -1) {
            return "detail";
        }
        if (pathname.search(/list.html$/) !== -1) {
            return "list";
        }
    },
    renderQueryPanel() {
        return this.state.qGisType === "detail" || this.state.qGisType === "list" ? (
            <div className="qgis-spinner">
                <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
            </div>
            ) : (
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
                initWidth={this.state.width}
                pagination= {(this.state.qGisType !== 'list' && this.props.pagination && this.props.pagination .maxFeatures) ? true : false}
                params={{authkey: this.props.profile.authParams.authkey}}
                profile={this.props.profile.profile}
                templateProfile="QGIS"
                selectFeatures={this.selectFeatures}
                zoomToFeatureAction={this.zoomToFeature}
                exporter={false}
                selectAllToggle={this.props.selectAllToggle && this.state.qGisType !== "list" ? this.props.selectAllToggle : undefined}/>
            );
    },
    render() {
        return (
            <div id="qgis-container" className="mappaSiraDecisionale">
             {this.props.siraControls.grid || (this.state.qGisType === 'list' && this.props.configLoaded && !this.state.loadList) ? this.renderGrid() : this.renderQueryPanel()}
             <Card profile={this.props.profile.profile} draggable={false} authParam={this.props.profile.authParams} withMap={false}/>
            </div>
        );
    },
    toggleControl() {
        this.props.toggleSiraControl('grid');
    },
    selectFeatures(features) {
        let ids = features.map((f) => {
            return f.id;
        }).join(',');
        /*eslint-disable */
        if (typeof window.parent !== 'undefined' && typeof parent.VALAMB !== 'undefined' && parent.VALAMB.viewOnMapById) {
            console.log("parent.VALAMB present", `parent.VALAMB.viewOnMapById('${this.props.featureType}',"${ids}")`);
            parent.VALAMB.viewOnMapById(`'${this.props.featureType}'`, `"${ids}"`);
        }else {
            console.log("parent.VALAMB absent", `parent.viewOnMapById('${this.props.featureType}',"${ids}")`);
            if (typeof VALAMB !== 'undefined' && VALAMB.viewOnMapById) {
                console.log("VALAMB present", `VALAMB.viewOnMapById('${this.props.featureType}',"${ids}")`);
                VALAMB.viewOnMapById(`'${this.props.featureType}'`, `"${ids}"`);
            }else {
                console.log("VALAMB absent", `viewOnMapById('${this.props.featureType}',"${ids}")`);
            }
        }

        /*eslint-enable */
        this.props.selectFeatures(features);
    },
    zoomToFeature(data) {
        let [minX, minY, maxX, maxY] = CoordinatesUtils.getGeoJSONExtent(data.geometry);
        /*eslint-disable */
        if (typeof window.parent !== 'undefined' && typeof parent.VALAMB !== 'undefined' && parent.VALAMB.zoomOn) {
            console.log("parent.VALAMB present", `parent.VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326");`);
            parent.VALAMB.zoomOn(`'${minX}'`, `'${minY}'`, `'${maxX}'`, `'${maxY}'`, "EPSG:4326");
        }else {
            console.log("parent.VALAMB absent", `parent.VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
            if (typeof VALAMB !== 'undefined' && VALAMB.zoomOn) {
                console.log("VALAMB present", `VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326");`);
                VALAMB.zoomOn(`'${minX}'`, `'${minY}'`, `'${maxX}'`, `'${maxY}'`, "EPSG:4326");
            }else {
                console.log("VALAMB absent", `VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
            }
        }

        /*eslint-enable */
    },
    goToDetail(id, detailsConfig) {
        let url = detailsConfig.service.url;
        let urlParams = detailsConfig.service.params;
        for (let param in urlParams) {
            if (urlParams.hasOwnProperty(param)) {
                url += "&" + param + "=" + urlParams[param];
            }
        }
        let templateUrl = typeof detailsConfig.template === "string" ? detailsConfig.template : detailsConfig.template.QGIS;
        this.props.loadCardTemplate(
             templateUrl,
            // this.props.detailsConfig.cardModelConfigUrl,
            `${url}&FEATUREID=${id}${(this.props.profile.authParams.authkey ? "&authkey=" + this.props.profile.authParams.authkey : "")}`
        );
    }
});

module.exports = connect((state) => {
    const activeConfig = state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        mode: 'desktop',
        profile: state.userprofile,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        featureType: state.siradec && state.siradec.featureType,
        configLoaded: activeConfig && activeConfig.card && activeConfig.featuregrid ? true : false,
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        siraControls: state.siraControls,
        detailsConfig: activeConfig && activeConfig.card,
        gridConfig: activeConfig && activeConfig.featuregrid,
        featureTypeName: activeConfig && activeConfig.featureTypeName,
        searchUrl: state.queryform.searchUrl,
        pagination: state.queryform.pagination
    };
}, {
    setProfile,
    onLoadFeatureTypeConfig: loadFeatureTypeConfig,
    expandFilterPanel,
    toggleSiraControl,
    selectFeatures,
    loadCardTemplate,
    onQuery: loadGridModelWithFilter,
    onQueryPagination: loadGridModelWithPagination,
    selectAllToggle: selectAllQgis
})(QGis);
