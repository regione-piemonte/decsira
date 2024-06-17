/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon} = require('react-bootstrap');
const PropTypes = require('prop-types');

class StatusIcon extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        onClick: PropTypes.func,
        page: PropTypes.string
    };

    static inheritedPropTypes = ['node', 'expanded'];

    static defaultProps = {
        page: "",
        node: null,
        onClick: () => {}
    };

    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : true;
        if (this.props.node.metadata && this.props.page === "catalog") {
            return (<noscript></noscript>);
        }
        return (
            <Glyphicon tabIndex="0" style={{marginRight: "8px"}} glyph={expanded ? "chevron-up" : "chevron-down"} />
        );
    }
}

module.exports = StatusIcon;
