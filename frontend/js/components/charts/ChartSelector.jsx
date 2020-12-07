import React from "react";
import PropTypes from "prop-types";
import {Panel} from "react-bootstrap";
import Draggable from "react-draggable";
import I18N from "@mapstore/components/I18N/I18N";

class ChartsSelector extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        closePanel: PropTypes.func,
        addLayer: PropTypes.func
    };

    static defaultProps = {
        show: false,
        closePanel: () => {},
        addLayer: () => {}
    };
    addLayer = () => {
        this.props.addLayer("tematizzatore", "comune");
    };
    render() {
        return (
            <Draggable bounds="parent" start={{x: 0, y: 300}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div className="charts-selector" style={{display: this.props.show ? "block" : "none"}}>
                    <Panel
                        className="charts-selector-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    <I18N.Message msgId={"chartsSelector.panelTitle"}/>
                                </span>
                                <button className="charts-selector-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}
                            footer={
                                <div>
                                    <button onClick={this.addLayer}><I18N.Message msgId={"chartsSelector.addLayer"} /></button>
                                </div>
                            }
                        >
                        <Panel className="charts-selector-content">
                            <h3>Produzione Rifiuti Urbani</h3>
                            <h4>Tematizzazione</h4>
                            <p><input type="checkbox"/>Provincia</p>
                            <p><input type="checkbox"/>Comune</p>
                            <p><input type="checkbox"/>Area vasta</p>
                            <h4>Serie Storica</h4>
                            <p><input type="checkbox"/>Provincia</p>
                            <p><input type="checkbox"/>Comune</p>
                            <p><input type="checkbox"/>Area vasta</p>

                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

export default ChartsSelector;
