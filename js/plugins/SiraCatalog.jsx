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
const {toggleNode} = require('../actions/siracatalog');
const {groupsSelector} = require('../../MapStore2/web/client/selectors/layers');
const assign = require('object-assign');
const {Tabs, Tab} = require("react-bootstrap");
const {toggleSiraControl} = require('../actions/controls');
const {expandFilterPanel} = require('../actions/siradec');

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
        groupsSelector,
        (state) => state.layers.settings || {expanded: false, options: {opacity: 1}}
    ], ( nodes, groups, settings) => ({
        views: normalizeViews(nodes),
        nodes: normalizeCatalog(nodes),
        objects: normalizeObjects(nodes),
        groups,
        settings
    })
);

const TOC = require('../../MapStore2/web/client/components/TOC/TOC');
const DefaultGroup = require('../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultNode = require('../components/catalog/DefaultNode');
const Vista = require('../components/catalog/Vista');
const SearchBar = require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar');

const LayerTree = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        nodes: React.PropTypes.array,
        views: React.PropTypes.array,
        objects: React.PropTypes.array,
        onToggle: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        expandFilterPanel: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            onToggle: () => {}
        };
    },
    render() {
        if (!this.props.nodes) {
            return <div></div>;
        }
        const objects = (
            <TOC nodes={this.props.nodes}>
                    <DefaultGroup onToggle={this.props.onToggle}>
                    <DefaultNode
                            expandFilterPanel={this.props.expandFilterPanel}
                            toggleSiraControl={this.props.toggleSiraControl}
                            onToggle={this.props.onToggle}
                            groups={this.props.nodes}/>
                    </DefaultGroup>
                </TOC>);
        const viste = this.props.views ? this.props.views.map((v) => (<Vista
            expandFilterPanel={this.props.expandFilterPanel}
            toggleSiraControl={this.props.toggleSiraControl}
            node={v}
            onToggle={this.props.onToggle}/>)) : (<div/>);
        return (
            <div id="siracatalog">
             <SearchBar placeholder="Cerca oggetti" placeholderMsgId="" className="sira-cat-search"/>
            <Tabs className="catalog-tabs" defaultActiveKey={1}>
                <Tab eventKey={1} title={`Oggetti (${this.props.objects.length})`}>{objects}</Tab>
                <Tab eventKey={2} title={`Viste Tematiche (${this.props.views ? this.props.views.length : 0})`}>{viste}</Tab>
            </Tabs>
            </div>);
    }
});

const CatalogPlugin = connect(tocSelector, {
    onToggle: toggleNode,
    toggleSiraControl,
    expandFilterPanel
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
