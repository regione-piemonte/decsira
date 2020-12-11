import React from "react";
import PropTypes from "prop-types";
import {Panel} from "react-bootstrap";
import Draggable from "react-draggable";
import SimpleChart from "@mapstore/components/charts/SimpleChart"

class SerieStorica extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        closePanel: PropTypes.func
    };

    static defaultProps = {
        show: false,
        closePanel: () => {}
    };

    render() {
        const data = [
            {anno: "2010", frugarolo: 10, oviglio: 20},
            {anno: "2011", frugarolo: 20, oviglio: 15},
            {anno: "2012", frugarolo: 30, oviglio: 30},
            {anno: "2013", frugarolo: 30, oviglio: 5}
        ];
        const series = [{dataKey: "frugarolo"}, {dataKey: "oviglio"}]
        return (
            <Draggable bounds="parent" start={{x: 0, y: 300}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div className="charts-selector" style={{display: this.props.show ? "block" : "none"}}>
                    <Panel
                        className="charts-selector-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    Serie Storica
                                </span>
                                <button className="charts-selector-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}
                        >
                        <Panel className="charts-selector-content">
                            <SimpleChart type="bar" data={data} xAxis={{dataKey: "anno"}} series={series}/>
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

export default SerieStorica;
