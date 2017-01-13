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
        addToMap: React.PropTypes.func,
        showInfoBox: React.PropTypes.func
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
            onClick={()=>this.props.addToMap(this.props.node)}/>)
        ];
        if ( this.props.node.featureType) {
            tools.push((<Glyphicon
                style={glyphStyle}
                key="toggle-featuregrid"
                glyph="th"
                onClick={() => this.props.toggleSiraControl(this.props.node.featureType)}/>));
            tools.push((<Glyphicon
                style={glyphStyle}
                key="toggle-query"
                glyph="search"
                onClick={() => this.props.expandFilterPanel(true, this.props.node.featureType)}/>));
        }
        return tools;
    },
    render() {
        let {children, onToggle, ...other } = this.props;
        if (this.props.node.nodes) {
            return (
            <DefaultGroup node={this.props.node} animateCollapse={false} onToggle={this.props.onToggle}>
                <DefaultNode {...this.props}/>
            </DefaultGroup>
                );
        }
        return (
            <Node animateCollapse={false} className="toc-default-layer catalog-object" style={this.props.style} type="layer" {...other}>
                <Title onClick={this.props.showInfoBox}/>
                {this.renderTools()}
            </Node>
        );
    }
});

module.exports = DefaultNode;
