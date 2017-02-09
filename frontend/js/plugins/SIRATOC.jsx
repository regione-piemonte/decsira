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

const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const DefaultLayerOrGroup = require('../../MapStore2/web/client/components/TOC/DefaultLayerOrGroup');
const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultLayer = require('../components/toc/SiraLayer');

const LayerTree = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        buttonContent: React.PropTypes.node,
        groups: React.PropTypes.array,
        settings: React.PropTypes.object,
        groupStyle: React.PropTypes.object,
        groupPropertiesChangeHandler: React.PropTypes.func,
        layerPropertiesChangeHandler: React.PropTypes.func,
        onToggleGroup: React.PropTypes.func,
        onToggleLayer: React.PropTypes.func,
        onSort: React.PropTypes.func,
        onSettings: React.PropTypes.func,
        hideSettings: React.PropTypes.func,
        updateSettings: React.PropTypes.func,
        updateNode: React.PropTypes.func,
        removeNode: React.PropTypes.func,
        activateLegendTool: React.PropTypes.bool,
        activateSettingsTool: React.PropTypes.bool,
        visibilityCheckType: React.PropTypes.string,
        settingsOptions: React.PropTypes.object,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        userprofile: React.PropTypes.object,
        activeFeatureType: React.PropTypes.string,
        expandFilterPanel: React.PropTypes.func,
        loadFeatureTypeConfig: React.PropTypes.func,
        setActiveFeatureType: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        setGridType: React.PropTypes.func,
        showInfoBox: React.PropTypes.func,
        loadMetadata: React.PropTypes.func
    },
    getDefaultProps() {
        return {
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
    },
    getNoBackgroundLayers(group) {
        return (group.name !== 'background' && group.name !== 'hidden');
    },
    render() {
        if (!this.props.groups) {
            return <div></div>;
        }
        const Group = ( <DefaultGroup animateCollapse={false} onSort={this.props.onSort}
                                  propertiesChangeHandler={this.props.groupPropertiesChangeHandler}
                                  onToggle={this.props.onToggleGroup}
                                  style={this.props.groupStyle}
                                  groupVisibilityCheckbox={true}
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
                            groups={this.props.groups}
                            expandFilterPanel={this.openFilterPanel}
                            searchAll={this.searchAll}/>);
        return (
            <div>
                <TOC onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={this.props.groups}>
                    <DefaultLayerOrGroup groupElement={Group} layerElement={Layer}/>
                </TOC>
            </div>
        );
    },
    openFilterPanel(status, featureType) {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
        }else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.expandFilterPanel(status);
    },
    searchAll(featureType) {
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
        }else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.setGridType('all_results');
        this.props.toggleSiraControl('grid', true);
    },
    showInfoBox(node) {
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    }
});

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
