/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
require("./css/toctitle.css");
const PropTypes = require('prop-types');

class Title extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        onClick: PropTypes.func
    };

    static inheritedPropTypes = ['node'];

    static defaultProps = {
        onClick: () => {}
    };

    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : true;
        return (<span tabIndex="0" className="toc-title" onClick={() => this.props.onClick(this.props.node.id || this.props.node.name, expanded)} onKeyPress={() => this.props.onClick(this.props.node.id || this.props.node.name, expanded)}>{this.props.node.title || this.props.node.name}</span>);
    }
}

module.exports = Title;
