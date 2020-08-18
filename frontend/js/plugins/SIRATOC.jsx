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
const {createSelector} = require('reselect');
const {changeLayerProperties, changeGroupProperties, toggleNode,
    sortNode, showSettings, hideSettings, updateSettings, updateNode, removeNode} = require('../../MapStore2/web/client/actions/layers');
const {groupsSelector} = require('../../MapStore2/web/client/selectors/layers');
const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');

const Message = require('../../MapStore2/web/client/plugins/locale/Message');
const assign = require('object-assign');

const layersIcon = require('../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType
} = require('../actions/siradec');
const {toggleSiraControl} = require('../actions/controls');
const {setGridType} = require('../actions/grid');

const tocSelector = createSelector(
    [
        (state) => state.controls && state.controls.toolbar && state.controls.toolbar.active === 'toc',
        // groupsSelector,
        (state) => state?.siraLayers?.groups?.length && groupsSelector(state?.siraLayers?.groups) || [],
        (state) => state.layers.settings || {expanded: false, options: {opacity: 1}},
        (state) => state.siradec && state.siradec.configOggetti,
        (state) => state.userprofile,
        (state) => state.siradec && state.siradec.activeFeatureType
    ], (enabled, groups, settings, configOggetti, userprofile, activeFeatureType) => ({
        enabled,
        groups,
        settings,
        configOggetti,
        userprofile,
        activeFeatureType
    })
);

// const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const TOC = require('../components/catalog/TOC');
// const DefaultLayerOrGroup = require('../../MapStore2/web/client/components/TOC/DefaultLayerOrGroup');
const DefaultLayerOrGroup = require('../components/catalog/TOC/DefaultLayerOrGroup');
// const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultGroup = require('../components/catalog/TOC/DefaultGroup');
const DefaultLayer = require('../components/toc/SiraLayer');

class LayerTree extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        buttonContent: PropTypes.node,
        groups: PropTypes.array,
        settings: PropTypes.object,
        groupStyle: PropTypes.object,
        groupPropertiesChangeHandler: PropTypes.func,
        layerPropertiesChangeHandler: PropTypes.func,
        onToggleGroup: PropTypes.func,
        onToggleLayer: PropTypes.func,
        onSort: PropTypes.func,
        onSettings: PropTypes.func,
        hideSettings: PropTypes.func,
        updateSettings: PropTypes.func,
        updateNode: PropTypes.func,
        removeNode: PropTypes.func,
        activateLegendTool: PropTypes.bool,
        activateSettingsTool: PropTypes.bool,
        visibilityCheckType: PropTypes.string,
        settingsOptions: PropTypes.object,
        configOggetti: PropTypes.object,
        authParams: PropTypes.object,
        userprofile: PropTypes.object,
        activeFeatureType: PropTypes.string,
        expandFilterPanel: PropTypes.func,
        loadFeatureTypeConfig: PropTypes.func,
        setActiveFeatureType: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        setGridType: PropTypes.func,
        showInfoBox: PropTypes.func,
        loadMetadata: PropTypes.func
    };

    static defaultProps = {
        groupPropertiesChangeHandler: () => {},
        layerPropertiesChangeHandler: () => {},
        onToggleGroup: () => {},
        onToggleLayer: () => {},
        onSettings: () => {},
        updateNode: () => {},
        removeNode: () => {},
        activateLegendTool: true,
        activateSettingsTool: true,
        visibilityCheckType: "checkbox",
        settingsOptions: {},
        configOggetti: {},
        expandFilterPanel: () => {}
    };

    getNoBackgroundLayers = (group) => {
        return (group.name !== 'background' && group.name !== 'hidden');
    };

    render() {
        let groups = [{"id": "Layers", "title": "Layers", "name": "Layers", "nodes": [{"url": "http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?", "name": "Bacini primo livello", "title": "Bacini primo livello", "bbox": {"crs": "4326", "bounds": {"minx": -180, "maxx": 180, "miny": -90, "maxy": 90}}, "params": {}, "allowedSRS": {"CRS:84": true, "EPSG:4326": true, "EPSG:32632": true, "EPSG:32633": true, "EPSG:23032": true, "EPSG:3064": true, "EPSG:4258": true, "EPSG:3035": true, "EPSG:3034": true, "EPSG:3044": true, "EPSG:3045": true, "EPSG:3004": true, "EPSG:102092": true, "EPSG:3003": true, "EPSG:102091": true, "EPSG:23033": true, "EPSG:3065": true, "EPSG:32634": true, "EPSG:4806": true, "EPSG:4265": true, "EPSG:4230": true, "EPSG:4670": true, "EPSG:4267": true, "EPSG:4269": true, "EPSG:3857": true, "EPSG:102100": true}, "siraId": 654, "infoFormat": ["text/html", "text/plain"], "group": "Layers", "type": "wms", "tiled": true, "tileSize": 512, "visibility": false, "idnode": 654, "id": "Bacini primo livello__6", "expanded": false}, {"url": "http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?", "name": "Bacini secondo livello", "title": "Bacini secondo livello", "bbox": {"crs": "4326", "bounds": {"minx": -180, "maxx": 180, "miny": -90, "maxy": 90}}, "params": {}, "allowedSRS": {"CRS:84": true, "EPSG:4326": true, "EPSG:32632": true, "EPSG:32633": true, "EPSG:23032": true, "EPSG:3064": true, "EPSG:4258": true, "EPSG:3035": true, "EPSG:3034": true, "EPSG:3044": true, "EPSG:3045": true, "EPSG:3004": true, "EPSG:102092": true, "EPSG:3003": true, "EPSG:102091": true, "EPSG:23033": true, "EPSG:3065": true, "EPSG:32634": true, "EPSG:4806": true, "EPSG:4265": true, "EPSG:4230": true, "EPSG:4670": true, "EPSG:4267": true, "EPSG:4269": true, "EPSG:3857": true, "EPSG:102100": true}, "siraId": 654, "infoFormat": ["text/html", "text/plain"], "group": "Layers", "type": "wms", "tiled": true, "tileSize": 512, "visibility": false, "idnode": 654, "id": "Bacini secondo livello__5", "expanded": false}, {"url": "http://localhost/ags101free/services/acqua/Bacini_idrografici/MapServer/WmsServer?", "name": "Bacini terzo livello", "title": "Bacini terzo livello", "bbox": {"crs": "4326", "bounds": {"minx": -180, "maxx": 180, "miny": -90, "maxy": 90}}, "params": {}, "allowedSRS": {"CRS:84": true, "EPSG:4326": true, "EPSG:32632": true, "EPSG:32633": true, "EPSG:23032": true, "EPSG:3064": true, "EPSG:4258": true, "EPSG:3035": true, "EPSG:3034": true, "EPSG:3044": true, "EPSG:3045": true, "EPSG:3004": true, "EPSG:102092": true, "EPSG:3003": true, "EPSG:102091": true, "EPSG:23033": true, "EPSG:3065": true, "EPSG:32634": true, "EPSG:4806": true, "EPSG:4265": true, "EPSG:4230": true, "EPSG:4670": true, "EPSG:4267": true, "EPSG:4269": true, "EPSG:3857": true, "EPSG:102100": true}, "siraId": 654, "infoFormat": ["text/html", "text/plain"], "group": "Layers", "type": "wms", "tiled": true, "tileSize": 512, "visibility": false, "idnode": 654, "id": "Bacini terzo livello__5", "expanded": false}], "expanded": true, "visibility": false}];
        console.log("this.props.groups", this.props.groups);
        // if (!this.props.groups) {
        //     return <div></div>;
        // }
        if (this.props.groups?.length) {
            groups = this.props.groups;
        }
        // const nodes = this.updateNodes(this.props.groups);
        const Group = ( <DefaultGroup animateCollapse={false} onSort={this.props.onSort}
            propertiesChangeHandler={this.props.groupPropertiesChangeHandler}
            onToggle={this.props.onToggleGroup}
            style={this.props.groupStyle}
            groupVisibilityCheckbox
            visibilityCheckType={this.props.visibilityCheckType}
        />);
        const Layer = (<DefaultLayer
            settingsOptions={this.props.settingsOptions}
            onToggle={this.showInfoBox}
            onSettings={this.props.onSettings}
            propertiesChangeHandler={this.props.layerPropertiesChangeHandler}
            hideSettings={this.props.hideSettings}
            settings={this.props.settings}
            updateSettings={this.props.updateSettings}
            updateNode={this.props.updateNode}
            removeNode={this.props.removeNode}
            visibilityCheckType={this.props.visibilityCheckType}
            activateLegendTool={this.props.activateLegendTool}
            activateSettingsTool={this.props.activateSettingsTool}
            settingsText={<Message msgId="layerProperties.windowTitle"/>}
            opacityText={<Message msgId="opacity"/>}
            saveText={<Message msgId="save"/>}
            closeText={<Message msgId="close"/>}
            groups={groups}
            expandFilterPanel={this.openFilterPanel}
            searchAll={this.searchAll}/>);

        return (
            <div>
                <TOC id={"siratoc-layers"} onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={groups}>
                    <DefaultLayerOrGroup groupElement={Group} layerElement={Layer}/>
                </TOC>
            </div>
        );
    }

    openFilterPanel = (status, featureType) => {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.expandFilterPanel(status);
    };

    searchAll = (featureType) => {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.setGridType('all_results');
        this.props.toggleSiraControl('grid', true);
    };

    showInfoBox = (node) => {
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    };

    updateNodes = (nodes) => {
        return nodes.map(node=> {
            node.showComponent = true;
            node.hide = false;
            if (node.nodes) {
                node.nodes = this.updateNodes(node.nodes);
            }
            return node;
        });
    };
}

const TOCPlugin = connect(tocSelector, {
    groupPropertiesChangeHandler: changeGroupProperties,
    layerPropertiesChangeHandler: changeLayerProperties,
    onToggleGroup: LayersUtils.toggleByType('groups', toggleNode),
    onToggleLayer: LayersUtils.toggleByType('layers', toggleNode),
    onSort: LayersUtils.sortUsing(LayersUtils.sortLayers, sortNode),
    onSettings: showSettings,
    hideSettings,
    updateSettings,
    updateNode,
    removeNode,
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    toggleSiraControl,
    setGridType,
    loadMetadata,
    showInfoBox: showBox
})(LayerTree);

module.exports = {
    TOCPlugin: assign(TOCPlugin, {
        Toolbar: {
            name: 'toc',
            position: 7,
            exclusive: true,
            panel: true,
            help: <Message msgId="helptexts.layerSwitcher"/>,
            tooltip: "layers",
            wrap: true,
            title: 'layers',
            icon: <img src={layersIcon}/>,
            priority: 1
        },
        DrawerMenu: {
            name: 'toc',
            position: 1,
            icon: <img src={layersIcon}/>,
            title: 'layers',
            priority: 2
        }
    }),
    reducers: {}
};
