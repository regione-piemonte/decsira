/**
import { show } from './../../../MapStore2/web/client/actions/mediaEditor';
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const Node = require('../toc/Node');
const Title = require('../toc/fragments/Title');
const glyphStyle = { "float": "right", cursor: 'pointer' };
const I18N = require('@mapstore/components/I18N/I18N');
const { connect } = require('react-redux');
const { loadLegends, showLegendBox } = require('../../actions/metadatainfobox');
const mapDispatchToPropsMIB = (dispatch) => {
    return {
        loadLegend: (u, actualUrl) => {
            if (actualUrl && actualUrl.length === 0) {
                dispatch(loadLegends(u));
            }
            dispatch(showLegendBox());
        }
    };
};
const ShowInfoNode = connect(
    null,
    mapDispatchToPropsMIB
)(require('./ShowInfoNode'));


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

    constructor(props) {
        super(props);
        this.state = {
            showAllText: false
        };
    }

    renderTools = () => {
        const tools = [];

        let indicaFunction = this.props.node.functions.filter(
            (func) => { return func.type === "Tematizzatore"; }
        );

        if (indicaFunction.length > 0) {
            tools.push((
                <button
                    className="btn btn-link indicatori"
                    onClick={() => this.configureIndicaLayer(this.props.node)}>
                    <I18N.Message msgId={"renderTools.handleSizeOnMap"} />
                </button>));
        } else {
            tools.push((
                <button
                    className="btn btn-link carica-in-mappa"
                    onClick={() => this.props.addToMap(this.props.node)}>
                    <I18N.Message msgId={"renderTools.loadInMap"} />
                </button>
            ));

            if (this.props.node.featureType) {
                tools.push((
                    <button
                        className="btn btn-link mostra-dati"
                        style={glyphStyle}
                        onClick={() => this.props.toggleSiraControl(this.props.node)}>
                        <I18N.Message msgId={"renderTools.showData"} />
                    </button>));
            }
        }
        return tools;
    };

    render() {
        let { onToggle, ...other } = this.props;
        return (
            <Node
                animateCollapse={false}
                className={"toc-default-layer catalog-object flat cardCatalogo"}
                style={this.props.style} type="layer" {...other}>

                <Title />
                <ShowInfoNode
                    isVistaDataset={false}
                    showAllText={this.state.showAllText}
                />

                <div className="containerDefaultNodeFooter">
                    <div className="ContainerParagraph">
                        {this.renderTools()}
                    </div>

                    <div className="ContainerParagraph">
                        <button
                            className="btn btn-link arrow"
                            onClick={() => this.toogleShowMetadata()}>
                            {
                                !this.state.showAllText ?
                                    <I18N.Message msgId={"metadataInfoBox.showTextNodebutton"} /> :
                                    <I18N.Message msgId={"metadataInfoBox.hideTextNodebutton"} />
                            }
                        </button>
                    </div>
                </div>
            </Node>
        );
    }

    configureIndicaLayer = (node) => {
        this.props.configureIndicaLayer(node.featureType, node.id, null);
        this.goMap();
    };

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    /* Mostra il pannello sfondo grigio che permette di vedere fonte, link al metadato e servizio WMS*/
    toogleShowMetadata() {
        this.setState((currentState) => {

            if (!currentState.showAllText) {
                this.showInfoBox();
            }

            return {
                showAllText: !currentState.showAllText
            };
        });
    }

    showInfoBox = () => {
        return this.props.showInfoBox(this.props.node.id);
    };

}

module.exports = DefaultNode;
