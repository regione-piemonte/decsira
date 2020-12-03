import React, {useState, useCallback} from "react";
import {Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

import ComboField from "@mapstore/components/data/query/ComboField";

function ChartsBuilder({
    indicatori = [],
    periodicita = [],
    dettaglioPeriodicita = {}
}) {
    const [selectedIndicatore, setSelectedIndicatore] = useState("");
    const [selectedPeriodicita, setSelectedPeriodicita] = useState("");
    const [selectedDettaglioPeriodicita, setSelectedDettaglioPeriodicita] = useState("");
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
    </div>);
}

ChartsBuilder.propTypes = {
    indicatori: PropTypes.array,
    periodicita: PropTypes.array,
    dettaglioPeriodicita: PropTypes.object
};

export default ChartsBuilder;
