const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const GroupLayer = require('./GroupLayer');
const assign = require('object-assign');
const AddMapUtils = require('../../utils/AddMapUtils');

class LayersTree extends React.Component {
    static propTypes = {
        records: PropTypes.array,
        useTitle: PropTypes.bool
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        records: []
    };

    state = {
        flatLayers: {},
        useTitle: true
    };

    renderTree = () => {
        return this.props.records.map((r) => {
            return (<GroupLayer
                nodesStatus={this.state.flatLayers}
                toggleLayer={this.toggleLayer}
                toggleSelect={this.toggleSelect}
                useTitle={this.props.useTitle}
                key={r.id}
                node={r} />);
        });
    };

    render() {
        return (
            <div className="layer-tree">{
                this.renderTree()}
            </div>);
    }

    toggleLayer = (nodeId, expanded) => {
        this.setState((prevState) => {
            const node = assign({selected: false }, prevState.flatLayers[nodeId] || {}, {expanded});
            return {flatLayers: assign({}, prevState.flatLayers, {[nodeId]: node})};
        });
    };

    toggleSelect = (node, selected) => {
        this.setState((prevState) => {
            const flatLayers = prevState.flatLayers;
            const newFlatLayers = assign({}, flatLayers, AddMapUtils.setSelectionState([node], flatLayers, selected));
            const normalizedFlatLayer = AddMapUtils.normalizeSelection(this.props.records, newFlatLayers);
            return {flatLayers: assign({}, newFlatLayers, normalizedFlatLayer)};
        });
    };
}

module.exports = LayersTree;
