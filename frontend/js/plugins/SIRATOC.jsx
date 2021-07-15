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
    sortNode, showSettings, hideSettings, updateSettings, updateNode, removeNode} = require('@mapstore/actions/layers');
const { configureIndicaLayer } = require('../actions/siradec');
const { groupsSelector } = require('@mapstore/selectors/layers');
const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const LayersUtils = require('@mapstore/utils/LayersUtils');
const Message = require('@mapstore/plugins/locale/Message');
const assign = require('object-assign');

const layersIcon = require('@mapstore/plugins/toolbar/assets/img/layers.png');
const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    queryFormPreloaded
} = require('../actions/siradec');
const {toggleSiraControl} = require('../actions/controls');
const {setGridType} = require('../actions/grid');

const tocSelector = createSelector(
    [
        (state) => state.controls && state.controls.toolbar && state.controls.toolbar.active === 'toc',
        groupsSelector,
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

const TOC = require('../components/toc/TOC');
const DefaultLayerOrGroup = require('@mapstore/components/TOC/DefaultLayerOrGroup');
const DefaultGroup = require('../components/toc/DefaultGroup');
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
        queryFormPreloaded: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        setGridType: PropTypes.func,
        showInfoBox: PropTypes.func,
        loadMetadata: PropTypes.func,
        configureIndicaLayer: PropTypes.func
    };

    static defaultProps = {
        groupPropertiesChangeHandler: () => {},
        layerPropertiesChangeHandler: () => {},
        onToggleGroup: () => {},
        onToggleLayer: () => {},
        onSettings: () => {},
        updateNode: () => {},
        removeNode: () => { },
        configureIndicaLayer: () => { },
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
        if (!this.props.groups) {
            return <div/>;
        }
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
            configureIndicaLayer={this.props.configureIndicaLayer}
            visibilityCheckType={this.props.visibilityCheckType}
            activateLegendTool={this.props.activateLegendTool}
            activateSettingsTool={this.props.activateSettingsTool}
            settingsText={<Message msgId="layerProperties.windowTitle"/>}
            opacityText={<Message msgId="opacity"/>}
            saveText={<Message msgId="save"/>}
            closeText={<Message msgId="close"/>}
            groups={this.props.groups}
            expandFilterPanel={this.openFilterPanel}
            searchAll={this.searchAll}/>);

        return (
            <div>
                <TOC id={"siratoc-layers"} onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={this.props.groups}>
                    <DefaultLayerOrGroup groupElement={Group} layerElement={Layer}/>
                </TOC>
            </div>
        );
    }

    openFilterPanel = (status, featureType, nodeId) => {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
            this.props.queryFormPreloaded(false);
        }
        this.props.expandFilterPanel(status, nodeId);
    };

    searchAll = (featureType) => {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
            this.props.queryFormPreloaded(false);
        }
        this.props.setGridType('all_results');
        this.props.toggleSiraControl('grid', true);
    };

    showInfoBox = (node) => {
        this.props.loadMetadata(node);
        this.props.showInfoBox();
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
    queryFormPreloaded,
    toggleSiraControl,
    setGridType,
    loadMetadata,
    showInfoBox: showBox,
    configureIndicaLayer
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
