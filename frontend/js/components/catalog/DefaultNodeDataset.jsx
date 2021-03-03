const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('../toc/Node');
const Title = require('../toc/fragments/Title');
const {Glyphicon, Tooltip, OverlayTrigger} = require('react-bootstrap');
const DefaultGroup = require('../toc/DefaultGroup');
const glyphStyle = {"float": "right", cursor: 'pointer'};

class DefaultNode extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        settings: PropTypes.object,
        expandFilterPanel: PropTypes.func,
        onToggle: PropTypes.func,
        toggleSiraControl: PropTypes.func,
        style: PropTypes.object,
        groups: PropTypes.array,
        addToMap: PropTypes.func,
        flat: PropTypes.bool,
        showInfoBox: PropTypes.func,
        expandIndicaPanel: PropTypes.func
    };

    static defaultProps = {
        style: {},
        flat: false,
        node: {},
        groups: [],
        expandFilterPanel: () => {},
        onToggle: () => {},
        toggleSiraControl: () => {},
        addToMap: () => {},
        expandIndicaPanel: () => {}
    };

    renderTools = () => {
        let tooltipSira = <Tooltip id="tp-search-details">Ricerca di dettaglio</Tooltip>;
        let tooltipMap = <Tooltip id="tp-add-map">Carica in Mappa</Tooltip>;
        let tooltipList = <Tooltip id="tp-list-obj">Elenco di Oggetti</Tooltip>;
        let tooltipIndica = <Tooltip id="tpm-list-obj">Indicatore</Tooltip>;
        const tools = [
            (
                <OverlayTrigger key={"map-tp"} rootClose placement="left" overlay={tooltipMap}>
                    <Glyphicon
                        style={glyphStyle}
                        key="addToMap"
                        glyph="plus-sign"
                        onClick={()=>this.props.addToMap(this.props.node)}/>
                </OverlayTrigger>
            )
        ];
        if ( this.props.node.featureType) {
            tools.push((
                <OverlayTrigger key={"sira-tp"} rootClose placement="left" overlay={tooltipList}>
                    <Glyphicon
                        style={glyphStyle}
                        key="toggle-featuregrid"
                        glyph="th"
                        onClick={() => this.props.toggleSiraControl(this.props.node)}/>
                </OverlayTrigger>));
            tools.push((
                <OverlayTrigger key={"list-tp"} rootClose placement="left" overlay={tooltipSira}>
                    <Glyphicon
                        style={glyphStyle}
                        key="toggle-query"
                        glyph="search"
                        onClick={() => this.props.expandFilterPanel(true, this.props.node.featureType)}/>
                </OverlayTrigger>));
            let indicaFunctions = this.props.node.functions.filter(
                (func) => {return func.type === "Tematizzatore" || func.type === "Serie Storica";}
            );
            if (indicaFunctions.length > 0) {
                tools.push((
                    <OverlayTrigger key={"indicatori-tp"} rootClose placement="left" overlay={tooltipIndica}>
                        <Glyphicon
                            style={glyphStyle}
                            key="toggle-indicatori"
                            glyph="signal"
                            onClick={() => this.props.expandIndicaPanel(true, this.props.node.featureType)}/>
                    </OverlayTrigger>));
            }
        }
        return tools;
    };

    render() {
        let {children, onToggle, ...other } = this.props;
        if (this.props.node.nodes) {
            return (
                <div className="toc-subgroup">
                    <DefaultGroup node={this.props.node} animateCollapse={false} onToggle={this.props.onToggle}>
                        <DefaultNode {...this.props}/>
                    </DefaultGroup>
                </div>
            );
        }
        return (
            <Node animateCollapse={false} className={"toc-default-layer catalog-object flat"} style={this.props.style} type="layer" {...other}>
                <Title/>
                <div className="layer-content">
                    <span className="layer-description" onClick={this.showInfoBox}>{this.props.node.text}</span>
                    {this.renderTools()}
                </div>
            </Node>
        );
    }

    showInfoBox = () => {
        this.props.showInfoBox(this.props.node.id);
    };
}

module.exports = DefaultNode;
