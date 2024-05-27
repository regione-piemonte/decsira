/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const StatusIcon = require('./StatusIcon');
require("./css/grouptitle.css");
const PropTypes = require('prop-types');

class GroupTitle extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        onClick: PropTypes.func,
        style: PropTypes.object,
        page: PropTypes.string
    };

    static inheritedPropTypes = ['node'];

    static defaultProps = {
        page: "",
        onClick: () => {},
        style: {}
    };

    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : true;
        let selected = (this.props.node.selected !== undefined) ? this.props.node.selected : false;
        let groupTitle = this.props.node && this.props.node.title || 'Default';
        return (
            <div className={selected ? "toc-group-title active" : "toc-group-title"} onClick={() => this.props.onClick(this.props.node.id, expanded)} style={this.props.style} onKeyPress={() => this.props.onClick(this.props.node.id, expanded)}>
                <StatusIcon expanded={expanded} node={this.props.node} page={this.props.page}/>{groupTitle}
            </div>
        );
    }
}

module.exports = GroupTitle;
