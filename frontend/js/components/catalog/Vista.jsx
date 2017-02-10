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
        expandFilterPanel: React.PropTypes.func,
        showInfoBox: React.PropTypes.func
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
            expandFilterPanel: () => {},
            showInfoBox: () => {}
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
    renderVistaTools() {
        return [(<Glyphicon
            key="addToMap"
            glyph="plus-sign"
            onClick={this.loadConfig}/>) // ,
        // (<Glyphicon
        //     key="objects"
        //     glyph="list-alt"
        //     onClick={()=> this.props.onToggle(this.props.node.id, expanded)}/>)
        ];
    },
    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : false;
        return (
            <div className="sira-view">
                <div className="sira-view-title"><span onClick={this.showInfoBox}>{this.props.node.title}</span>{this.renderVistaTools(expanded)}</div>
                {expanded && this.props.node.nodes ? this.props.node.nodes.map((o)=> (<div className="sira-view-object"><span>{o.title}</span>{this.renderObjectTools()}</div>)) : (<div/>)}
            </div>);
    },
    loadConfig() {
        const v = this.props.node.view;
        if (v) {
            let view = v;
            if (v.match(/(config=)(\w+)/)) {
                view = v.match(/(config=)(\w+)/).pop();
            }
            this.props.addToMap({serviceUrl: `./${view}.json`, params: {}});
        }
    },
    showInfoBox() {
        this.props.showInfoBox(this.props.node.id);
    }
});

module.exports = Viste;
