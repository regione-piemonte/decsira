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
        style: PropTypes.object
    };

    static inheritedPropTypes = ['node'];

    static defaultProps = {
        onClick: () => {},
        style: {}
    };

    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : true;
        let groupTitle = this.props.node && this.props.node.title || 'Default';
        return (
            <div className="toc-group-title" onClick={() => this.props.onClick(this.props.node.id, expanded)} style={this.props.style} onKeyPress={() => this.props.onClick(this.props.node.id, expanded)}>
              <StatusIcon expanded={expanded} node={this.props.node}/>{groupTitle}
            </div>
        );
    }
}

module.exports = GroupTitle;
