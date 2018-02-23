/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const CoordinateUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');
const mapUtils = require('../../MapStore2/web/client/utils/MapUtils');
const {changeMapView} = require('../../MapStore2/web/client/actions/map');
const {mapSelector} = require('../../MapStore2/web/client/selectors/map');
const Sidebar = require('react-sidebar').default;
const SideQueryPanel = require('../components/SideQueryPanel');
const SideFeatureGrid = require('../components/SideFeatureGrid');
const {changeMapStyle} = require('../../MapStore2/web/client/actions/map');
const {expandFilterPanel} = require('../actions/siradec');
const Resizable = require('react-resizable').Resizable;
const Spinner = require('react-spinkit');
const {addLayer} = require('../../MapStore2/web/client/actions/layers');
require('../../assets/css/sira.css');

const SidePanel = React.createClass({
    propTypes: {
        filterPanelExpanded: React.PropTypes.bool,
        gridExpanded: React.PropTypes.bool,
        auth: React.PropTypes.object,
        profile: React.PropTypes.string,
        changeMapStyle: React.PropTypes.func,
        changeMapView: React.PropTypes.func,
        addLayer: React.PropTypes.func,
        withMap: React.PropTypes.bool.isRequired,
        expandFilterPanel: React.PropTypes.func.isRequired,
        fTypeConfigLoading: React.PropTypes.bool.isRequired,
        layers: React.PropTypes.array,
        siraActiveConfig: React.PropTypes.object,
        map: React.PropTypes.object
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            width: 600,
            boxwidth: 600
        };
    },
    getDefaultProps() {
        return {
            filterPanelExpanded: false,
            gridExpanded: false,
            withMap: true,
            fTypeConfigLoading: true,
            expandFilterPanel: () => {},
            changeMapStyle: () => {},
            changeMapView: () => {}
        };
    },
    componentDidMount() {
        if (this.props.withMap && (this.props.filterPanelExpanded || this.props.gridExpanded)) {
            let style = {left: this.state.width, width: `calc(100% - ${this.state.width}px)`};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    },
    componentDidUpdate(prevProps) {
        const prevShowing = prevProps.filterPanelExpanded || prevProps.gridExpanded;
        const show = this.props.filterPanelExpanded || this.props.gridExpanded;
        if (prevShowing !== show && this.props.withMap) {
            let style = show ? {left: this.state.width, width: `calc(100% - ${this.state.width}px)`} : {};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    },
    onResize(event, obj) {
        const {size} = obj;
        this.setState({boxwidth: size.width});
    },
    onResizeStop(event, obj) {
        const {size} = obj;
        this.setState({width: size.width, boxwidth: size.width});
        this.props.changeMapStyle({left: size.width, width: `calc(100% - ${size.width}px)`}, "sirasidepanel");

    },
    renderQueryPanel() {
        return (<SideQueryPanel
                    withMap={this.props.withMap}
                    params={this.props.auth}
                    toggleControl={this.props.expandFilterPanel.bind(null, false)}
                    />);
    },
    renderGrid() {
        return (<SideFeatureGrid
            withMap={this.props.withMap}
            initWidth={this.state.width}
            params={this.props.auth}
            zoomToFeatureAction={this.zoomToFeature}
            profile={this.props.profile}/>);
    },
    renderLoading() {
        return (
                <div style={{
                    position: "absolute",
                    width: "60px",
                    top: "50%",
                    left: "45%"}}>
                    <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                </div>
            );
    },
    renderContent() {
        let comp;
        if (this.props.filterPanelExpanded) {
            comp = this.renderQueryPanel();
        }else if (this.props.gridExpanded) {
            comp = this.renderGrid();
        }else {
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
                <div className="box" style={{width: `${this.state.boxwidth}px`, height: "100%"}}>
                {comp}
                </div>
            </Resizable>);
    },
    render() {
        const show = this.props.filterPanelExpanded || this.props.gridExpanded;
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
    },
    zoomToFeature(data) {
        if (this.props.layers.filter((l) => l.name === this.props.siraActiveConfig.layer.name ).length <= 0) {
            this.props.addLayer(this.props.siraActiveConfig.layer);
        }
        this.changeMapView([data.geometry]);
    },
    changeMapView(geometries) {
        let extent = geometries.reduce((prev, next) => {
            return CoordinateUtils.extendExtent(prev, CoordinateUtils.getGeoJSONExtent(next));
        }, CoordinateUtils.getGeoJSONExtent(geometries[0]));
        const center = mapUtils.getCenterForExtent(extent, "4326");
        this.props.changeMapView(center, 15, null, null, null, this.props.map.projection || "EPSG:3857");
    }
});
module.exports = connect((state) => {
    const activeConfig = state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        gridExpanded: state.siraControls.grid,
        fTypeConfigLoading: state.siradec.fTypeConfigLoading,
        siraActiveConfig: activeConfig,
        layers: state.layers.flat,
        map: mapSelector(state)
    };
}, {
    changeMapStyle,
    expandFilterPanel,
    addLayer: addLayer,
    changeMapView: changeMapView
})(SidePanel);
