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
const {Tabs, Tab} = require('react-bootstrap');
const Spinner = require('react-spinkit');
const {toggleNode, getThematicViewConfig, getMetadataObjects, selectSubCategory, setNodeInUse} = require('../actions/siracatalog');

const {mapSelector} = require('../../MapStore2/web/client/selectors/map');
const {tocSelector} = require('../selectors/sira');
const datasetSelector = createSelector([mapSelector, tocSelector], (map, toc) => ({map, ...toc}));

const {setProfile} = require('../actions/userprofile');
const {toggleSiraControl} = require('../actions/controls');
const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType
} = require('../actions/siradec');
const {setGridType} = require('../actions/grid');

const Header = require('../components/Header');
const SiraSearchBar = require('../components/SiraSearchBar');
const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNodeDataset');
const Footer = require('../components/Footer');

const Vista = require('../components/catalog/VistaDataset');
const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const {hideBox, loadLegends, toggleLegendBox} = require('../actions/metadatainfobox');
const {toggleAddMap, loadNodeMapRecords, addFeatureTypeLayerInCart} = require('../actions/addmap');

const mapStateToPropsMIB = (state) => {
    return {
      show: state.metadatainfobox.show,
      openLegendPanel: state.metadatainfobox.openLegendPanel,
      title: state.metadatainfobox.title,
      text: state.metadatainfobox.text,
      numDatasetObjectCalc: state.metadatainfobox.numDatasetObjectCalc,
      dataProvider: state.metadatainfobox.dataProvider,
      urlMetadato: state.metadatainfobox.urlMetadato,
      urlWMS: state.metadatainfobox.urlWMS,
      urlWFS: state.metadatainfobox.urlWFS,
      urlLegend: state.metadatainfobox.urlLegend,
      error: state.metadatainfobox.error,
      showButtonLegend: state.metadatainfobox.showButtonLegend
  };
};

const mapDispatchToPropsMIB = (dispatch) => {
    return {
    loadLegend: (u, actualUrl) => {
        if (actualUrl && actualUrl.length === 0) {
            dispatch(loadLegends(u));
        }
        dispatch(toggleLegendBox());
    },
    closePanel: () => {
        dispatch(hideBox());
    }
  };
};
const MetadataInfoBox = connect(
    mapStateToPropsMIB,
    mapDispatchToPropsMIB
    )(require('../components/MetadataInfoBox'));

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
const Dataset = React.createClass({
    propTypes: {
        category: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
            icon: React.PropTypes.string.isRequired,
            objectNumber: React.PropTypes.number,
            tematicViewNumber: React.PropTypes.number
        }),
        nodes: React.PropTypes.array,
        views: React.PropTypes.array,
        objects: React.PropTypes.array,
        loading: React.PropTypes.bool,
        nodesLoaded: React.PropTypes.bool,
        onToggle: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        expandFilterPanel: React.PropTypes.func,
        getMetadataObjects: React.PropTypes.func,
        selectSubCategory: React.PropTypes.func,
        subcat: React.PropTypes.string,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        userprofile: React.PropTypes.object,
        loadMetadata: React.PropTypes.func,
        showInfoBox: React.PropTypes.func,
        setProfile: React.PropTypes.func,
        params: React.PropTypes.object,
        activeFeatureType: React.PropTypes.string,
        loadFeatureTypeConfig: React.PropTypes.func,
        setActiveFeatureType: React.PropTypes.func,
        setGridType: React.PropTypes.func,
        getThematicViewConfig: React.PropTypes.func,
        map: React.PropTypes.object,
        toggleAddMap: React.PropTypes.func,
        loadNodeMapRecords: React.PropTypes.func,
        addLayersInCart: React.PropTypes.func,
        setNodeInUse: React.PropTypes.func
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
            return {
                params: {},
                searchText: "",
                showCategories: false,
                onToggle: () => {},
                setProfile: () => {}
            };
        },
        componentWillMount() {
            const {nodesLoaded, loading, category} = this.props;
            if (this.props.params.profile) {
                this.props.setProfile(this.props.params.profile, authParams[this.props.params.profile]);
            }
            // this.props.setProfile(this.props.params.profile, authParams[this.props.params.profile]);
            if (!nodesLoaded && !loading && category && category.id) {
                this.loadMetadata({category: category});
            }
        },
        componentDidMount() {
            document.body.className = "body_dataset";
        },
        componentWillReceiveProps({loading, map}) {
            if (!loading && this.props.map && this.props.map !== map) {
                if (this.props.params.profile) {
                    this.context.router.push('/map/${this.props.params.profile}/');
                }else {
                    this.context.router.push('/map/');
                }
                // this.context.router.push(`/${this.props.params.profile}`);
            }
        },
    renderSerchBar() {
        return (
            <SiraSearchBar
                containerClasses="col-lg-12 col-md-12 col-sm-12 col-xs-12 ricerca-home catalog-search-container dataset-search-container"
                searchClasses="home-search"
                overlayPlacement="bottom"
                mosaicContainerClasses="dataset-mosaic-container"
                onSearch={this.loadMetadata}
                onReset={this.loadMetadata}
            />);
    },
    renderSpinner() {
        return (<div className="loading-container"><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>);
    },
    renderResults() {
        const {loading, objects, views} = this.props;
        const {showCategories} = this.state;
        const searchSwitch = this.props.nodes.length > 0 ? (
            <div key="categoriesSearch" className="ricerca-home dataset-categories-switch-container">
                <div className="dataset-categories-switch" onClick={() => this.setState({showCategories: !showCategories})}>
                    <span>{showCategories ? 'Nascondi Categorie' : 'Mostra Categorie'} </span>
                </div>
            </div>) : (<noscript key="categoriesSearch"/>);
        const tocObjects = (
            <TOC id="dataset-toc" key="dataset-toc" nodes={showCategories ? this.props.nodes : this.props.objects}>
                    { showCategories ?
                    (<DefaultGroup animateCollapse={false} onToggle={this.props.onToggle}>
                        <DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            toggleSiraControl={this.searchAll}
                            onToggle={this.props.onToggle}
                            groups={this.props.nodes}
                            showInfoBox={this.showInfoBox}
                            addToMap={this.addToCart}
                            />
                    </DefaultGroup>) : (<DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            toggleSiraControl={this.searchAll}
                            flat={true}
                            showInfoBox={this.showInfoBox}
                            addToMap={this.addToCart}
                            />) }
                </TOC>);
        const viste = this.props.views ? this.props.views.map((v) => (<Vista key={v.id}
            node={v}
            onToggle={this.props.onToggle}
            addToMap={this.loadThematicView}
            showInfoBox={this.showInfoBox}
            />)) : (<div/>);
        const objEl = [searchSwitch, tocObjects];
        return (
            <Tabs
                className="dataset-tabs"
                activeKey={this.props.subcat}
                onSelect={this.props.selectSubCategory}>
                <Tab
                    eventKey={'objects'}
                    title={`Oggetti (${objects ? objects.length : 0})`}>
                    {loading ? this.renderSpinner() : objEl}
                </Tab>
                <Tab eventKey={'views'}
                    title={`Viste Tematiche (${views ? views.length : 0})`}>
                    {loading ? this.renderSpinner() : (<div id="dataset-results-view"> {viste}</div>)}
                </Tab>
        </Tabs>);
    },
    render() {
        const {category} = this.props;
        return (
            <div className="interna">
                <div style={{minHeight: '100%', position: 'relative'}}>
                    <Header showCart="true" goToHome={this.goToHome}/>
                    {this.renderSerchBar()}
                    <div className="dataset-results-container">
                        {category ? this.renderResults() : (<noscript/>)}
                    </div>
                    <div className="dataset-footer-container">
                    <Footer/>
                    </div>
                </div>
                <MetadataInfoBox panelStyle={{
                        height: "500px",
                        width: "650px",
                        zIndex: 1000,
                        left: "calc(50% - 250px)",
                        top: -100,
                        position: "fixed",
                        overflow: "auto"}}/>
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
    showInfoBox(node) {
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    },
    addToCart(node) {
        if ( !node.featureType) {
            this.props.toggleAddMap(true);
            this.props.loadNodeMapRecords(node);
        }else if (node.featureType) {
            const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
            if (!this.props.configOggetti[featureType]) {
                this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, false, node.id, true, node);
            } else {
                let layers = [];
                layers.push(this.props.configOggetti[featureType].layer);
                this.props.addLayersInCart(layers, node);
            }
        }
    },
    openFilterPanel(status, ftType) {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        }else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
        }
        this.props.expandFilterPanel(status);
        if (undefined !== this.props.params.profile) {
            this.context.router.push('/full/${this.props.params.profile}/');
        }else {
            this.context.router.push('/full/');
        }
        // this.context.router.push(`/full/${this.props.params.profile}`);
    },
    searchAll(node) {
        const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
            }else if (this.props.activeFeatureType !== featureType) {
                this.props.setActiveFeatureType(featureType);
            }
        this.props.setGridType('all_results');
        this.props.toggleSiraControl('grid', true);
        this.props.setNodeInUse(node);
        if (undefined !== this.props.params.profile) {
            this.context.router.push('/full/${this.props.params.profile}/');
        }else {
            this.context.router.push('/full/');
        }
        // this.context.router.push(`/full/${this.props.params.profile}`);
    },
    loadThematicView({serviceUrl, params} = {}) {
        this.props.getThematicViewConfig({serviceUrl, params, configureMap: true});
    },
    goToHome() {
        this.context.router.push('/');
    }
});

module.exports = connect(datasetSelector, {
    getMetadataObjects,
    onToggle: toggleNode,
    selectSubCategory,
    loadMetadata,
    showInfoBox: showBox,
    setProfile,
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    toggleSiraControl,
    setGridType,
    getThematicViewConfig,
    toggleAddMap: toggleAddMap,
    loadNodeMapRecords: loadNodeMapRecords,
    addLayersInCart: addFeatureTypeLayerInCart,
    setNodeInUse: setNodeInUse
})(Dataset);
