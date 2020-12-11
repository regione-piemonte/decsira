import React from "react";
import PropTypes from "prop-types";
import {Panel, Glyphicon, Modal, Tooltip, OverlayTrigger} from "react-bootstrap";
import I18N from "@mapstore/components/I18N/I18N";
import isObject from "lodash/isObject";
import {connect} from "react-redux";
import {hideQueryError} from "../../actions/siradec";
import LocaleUtils from "@mapstore/utils/LocaleUtils";
import ChartsBuilder from "./ChartsBuilder";

class SideChartsPanel extends React.Component {
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
        aggregation: PropTypes.string,
        tematizzatore: PropTypes.object
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        loadingQueryFormConfigError: null,
        attributes: [],
        withMap: true,
        header: "queryform.form.header",
        datasetHeader: "queryform.form.dataset_header",
        featureTypeNameLabel : "",
        aggregation: "",
        tematizzatore: {}
    };

    renderHeader = () => {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);
        let tooltip = <Tooltip id="header_tp">Chiudi Tematizzatore</Tooltip>;

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
                <h4 className="ftheader">{this.props.featureTypeNameLabel} - {this.props.aggregation}</h4>
            </div>
        );
    };

    renderQueryPanel = () => {
        return (
            <Panel className={this.props.withMap ? "querypanel-container side-querypanel widthclass" : "querypanel-container side-querypanel hideSpatialFilter widthclass" } collapsible={this.props.collapsible}
                header={this.renderHeader()} bsStyle="primary">
                {this.renderDatasetHeader()}
                <ChartsBuilder {...this.props.tematizzatore}/>
            </Panel>
        );
    };

    render() {
        return this.props.attributes ?
            (
                this.renderQueryPanel()
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
    const activeConfig = state.siradec.activeFeatureType &&
        state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    return {
        tematizzatore: activeConfig.tematizzatore,
        featureTypeNameLabel: activeConfig.featureTypeNameLabel,
        aggregation: "comuni",
        attributes: activeConfig.attributes
    };
})(SideChartsPanel);
