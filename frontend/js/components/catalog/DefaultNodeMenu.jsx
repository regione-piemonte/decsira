const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const DefaultGroup = require('../toc/DefaultGroup');
const {selectNode, toggleNode, selectView} = require('../../actions/siracatalog');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');

class DefaultNodeMenu extends React.Component {
    static propTypes = {
        onToggle: PropTypes.func,
        toggleNode: PropTypes.func,
        selectView: PropTypes.func,
        selectNode: PropTypes.func,
        node: PropTypes.object,
        nodes: PropTypes.array
    };

    static defaultProps = {
        onToggle: () => {}
    };

    render() {
        if (this.props.node.nodes) {
            return (
                <div className="toc-subgroup">
                    <DefaultGroup node={this.props.node} animateCollapse={false} onToggle={this.nodeClick} page="catalog">
                        <DefaultNodeMenu {...this.props}/>
                    </DefaultGroup>
                </div>
            );
        }
        return (<noscript/>);
    }

    nodeClick = (id, status) => {
        this.props.toggleNode(id, status);
        this.props.selectView(null);
        this.props.selectNode(id);
    };

}

module.exports = connect(null, dispatch => {
    return bindActionCreators({selectNode, toggleNode, selectView}, dispatch);
})(DefaultNodeMenu);
