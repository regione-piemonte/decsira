/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');

var TOC = require('../../MapStore2/web/client/components/TOC/TOC');
var DefaultGroup = require('./Group');
var DefaultLayer = require('../../MapStore2/web/client/components/TOC/DefaultLayer');

var icon = require('./images/layers.png');

var LayerTree = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        buttonContent: React.PropTypes.node,
        groups: React.PropTypes.array,
        groupStyle: React.PropTypes.object,
        propertiesChangeHandler: React.PropTypes.func,
        changeGroupProperties: React.PropTypes.func,
        onToggleGroup: React.PropTypes.func,
        onToggleLayer: React.PropTypes.func,
        onSort: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            buttonContent: <img src={icon}/>,
            propertiesChangeHandler: () => {},
            changeGroupProperties: () => {},
            onToggleGroup: () => {},
            onToggleLayer: () => {}
        };
    },
    getNoBackgroundLayers(group) {
        return group.name !== 'background';
    },
    render() {
        if (!this.props.groups) {
            return <div></div>;
        }

        return (
            <div>
                <TOC onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={this.props.groups}>
                    <DefaultGroup
                        propertiesChangeHandler={this.props.changeGroupProperties} onSort={this.props.onSort} onToggle={this.props.onToggleGroup} style={this.props.groupStyle}>
                        <DefaultLayer
                            onToggle={this.props.onToggleLayer}
                            propertiesChangeHandler={this.props.propertiesChangeHandler}
                            />
                    </DefaultGroup>
                </TOC>
            </div>
        );
    }
});

module.exports = LayerTree;
