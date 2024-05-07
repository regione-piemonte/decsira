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
const ButtonDefaultNode = require('./ButtonDefaultNode');
const { Glyphicon, Tooltip, OverlayTrigger } = require('react-bootstrap');
const DefaultGroup = require('../toc/DefaultGroup');
const glyphStyle = { "float": "right", cursor: 'pointer' };
const I18N = require('@mapstore/components/I18N/I18N');
const ShowInfoNode = require('./ShowInfoNode');
const metadatoInfoBox = require('../../actions/metadatainfobox');


class DefaultNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllText: false
        };
    }

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
        configureIndicaLayer: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object
    };

    static defaultProps = {
        style: {},
        flat: false,
        node: {},
        groups: [],
        expandFilterPanel: () => { },
        onToggle: () => { },
        toggleSiraControl: () => { },
        addToMap: () => { },
        configureIndicaLayer: () => { }
    };


    toogleShowMetadata() {
        this.setState((currState) => {
            return { showAllText: !currState.showAllText };
        });
    }

    renderTools = () => {
        let tooltipSira = <Tooltip id="tpm-search-details"><I18N.Message msgId={"nodeIcons.search"} /></Tooltip>;
        let tooltipMap = <Tooltip id="tpm-add-map"><I18N.Message msgId={"nodeIcons.map"} /></Tooltip>;
        let tooltipList = <Tooltip id="tpm-list-obj"><I18N.Message msgId={"nodeIcons.list"} /></Tooltip>;
        let tooltipIndica = <Tooltip id="tpm-list-obj"><I18N.Message msgId={"nodeIcons.indica"} /></Tooltip>;
        const tools = [];


        let indicaFunction = this.props.node.functions.filter(
            (func) => { return func.type === "Tematizzatore"; }
        );

        if (indicaFunction.length > 0) {
            tools.push((
                <OverlayTrigger key={"indicatori-tp"} rootClose placement="left" overlay={tooltipIndica}>
                    <button
                        className="btn btn-link"
                        style={glyphStyle}
                        onClick={() => this.configureIndicaLayer(this.props.node)}>
                        <Glyphicon
                            key="toggle-indicatori"
                            glyph="signal" />
                    </button>
                </OverlayTrigger>));
        } else {
            tools.push((

                <OverlayTrigger key={"map-tp"} rootClose placement="left" overlay={tooltipMap}>
                    <button
                        className="btn btn-link"
                        style={glyphStyle}
                        onClick={() => this.props.addToMap(this.props.node)}>
                        <Glyphicon
                            key="addToMap"
                            glyph="plus-sign" />
                    </button>
                </OverlayTrigger>
            ));


            if (this.props.node.featureType) {

                tools.push((
                    <OverlayTrigger key={"sira-tp"} rootClose placement="left" overlay={tooltipList}>
                        <button
                            className="btn btn-link"
                            style={glyphStyle}
                            onClick={() => this.props.toggleSiraControl(this.props.node)}>
                            <Glyphicon
                                key="toggle-featuregrid"
                                glyph="th" />
                        </button>
                    </OverlayTrigger>));

                tools.push((
                    <OverlayTrigger key={"list-tp"} rootClose placement="left" overlay={tooltipSira}>
                        <button
                            className="btn btn-link"
                            style={glyphStyle}
                            onClick={() => this.props.expandFilterPanel(true, this.props.node.featureType)}>
                            <Glyphicon
                                key="toggle-query"
                                glyph="search" />
                        </button>
                    </OverlayTrigger>));

            }
        }
        return tools;
    };

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    configureIndicaLayer = (node) => {
        this.props.configureIndicaLayer(node.featureType, node.id, null);
        this.goMap();
    };

    showInfoBox = () => {
        return this.props.showInfoBox(this.props.node.id);
    };


    render() {
        let { onToggle, ...other } = this.props;

        /* if (this.props.node.nodes) {
            return (
                <div className="toc-subgroup">
                    <DefaultGroup
                        node={this.props.node}
                        animateCollapse={false}
                        onToggle={this.props.onToggle}>
                        <DefaultNode {...this.props} />
                    </DefaultGroup>
                </div>
            );
        } */

        return (
            <Node
                animateCollapse={false}
                className={"toc-default-layer catalog-object flat cardCatalogo"}
                style={this.props.style} type="layer" {...other}>

                <Title />

                <ShowInfoNode showAllText={this.state.showAllText} >
                    {this.renderTools()}
                </ShowInfoNode >

                {/* bisogna trovare un modo per recuperare il metadato!!! e valorizzare
                 i vari link con le url corrette !*/}



                <div className="layer-content">
                    <span
                        tabIndex="0"
                        onClick={this.showInfoBox}>
                        show info box
                    </span>
                </div>

                {/* prossimo step capire come raggiungere l'url del 
                metadato per mostrarlo nel metadato resource */}



                <hr />

                <div className="containerDefaultNodeFooter">
                    <div className="ContainerParagraph">
                        <ButtonDefaultNode text="MOSTRA DATI" />
                        <ButtonDefaultNode text="MOSTRA LEGGENDA" />
                    </div>

                    <div>
                        <ButtonDefaultNode
                            text="Leggi di piu"
                            onClickEvent={this.toogleShowMetadata.bind(this)} />
                    </div>
                </div>

            </Node>
        );
    }

}

module.exports = DefaultNode;
