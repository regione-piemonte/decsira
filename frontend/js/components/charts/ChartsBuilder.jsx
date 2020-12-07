import React, {useState, useCallback} from "react";
import {Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

import ComboField from "@mapstore/components/data/query/ComboField";
// import ClassificationSymbolizer from "@mapstore/components/styleeditor/ClassificationSymbolizer"

/*
<ClassificationSymbolizer
                    kind="Classification"
                    params={[]}
                />
                */

import Symbolizer from "@mapstore/components/styleeditor/Symbolizer";
import Fields from "@mapstore/components/styleeditor/Fields";
import {getColors} from "@mapstore/api/SLDService";

function ChartsBuilder({
    indicatori = [],
    periodicita = [],
    dettaglioPeriodicita = {}
}) {
    const [selectedIndicatore, setSelectedIndicatore] = useState("");
    const [selectedPeriodicita, setSelectedPeriodicita] = useState("");
    const [selectedDettaglioPeriodicita, setSelectedDettaglioPeriodicita] = useState("");
    const [intervals, setIntervals] = useState(5);
    const [classification, setClassification] = useState("natural_breaks");
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

    const updateField = useCallback((id, name, value) => {
        if (name === "indicatori") {
            setSelectedIndicatore(value);
        }
        if (name === "periodicita") {
            setSelectedPeriodicita(value);
            setSelectedDettaglioPeriodicita("")
        }
        if (name === "dettaglioPeriodicita") {
            setSelectedDettaglioPeriodicita(value);
        }
    });

    // const { type, setValue, getValue, isDisabled, config, label, key: keyProperty } = params[keyParam] || {};
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

    const properties = {
        intervals,
        classification,
        colorramp,
        colors
    };

    return (<div>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dimensione indicatore</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={indicatori}
                    fieldName="indicatori"
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
                    fieldName="periodicita"
                    style={{width: "240px", marginTop: "3px"}}
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedPeriodicita}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dettaglio Periodicità</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={dettaglioPeriodicita[selectedPeriodicita] || []}
                    fieldName="dettaglioPeriodicita"
                    style={{width: "240px", marginTop: "3px"}}
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedDettaglioPeriodicita}
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
    </div>);
}

ChartsBuilder.propTypes = {
    indicatori: PropTypes.array,
    periodicita: PropTypes.array,
    dettaglioPeriodicita: PropTypes.object
};

export default ChartsBuilder;
