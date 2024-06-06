/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
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
        addToMap: () => { },
        expandObjects: () => { },
        onToggle: () => { },
        toggleSiraControl: () => { },
        expandFilterPanel: () => { },
        showInfoBox: () => { }
    };

    constructor(props) {
        super(props);
        this.state = {
            showAllText: false
        };
    }

    renderVistaTools = () => {
        return [(
            <button
                className="btn btn-link carica-in-mappa"
                onClick={this.loadConfig}>
                <I18N.Message msgId={"renderTools.loadInMap"} />
            </button>
        )];
    };

    render() {
        return (
            <div className="sira-view cardCatalogo">
                <div className="sira-view-title">
                    <span>{this.props.node.title}</span>
                    <div className="sira-view-content">
                        <ShowInfoNode
                            isVistaDataset
                            showAllText={this.state.showAllText}
                            node={this.props.node} />
                    </div>
                </div>
                <div className="containerDefaultNodeFooter">
                    <div className="sira-view-tool">
                        {this.renderVistaTools()}
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
            </div>
        );
    }

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
