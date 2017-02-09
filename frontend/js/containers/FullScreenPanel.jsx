/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
const mapUtils = require('../../MapStore2/web/client/utils/MapUtils');
const CoordinateUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');
const {changeMapView} = require('../../MapStore2/web/client/actions/map');
const {connect} = require('react-redux');

const SideQueryPanel = require('../components/SideQueryPanel');
const Card = require('../components/template/Card');
const SideFeatureGrid = require('../components/SideFeatureGrid');
const {setProfile} = require('../actions/userprofile');
const Spinner = require('react-spinkit');

const {
 loadFeatureTypeConfig,
 expandFilterPanel
} = require('../actions/siradec');

const {toggleSiraControl} = require('../actions/controls');
require('../../assets/css/fullscreen.css');

const FullScreen = React.createClass({
    propTypes: {
         params: React.PropTypes.object,
         featureType: React.PropTypes.string,
         error: React.PropTypes.object,
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
         loadCardTemplate: React.PropTypes.func,
         selectAllToggle: React.PropTypes.func,
         gridExpanded: React.PropTypes.bool,
         fTypeConfigLoading: React.PropTypes.bool,
         changeMapView: React.PropTypes.func,
         srs: React.PropTypes.string,
         maxZoom: React.PropTypes.number
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            setProfile: () => {},
            onLoadFeatureTypeConfig: () => {},
            configLoaded: false,
            filterPanelExpanded: true,
            toggleSiraControl: () => {},
            srs: "EPSG:4326",
            maxZoom: 16
        };
    },
    getInitialState() {
        return {
         loadList: true
    };
    },
    componentWillMount() {
        this.setState({width: getWindowSize().maxWidth});
        if (window.addEventListener) {
            window.addEventListener('resize', this.setSize, false);
        }
    },
    componentWillUnmount() {
        if (window.removeEventListener) {
            window.removeEventListener('resize', this.setSize, false);
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
            <SideFeatureGrid
                initWidth={this.state.width}
                withMap={true}
                params={{authkey: this.props.profile.authParams.authkey}}
                profile={this.props.profile.profile}
                zoomToFeatureAction={this.zoomToFeature}/>
        );
    },
    render() {
        const {gridExpanded, profile, fTypeConfigLoading} = this.props;
        if (fTypeConfigLoading) {
            return (<div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)"}}><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>);
        }
        let comp;
        if (gridExpanded) {
            comp = this.renderGrid();
        }else {
            comp = this.renderQueryPanel();
        }
        return (
            <div id="fullscreen-container" className="mappaSiraDecisionale">
                {comp}
                <Card draggable={false} authParam={profile.authParams} withMap={true}/>
            </div>
        );
    },
    toggleControl() {
        this.props.expandFilterPanel(false);
        this.context.router.push(`/dataset/${this.props.params.profile}/`);
    },
    zoomToFeature(data) {
        this.props.toggleSiraControl('grid');
        this.changeMapView([data.geometry]);
        this.context.router.push(`/${this.props.params.profile}`);
    },
    changeMapView(geometries) {
        let extent = geometries.reduce((prev, next) => {
            return CoordinateUtils.extendExtent(prev, CoordinateUtils.getGeoJSONExtent(next));
        }, CoordinateUtils.getGeoJSONExtent(geometries[0]));
        const center = mapUtils.getCenterForExtent(extent, "4326");
        this.props.changeMapView(center, 15);
    },
    setSize() {
        this.setState({width: window.innerWidth});
    }
});

module.exports = connect((state) => {
    const activeConfig = state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
     profile: state.userprofile,
     error: state.loadingError || (state.locale && state.locale.localeError) || null,
     filterPanelExpanded: state.siradec.filterPanelExpanded,
     siraControls: state.siraControls,
     detailsConfig: activeConfig && activeConfig.card,
     gridConfig: activeConfig && activeConfig.featuregrid,
     featureTypeName: activeConfig && activeConfig.featureTypeName,
     searchUrl: state.queryform.searchUrl,
     pagination: state.queryform.pagination,
     gridExpanded: state.siraControls.grid,
     fTypeConfigLoading: state.siradec.fTypeConfigLoading
 };
}, {
    setProfile,
    onLoadFeatureTypeConfig: loadFeatureTypeConfig,
    expandFilterPanel,
    toggleSiraControl,
    changeMapView
})(FullScreen);
