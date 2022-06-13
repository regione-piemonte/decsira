const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const CoordinateUtils = require('@mapstore/utils/CoordinatesUtils');
const mapUtils = require('../../MapStore2/web/client/utils/MapUtils');
const {changeMapView} = require('../../MapStore2/web/client/actions/map');
const {mapSelector} = require('../../MapStore2/web/client/selectors/map');
const Sidebar = require('react-sidebar').default;
const SideQueryPanel = require('../components/SideQueryPanel');
const SideIndicaPanel = require('../components/indicatori/SideIndicaPanel').default;
const SideFeatureGrid = require('../components/SideFeatureGrid');
const {changeMapStyle} = require('../../MapStore2/web/client/actions/map');
const {expandFilterPanel, closeIndicaConfiguration} = require('../actions/siradec');
const Resizable = require('react-resizable').Resizable;
const Spinner = require('react-spinkit');
const {addLayer} = require('../../MapStore2/web/client/actions/layers');
require('../../assets/css/sira.css');

class SidePanel extends React.Component {
    static propTypes = {
        filterPanelExpanded: PropTypes.bool,
        indicaConfigPanelExpanded: PropTypes.bool,
        gridExpanded: PropTypes.bool,
        auth: PropTypes.object,
        profile: PropTypes.string,
        changeMapStyle: PropTypes.func,
        changeMapView: PropTypes.func,
        addLayer: PropTypes.func,
        withMap: PropTypes.bool.isRequired,
        expandFilterPanel: PropTypes.func.isRequired,
        closeIndicaConfiguration: PropTypes.func,
        fTypeConfigLoading: PropTypes.bool.isRequired,
        layers: PropTypes.array,
        siraActiveConfig: PropTypes.object,
        map: PropTypes.object,
        hideSpatialFilter: PropTypes.bool
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        filterPanelExpanded: false,
        indicaConfigPanelExpanded: false,
        gridExpanded: false,
        withMap: true,
        fTypeConfigLoading: true,
        expandFilterPanel: () => {},
        closeIndicaConfiguration: () => {},
        changeMapStyle: () => {},
        changeMapView: () => {}
    };

    state = {
        width: 660,
        boxwidth: 660
    };

    componentDidMount() {
        if (this.props.withMap && (this.props.filterPanelExpanded || this.props.gridExpanded || this.props.indicaConfigPanelExpanded)) {
            let style = {left: this.state.width, width: `calc(100% - ${this.state.width}px)`};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    }

    componentDidUpdate(prevProps) {
        const prevShowing = prevProps.filterPanelExpanded || prevProps.gridExpanded || prevProps.indicaConfigPanelExpanded;
        const show = this.props.filterPanelExpanded || this.props.gridExpanded || this.props.indicaConfigPanelExpanded;
        if (prevShowing !== show && this.props.withMap) {
            let style = show ? {left: this.state.width, width: `calc(100% - ${this.state.width}px)`} : {};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    }

    onResize = (event, obj) => {
        const {size} = obj;
        this.setState({boxwidth: size.width});
    };

    onResizeStop = (event, obj) => {
        const {size} = obj;
        this.setState({width: size.width, boxwidth: size.width});
        this.props.changeMapStyle({left: size.width, width: `calc(100% - ${size.width}px)`}, "sirasidepanel");

    };

    renderQueryPanel = () => {
        return (<SideQueryPanel
            hideSpatialFilter={this.props.hideSpatialFilter}
            withMap={this.props.withMap}
            params={this.props.auth}
            toggleControl={this.props.expandFilterPanel.bind(null, false)}
        />);
    };

    renderIndicaPanel = () => {
        return (<SideIndicaPanel
            withMap={this.props.withMap}
            toggleControl={this.props.closeIndicaConfiguration}
        />);
    };

    renderGrid = () => {
        return (<SideFeatureGrid
            withMap={this.props.withMap}
            initWidth={this.state.width}
            params={this.props.auth}
            zoomToFeatureAction={this.zoomToFeature}
            profile={this.props.profile}/>);
    };

    renderLoading = () => {
        return (
            <div style={{
                position: "absolute",
                width: "60px",
                top: "50%",
                left: "45%"}}>
                <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
            </div>
        );
    };

    renderContent = () => {
        let comp;
        if (this.props.filterPanelExpanded) {
            comp = this.renderQueryPanel();
        } else if (this.props.gridExpanded) {
            comp = this.renderGrid();
        } else if (this.props.indicaConfigPanelExpanded) {
            comp = this.renderIndicaPanel();
        } else {
            comp = (<div/>);
        }
        return (
            <Resizable
                draggableOpts={{grid: [10, 0]}}
                onResize={this.onResize}
                width={this.state.boxwidth}
                height={100}
                onResizeStop={this.onResizeStop}
                minConstraints={[400]}
                className="box">
                <div id="sidepanel-container" className="box" style={{width: `${this.state.boxwidth}px`, height: "100%"}}>
                    {comp}
                </div>
            </Resizable>);
    };

    render() {
        const show = this.props.filterPanelExpanded || this.props.gridExpanded || this.props.indicaConfigPanelExpanded;
        return (

            <Sidebar
                open={show}
                sidebar={this.props.fTypeConfigLoading ? this.renderLoading() : this.renderContent()}
                styles={{
                    sidebar: {
                        backgroundColor: 'white',
                        zIndex: 1024,
                        width: this.state.boxwidth,
                        overflowX: 'hidden'
                    },
                    overlay: {
                        zIndex: 1023,
                        width: 0
                    },
                    root: {
                        right: show ? 0 : 'auto',
                        width: '0',
                        overflow: 'visible'
                    }
                }}
            >
                <div/>
            </Sidebar>

        );
    }

    zoomToFeature = (data) => {
        if (this.props.layers.filter((l) => l.name === this.props.siraActiveConfig.layer.name ).length <= 0) {
            this.props.addLayer(this.props.siraActiveConfig.layer);
        }
        this.changeMapView([data.geometry]);
    };

    changeMapView = (geometries) => {
        let extent = geometries.reduce((prev, next) => {
            return CoordinateUtils.extendExtent(prev, CoordinateUtils.getGeoJSONExtent(next));
        }, CoordinateUtils.getGeoJSONExtent(geometries[0]));
        const center = mapUtils.getCenterForExtent(extent, "4326");
        const srs = "EPSG:4326";
        const proj = this.props.map.projection || "EPSG:3857";
        extent = this.fixExtent(geometries[0], extent);
        extent = (srs !== proj) ? CoordinateUtils.reprojectBbox(extent, srs, proj) : extent;
        const zoom = mapUtils.getZoomForExtent(extent, this.props.map.size || {width: 876, height: 650}, 0, 16);
        this.props.changeMapView(center, zoom, mapUtils.getBbox(center, zoom), this.props.map.size, null, this.props.map.projection || "EPSG:3857");
    };

    fixExtent(geometry, extent) {
        if (geometry.type === "Point") {
            let point = geometry.coordinates;
            let newExtent = [];
            newExtent[0] = point[0] - point[0] * 0.001;
            newExtent[1] = point[1] - point[1] * 0.001;
            newExtent[2] = point[0] + point[0] * 0.001;
            newExtent[3] = point[1] + point[1] * 0.001;
            return newExtent;
        }
        return extent;
    }
}

module.exports = connect((state) => {
    const activeConfig = state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        gridExpanded: state.siraControls.grid,
        indicaConfigPanelExpanded: state.siradec.indicaConfigPanelExpanded,
        fTypeConfigLoading: state.siradec.fTypeConfigLoading,
        siraActiveConfig: activeConfig,
        layers: state.layers.flat,
        map: mapSelector(state)
    };
}, {
    changeMapStyle,
    expandFilterPanel,
    closeIndicaConfiguration,
    addLayer: addLayer,
    changeMapView: changeMapView
})(SidePanel);
