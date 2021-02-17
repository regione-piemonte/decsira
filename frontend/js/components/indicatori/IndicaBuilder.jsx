import React, {useState, useCallback} from "react";
const {connect} = require('react-redux');
import {Modal, Row, Col, Button} from "react-bootstrap";
import PropTypes from "prop-types";

import ComboField from "@mapstore/components/data/query/ComboField";
import axios from "@mapstore/libs/ajax";
import Symbolizer from "@mapstore/components/styleeditor/Symbolizer";
import Fields from "@mapstore/components/styleeditor/Fields";
import {getColors, getStyleService, getStyleMetadataService} from "@mapstore/api/SLDService";
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const SwitchPanel = require('@mapstore/components/misc/switch/SwitchPanel');
const assign = require('object-assign');

const {addIndicaLayer, removeIndicaLayer} = require('../../actions/addmap');

function IndicaBuilder({
    risoluzioneSpaziale = [],
    dimensione = [],
    periodicita = [],
    dettaglioPeriodicita = [],
    attribute,
    description,
    defaultMethod,
	defaultIntervals,
    defaultRamp,
    viewParams,
    wmsLayer,
    addIndicaLayer,
    removeIndicaLayer
}) {
    const [selectedRisSpaziale, setSelectedRisSpaziale] = useState({});
    const [selectedIndicatore, setSelectedIndicatore] = useState({});
    const [selectedPeriodicita, setSelectedPeriodicita] = useState({});
    const [selectedDettaglioPeriodicita, setSelectedDettaglioPeriodicita] = useState({});
    const [intervals, setIntervals] = useState(defaultIntervals);
    const [classification, setClassification] = useState(defaultMethod);
    const [colorramp, setColorRamp] = useState(defaultRamp);
    const [colors, setColors] = useState([]);
    const [rampColors, setRampColors] = useState({});
    const [sldError, setSldError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [tematizePanelExpanded, setTematizePanelExpanded] = useState(false);
    const standardColors = ['red', 'blue', 'gray', 'jet'];

    wmsLayer.type = "wmspost";
    wmsLayer.CRS = 'EPSG:32632';

    React.useEffect(() => {
        if (!standardColors.includes(colorramp)) {
            setCustomColors(colorramp);
        }
        setupStyle();
    }, [intervals, 
        classification, 
        colorramp, 
        selectedRisSpaziale, 
        selectedIndicatore, 
        selectedPeriodicita, 
        selectedDettaglioPeriodicita]
    );

    const updateField = useCallback((id, name, value) => {
        if (name === "risoluzioneSpaziale") {
            const opt = getOptionFromValue(risoluzioneSpaziale, value);
            setSelectedRisSpaziale(opt);
        }
        if (name === "dimensione") {
            const opt = getOptionFromValue(dimensione, value);
            setSelectedIndicatore(opt);
        }
        if (name === "periodicita") {
            const opt = getOptionFromValue(periodicita, value);
            setSelectedPeriodicita(opt);
            setSelectedDettaglioPeriodicita({});
        }
        if (name === "dettaglioPeriodicita") {
            const opt = getOptionFromValue(dettaglioPeriodicita, value);
            setSelectedDettaglioPeriodicita(opt);
        }
    });

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
                getOptions: () => [{label: "Equal Interval", value: "equalInterval"}, {label: "Quantile", value: "quantile"}, {label: "Jenks", value: "jenks"}],
                selectProps: {},
                isValid: () => true
            },
            getValue: (value) => ({param: "classification", value})
        },
        "colorramp": {
            type: "colorRamp",
            label: "Scala colori",
            config: {
                samples: 4,
                getOptions: () => getColors(),
                rampFunction: ({ colors }) => colors
            },
            getValue: (value) => ({param: "colorramp", value})
        },
        "colors": {
            type: "colorMap"
        }
    }

    function getOptionFromValue(array, value) {
        return array.filter((opt) => {
            return value === opt.value && opt;
        })[0];
    }

    const properties = {
        intervals,
        classification,
        colorramp,
        colors
    };

    const layer = {
        url: "http://tst-gisserver5.territorio.csi.it:8080/geoserver", //ConfigUtils.getConfigProp('geoserverUrl'),
        name: wmsLayer.name,
        thematic: {
            fieldAsParam: true
        }
    };

    function setCustomColors(color) {
        const colorOption = getColors().filter((opt) => {
            return color === opt.name && opt;
        })[0];
        setRampColors({
            startColor: colorOption.colors[0],
            endColor: colorOption.colors[1]
        });
    }

    function getViewParams(){
        return viewParams.replace("%RIS_SPAZIALE%", selectedRisSpaziale.id)
        .replace("%DIMENSIONE%", selectedIndicatore.id)
        .replace("%AMBITO_TEMPORALE%", selectedDettaglioPeriodicita.id);
    }

    function getWmsTitle() {
        return description + " - " 
        + selectedIndicatore.value + " - " 
        + selectedRisSpaziale.value + " - " 
        + selectedPeriodicita.value + " - " 
        + selectedDettaglioPeriodicita.value;
    }

    function setupStyle() {
        if(!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return;
        }
        
        const styleOpts = {
            ramp: standardColors.includes(colorramp)? colorramp : "custom",
            attribute: attribute,
            intervals,
            method: classification,
            viewparams: getViewParams(),
            startColor: rampColors.startColor,
            endColor: rampColors.endColor
        };
        const urlMetadata = getStyleMetadataService(layer, styleOpts);

        axios.get(urlMetadata).then((resp) => {
            const rules = resp.data.Rules.Rule;
            let colors = [];
            rules.forEach(rule => {
                colors.push({
                    color: rule.PolygonSymbolizer.Fill.CssParameter.$,
                    min: rule.Filter.And.PropertyIsGreaterThanOrEqualTo.Literal,
                    max: rule.Filter.And.PropertyIsLessThan ?
                         rule.Filter.And.PropertyIsLessThan.Literal :
                         rule.Filter.And.PropertyIsLessThanOrEqualTo.Literal
                });
            });
            setColors(colors);
        }).catch(error => {
            if (error.status && error.status == 404) {
                setErrorTitle("Dati non disponibili");
                setErrorMessage("Non ci sono dati disponibi per la ricerca effettuata.");
            } else {
                setErrorTitle("Errore");
                setErrorMessage("Errore nella classificazione dei dati.");
            }
            console.error(error);
            setColors([]);
            setSldError(true);
            wmsLayer.title = getWmsTitle();
            removeIndicaLayer(wmsLayer);
        });
    }

    function applyStyle() {
        if(!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return;
        }

        const sldUrl = getStyleService(layer, {
            ramp: "custom",
            colors: colors.map(col => {return col.color}).join(','),
            attribute: attribute,
            intervals,
            method: classification,
            viewparams: getViewParams()
        });

        axios.get(sldUrl).then((resp) => {
            let bodyData = resp.data.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
            wmsLayer.title = getWmsTitle();
            wmsLayer.params = assign({}, wmsLayer.params, {SLD_BODY: bodyData});
            addIndicaLayer(wmsLayer);
        }).catch(e => {
            console.error(e);
        }); 
    }

    function renderErrorModal() {
        return (
            <Modal show={true} bsSize="small" onHide={() => {
                setSldError(false);
            }}>
                <Modal.Header className="dialog-error-header-side" closeButton>
                    <Modal.Title>{errorTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mapstore-error">{errorMessage}</div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
    <div id="query-form-panel">
        {sldError ? renderErrorModal(): ""}
        <SwitchPanel
            id="configFilterPanel"
            title="Configura indicatore"
            expanded
            locked
        >
        <div className="container-fluid">
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Risoluzione spaziale</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={risoluzioneSpaziale.map(a => a.value)}
                    fieldName="risoluzioneSpaziale"
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedRisSpaziale.value}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dimensione indicatore</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={dimensione.map(a => a.value)}
                    fieldName="dimensione"
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedIndicatore.value}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Periodicità</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={periodicita.map(a => a.value)}
                    fieldName="periodicita"
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedPeriodicita.value}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={6}>
                <div>Dettaglio Periodicità</div>
            </Col>
            <Col xs={6}>
                <ComboField
                    fieldOptions={ dettaglioPeriodicita.filter(dett => {return dett.fk_ris_temporale == selectedPeriodicita.id}).map(a => a.value)}
                    fieldName="dettaglioPeriodicita"
                    fieldRowId={new Date().getUTCMilliseconds()}
                    fieldValue={selectedDettaglioPeriodicita.value}
                    onUpdateField={updateField}/>
            </Col>
        </Row>
        </div>
        </SwitchPanel>
        <SwitchPanel
            id="tematizePanel"
            title="Tematizzazione"
            collapsible
            expanded={tematizePanelExpanded}
            onSwitch={(expanded) => setTematizePanelExpanded(expanded)}
        >
        <div className="container-fluid">
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={12}>
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
                                    if (!standardColors.includes(evt.value)) {
                                        setCustomColors(evt.value);
                                    }
                                    break;
                            }
                            if(evt.classification){
                                setColors(evt.classification);
                            }
                        }}
                    />
            </Symbolizer>
            </Col>
        </Row>
        </div>
        </SwitchPanel>
        <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
            <Col xs={12}>
                <Button onClick={applyStyle}>Applica</Button>
            </Col>
        </Row>
    </div>);
}

IndicaBuilder.propTypes = {
    risoluzioneSpaziale: PropTypes.array,
    dimensione: PropTypes.array,
    periodicita: PropTypes.array,
    dettaglioPeriodicita: PropTypes.object
};

export default connect((state) => {
    const activeConfig = state.siradec.activeFeatureType && state.siradec.configOggetti[state.siradec.activeFeatureType] || {};
    let risSp = [], dettPer = [], dim = [], period = [];
    if (activeConfig.indicaFilters) {
        let filters = activeConfig.indicaFilters;
        risSp = filters[0].values.map((att) => {
            return { id: att.id_ris_spaziale, value: att.des_ris_spaziale }
        });
        dim = filters[1].values.map((att) => {
            return { id: att.id_dimensione, value: att.des_dimensione }
        });
        period = filters[2].values.map((att) => {
            return { id: att.id_ris_temporale, value: att.des_ris_temporale }
        });
        dettPer = filters[3].values.map((att) => {
            return { fk_ris_temporale: att.fk_ris_temporale, id: att.id_ambito_temporale, value: att.valore ? att.valore + " - "+ att.anno : att.anno }
        });
    }
    
    return { 
        wmsLayer: activeConfig.layer,
        risoluzioneSpaziale: risSp,
        dimensione: dim,
        periodicita: period,
        dettaglioPeriodicita: dettPer,
    };
}, {
    addIndicaLayer: addIndicaLayer,
    removeIndicaLayer: removeIndicaLayer
})(IndicaBuilder);