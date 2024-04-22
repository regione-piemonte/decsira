/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');

const Message = require('@mapstore/components/I18N/Message');
const {toggleNode, getThematicViewConfig, selectSubCategory, getMetadataObjects, toggleCategories, setNodeInUse} = require('../actions/siracatalog');
const assign = require('object-assign');
const { Tabs, Tab, Modal } = require("react-bootstrap");
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const {toggleSiraControl} = require('../actions/controls');

const {addLayer} = require('@mapstore/actions/layers');

const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    configureIndicaLayer,
    loadFeatureTypeConfig,
    setActiveFeatureType
} = require('../actions/siradec');

const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const {setGridType} = require('../actions/grid');
const {loadNodeMapRecords, toggleAddMap, addLayers} = require('../actions/addmap');

const {tocSelector} = require('../selectors/sira');

const TOC = require('../components/toc/TOC');
const DefaultGroup = require('../components/toc/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNode');

const SiraUtils = require('../utils/SiraUtils');


const AddMapModal = connect(({addmap = {}, map = {}}) => ({
    error: addmap.error,
    node: addmap.node,
    records: addmap.records,
    loading: addmap.loading,
    show: addmap.show,
    srs: map.present && map.present.projection || 'EPSG:32632'
}), {
    close: toggleAddMap.bind(null, false),
    addLayers: addLayers
})(require('../components/addmap/AddMapModal'));

const Spinner = require('react-spinkit');
const SiraSearchBar = require('../components/SiraSearchBar');

const Vista = connect( null, {
    addToMap: getThematicViewConfig
})(require('../components/catalog/Vista'));

class LayerTree extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        nodes: PropTypes.array,
        allNodes: PropTypes.array,
        views: PropTypes.array,
        objects: PropTypes.array,
        loading: PropTypes.bool,
        nodesLoaded: PropTypes.bool,
        onToggle: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        expandFilterPanel: PropTypes.func,
        configureIndicaLayer: PropTypes.func,
        getMetadataObjects: PropTypes.func,
        setNodeInUse: PropTypes.func,
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            icon: PropTypes.string.isRequired,
            objectNumber: PropTypes.number,
            tematicViewNumber: PropTypes.number
        }).isRequired,
        subcat: PropTypes.string,
        configOggetti: PropTypes.object,
        notAuthorized: PropTypes.bool,
        authParams: PropTypes.object,
        userprofile: PropTypes.object,
        activeFeatureType: PropTypes.string,
        loadFeatureTypeConfig: PropTypes.func,
        setActiveFeatureType: PropTypes.func,
        setGridType: PropTypes.func,
        showInfoBox: PropTypes.func,
        loadMetadata: PropTypes.func,
        selectSubCategory: PropTypes.func,
        loadNodeMapRecords: PropTypes.func,
        toggleAddMap: PropTypes.func,
        addLayer: PropTypes.func,
        toggleCategories: PropTypes.func,
        showcategories: PropTypes.bool,
        srs: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        loading: false,
        onToggle: () => {},
        showcategories: true
    };

    componentWillMount() {
        if (!this.props.nodesLoaded && !this.props.loading) {
            this.loadMetadata({category: this.props.category});
        }
    }

    renderUnauthorized = () => {
        return (<Modal show bsSize="small" onHide={() => this.props.setActiveFeatureType(null)}>
            <Modal.Header className="dialog-error-header-side" closeButton>
                <Modal.Title><I18N.Message msgId="Modal.InfoTitle"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mapstore-error"><I18N.Message msgId="Modal.UnauthorizedMessage"/></div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        );
    };

    render() {
        if (!this.props.allNodes) {
            return <div></div>;
        }
        const {views, objects, allNodes, showcategories} = this.props;
        const tocObjects = (
            <TOC nodes={showcategories ? allNodes : objects}>
                { showcategories ?
                    (<DefaultGroup animateCollapse={false} onToggle={this.props.onToggle}>
                        <DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            configureIndicaLayer={this.openIndicaPanel}
                            toggleSiraControl={this.searchAll}
                            onToggle={this.props.onToggle}
                            groups={allNodes}
                            addToMap={this.addToMap}
                            showInfoBox={this.showInfoBox}/>
                    </DefaultGroup>) : (<DefaultNode
                        expandFilterPanel={this.openFilterPanel}
                        configureIndicaLayer={this.openIndicaPanel}
                        toggleSiraControl={this.searchAll}
                        addToMap={this.addToMap}
                        showInfoBox={this.showInfoBox}/>) }
            </TOC>);
        const viste = views ? views.map((v) => (<Vista key={v.id}
            expandFilterPanel={this.props.expandFilterPanel}
            toggleSiraControl={this.props.toggleSiraControl}
            node={v}
            onToggle={this.props.onToggle}
            showInfoBox={this.showInfoBox}/>)) : (<div/>);
        return (
            <div id="siracatalog">
                <SiraSearchBar
                    onSearch={this.loadMetadata}
                    onReset={this.loadMetadata}
                />
                
                <Tabs className="catalog-tabs" activeKey={this.props.subcat} onSelect={this.props.selectSubCategory}>
                    <Tab eventKey={'objects'} title={LocaleUtils.getMessageById(this.context.messages, "Dataset.objectsText")}>{tocObjects}</Tab>
                    <Tab eventKey={'views'} title={LocaleUtils.getMessageById(this.context.messages, "Dataset.thematicViewsText")}>{viste}</Tab>
                </Tabs>
                {this.props.notAuthorized && this.renderUnauthorized()}
                {this.props.loading ? (
                    <div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)"}}><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>) : null}
                <AddMapModal/>
            </div>);
    }

    loadMetadata = ({text, category} = {}) => {
        let params = {};
        const {id} = category || {};
        if (id !== 999) {
            params.category = id;
        }
        if (text && text.length > 0) {
            params.text = text;
            if (!this.props.showcategories) {
                this.props.toggleCategories(this.props.showcategories);
            }
        } else {
            if (!this.props.showcategories) {
                this.props.toggleCategories(!this.props.showcategories);
            }
        }
        if (!this.props.loading) {
            this.props.getMetadataObjects({params});
            if (this.props.showcategories) {
                this.props.toggleCategories(!this.props.showcategories);
            }
        }
        this.props.selectSubCategory('objects');
    };

    openFilterPanel = (status, ftType) => {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');

        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, false, null, false, null);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.expandFilterPanel(status);
    };

    openIndicaPanel = (ftType, nodeId) => {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, false, null, false, null);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.configureIndicaLayer(null, nodeId, null);
    };

    searchAll = (node) => {
        const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.setGridType('all_results');
        this.props.setNodeInUse(node);
        this.props.toggleSiraControl('grid', true);
    };

    showInfoBox = (node) => {
        // Will be removed when clear how to use components, we already have metadata loaded
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    };

    addToMap = (node) => {
        if (!node.featureType) {
            this.props.toggleAddMap(true);
            this.props.loadNodeMapRecords(node);
        } else if (node.featureType) {
            const mapLayers = SiraUtils.getLayersFlat();
            if (!mapLayers.some(layer => layer.siraId === node.id)) {
                // mapLayers NON contiene già un nodo con lo stesso id
                const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
                if (!this.props.configOggetti[featureType]) {
                    this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, true, node.id);
                } else {
                    this.props.addLayer(assign({}, this.props.configOggetti[featureType].layer, {siraId: node.id}));
                }
            }
        }
    };
}

const CatalogPlugin = connect(tocSelector, {
    onToggle: toggleNode,
    toggleSiraControl,
    expandFilterPanel,
    configureIndicaLayer,
    getMetadataObjects,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    setGridType,
    loadMetadata,
    showInfoBox: showBox,
    setNodeInUse: setNodeInUse,
    selectSubCategory,
    loadNodeMapRecords,
    toggleAddMap,
    addLayer,
    toggleCategories
})(LayerTree);

module.exports = {
    CatalogPlugin: assign(CatalogPlugin, {
        DrawerMenu: {
            name: 'catalog',
            position: 2,
            glyph: "1-catalog",
            title: <Message msgId="catalog.title"/>,
            priority: 1
        }
    }),
    reducers: {
        siracatalog: require('../reducers/siracatalog')
    }
};
