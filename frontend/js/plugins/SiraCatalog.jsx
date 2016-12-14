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
const {toggleNode, selectCategory, getThematicViewConfig} = require('../actions/siracatalog');

const assign = require('object-assign');
const {Tabs, Tab, Button, OverlayTrigger, Popover, Image} = require("react-bootstrap");
const {toggleSiraControl} = require('../actions/controls');
const {getMetadataObjects} = require('../actions/siracatalog');
const {
    // SiraQueryPanel action functions
    expandFilterPanel,
    loadFeatureTypeConfig,
    setActiveFeatureType
} = require('../actions/siradec');

const {setGridType} = require('../actions/grid');

const getChildren = function(nodes, node) {
    return node.nodes.map((child) => {
        let newNode = nodes.find((n) => n.id === child);
        return newNode.nodes ? assign({expanded: false}, newNode, {nodes: getChildren(nodes, newNode)}) : newNode;
    });
};
const normalizeCatalog = function(nodes) {
    return nodes.filter( (n) => n.type === "root").map((n) => {
        return assign({expanded: false}, n, {nodes: getChildren(nodes, n)});
    });
};
const normalizeViews = function(nodes) {
    return nodes.filter( (n) => n.type === "view").map((n) => {
        return assign({expanded: false}, n, {nodes: getChildren(nodes, n)});
    });
};
const normalizeObjects = function(nodes) {
    return nodes.filter( (n) => n.type === "node" && !n.nodes);
};
const tocSelector = createSelector([
        (state) => state.siracatalog.nodes || [],
        (state) => state.siracatalog.category,
        (state) => state.siracatalog,
        (state) => state.siradec && state.siradec.configOggetti,
        (state) => state.userprofile,
        (state) => state.siradec && state.siradec.activeFeatureType
    ], ( nodes, category, catalog, configOggetti, userprofile, activeFeatureType) => ({
        views: normalizeViews(catalog.views || []),
        nodes: normalizeCatalog(nodes),
        objects: normalizeObjects(nodes),
        nodesLoaded: catalog.nodes ? true : false,
        category,
        loading: catalog.loading,
        configOggetti,
        userprofile,
        activeFeatureType
    })
);
const categorySelector = createSelector([
        (state) => state.mosaic.tiles || []
    ], (servertiles) => {
        const {objectNumber = 0, tematicViewNumber = 0} = servertiles.reduce((v, t) => {
            v.objectNumber += t.objectNumber;
            v.tematicViewNumber += t.tematicViewNumber;
            return v;
        }, {objectNumber: 0, tematicViewNumber: 0});
        return {
        tiles: [...servertiles, {id: 999, name: "Search All", icon: "assets/application/conoscenze_ambientali/css/images/via.png", objectNumber, tematicViewNumber}]
        };
    }
);

const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNode');

const Spinner = require('react-spinkit');
const SearchBar = require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar');

const Vista = connect( null, {
    addToMap: getThematicViewConfig
    })(require('../components/catalog/Vista'));

// const SearchCategories = connect((state)=> ({
//     categories: state.siracatalog && state.siracatalog.searchCategories
// }), {
//     onSelect: selectCategory
// })(require('../components/catalog/SearchCategories'));
const SearchCategories = connect(categorySelector,
{
    tileClick: selectCategory
})(require('../components/Mosaic'));

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
            icon: React.PropTypes.string.isRequired
        }).isRequired,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        userprofile: React.PropTypes.object,
        activeFeatureType: React.PropTypes.string,
        loadFeatureTypeConfig: React.PropTypes.func,
        setActiveFeatureType: React.PropTypes.func,
        setGridType: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            loading: false,
            onToggle: () => {}
        };
    },
    getInitialState() {
        return {
            searchText: ""
        };
    },
    componentWillMount() {
        if (!this.props.nodesLoaded && !this.props.loading) {
            this.loadMetadata();
        }
    },
    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && (!nextProps.nodesLoaded || nextProps.category.id !== this.props.category.id )) {
            this.loadMetadata({id: nextProps.category.id});
        }
    },
    render() {
        if (!this.props.nodes) {
            return <div></div>;
        }
        const objects = (
            <TOC nodes={this.props.nodes}>
                    <DefaultGroup onToggle={this.props.onToggle}>
                    <DefaultNode
                            expandFilterPanel={this.openFilterPanel}
                            toggleSiraControl={this.searchAll}
                            onToggle={this.props.onToggle}
                            groups={this.props.nodes}/>
                    </DefaultGroup>
                </TOC>);
        const viste = this.props.views ? this.props.views.map((v) => (<Vista key={v.id}
            expandFilterPanel={this.props.expandFilterPanel}
            toggleSiraControl={this.props.toggleSiraControl}
            node={v}
            onToggle={this.props.onToggle}/>)) : (<div/>);
        return (
            <div id="siracatalog">
             <div className="catalog-search-container">
             <SearchBar placeholder="Cerca oggetti" placeholderMsgId=""
              className="sira-cat-search"
              onSearchTextChange={(text) => this.setState({ searchText: text})}
              typeAhead={false}
              searchText={this.state.searchText}
              onSearch={(text) => this.loadMetadata({text})}
              onSearchReset={() => {
                  this.setState({ searchText: ""});
                  this.loadMetadata();
              }}
            />
             <OverlayTrigger trigger="focus" placement="right" overlay={(<Popover id="search-categories"><SearchCategories
                    useLink={false}
                    className="tilescontainer"
                    liClass="list-group-item col-xs-4 tiles searchtile"
                    /> </Popover>)}>
                       <Button className="siracatalog-search-selector">
                            <Image style={{width: "30px"}} src={this.props.category.icon}/>
                        </Button>
             </OverlayTrigger>
             </div>
            <Tabs className="catalog-tabs" defaultActiveKey={1}>
                <Tab eventKey={1} title={`Oggetti (${this.props.objects.length})`}>{objects}</Tab>
                <Tab eventKey={2} title={`Viste Tematiche (${this.props.views ? this.props.views.length : 0})`}>{viste}</Tab>
            </Tabs>
            {this.props.loading ? (
                <div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)"}}><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>) : null}
            </div>);
    },
    loadMetadata({text, id = this.props.category.id} = {}) {
        let params = {};
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
    }
});

const CatalogPlugin = connect(tocSelector, {
    onToggle: toggleNode,
    toggleSiraControl,
    expandFilterPanel,
    getMetadataObjects,
    loadFeatureTypeConfig,
    setActiveFeatureType,
    setGridType
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
