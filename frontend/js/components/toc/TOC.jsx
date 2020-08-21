/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Sortable = require('./sortable/Sortable');
require('./css/toc.css');
const PropTypes = require('prop-types');

class TOC extends React.Component {
    static propTypes = {
        filter: PropTypes.func,
        nodes: PropTypes.array,
        id: PropTypes.string,
        onSort: PropTypes.func
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
            let i = 0;
            content = filteredNodes.map((node) => React.cloneElement(this.props.children, {
                node: node,
                sortData: i++,
                key: node.name || 'default',
                isDraggable: !!this.props.onSort
            }));
        }
        if (this.props.onSort) {
            return (
                <div id={this.props.id}>
                    <Sortable onSort={this.handleSort}>
                        {content}
                    </Sortable>
                </div>
            );
        }
        return <div id={this.props.id}>{content}</div>;
    }

    handleSort = (reorder) => {
        this.props.onSort('root', reorder);
    };
}

module.exports = TOC;
