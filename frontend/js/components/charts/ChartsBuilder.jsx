import React, {useState, useCallback, useReducer, useEffect} from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";

import ComboField from "@mapstore/components/data/query/ComboField";
import axios from "@mapstore/libs/ajax";
import Symbolizer from "@mapstore/components/styleeditor/Symbolizer";
import Fields from "@mapstore/components/styleeditor/Fields";
import {getColors, getStyleService} from "@mapstore/api/SLDService";

function ChartsBuilder({
    indicatori = [],
    periodicita =  [],
    dettagliPeriodicita = {}
}) {
    const initialState = {
        selectedIndicatore: "",
        selectedPeriodicita: "",
        selectedDettaglio: ""
    }

    function reducer(state, action) {
        switch(action.type) {
            case "UPDATE":
                return {
                    ...state,
                    selectedDettaglio: action.name === "selectedPeriodicita" ? "" : state.selectedDettaglio,
                    [action.name]: action.value,
                }

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { selectedIndicatore, selectedPeriodicita, selectedDettaglio } = state;

    /* const [selectedIndicatore, setSelectedIndicatore] = useState("");
    const [selectedPeriodicita, setSelectedPeriodicita] = useState("");
    const [selectedDettaglio, setSelectedDettaglio] = useState(""); */

    const updateField = useCallback((id, name, value) => {
        dispatch({
            type: "UPDATE",
            name,
            value
        })
        /* if (name === "indicatori") {
            setSelectedIndicatore(value);
        }
        if (name === "periodicita") {
            setSelectedPeriodicita(value);
            setSelectedDettaglioPeriodicita("")
        }
        if (name === "dettaglioPeriodicita") {
            setSelectedDettaglio(value);
        }*/
    });

    const [intervals, setIntervals] = useState(5);
    const [classification, setClassification] = useState('natural_breaks');
    const [colorramp, setColorRamp] = useState("red");

    const [colors, setColors] = useState([{
        color: "F00",
        min: 0,
        max: 10
    }, {
        color: "F66",
        min: 10,
        max: 20
    }]);

    const properties = {
        intervals,
        classification,
        colorramp,
        colors
    };
    const params = {
        "intervals": {
            type: "input",
            label: "Intervalli",
            getValue: (value) => ({param: "intervals", value: parseInt(value, 10)}),
            config: {
                type: "number"
            }
        },
        "classification": {
            type: "select",
            label: "Tipo Classificazione Statistica",
            config: {
                getOptions: () => [{label: "Natural Breaks", value: "natural_breaks"}, {label: "Quantile", value: "quantile"}],
                selectProps: {},
                isValid: () => true
            },
            getValue: (value) => ({param: "classification", value})
        },
        "colorramp": {
            type: "colorRamp",
            label: "Scala colori",
            config: {
                samples: 5,
                getOptions: () => getColors(),
                rampFunction: ({ colors }) => colors
            },
            getValue: (value) => ({param: "colorramp", value})
        },
        "colors": {
            type: "colorMap"
        }
    }

    const layer = {
        url: "http://localhost:8080/geoserver",
        name: "topp:states",
        thematic: {
            fieldAsParam: true
        }
    };

    const [style, setStyle] = useState("");

    function applyStyle() {
        const url = getStyleService(layer, {
            ramp: colorramp,
            attribute: "P_MALE",
            intervals
        });
        axios.get(url).then((resp) => {
            setStyle(resp.data);
            /* axios.post("/rest/styles/aaabbbccc", resp.data).then(() => {
                wms?layers=topp:state&styles=aaabbbccc
            })*/
        }).catch(e => {
            console.error(e);
        });
    }

    return (<div>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dimensione indicatore</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={indicatori}
                    fieldName="selectedIndicatore"
                    style={{width: "240px", marginTop: "3px"}}
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedIndicatore}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Periodicità</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={periodicita}
                    fieldName="selectedPeriodicita"
                    style={{width: "240px", marginTop: "3px"}}
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedPeriodicita}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dettaglio periodicità</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={dettagliPeriodicita[selectedPeriodicita]}
                    fieldName="selectedDettaglio"
                    style={{width: "240px", marginTop: "3px"}}
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedDettaglio}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Tematizzazione</div>
            </Col>
            <Col xs={6}>
            <Symbolizer
                key="Classification"
                tools={[]}>
                    <Fields
                        properties={properties}
                        config={{}}
                        params={params}
                        onChange={(evt) => {
                            switch(evt.param) {
                                case "intervals":
                                    setIntervals(evt.value);
                                    break;
                                case "classification":
                                    setClassification(evt.value);
                                    break;
                                case "colorramp":
                                    setColorRamp(evt.value);
                                    break;
                            }
                        }}
                    />
            </Symbolizer>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={12}>
                <Button onClick={applyStyle}>Applica</Button>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={12}>
                {style}
            </Col>
        </Row>
    </div>
    );
}

ChartsBuilder.propTypes = {

};

export default ChartsBuilder;
