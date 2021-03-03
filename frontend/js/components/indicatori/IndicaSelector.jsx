import React from "react";
import PropTypes from "prop-types";
import {Panel} from "react-bootstrap";
import Draggable from "react-draggable";

class IndicaSelector extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        closePanel: PropTypes.func,
        configureLayer: PropTypes.func,
        goToMap: PropTypes.func,
        tematizzatore: PropTypes.object
    };

    static contextTypes = {
        router: PropTypes.object
    };

    static defaultProps = {
        show: false,
        closePanel: () => {},
        configureLayer: () => {},
        goToMap: () => {}
    };

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <Draggable bounds="parent" start={{x: 0, y: 300}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div className="indica-selector" style={{display: this.props.show ? "block" : "none"}}>
                    <Panel
                        className="indica-selector-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    Seleziona funzionalità
                                </span>
                                <button className="indica-selector-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}
                        footer={
                            <div>
                                <button onClick={this.configureLayer}>Configure Layer</button>
                            </div>
                        }
                    >
                        <Panel className="indica-selector-content">
                            <h3>{this.props.tematizzatore ? this.props.tematizzatore.description : ""}</h3>
                            <div onChange={this.onChangeValue}>
                                <p><input type="radio" value="tematizzatore" name="indicatore"/> Tematizzatore</p>
                                <p><input type="radio" value="serie-storica" name="indicatore"/> Serie Storica</p>
                            </div>
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    configureLayer = () => {
        this.props.configureLayer("tematizzatore");
        this.props.goToMap();
        this.goMap();
    };
}

export default IndicaSelector;
