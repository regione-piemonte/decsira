/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Node = require('../../../MapStore2/web/client/components/TOC/Node');
var Title = require('../../../MapStore2/web/client/components/TOC/fragments/Title');
const {Glyphicon} = require('react-bootstrap');
const DefaultGroup = require('../../../MapStore2/web/client/components/TOC/DefaultGroup');
const glyphStyle = {"float": "right", cursor: 'pointer'};
var DefaultNode = React.createClass({
    propTypes: {
        node: React.PropTypes.object,
        settings: React.PropTypes.object,
        expandFilterPanel: React.PropTypes.func,
        onToggle: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        style: React.PropTypes.object,
        groups: React.PropTypes.array,
        addToMap: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            style: {},
            expandFilterPanel: () => {},
            onToggle: () => {},
            toggleSiraControl: () => {},
            addToMap: () => {}
        };
    },
    renderTools() {
        const tools = [
        (<Glyphicon
            style={glyphStyle}
            key="addToMap"
            glyph="plus-sign"
            onClick={()=>this.props.addToMap()}/>),
        (<Glyphicon
            style={glyphStyle}
            key="toggle-featuregrid"
            glyph="th"
            onClick={() => this.props.toggleSiraControl('grid', true)}/>),
        (<Glyphicon
            style={glyphStyle}
            key="toggle-query"
            glyph="search"
            onClick={() => this.props.expandFilterPanel(true)}/>)];
        return tools;
    },
    render() {
        let {children, onToggle, ...other } = this.props;
        if (this.props.node.nodes) {
            return (
            <DefaultGroup node={this.props.node} onToggle={this.props.onToggle}>
                <DefaultNode {...this.props}/>
            </DefaultGroup>
                );
        }
        return (
            <Node className="toc-default-layer catalog-object" style={this.props.style} type="layer" {...other}>
                <Title/>
                {this.renderTools()}
            </Node>
        );
    }
});

module.exports = DefaultNode;
