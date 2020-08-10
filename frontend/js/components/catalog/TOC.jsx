/*
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');

class TOC extends React.Component {
    static propTypes = {
        filter: PropTypes.func,
        nodes: PropTypes.array,
        id: PropTypes.string,
        onSort: PropTypes.func,
        onError: PropTypes.func
    };

    static defaultProps = {
        filter() {return true; },
        nodes: [],
        id: 'mapstore-layers',
        onSort: null
    };

    render() {
        let content = [];
        const filteredNodes = this.props.nodes.filter(this.props.filter);
        if (this.props.children) {
            content = filteredNodes.map((node) => React.cloneElement(this.props.children, {
                node: node,
                parentNodeId: 'root',
                onSort: this.props.onSort,
                onError: this.props.onError,
                key: node.name || node.id || 'default',
                isDraggable: !!this.props.onSort && !(node.nodes && node.name === 'Default')
            }));
        }
        if (this.props.onSort) {
            return (
                <div id={this.props.id} className="mapstore-layers-container">
                    {content}
                </div>
            );
        }
        return <div id={this.props.id} className="mapstore-layers-container">{content}</div>;
    }
}

module.exports = TOC;
