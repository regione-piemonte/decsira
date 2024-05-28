/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const { connect } = require('react-redux');
const PropTypes = require('prop-types');
const { createSelector } = require('reselect');
const { Tabs, Tab, Modal, Button } = require('react-bootstrap');
const Spinner = require('react-spinkit');
const I18N = require('@mapstore/components/I18N/I18N');
const { HashLink } = require('react-router-hash-link');
const { toggleNode, getThematicViewConfig, getMetadataObjects, getAllMetadata, selectSubCategory, setNodeInUse, selectAllObjects } = require('../actions/siracatalog');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const { mapSelector } = require('../../MapStore2/web/client/selectors/map');
const { tocSelector } = require('../selectors/sira');
const datasetSelector = createSelector([mapSelector, tocSelector], (map, toc) => ({ map, ...toc }));
const { setProfile } = require('../actions/userprofile');
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
const { setGridType } = require('../actions/grid');

const Header = require('../components/Header');
const SiraSearchBar = require('../components/SiraSearchBar');
const TOC = require('../components/toc/TOC');
const DefaultGroup = require('../components/toc/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNodeDataset');
const DefaultNodeMenu = require('../components/catalog/DefaultNodeMenu');
const Footer = require('../components/Footer');
const Vista = require('../components/catalog/VistaDataset');
const VistaMenu = require('../components/catalog/VistaMenu');
const { loadMetadata, showBox } = require('../actions/metadatainfobox');
const { toggleAddMap, addLayersInCart, loadNodeMapRecords, addFeatureTypeLayerInCart } = require('../actions/addmap');
const { showPanel, hidePanel, removeServiceFromCart, removeLayersFromCart, prepareDataToMap } = require('../actions/cart');
const proj4 = require('proj4').default;
const { register } = require('ol/proj/proj4.js');

const AddMapModal = connect(({ addmap = {} }) => ({
    error: addmap.error,
    records: addmap.records,
    loading: addmap.loading,
    show: addmap.show
}), {
    close: toggleAddMap.bind(null, false),
    addLayers: addLayersInCart
})(require('../components/addmap/AddMapModal'));

const CartPanel = connect((state) => ({
    showPanel: state.cart.showPanel,
    layers: state.cart.layers,
    wmsservices: state.cart.wmsservices
}), (dispatch) => {
    return {
        onClosePanel: () => {
            dispatch(hidePanel());
        },
        removeService: (id) => {
            dispatch(removeServiceFromCart(id));
            dispatch(removeLayersFromCart(id));
        },
        goToMap: () => {
            dispatch(prepareDataToMap());
            dispatch(hidePanel());
        }
    };
})(require('../components/CartPanel'));

const Cart = connect((state) => ({
    servicesNumber: state.cart.servicesNumber
}),
(dispatch) => {
    return {
        showCartPanel: () => {
            dispatch(showPanel());
        }
    };
})(require('../components/Cart'));

class Catalog extends React.Component {
    static propTypes = {
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            icon: PropTypes.string.isRequired,
            objectNumber: PropTypes.number,
            tematicViewNumber: PropTypes.number
        }),
        nodes: PropTypes.array,
        allNodes: PropTypes.array,
        views: PropTypes.array,
        allViews: PropTypes.array,
        objects: PropTypes.array,
        loading: PropTypes.bool,
        notAuthorized: PropTypes.bool,
        nodesLoaded: PropTypes.bool,
        onToggle: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        expandFilterPanel: PropTypes.func,
        configureIndicaLayer: PropTypes.func,
        getMetadataObjects: PropTypes.func,
        getAllMetadata: PropTypes.func,
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
        tematizzatore: PropTypes.object,
        selectAllObjects: PropTypes.func,
        selectedView: PropTypes.object,
        prepareDataToMap: PropTypes.func,
        title: PropTypes.string
    };

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    state = {
        params: {},
        searchText: "",
        onToggle: () => { },
        setProfile: () => { },
        waitingForConfig: {
            feature: null,
            redirect: null
        },
        menuOpened: true
    };

    componentWillMount() {
        const { nodesLoaded, loading, category, authParams } = this.props;
        if (this.props?.match?.params?.profile) {
            this.props.setProfile(this.props?.match?.params?.profile, authParams[this.props?.match?.params?.profile]);
        }
        if (!nodesLoaded && !loading && category && category.id) {
            this.loadMetadata({ category: category });
        }
    }

    componentDidMount() {
        document.body.className = "body_dataset sira-ms2";
        register(proj4);
        window.addEventListener('keyup', handleKeyFocus);
    }

    componentWillReceiveProps({ loading, map, notAuthorized, configOggetti }) {
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
                }
            });
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
                containerClasses="col-lg-12 col-md-12 col-sm-12 col-xs-12 ricerca-home dataset-search-container"
                searchClasses="home-search"
                overlayPlacement="bottom"
                mosaicContainerClasses="dataset-mosaic-container"
                onSearch={this.loadMetadata}
                onReset={this.loadMetadata}
            />);
    };

    renderSpinner = () => {
        return (
            <div className="loading-container">
                <Spinner
                    spinnerName={"three-bounce"}
                    style={{ position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px" }}
                    noFadeIn />
            </div>
        );
    };

    renderUnauthorized = () => {
        return (<Modal show bsSize="small" onHide={() => this.props.setActiveFeatureType(null)}>
            <Modal.Header className="dialog-error-header-side" closeButton>
                <Modal.Title><I18N.Message msgId="Modal.InfoTitle" /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mapstore-error"><I18N.Message msgId="Modal.UnauthorizedMessage" /></div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        );
    };

    renderView = () => {
        const { selectedView } = this.props;
        return (
            <div>
                <h1 className="sr-only">{LocaleUtils.getMessageById(this.context.messages, "Dataset.description")}</h1>
                <div className="dataset-results-container" role="contentinfo" aria-label="risultati della ricerca">
                    <div id="dataset-results-view">
                        <Vista key={selectedView.id}
                            node={selectedView}
                            onToggle={this.props.onToggle}
                            addToMap={this.loadThematicView}
                            showInfoBox={this.showInfoBox} />
                    </div>
                </div>
            </div>);
    }

    renderAllViews = () => {
        const viste = this.props.views ? this.props.views.map((v) => (<Vista key={v.id}
            node={v}
            onToggle={this.props.onToggle}
            addToMap={this.loadThematicView}
            showInfoBox={this.showInfoBox}
        />)) : <div />;
        return (
            <div>
                <h1 className="sr-only">{LocaleUtils.getMessageById(this.context.messages, "Dataset.description")}</h1>
                <div className="dataset-results-container" role="contentinfo" aria-label="risultati della ricerca">
                    <div id="dataset-results-view">
                        {viste}
                    </div>
                </div>
            </div>);
    }

    renderCategory = () => {
        return (<div>
            <h1 className="sr-only">{LocaleUtils.getMessageById(this.context.messages, "Dataset.description")}</h1>

            <div className="dataset-results-container" role="contentinfo" aria-label="risultati della ricerca">
                {this.props.subcat === 'views' ? this.renderAllViews() : this.renderResults()}
                {this.props.notAuthorized && this.renderUnauthorized()}
            </div>
        </div>
        );
    }

    renderResults = () => {
        const { loading, objects } = this.props;

        const tocObjects = (
            <TOC id="dataset-toc" key="dataset-toc" nodes={objects}>
                <DefaultNode
                    expandFilterPanel={this.openFilterPanel}
                    configureIndicaLayer={this.openIndicaPanel}
                    toggleSiraControl={this.searchAll}
                    flat
                    showInfoBox={this.showInfoBox}
                    addToMap={this.addToCart} />
            </TOC>);

        return (
            <div>
                {loading ? this.renderSpinner() : tocObjects}
            </div>
        );
    };

    renderMenu = () => {
        const nodes = this.updateNodes(this.props.allNodes);
        const tocObjects = (
            <TOC id="dataset-toc" key="dataset-toc" nodes={nodes}>
                <DefaultGroup animateCollapse={false} onToggle={this.props.onToggle} page="catalog">
                    <DefaultNodeMenu
                        onToggle={this.props.onToggle}
                        node={nodes} />
                </DefaultGroup>
            </TOC>);
        let viewAll = {
            id: 999,
            title: <I18N.Message msgId={"catalog.allViews"} />
        };
        const viste = this.props.allViews ? this.props.allViews.map((v) => (
            <VistaMenu node={v} key={v.id} />
        )) : <div />;

        return (
            <Tabs
                className="dataset-tabs"
                activeKey={this.props.subcat}
                onSelect={this.props.selectSubCategory}>
                <Tab
                    eventKey={'objects'}
                    title={LocaleUtils.getMessageById(this.context.messages, "Dataset.objectsText")}>
                    <div className="tab-heading">
                        <p><I18N.Message msgId={"catalog.selectedObjects"} /><strong>{this.props.objects.length}</strong></p>
                        <button onClick={this.props.selectAllObjects} className="btn-link black"><I18N.Message msgId={"catalog.allCategories"} /></button>
                    </div>
                    {tocObjects}
                </Tab>
                <Tab eventKey={'views'}
                    title={LocaleUtils.getMessageById(this.context.messages, "Dataset.thematicViewsText")}>
                    <div id="dataset-results-view">
                        <VistaMenu node={viewAll} />
                        {viste}
                    </div>
                </Tab>
            </Tabs>);
    };

    render() {
        const { category, selectedView, subcat, title } = this.props;

        let pageTitle = "";
        if (subcat === "objects") {
            if (title === "allObjects") {
                pageTitle = <I18N.Message msgId={"catalog.allCategories"} />
            } else if (title === "searchResults") {
                pageTitle = <I18N.Message msgId={"catalog.searchResults"} />
            } else {
                pageTitle = title;
            }
        }

        return (<div className="interna">
            <div style={{ minHeight: '100%', position: 'relative' }}>
                <div role="navigation" className="skip-navigation" aria-label="Navigazione veloce">
                    <HashLink to="/dataset/#main-content">Salta al contenuto principale</HashLink>
                </div>
                <Header goToHome={this.goToHome} />
                <div id="main-content"></div>

                <div className="row d-flex">

                    <nav className={this.state.menuOpened ? 'col sideBar-lateral' : 'col sideBar-lateral small-col'}>
                        <div id="btn-menu">
                            <button onClick={this.toggleClass} >
                                <span className="sr-only">Menu</span>
                            </button>
                        </div>

                        <div className="menu">
                            {this.renderSerchBar()}
                            <div className="dataset-results-container" role="contentinfo" aria-label="risultati della ricerca">
                                {category ? this.renderMenu() : (<noscript />)}
                                {this.props.notAuthorized && this.renderUnauthorized()}
                            </div>
                        </div>
                    </nav>

                    <div className="col container-dx">
                        <h1><I18N.Message msgId={"catalog.header"} /></h1>
                        <div className="d-flex">
                            <div className="col">
                                <Cart />
                            </div>
                            <div className="col text-right">
                                <Button onClick={() => { this.goMap(); }} className="btn btn-mappa">
                                    <I18N.Message msgId={"catalog.goToMap"} />
                                </Button>
                            </div>
                        </div>
                        {this.props.subcat === "objects" ? <span>{pageTitle}</span> : <noscript></noscript>}
                        <CartPanel />
                        {selectedView ? this.renderView() : this.renderCategory()}
                    </div>

                </div>

                <div className="dataset-footer-container">
                    <Footer />
                </div>
            </div>

            <AddMapModal />
        </div>);
    }

    toggleClass = () => {
        const currentState = this.state.menuOpened;
        this.setState({ menuOpened: !currentState });
    };

    loadMetadata = ({ text, category } = {}) => {
        let params = {};
        const { id } = category || {};
        if (id !== 999) {
            params.category = id;
        }
        if (text && text.length > 0) {
            params.text = text;
        }
        if (!this.props.loading) {
            if (params.text) {
                this.props.getMetadataObjects({ params });
            } else {
                this.props.getAllMetadata();
            }
        }
    };

    showInfoBox = (node) => {
        this.props.loadMetadata(node);
    };

    addToCart = (node) => {
        if (!node.featureType) {
            this.props.toggleAddMap(true);
            this.props.loadNodeMapRecords(node);
        } else if (node.featureType) {
            const featureType = node.featureType.replace('featuretype=', '').replace('.json', '');
            if (!this.props.configOggetti[featureType]) {
                this.props.loadFeatureTypeConfig(null, { authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : '' }, featureType, true, false, node.id, true, node);
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
            this.props.loadFeatureTypeConfig(null, { authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : '' }, featureType, true);
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
            this.props.loadFeatureTypeConfig(null, { authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : '' }, featureType, true, false, null, false, null);
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
            this.props.loadFeatureTypeConfig(null, { authkey: this.props.userprofile.authParams.authkey ? this.props.userprofile.authParams.authkey : '' }, featureType, true);
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

    loadThematicView = ({ serviceUrl, params } = {}) => {
        this.props.getThematicViewConfig({ serviceUrl, params, configureMap: true });
    };

    goToHome = () => {
        this.context.router.history.push('/');
    };

    goMap = () => {
        this.props.prepareDataToMap();
        this.context.router.history.replace("/map/");
    };

    updateNodes = (nodes) => {
        return nodes.map(node => {
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
    getAllMetadata,
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
    setNodeInUse: setNodeInUse,
    prepareDataToMap,
    selectAllObjects
})(Catalog);
