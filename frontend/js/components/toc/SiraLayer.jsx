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
const ConfirmButton = require('./ConfirmButton');
const { Glyphicon, Tooltip, OverlayTrigger } = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

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
        configureIndicaLayer: PropTypes.func,
        setActiveNode: PropTypes.func,
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
        searchAll: PropTypes.func,
        element: PropTypes.object
    };

    static contextTypes = {
        messages: PropTypes.object
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
                tooltip="nodeIcons.remove"
                style={{"float": "right", cursor: "pointer", borderColor: 'unset', backgroundColor: "transparent", marginRight: 3, padding: 0, outline: "none"}}
                confirming={{text: LocaleUtils.getMessageById(this.context.messages, "layerProperties.confirmDelete"),
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
                    style={{ "float": "right", cursor: "pointer", marginRight: 0 }}
                    glyph="cog"
                    tooltip="nodeIcons.settings"
                    onClick={(node) => {
                        if (this.props.settings && this.props.settings.node === this.props.node.id) {
                            this.props.hideSettings();
                        } else {
                            this.props.onSettings(node.id, "layers",
                                {opacity: parseFloat(node.opacity !== undefined ? node.opacity : 1)});
                        }
                    }}/>
            );
            if (this.props.node.featureType || (this.props.node.params && this.props.node.params.featureType)) {
                const tooltip = <Tooltip><I18N.Message msgId="nodeIcons.list" /></Tooltip>;
                tools.push(
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <button className="btn btn-link elenco" onClick={() => this.searchAll()}/>
                    </OverlayTrigger>
                );
            }
            if (this.props.node.params && this.props.node.params.isIndicatore === true) {
                const tooltip = <Tooltip><I18N.Message msgId="nodeIcons.configureIndica"/></Tooltip>;
                tools.push((
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <button className="btn btn-link indicatori" onClick={this.configuraIndicatore}/>
                    </OverlayTrigger>));
            }
        }
        return tools;
    };

    render() {
        let {children, propertiesChangeHandler, onToggle, ...other } = this.props;
        return (
            <Node className="toc-default-layer" animateCollapse={false} sortableStyle={this.props.sortableStyle} style={this.props.style} type="layer" {...other}>
                <Title onClick={this.showInfoBox}/>
                {this.renderCollapsible()}
                {this.renderTools()}
                <InlineSpinner loading={this.props.node.loading}/>
            </Node>
        );
    }

    searchAll= () => {
        this.props.setActiveNode(this.props.node.id);
        this.props.searchAll(this.props.node.featureType || this.props.node.params.featureType);
    }

    showInfoBox = () => {
        let siraId = this.props.node.siraId || this.props.node.params.siraId;
        if (this.props.node && siraId) {
            this.props.onToggle(siraId);
        }
    };

    configuraIndicatore = () => {
        this.props.configureIndicaLayer(this.props.node.params.featureType, this.props.node.id, this.props.node.params.siraId);
    }
}

module.exports = DefaultLayer;
