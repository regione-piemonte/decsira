import React from "react";

import PropTypes from "prop-types";
import {Panel} from "react-bootstrap";
import Draggable from "react-draggable";
import I18N from "@mapstore/components/I18N/I18N";

class ChartPopup extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        closePopup: PropTypes.func
    }
    static defaultProps = {
        closePopup: () => {},
        show: false
    }
    close = () => {
        this.props.closePopup(false);
    };
    render() {
        return (<Draggable bounds="parent" start={{x: 0, y: 300}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
            <div className="charts-selector" style={{display: this.props.show ? "block" : "none"}}>
            <Panel
                className="charts-selector-header panel panel-primary"
                header={
                    <span>
                    <span className="snapshot-panel-title">
                        TITOLO
                    </span>
                    <button className="charts-selector-panel-close close" onClick={this.close}><span>x</span></button>
                    </span>
                }
                footer={
                    <div><button onClick={() => {this.props.openTematizzatore(true)}}>Avvia Tematizzatore</button></div>
                }
                >
                    TODO
                </Panel>
            </div>
        </Draggable>);
    }
}

export default ChartPopup;
