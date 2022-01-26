import React from "react";
import PropTypes from "prop-types";
import {Panel, Glyphicon, Modal, Tooltip, OverlayTrigger} from "react-bootstrap";
import I18N from "@mapstore/components/I18N/I18N";
import isObject from "lodash/isObject";
import {connect} from "react-redux";
import {hideQueryError} from "../../actions/siradec";
import LocaleUtils from "@mapstore/utils/LocaleUtils";
import IndicaBuilder from "./IndicaBuilder";
const Spinner = require('react-spinkit');

class SideIndicaPanel extends React.Component {
    static propTypes = {
        loadingQueryFormConfigError: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        attributes: PropTypes.array,
        withMap: PropTypes.bool,
        onCloseError: PropTypes.func,
        toggleControl: PropTypes.func,
        header: PropTypes.string,
        datasetHeader: PropTypes.string,
        featureTypeNameLabel: PropTypes.string,
        tematizzatore: PropTypes.object,
        currentSiraId: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        loadingQueryFormConfigError: null,
        attributes: [],
        withMap: true,
        header: "indicaform.form.header",
        datasetHeader: "indicaform.form.dataset_header",
        featureTypeNameLabel: "",
        tematizzatore: {},
        currentSiraId: null
    };

    renderHeader = () => {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);
        let tooltip = <Tooltip id="header_tp">{LocaleUtils.getMessageById(this.context.messages, "queryPanel.closeIndicaTooltip")}</Tooltip>;

        return (
            <div className="handle_querypanel">
                <span>
                    <span style={{paddingLeft: "15px"}}>{header}</span>
                    <OverlayTrigger key={"header_tp_over"} rootClose placement="left" overlay={tooltip}>
                        <button style={{paddingRight: "10px"}} onClick={this.props.toggleControl} className="close">
                            <Glyphicon glyph="glyphicon glyphicon-triangle-left collapsible"/>
                        </button>
                    </OverlayTrigger>
                </span>
            </div>
        );
    };

    renderDatasetHeader = () => {
        const datasetHeader = LocaleUtils.getMessageById(this.context.messages, this.props.datasetHeader);
        return (
            <div className="dhContainer">
                <label>{datasetHeader}</label>
                <h4 className="ftheader">{this.props.featureTypeNameLabel}</h4>
            </div>
        );
    };

    renderIndicaPanel = () => {
        return (
            <Panel className={this.props.withMap ? "querypanel-container side-querypanel widthclass" : "querypanel-container side-querypanel hideSpatialFilter widthclass" } collapsible={this.props.collapsible}
                header={this.renderHeader()} bsStyle="primary">
                {this.renderDatasetHeader()}
                <IndicaBuilder {...this.props.tematizzatore} currentSiraId={this.props.currentSiraId} />
            </Panel>
        );
    };

    renderLoadConfigException = (loadingError, msg) => {
        let exception;
        if (isObject(loadingError)) {
            exception = loadingError.status +
                "(" + loadingError.statusText + ")" +
                ": " + loadingError.data;
        } else {
            exception = loadingError;
        }

        return (
            <Modal show={loadingError ? true : false} bsSize="small" onHide={this.props.onCloseError} id="loading-error-dialog">
                <Modal.Header className="dialog-error-header-side" closeButton>
                    <Modal.Title><I18N.Message msgId={msg}/></Modal.Title>
                </Modal.Header>
                <Modal.Body className="dialog-error-body">
                    <div>{exception}</div>
                </Modal.Body>
                <Modal.Footer className="dialog-error-footer">
                </Modal.Footer>
            </Modal>
        );
    };

    render() {
        let loadingError = this.props.loadingQueryFormConfigError;
        if (loadingError) {
            return (
                this.renderLoadConfigException(loadingError,
                    this.props.loadingQueryFormConfigError ? "queryform.config.load_config_exception" : "queryform.query_request_exception")
            );
        }

        return this.props.indicaFilters ?
            (
                this.renderIndicaPanel()
            ) : (
                <div style={{
                    position: "fixed",
                    width: "60px",
                    top: "50%",
                    left: "50%"}}>
                    <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                </div>
            );
    }
}

export default connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    const layers = state.layers.flat;
    const layerId = state.siradec.currentNodeId ? state.siradec.currentNodeId : null;
    const currLayer = layerId ? layers.filter((l) => l.id === layerId)[0] : null;
    const layerConfig = currLayer ? state.siradec.configOggetti[currLayer.featureType] : null;

    return {
        tematizzatore: layerConfig ? layerConfig.tematizzatore : activeConfig.tematizzatore,
        currentSiraId: state.siradec.currentSiraId,
        // SiraIndicaPanel prop
        expanded: state.siradec.indicaConfigPanelExpanded,
        loadingQueryFormConfigError: state.siradec.loadingQueryFormConfigError,
        featureTypeNameLabel: layerConfig ? layerConfig.featureTypeNameLabel : activeConfig.featureTypeNameLabel,
        indicaFilters: layerConfig ? layerConfig.indicaFilters : activeConfig.indicaFilters
    };
}, {
    onCloseError: hideQueryError
})(SideIndicaPanel);

