const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('../toc/Node');
const Title = require('../toc/fragments/Title');
const {Tooltip, OverlayTrigger} = require('react-bootstrap');
const DefaultGroup = require('../toc/DefaultGroup');
const I18N = require('@mapstore/components/I18N/I18N');

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
        showInfoBox: PropTypes.func,
        configureIndicaLayer: PropTypes.func
    };

    static defaultProps = {
        style: {},
        expandFilterPanel: () => {},
        onToggle: () => {},
        toggleSiraControl: () => {},
        addToMap: () => {},
        configureIndicaLayer: () => {}
    };

    renderTools = () => {
        // let tooltipSira = <Tooltip id="tpm-search-details"><I18N.Message msgId={"nodeIcons.search"}/></Tooltip>;
        let tooltipMap = <Tooltip id="tpm-add-map"><I18N.Message msgId={"nodeIcons.map"}/></Tooltip>;
        let tooltipList = <Tooltip id="tpm-list-obj"><I18N.Message msgId={"nodeIcons.list"}/></Tooltip>;
        let tooltipIndica = <Tooltip id="tpm-list-obj"><I18N.Message msgId={"nodeIcons.indica"}/></Tooltip>;
        const tools = [];
        let indicaFunction = this.props.node.functions.filter(
            (func) => { return func.type === "Tematizzatore";}
        );
        if (indicaFunction.length > 0) {
            tools.push((
                <OverlayTrigger key={"indicatori"} rootClose placement="bottom" overlay={tooltipIndica}>
                    <button className="btn btn-link indicatori"
                        onClick={() => this.props.configureIndicaLayer(this.props.node.featureType, this.props.node.id, null)}>
                    </button>
                </OverlayTrigger>));
        } else {
            tools.push((
                <OverlayTrigger key={"map-tp"} rootClose placement="bottom" overlay={tooltipMap}>
                    <button className="btn btn-link carica-in-mappa" onClick={()=>this.props.addToMap(this.props.node)}>
                    </button>
                </OverlayTrigger>
            ));
            if ( this.props.node.featureType) {
                tools.push((
                    <OverlayTrigger key={"sira-mtp"} rootClose placement="bottom" overlay={tooltipList}>
                        <button className="btn btn-link elenco" onClick={() => this.props.toggleSiraControl(this.props.node)}>
                        </button>
                    </OverlayTrigger>));
                /* tools.push((
                    <OverlayTrigger key={"list-ltp"} rootClose placement="left" overlay={tooltipSira}>
                        <button className="btn btn-link" style={glyphStyle} onClick={() => this.props.expandFilterPanel(true, this.props.node.featureType)}>
                            <Glyphicon
                                key="toggle-query"
                                glyph="search"/>
                        </button>
                    </OverlayTrigger>));*/
            }
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
