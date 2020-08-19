/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('./Node');
const GroupTitle = require('./fragments/GroupTitle');
const GroupChildren = require('./fragments/GroupChildren');
const VisibilityCheck = require('./fragments/VisibilityCheck');
const PropTypes = require('prop-types');

class DefaultGroup extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        style: PropTypes.object,
        sortableStyle: PropTypes.object,
        onToggle: PropTypes.func,
        onSort: PropTypes.func,
        propertiesChangeHandler: PropTypes.func,
        groupVisibilityCheckbox: PropTypes.bool,
        visibilityCheckType: PropTypes.string
    };

    static defaultProps = {
        node: {},
        onToggle: () => {},
        style: {
            marginBottom: "16px",
            cursor: "pointer"
        },
        sortableStyle: {},
        propertiesChangeHandler: () => {},
        groupVisibilityCheckbox: false,
        visibilityCheckType: "glyph"
    };

    render() {
        let {children, onToggle, ...other } = this.props;
        return (
            <Node className="toc-default-group" sortableStyle={this.props.sortableStyle} style={this.props.style} type="group" {...other}>
                { this.props.groupVisibilityCheckbox &&
                  <VisibilityCheck
                      key="visibility"
                      checkType={this.props.visibilityCheckType}
                      propertiesChangeHandler={this.props.propertiesChangeHandler}/>}
                <GroupTitle onClick={this.props.onToggle}/>
                <GroupChildren onSort={this.props.onSort} position="collapsible">
                    {this.props.children}
                </GroupChildren>
            </Node>
        );
    }
}

module.exports = DefaultGroup;
