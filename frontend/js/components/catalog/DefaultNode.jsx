const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('../../../MapStore2/web/client/components/TOC/Node');
const Title = require('../../../MapStore2/web/client/components/TOC/fragments/Title');
const {Glyphicon, Tooltip, OverlayTrigger} = require('react-bootstrap');
const DefaultGroup = require('../../../MapStore2/web/client/components/TOC/DefaultGroup');
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
        showInfoBox: PropTypes.func
    };

    static defaultProps = {
        style: {},
        expandFilterPanel: () => {},
        onToggle: () => {},
        toggleSiraControl: () => {},
        addToMap: () => {}
    };

    renderTools = () => {
        let tooltipSira = <Tooltip id="tpm-search-details">Ricerca di dettaglio</Tooltip>;
        let tooltipMap = <Tooltip id="tpm-add-map">Carica in Mappa</Tooltip>;
        let tooltipList = <Tooltip id="tpm-list-obj">Elenco di Oggetti</Tooltip>;
        const tools = [
            (<OverlayTrigger key={"map-tp"} rootClose placement="left" overlay={tooltipMap}>
                <Glyphicon
                    style={glyphStyle}
                    key="addToMap"
                    glyph="plus-sign"
                    onClick={()=>this.props.addToMap(this.props.node)}/>
            </OverlayTrigger>)
        ];
        if ( this.props.node.featureType) {
            tools.push((
                <OverlayTrigger key={"sira-mtp"} rootClose placement="left" overlay={tooltipList}>
                    <Glyphicon
                        style={glyphStyle}
                        key="toggle-featuregrid"
                        glyph="th"
                        onClick={() => this.props.toggleSiraControl(this.props.node)}/>
                </OverlayTrigger>));
            tools.push((
                <OverlayTrigger key={"list-ltp"} rootClose placement="left" overlay={tooltipSira}>
                    <Glyphicon
                        style={glyphStyle}
                        key="toggle-query"
                        glyph="search"
                        onClick={() => this.props.expandFilterPanel(true, this.props.node.featureType)}/>
                </OverlayTrigger>));
        }
        return tools;
    };

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
}

module.exports = DefaultNode;
