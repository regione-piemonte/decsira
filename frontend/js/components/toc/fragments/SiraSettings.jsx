/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const Slider = require('react-nouislider');
const {Label, Glyphicon} = require('react-bootstrap');
const WMSLegend = require('./WMSLegend');
const assign = require('object-assign');
const PropTypes = require('prop-types');

require('./css/SiraSettings.css');
const glyphStyle = {"float": "right", marginTop: 12, cursor: 'pointer'};

class SiraSettings extends React.Component {
    static propTypes = {
        opacityText: PropTypes.node,
        settings: PropTypes.object,
        element: PropTypes.object,
        updateNode: PropTypes.func,
        updateSettings: PropTypes.func,
        searchAll: PropTypes.func,
        setGridType: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        updateSettings: () => {},
        updateNode: () => {},
        searchAll: () => {},
        setGridType: () => {}
    };

    renderOpacity = () => {
        return (
            <div key="opacity" style={{width: "70%", display: "inline-block", paddingLeft: 7}}>
                <label key="opacity-label" className="control-label">{this.props.opacityText}</label>
                <Slider key="opacity-slider" start={[Math.round(this.props.settings.options.opacity * 100)]}
                    range={{min: 0, max: 100}}
                    onChange={(opacity) => this.updateOpacity({opacity: opacity / 100}) }/>
                <Label key="opacity-percent" >{Math.round(this.props.settings.options.opacity * 100) + "%"}</Label>
            </div>);
    };

    renderLegend = () => {
        const renderSTool = !!this.props.element.featureType;
        return (
            <div key="legend" className={renderSTool ? "sira-toc-legend-with-tools" : "sira-toc-legend"}>
                <WMSLegend node={this.props.element}/>
            </div>
        );
    };

    renderSiraTool = () => {
        return [ (<Glyphicon
            style={glyphStyle}
            key="toggle-featuregrid"
            glyph="th"
            onClick={() => this.props.searchAll(this.props.element.featureType)}/>)
        ];
    };

    render() {
        const renderLeg = this.props.settings && this.props.settings.options && this.props.settings.options.showlegend && this.props.element.type === "wms";
        const renderSTool = !!this.props.element.featureType;
        const renderLegendTool = this.props.element.type !== "vector";
        return (<div id="sira-layer-settings">
            {renderLeg ? this.renderLegend() : this.renderOpacity()}
            {renderSTool ? this.renderSiraTool() : (<span/>)}
            {renderLegendTool ? (<Glyphicon
                style={glyphStyle}
                key="toggle-legned"
                glyph={renderLeg ? "adjust" : "list"}
                onClick={this.toggleLegend}
            />) : (<span/>)}
        </div>);
    }

    updateOpacity = (newParams) => {
        this.props.updateSettings(newParams);
        this.props.updateNode(
            this.props.settings.node,
            this.props.settings.nodeType,
            assign({}, this.props.settings.props, newParams)
        );
    };

    toggleLegend = () => {
        this.props.updateSettings({"showlegend": !this.props.settings.options.showlegend});
    };
}

module.exports = SiraSettings;
