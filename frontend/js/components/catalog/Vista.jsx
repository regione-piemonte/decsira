/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon} = require('react-bootstrap');

const Viste = React.createClass({
    propTypes: {
        node: React.PropTypes.object,
        addToMap: React.PropTypes.func,
        expandObjects: React.PropTypes.func,
        onToggle: React.PropTypes.func,
        toggleSiraControl: React.PropTypes.func,
        expandFilterPanel: React.PropTypes.func
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            addToMap: () => {},
            expandObjects: () => {},
            onToggle: () => {},
            toggleSiraControl: () => {},
            expandFilterPanel: () => {}
        };
    },
    renderObjectTools() {
        return [(<Glyphicon
            key="toggle-featuregrid"
            glyph="th"
            onClick={() => this.props.toggleSiraControl('grid', true)}/>),
        (<Glyphicon
            key="toggle-query"
            glyph="search"
            onClick={() => this.props.expandFilterPanel(true)}/>)];

    },
    renderVistaTools(expanded) {
        return [(<Glyphicon
            key="addToMap"
            glyph="plus-sign"
            onClick={()=>this.props.addToMap()}/>),
        (<Glyphicon
            key="objects"
            glyph="list-alt"
            onClick={()=> this.props.onToggle(this.props.node.id, expanded)}/>)];
    },
    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : false;
        return (
            <div className="sira-view">
                <div className="sira-view-title"><span>{this.props.node.title}</span>{this.renderVistaTools(expanded)}</div>
                {expanded && this.props.node.nodes ? this.props.node.nodes.map((o)=> (<div className="sira-view-object"><span>{o.title}</span>{this.renderObjectTools()}</div>)) : (<div/>)}
            </div>);
    }
});

module.exports = Viste;
