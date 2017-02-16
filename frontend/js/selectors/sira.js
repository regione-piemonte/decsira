const {createSelector} = require('reselect');
const assign = require('object-assign');
const {head} = require('lodash');

const grid = (state) => state && state.grid;
const featureGrid = (state) => state && state.siradec && state.siradec.configOggetti[state.siradec.activeFeatureType].featuregrid || {};

const gridSelector = createSelector([grid, featureGrid],
     (gridS, featureGridS) => ({
    grid: assign({}, gridS, {featuregrid: featureGridS})
}));

const categorySelector = createSelector([
        (state) => state.mosaic && state.mosaic.tiles || []
    ], (servertiles) => {
        const {objectNumber = 0, tematicViewNumber = 0} = servertiles.reduce((v, t) => {
            v.objectNumber += t.objectNumber;
            v.tematicViewNumber += t.tematicViewNumber;
            return v;
        }, {objectNumber: 0, tematicViewNumber: 0});
        return {
        tiles: [...servertiles, {id: 999, name: "Tutte le Categorie", icon: "all", objectNumber, tematicViewNumber}]
        };
    }
);
const getChildren = function(nodes, node) {
    return node.nodes.map((child) => {
        let newNode = head(nodes.filter((n) => n.id === child));
        return newNode.nodes ? assign({expanded: false}, newNode, {nodes: getChildren(nodes, newNode)}) : newNode;
    });
};
const normalizeCatalog = function(nodes) {
    return nodes.filter( (n) => n.type === "root").map((n) => {
        return assign({expanded: false}, n, {nodes: getChildren(nodes, n)});
    });
};
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

const tocSelector = createSelector([
        (state) => state.siracatalog.nodes || [],
        (state) => state.siracatalog.category,
        (state) => state.siracatalog.subcat,
        (state) => state.siracatalog,
        (state) => state.siradec && state.siradec.configOggetti,
        (state) => state.userprofile,
        (state) => state.siradec && state.siradec.activeFeatureType
    ], ( nodes, category, subcat, catalog, configOggetti, userprofile, activeFeatureType) => ({
        views: normalizeViews(catalog.views || []),
        nodes: normalizeCatalog(nodes),
        objects: normalizeObjects(nodes),
        nodesLoaded: catalog.nodes ? true : false,
        category,
        loading: catalog.loading,
        configOggetti,
        userprofile,
        activeFeatureType,
        subcat,
        showcategories: catalog.showcategories
    })
);

module.exports = {
    gridSelector,
    categorySelector,
    tocSelector
};

