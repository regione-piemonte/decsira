/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const PropTypes = require('prop-types');
const {createSelector} = require('reselect');
const { Tabs, Tab, Modal} = require('react-bootstrap');
const Spinner = require('react-spinkit');
const I18N = require('@mapstore/components/I18N/I18N');

const {toggleNode, getThematicViewConfig, getMetadataObjects, selectSubCategory, setNodeInUse} = require('../actions/siracatalog');

const {mapSelector} = require('../../MapStore2/web/client/selectors/map');
const {tocSelector} = require('../selectors/sira');
const datasetSelector = createSelector([mapSelector, tocSelector], (map, toc) => ({map, ...toc}));

const {setProfile} = require('../actions/userprofile');
const { toggleSiraControl } = require('../actions/controls');
const { handleKeyFocus } = require('../utils/SiraUtils');
const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    configureIndicaLayer,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    queryFormPreloaded
} = require('../actions/siradec');
const {setGridType} = require('../actions/grid');

const Header = require('../components/Header');
const SiraSearchBar = require('../components/SiraSearchBar');
const TOC = require('../components/toc/TOC');
const DefaultGroup = require('../components/toc/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNodeDataset');
const Footer = require('../components/Footer');

const Vista = require('../components/catalog/VistaDataset');
const {loadMetadata, showBox} = require('../actions/metadatainfobox');
const {hideBox, loadLegends, toggleLegendBox} = require('../actions/metadatainfobox');
const {toggleAddMap, addLayersInCart, loadNodeMapRecords, addFeatureTypeLayerInCart} = require('../actions/addmap');

const proj4 = require('proj4').default;
const { register } = require('ol/proj/proj4.js');

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

const AddMapModal = connect(({addmap = {}}) => ({
    error: addmap.error,
    records: addmap.records,
    loading: addmap.loading,
    // node: demoNode,
    show: addmap.show
}), {
    close: toggleAddMap.bind(null, false),
    addLayers: addLayersInCart
})(require('../components/addmap/AddMapModal'));

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

class Dataset extends React.Component {
    static propTypes = {
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            icon: PropTypes.string.isRequired,
            objectNumber: PropTypes.number,
            tematicViewNumber: PropTypes.number
        }),
        nodes: PropTypes.array,
        views: PropTypes.array,
        objects: PropTypes.array,
        loading: PropTypes.bool,
        notAuthorized: PropTypes.bool,
        nodesLoaded: PropTypes.bool,
        onToggle: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        expandFilterPanel: PropTypes.func,
        configureIndicaLayer: PropTypes.func,
        getMetadataObjects: PropTypes.func,
        selectSubCategory: PropTypes.func,
        subcat: PropTypes.string,
        configOggetti: PropTypes.object,
        authParams: PropTypes.object,
        userprofile: PropTypes.object,
        loadMetadata: PropTypes.func,
        showInfoBox: PropTypes.func,
        setProfile: PropTypes.func,
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        activeFeatureType: PropTypes.string,
        loadFeatureTypeConfig: PropTypes.func,
        setActiveFeatureType: PropTypes.func,
        queryFormPreloaded: PropTypes.func,
        setGridType: PropTypes.func,
        getThematicViewConfig: PropTypes.func,
        map: PropTypes.object,
        toggleAddMap: PropTypes.func,
        loadNodeMapRecords: PropTypes.func,
        addLayersInCart: PropTypes.func,
        setNodeInUse: PropTypes.func,
        tematizzatore: PropTypes.object
    };

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        params: {},
        searchText: "",
        showCategories: false,
        onToggle: () => {},
        setProfile: () => {},
        waitingForConfig: {
            feature: null,
            redirect: null
        }
    };

    componentWillMount() {
        const {nodesLoaded, loading, category} = this.props;
        if (this.props?.match?.params?.profile) {
            this.props.setProfile(this.props?.match?.params?.profile, authParams[this.props?.match?.params?.profile]);
        }
        if (!nodesLoaded && !loading && category && category.id) {
            this.loadMetadata({category: category});
        }
    }

    componentDidMount() {
        document.body.className = "body_dataset sira-ms2";
        register(proj4);
        window.addEventListener('keyup', handleKeyFocus);
    }

    componentWillReceiveProps({loading, map, notAuthorized, configOggetti}) {
        if (!loading && this.props.map && this.props.map !== map) {
            if (this.props?.match?.params?.profile) {
                this.context.router.history.push(`/map/${this.props.match.params.profile}/`);
            } else {
                this.context.router.history.push('/map/');
            }
            // this.context.router.history.push(`/${this.props.params.profile}`);
        }
        if (!this.props.notAuthorized && notAuthorized && this.state.waitingForConfig.feature) {
            this.setState({
                waitingForConfig: {
                    feature: null,
                    redirect: null
                } });
        }
        if (this.state.waitingForConfig.feature && configOggetti[this.state.waitingForConfig.feature]) {
            if (this.state.waitingForConfig.type === 'grid') {
                this.props.setGridType('all_results');
                this.props.toggleSiraControl('grid', true);
                this.props.setNodeInUse(this.state.waitingForConfig.node);
            }
            this.setState({
                waitingForConfig: {
                    feature: null,
                    redirect: null
                }
            });
            if (this.props?.match?.params?.profile) {
                this.context.router.history.push(this.state.waitingForConfig.redirect + `${this.props.match.params.profile}/`);
            } else {
                this.context.router.history.push(this.state.waitingForConfig.redirect);
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', handleKeyFocus);
    }

    renderSerchBar = () => {
        return (
            <SiraSearchBar
                containerClasses="col-lg-12 col-md-12 col-sm-12 col-xs-12 ricerca-home catalog-search-container dataset-search-container"
                searchClasses="home-search"
                overlayPlacement="bottom"
                mosaicContainerClasses="dataset-mosaic-container"
                onSearch={this.loadMetadata}
                onReset={this.loadMetadata}
            />);
    };

    renderSpinner = () => {
        return (<div className="loading-container"><Spinner spinnerName={"three-bounce"} style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} noFadeIn/></div>);
    };

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

    renderResults = () => {
        const {loading, objects, views} = this.props;
        const {showCategories} = this.state;
        const searchSwitch = this.props.nodes.length > 0 ? (
            <div key="categoriesSearch" className="ricerca-home dataset-categories-switch-container">
                <button className="dataset-categories-switch" onClick={() => this.setState({showCategories: !showCategories})}>
                    <span>{showCategories ? 'Nascondi Categorie' : 'Mostra Categorie'} </span>
                </button>
            </div>) : (<noscript key="categoriesSearch"/>);
        const nodes = this.updateNodes(this.props.nodes);
        const tocObjects = (
            <TOC id="dataset-toc" key="dataset-toc" nodes={showCategories ? nodes : this.props.objects}>
                { showCategories ?
                    <DefaultGroup animateCollapse={false} onToggle={this.props.onToggle}>
                        <DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            configureIndicaLayer={this.openIndicaPanel}
                            toggleSiraControl={this.searchAll}
                            onToggle={this.props.onToggle}
                            node={nodes}
                            showInfoBox={this.showInfoBox}
                            addToMap={this.addToCart}
                        />
                    </DefaultGroup> :
                    <DefaultNode
                        expandFilterPanel={this.openFilterPanel}
                        configureIndicaLayer={this.openIndicaPanel}
                        toggleSiraControl={this.searchAll}
                        flat
                        showInfoBox={this.showInfoBox}
                        addToMap={this.addToCart}
                    /> }
            </TOC>);
        const viste = this.props.views ? this.props.views.map((v) => (<Vista key={v.id}
            node={v}
            onToggle={this.props.onToggle}
            addToMap={this.loadThematicView}
            showInfoBox={this.showInfoBox}
        />)) : <div/>;
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
    };

    render() {
        const {category} = this.props;
        return (
            <div className="interna">
                <div style={{minHeight: '100%', position: 'relative'}}>
                    <Header showCart="true" goToHome={this.goToHome} />
                    <div id="main-content"></div>
                    <h1 className="sr-only">Ricerca oggetti e viste tematiche</h1>
                    <div className="dataset-category-name" role="contentinfo" aria-label="area di ricerca">
                        <span>{category ? category.name : (<noscript/>)}</span>
                    </div>
                    {this.renderSerchBar()}
                    <div className="dataset-results-container" role="contentinfo" aria-label="risultati della ricerca">
                        {category ? this.renderResults() : (<noscript/>)}
                        {this.props.notAuthorized && this.renderUnauthorized()}
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
                    marginBottom: "0px",
                    boxShadow: "0 0 5px 1px rgba(94,94,94,1)"}}/>
                <AddMapModal />
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
        }
        if (!this.props.loading) {
            this.props.getMetadataObjects({params});
        }
    };

    showInfoBox = (node) => {
        this.props.loadMetadata(node);
        this.props.showInfoBox();
    };

    addToCart = (node) => {
        if ( !node.featureType) {
            this.props.toggleAddMap(true);
            this.props.loadNodeMapRecords(node);
        } else if (node.featureType) {
            const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
            if (!this.props.configOggetti[featureType]) {
                this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, false, node.id, true, node);
            } else {
                let layers = [];
                layers.push(this.props.configOggetti[featureType].layer);
                this.props.addLayersInCart(layers, node);
            }
        }
    };

    openFilterPanel = (status, ftType) => {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.setState({
                waitingForConfig: {
                    redirect: '/full/',
                    feature: featureType,
                    type: 'query'
                }
            });
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        } else {
            if (this.props.activeFeatureType !== featureType) {
                this.props.setActiveFeatureType(featureType);
                this.props.queryFormPreloaded(false);
            }
            if (this.props?.match?.params?.profile) {
                this.context.router.history.push(`/full/${this.props.match.params.profile}/`);
            } else {
                this.context.router.history.push('/full/');
            }
        }
        this.props.expandFilterPanel(status);
    };

    openIndicaPanel = (ftType, siraId) => {
        const featureType = ftType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true, false, null, false, null);
        } else if (this.props.activeFeatureType !== featureType) {
            this.props.setActiveFeatureType(featureType);
            this.props.queryFormPreloaded(false);
        }
        this.props.configureIndicaLayer(null, siraId);
    };

    searchAll = (node) => {
        const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
        if (!this.props.configOggetti[featureType]) {
            this.setState({
                waitingForConfig: {
                    redirect: '/full/',
                    feature: featureType,
                    type: 'grid',
                    node
                }
            });
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : ''}, featureType, true);
        } else {
            if (this.props.activeFeatureType !== featureType) {
                this.props.setActiveFeatureType(featureType);
                this.props.queryFormPreloaded(false);
            }
            this.props.setGridType('all_results');
            this.props.toggleSiraControl('grid', true);
            this.props.setNodeInUse(node);
            if (this.props?.match?.params?.profile) {
                this.context.router.history.push(`/full/${this.props.match.params.profile}/`);
            } else {
                this.context.router.history.push('/full/');
            }
        }
    };

    loadThematicView = ({serviceUrl, params} = {}) => {
        this.props.getThematicViewConfig({serviceUrl, params, configureMap: true});
    };

    goToHome = () => {
        this.context.router.history.push('/');
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

module.exports = connect(datasetSelector, {
    getMetadataObjects,
    onToggle: toggleNode,
    selectSubCategory,
    loadMetadata,
    showInfoBox: showBox,
    setProfile,
    expandFilterPanel,
    configureIndicaLayer,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    queryFormPreloaded,
    toggleSiraControl,
    setGridType,
    getThematicViewConfig,
    toggleAddMap: toggleAddMap,
    loadNodeMapRecords: loadNodeMapRecords,
    addLayersInCart: addFeatureTypeLayerInCart,
    setNodeInUse: setNodeInUse
})(Dataset);
