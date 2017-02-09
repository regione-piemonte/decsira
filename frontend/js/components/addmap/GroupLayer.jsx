/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {isArray} = require('lodash');
const SelectTool = require('./SelectTool');

const GroupLayer = React.createClass({
    propTypes: {
        node: React.PropTypes.object,
        nodesStatus: React.PropTypes.object,
        useTitle: React.PropTypes.bool,
        toggleLayer: React.PropTypes.func,
        toggleSelect: React.PropTypes.func
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            node: {},
            nodesStatus: {},
            useTitle: true,
            toggleLayer: () => {},
            toggleSelect: () => {}
        };
    },
    renderChildren(node) {
        return (isArray(node.Layer) && node.Layer || [node.Layer]).map((layer) => {
            return <GroupLayer {...this.props} key={layer.id} node={layer} />;
        });
    },
    render() {
        const {node, useTitle, nodesStatus} = this.props;
        const {expanded, selected} = nodesStatus[node.id] ? nodesStatus[node.id] : {expanded: true, selected: false};
        const label = useTitle ? node.Title : node.Name;
        const titleStyle = node.Layer ? "title-cursor" : "title";
        return (<div className={`sira-map-layer ${node && node.nodetype}`}>
                <div className={`group-layer-header ${node && node.nodetype} ${expanded ? 'expanded' : 'collapsed'}`}>
                    <SelectTool selected={selected} toggleSelect={this.toggleSelect}/>
                   <span className={titleStyle} onClick={() => this.props.toggleLayer(node.id, !expanded)}>{label}</span>
                   </div>
                    { expanded && node.Layer ? (<div className="sira-map-layer-children">
                    {this.renderChildren(node)}
                    </div>) : null}
                </div>);
    },
    toggleSelect(value) {
        this.props.toggleSelect(this.props.node, value);
    }

});

module.exports = GroupLayer;
