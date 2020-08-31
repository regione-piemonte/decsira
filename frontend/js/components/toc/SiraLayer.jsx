/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('./Node');
const VisibilityCheck = require('./fragments/VisibilityCheck');
const Title = require('./fragments/Title');
const InlineSpinner = require('@mapstore/components/misc/spinners/InlineSpinner/InlineSpinner');
const PropTypes = require('prop-types');

const LayersTool = require('./fragments/LayersTool');
const SiraSettings = require('./fragments/SiraSettings');
const ConfirmButton = require('@mapstore/components/buttons/ConfirmButton');
const {Glyphicon} = require('react-bootstrap');

class DefaultLayer extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        settings: PropTypes.object,
        propertiesChangeHandler: PropTypes.func,
        onToggle: PropTypes.func,
        onSettings: PropTypes.func,
        style: PropTypes.object,
        sortableStyle: PropTypes.object,
        hideSettings: PropTypes.func,
        updateSettings: PropTypes.func,
        updateNode: PropTypes.func,
        removeNode: PropTypes.func,
        activateLegendTool: PropTypes.bool,
        activateSettingsTool: PropTypes.bool,
        settingsText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        opacityText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        saveText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        modalOptions: PropTypes.object,
        settingsOptions: PropTypes.object,
        visibilityCheckType: PropTypes.string,
        groups: PropTypes.array,
        expandFilterPanel: PropTypes.func,
        searchAll: PropTypes.func
    };

    static defaultProps = {
        style: {},
        sortableStyle: {},
        propertiesChangeHandler: () => {},
        onToggle: () => {},
        onSettings: () => {},
        activateLegendTool: false,
        activateSettingsTool: false,
        modalOptions: {},
        settingsOptions: {},
        visibilityCheckType: "glyph",
        expandFilterPanel: () => {},
        searchAll: () => {}
    };

    renderCollapsible = () => {
        if (this.props.settings && this.props.settings.node === this.props.node.id) {
            return (<SiraSettings
                position="collapsible"
                settings={this.props.settings}
                opacityText={this.props.opacityText}
                element={this.props.node}
                updateSettings={this.props.updateSettings}
                updateNode={this.props.updateNode}
                searchAll={this.props.searchAll}
            />);
            // <WMSLegend position="collapsible"/>;
        }
        return [];
    };

    renderTools = () => {
        const tools = [];
        tools.push(
            <ConfirmButton key="removelayer"
                text={(<Glyphicon glyph="1-close"/>)}
                style={{"float": "right", cursor: "pointer", borderColor: 'unset', backgroundColor: "transparent", marginRight: 3, padding: 0, outline: "none"}}
                confirming={{text: "Sei sicuro",
                    style: {"float": "right", cursor: "pointer", marginTop: -5}}}
                onConfirm={() => {
                    this.props.removeNode(this.props.node.id, "layers");
                }}/>
        );
        tools.push(
            <VisibilityCheck key="visibilitycheck"
                checkType={this.props.visibilityCheckType}
                propertiesChangeHandler={this.props.propertiesChangeHandler}
                style={{"float": "left", cursor: "pointer", marginLeft: 0, marginRight: 0}}/>
        );
        if (this.props.activateSettingsTool) {
            tools.push(
                <LayersTool key="toolsettings"
                    style={{"float": "right", cursor: "pointer", marginRight: 0}}
                    glyph="1-menu-manage"
                    onClick={(node) => {
                        if (this.props.settings && this.props.settings.node === this.props.node.id) {
                            this.props.hideSettings();
                        } else {
                            this.props.onSettings(node.id, "layers",
                                {opacity: parseFloat(node.opacity !== undefined ? node.opacity : 1)});
                        }
                    }}/>
            );
            if (this.props.node.featureType) {
                tools.push(<Glyphicon
                    style={{"float": "right", cursor: 'pointer'}}
                    key="toggle-query"
                    glyph="search"
                    onClick={()=>this.props.expandFilterPanel(true, this.props.node.featureType)}/>);
            }
        }
        return tools;
    };

    render() {
        let {children, propertiesChangeHandler, onToggle, ...other } = this.props;
        return (
            <Node className="toc-default-layer" animateCollapse={false} sortableStyle={this.props.sortableStyle} style={this.props.style} type="layer" {...other}>
                <Title onClick={this.showInfoBox}/>
                <InlineSpinner loading={this.props.node.loading}/>
                {this.renderCollapsible()}
                {this.renderTools()}
            </Node>
        );
    }

    showInfoBox = () => {
        if (this.props.node && this.props.node.siraId) {
            this.props.onToggle(this.props.node.siraId);
        }
    };
}

module.exports = DefaultLayer;
