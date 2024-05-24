const {createSelector} = require('reselect');
const assign = require('object-assign');
const {head} = require('lodash');

const grid = (state) => state && state.grid;
const featureGrid = (state) => state && state.siradec && state.siradec.configOggetti[state.siradec.activeFeatureType].featuregrid || {};

const gridSelector = createSelector([grid, featureGrid],
    (gridS, featureGridS) => ({
        grid: assign({}, gridS, {featuregrid: featureGridS})
    }));

const sortObjects = function(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
};
const isPresent = function(nodes, node) {
    return nodes.filter((n) => node.id === n.id).length > 0;
};
const getChildren = function(nodes, node) {
    return node.nodes.map((child) => {
        let newNode = head(nodes.filter((n) => n.id === child));
        return newNode.nodes ? assign({expanded: false}, newNode, {nodes: getChildren(nodes, newNode).sort(sortObjects)}) : newNode;
    });
};
const normalizeCatalog = function(nodes) {
    return nodes.filter( (n) => n.type === "root").map((n) => {
        return assign({expanded: false}, n, {nodes: getChildren(nodes, n).sort(sortObjects)});
    });
};
const normalizeViews = function(nodes) {
    return nodes.filter( (n) => n.type === "view").reduce((acc, o) => {
        return !isPresent(acc, o) ? acc.concat(o) : acc;
    }, []).map((n) => {
        return assign({expanded: false}, n, {nodes: getChildren(nodes, n)});
    });
};
const normalizeObjects = function(nodes) {
    return nodes.filter( (n) => n.type === "node" && !n.nodes).reduce((acc, o) => {
        return !isPresent(acc, o) ? acc.concat(o) : acc;
    }, []).sort(sortObjects);
};

const categorySelector = createSelector([
    (state) => state.mosaic && state.mosaic.tiles || [],
    (state) => state.siracatalog
], (servertiles, catalog) => {
    const {objectNumber = 0, tematicViewNumber = 0} = servertiles.reduce((v, t) => {
        v.objectNumber += t.objectNumber;
        v.tematicViewNumber += t.tematicViewNumber;
        return v;
    }, {objectNumber: 0, tematicViewNumber: 0});
    return {
        tiles: [...servertiles, {id: 999, name: "Tutte le Categorie", icon: "all", objectNumber, tematicViewNumber}],
        views: normalizeViews(catalog.views || [])
    };
}
);

const tocSelector = createSelector([
    (state) => state.siracatalog.nodes || [],
    (state) => state.siracatalog.allNodes || [],
    (state) => state.siracatalog.allViews || [],
    (state) => state.siracatalog.category,
    (state) => state.siracatalog.subcat,
    (state) => state.siracatalog,
    (state) => state.siradec && state.siradec.configOggetti,
    (state) => state.siradec && state.siradec.notAuthorized && state.siradec.notAuthorized.filter(f => f === state.siradec.activeFeatureType).length > 0,
    (state) => state.userprofile,
    (state) => state.siradec && state.siradec.activeFeatureType
], ( nodes, allNodes, allViews, category, subcat, catalog, configOggetti, notAuthorized, userprofile, activeFeatureType) => ({
    views: normalizeViews(catalog.views || []),
    selectedView: catalog.selectedView,
    nodes: normalizeCatalog(nodes),
    objects: normalizeObjects(nodes),
    allNodes: normalizeCatalog(allNodes),
    allViews: normalizeViews(allViews),
    nodesLoaded: catalog.nodes ? true : false,
    category,
    loading: catalog.loading,
    configOggetti,
    notAuthorized,
    userprofile,
    activeFeatureType,
    subcat,
    showcategories: catalog.showcategories,
    title: catalog.title
})
);

module.exports = {
    gridSelector,
    categorySelector,
    tocSelector
};

