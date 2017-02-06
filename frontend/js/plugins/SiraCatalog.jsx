/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const {toggleNode, getThematicViewConfig, selectSubCategory, getMetadataObjects} = require('../actions/siracatalog');

const assign = require('object-assign');
const {Tabs, Tab} = require("react-bootstrap");
const {toggleSiraControl} = require('../actions/controls');

const {addLayer} = require('../../MapStore2/web/client/actions/layers');

const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType
} = require('../actions/siradec');

const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const {setGridType} = require('../actions/grid');
const {loadNodeMapRecords, toggleAddMap, addLayers} = require('../actions/addmap');

const {tocSelector} = require('../selectors/sira');

const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNode');


const AddMapModal = connect(({addmap = {}}) => ({
        error: addmap.error,
        node: addmap.node,
        records: addmap.records,
        loading: addmap.loading,
        show: addmap.show
    }), {
    close: toggleAddMap.bind(null, false),
    addLayers: addLayers
})(require('../components/addmap/AddMapModal'));

const Spinner = require('react-spinkit');
const SiraSearchBar = require('../components/SiraSearchBar');

const Vista = connect( null, {
    addToMap: getThematicViewConfig
})(require('../components/catalog/Vista'));

const LayerTree = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        nodes: React.PropTypes.array,
        views: React.PropTypes.array,
        objects: React.PropTypes.array,
        loading: React.PropTypes.bool,
        nodesLoaded: React.PropTypes.bool,
        onToggle: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        expandFilterPanel: React.PropTypes.func,
        getMetadataObjects: React.PropTypes.func,
        category: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
            icon: React.PropTypes.string.isRequired,
            objectNumber: React.PropTypes.number,
            tematicViewNumber: React.PropTypes.number
        }).isRequired,
        subcat: React.PropTypes.string,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        userprofile: React.PropTypes.object,
        activeFeatureType: React.PropTypes.string,
        loadFeatureTypeConfig: React.PropTypes.func,
        setActiveFeatureType: React.PropTypes.func,
        setGridType: React.PropTypes.func,
        showInfoBox: React.PropTypes.func,
        loadMetadata: React.PropTypes.func,
        selectSubCategory: React.PropTypes.func,
        loadNodeMapRecords: React.PropTypes.func,
        toggleAddMap: React.PropTypes.func,
        addLayer: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            loading: false,
            onToggle: () => {}
        };
    },
    getInitialState() {
        return {
            showCategories: true
        };
    },
    componentWillMount() {
        if (!this.props.nodesLoaded && !this.props.loading) {
            this.loadMetadata({category: this.props.category});
        }
    },
    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && (!nextProps.nodesLoaded || nextProps.category.id !== this.props.category.id )) {
            this.loadMetadata({category: nextProps.category});
        }
    },
    render() {
        if (!this.props.nodes) {
            return <div></div>;
        }
        const {showCategories} = this.state;
        const {views, objects, nodes} = this.props;
        const tocObjects = (
            <TOC nodes={showCategories ? nodes : objects}>
                    { showCategories ?
                    (<DefaultGroup animateCollapse={false} onToggle={this.props.onToggle}>
                    <DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            toggleSiraControl={this.searchAll}
                            onToggle={this.props.onToggle}
                            groups={nodes}
                            addToMap={this.addToMap}
                            showInfoBox={this.showInfoBox}/>
                    </DefaultGroup>) : (<DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            toggleSiraControl={this.searchAll}
                            addToMap={this.addToMap}
                            showInfoBox={this.showInfoBox}/>) }
                </TOC>);
        const viste = this.props.views ? this.props.views.map((v) => (<Vista key={v.id}
            expandFilterPanel={this.props.expandFilterPanel}
            toggleSiraControl={this.props.toggleSiraControl}
            node={v}
            onToggle={this.props.onToggle}/>)) : (<div/>);
        return (
            <div id="siracatalog">
            <SiraSearchBar
                onSearch={this.loadMetadata}
                onReset={this.loadMetadata}
            />
             <div className="catalog-categories-switch-container">
             <div className="catalog-categories-switch" onClick={() => this.setState({showCategories: !showCategories})}>
                <span>{showCategories ? 'Nascondi Categorie' : 'Mostra Categorie'} </span>
              </div>
             </div>
            <Tabs className="catalog-tabs" activeKey={this.props.subcat} onSelect={this.props.selectSubCategory}>
                <Tab eventKey={'objects'} title={`Oggetti (${objects ? objects.length : 0})`}>{tocObjects}</Tab>
                <Tab eventKey={'views'} title={`Viste Tematiche (${views ? views.length : 0})`}>{viste}</Tab>
            </Tabs>
            {this.props.loading ? (
                <div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)"}}><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>) : null}
            <AddMapModal/>
            </div>);
    },
    loadMetadata({text, category} = {}) {
        let params = {};
        const {id} = category || {};
        if (id !== 999) {
            params.category = id;
        }
        if (text && text.length > 0) {
            params.text = text;
        }
        if (!this.props.loading) {
            this.props.getMetadataObjects({params});
        }
    },
    openFilterPanel(status, ftType) {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
        }else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.expandFilterPanel(status);
    },
    searchAll(ftType) {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true);
            }else if (this.props.activeFeatureType !== featureType) {
                this.props.setActiveFeatureType(featureType);
            }
        this.props.setGridType('all_results');
        this.props.toggleSiraControl('grid', true);
    },
    showInfoBox(node) {
        // Will be removed when clear how to use components, we already have metadata loaded
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    },
    addToMap(node) {
        if (!node.featureType) {
            this.props.toggleAddMap(true);
            this.props.loadNodeMapRecords(node);
        }else if (node.featureType) {
            const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
            if (!this.props.configOggetti[featureType]) {
                this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey}, featureType, true, true);
            }else {
                this.props.addLayer(this.props.configOggetti[featureType].layer);
            }
        }

    }
});

const CatalogPlugin = connect(tocSelector, {
    onToggle: toggleNode,
    toggleSiraControl,
    expandFilterPanel,
    getMetadataObjects,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    setGridType,
    loadMetadata,
    showInfoBox: showBox,
    selectSubCategory,
    loadNodeMapRecords,
    toggleAddMap,
    addLayer
})(LayerTree);

module.exports = {
    CatalogPlugin: assign(CatalogPlugin, {
        DrawerMenu: {
            name: 'catalog',
            position: 2,
            glyph: "1-catalog",
            title: 'Catalog',
            priority: 1
        }
    }),
    reducers: {
        siracatalog: require('../reducers/siracatalog')
    }
};
