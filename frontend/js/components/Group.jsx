/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Node = require('../../MapStore2/web/client/components/TOC/Node');
var GroupTitle = require('../../MapStore2/web/client/components/TOC/fragments/GroupTitle');
var GroupChildren = require('../../MapStore2/web/client/components/TOC/fragments/GroupChildren');
var VisibilityCheck = require('../../MapStore2/web/client/components/TOC/fragments/VisibilityCheck');

var Group = React.createClass({
    propTypes: {
        node: React.PropTypes.object,
        expanded: React.PropTypes.bool,
        style: React.PropTypes.object,
        onToggle: React.PropTypes.func,
        onSort: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        onSettings: React.PropTypes.func,
        propertiesChangeHandler: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            node: {},
            onToggle: () => {},
            onRemove: () => {},
            onSettings: () => {},
            propertiesChangeHandler: () => {},
            expanded: true,
            style: {
                marginBottom: "16px",
                cursor: "pointer"
            }
        };
    },
    render() {
        let {children, onToggle, ...other } = this.props;
        let visibilityStyle = {
            visibility: this.props.node.name === 'background' ? 'hidden' : 'visible',
            marginLeft: "5px",
            marginRight: "5px", "float": "left",
            marginTop: "7px"
        };
        return (
            <Node type="group" {...other}>
                <VisibilityCheck key="visibility" propertiesChangeHandler={this.props.propertiesChangeHandler} style={visibilityStyle}/>
                <GroupTitle onClick={this.props.onToggle}/>
                <GroupChildren onSort={this.props.onSort} position="collapsible">
                    {this.props.children}
                </GroupChildren>
            </Node>
        );
    }
});

module.exports = Group;
