const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon} = require('react-bootstrap');
const {Tooltip, OverlayTrigger} = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');

class Viste extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        addToMap: PropTypes.func,
        expandObjects: PropTypes.func,
        onToggle: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        expandFilterPanel: PropTypes.func,
        showInfoBox: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        addToMap: () => {},
        expandObjects: () => {},
        onToggle: () => {},
        toggleSiraControl: () => {},
        expandFilterPanel: () => {},
        showInfoBox: () => {}
    };

    renderObjectTools = () => {
        return [(<Glyphicon
            key="toggle-featuregrid"
            glyph="th"
            onClick={() => this.props.toggleSiraControl('grid', true)}/>),
        (<Glyphicon
            key="toggle-query"
            glyph="search"
            onClick={() => this.props.expandFilterPanel(true)}/>)];

    };

    renderVistaTools = () => {
        let tooltipMap = <Tooltip id="tpm-add-map"><I18N.Message msgId={"nodeIcons.map"}/></Tooltip>;
        return [(<OverlayTrigger key={"map-tp"} rootClose placement="bottom" overlay={tooltipMap}>
            <button className="btn btn-link carica-in-mappa" onClick={this.loadConfig}></button>
        </OverlayTrigger>)];
    }

    render() {
        let expanded = (this.props.node.expanded !== undefined) ? this.props.node.expanded : false;
        return (
            <div className="sira-view">
                <div className="sira-view-title"><span onClick={this.showInfoBox}>{this.props.node.title}</span>{this.renderVistaTools(expanded)}</div>
                {expanded && this.props.node.nodes ? this.props.node.nodes.map((o)=> (<div className="sira-view-object"><span>{o.title}</span>{this.renderObjectTools()}</div>)) : (<div/>)}
            </div>);
    }

    loadConfig = () => {
        const v = this.props.node.view;
        if (v) {
            let view = v;
            if (v.match(/(config=)(\w+)/)) {
                view = v.match(/(config=)(\w+)/).pop();
            }
            this.props.addToMap({ serviceUrl: `./${view}.json`, params: {} });
        }
    };

    showInfoBox = () => {
        this.props.showInfoBox(this.props.node.id);
    };
}

module.exports = Viste;
