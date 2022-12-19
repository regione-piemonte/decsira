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
const { closeIndicaConfiguration } = require('../../actions/siradec');
const LayersUtils = require('@mapstore/utils/LayersUtils');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const I18N = require('@mapstore/components/I18N/I18N');

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
    addLayer,
    removeLayer,
    indicaform,
    currLayer,
    currentSiraId,
    closeConfiguration,
    geometryType,
    messages
}) {

    function getRampColors(color) {
        const colorOption = getColors().filter((opt) => {
            return color === opt.name;
        })[0];
        return {
            startColor: colorOption.colors[0],
            endColor: colorOption.colors[1]
        };
    }

    const [selectedRisSpaziale, setSelectedRisSpaziale] = useState({});
    const [selectedIndicatore, setSelectedIndicatore] = useState({});
    const [selectedPeriodicita, setSelectedPeriodicita] = useState({});
    const [selectedDettaglioPeriodicita, setSelectedDettaglioPeriodicita] = useState({});
    const [intervals, setIntervals] = useState(defaultIntervals);
    const [classification, setClassification] = useState(defaultMethod);
    const [colorramp, setColorRamp] = useState(defaultRamp);
    const [colors, setColors] = useState([]);
    const [rampColors, setRampColors] = useState(getRampColors(defaultRamp));
    const [sldError, setSldError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [tematizePanelExpanded, setTematizePanelExpanded] = useState(true);
    const [formTouched, setFormTouched] = useState(false);
    const standardColors = ['red', 'blue', 'gray', 'jet'];
    const [dimOptions, setDimOptions] = useState([]);

    const formData = React.useRef({
        selectedRisSpaziale: selectedRisSpaziale,
        selectedIndicatore: selectedIndicatore,
        selectedPeriodicita: selectedPeriodicita,
        selectedDettaglioPeriodicita: selectedDettaglioPeriodicita,
        classification: classification,
        intervals: intervals,
        colorramp: colorramp,
        rampColors: rampColors,
        colors: colors,
        tematizePanelExpanded: tematizePanelExpanded
    }
    ); // ref to store state value

    wmsLayer.type = "wms";
    wmsLayer.CRS = 'EPSG:32632';

    React.useEffect(() => {
        // console.log("IndicaBuilder MOUNT");
        // console.log(indicaform);
        if (indicaform // null and undefined check
            && Object.keys(indicaform).length > 0) {
            setSelectedRisSpaziale(indicaform.selectedRisSpaziale);
            setSelectedIndicatore(indicaform.selectedIndicatore);
            setSelectedPeriodicita(indicaform.selectedPeriodicita);
            setSelectedDettaglioPeriodicita(indicaform.selectedDettaglioPeriodicita);
            setClassification(indicaform.classification);
            setIntervals(indicaform.intervals);
            setColorRamp(indicaform.colorramp);
            setRampColors(indicaform.rampColors);
            setColors(indicaform.colors);
            setTematizePanelExpanded(indicaform.tematizePanelExpanded);
        }
    }, []);

    const layer = {
        // url: "http://ts-tc2-decsira.site03.nivolapiemonte.it:8080/geoserver",
        url: ConfigUtils.getConfigProp('geoserverUrl'),
        name: wmsLayer.name,
        thematic: {
            fieldAsParam: true
        }
    };

    function getViewParams() {
        return viewParams.replace("%RIS_SPAZIALE%", selectedRisSpaziale.id)
            .replace("%DIMENSIONE%", selectedIndicatore.id)
            .replace("%AMBITO_TEMPORALE%", selectedDettaglioPeriodicita.id);
    }

    function getWmsTitle() {
        if (!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return "";
        }
        return description + " - "
            + selectedIndicatore.value + " - "
            + selectedIndicatore.unitaMisura + " - "
            + selectedRisSpaziale.value + " - "
            + selectedPeriodicita.value + " - "
            + selectedDettaglioPeriodicita.value;
    }

    function getIndicaTitle() {
        if (!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return "";
        }
        return selectedIndicatore.value + " - "
            + selectedIndicatore.unitaMisura + " - "
            + selectedRisSpaziale.value + " - "
            + selectedPeriodicita.value + " - "
            + selectedDettaglioPeriodicita.value;
    }

    function setCustomColors(color) {
        let newColors = getRampColors(color);
        setRampColors(newColors);
    }

    function floorRuleValue(value, index) {
        return index === 0 ? Math.floor(value) : value;
    }

    function ceilRuleValue(value, index, maxIndex) {
        let v = value + 0.5;
        return index === maxIndex ? Math.ceil(v) : value;
    }

    function setupStyle() {
        if (!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return;
        }
        let styleOpts = {};
        if (!formTouched) {
            styleOpts = {
                ramp: "custom",
                customClasses: colors.map(col => { return col.min + ',' + col.max + ',' + col.color; }).join(';'),
                attribute: attribute,
                intervals,
                method: classification,
                viewparams: getViewParams()
            };
        } else {
            setCustomColors(colorramp);
            styleOpts = {
                ramp: standardColors.includes(colorramp) ? colorramp : "custom",
                attribute: attribute,
                intervals,
                method: classification,
                viewparams: getViewParams(),
                startColor: rampColors.startColor,
                endColor: rampColors.endColor
            };
        }
        const urlMetadata = getStyleMetadataService(layer, styleOpts);

        axios.get(urlMetadata).then((resp) => {
            let rules = resp.data.Rules.Rule;
            if (!Array.isArray(rules)) {
                rules = [rules];
            }
            let colorsArray = [];
            let lastRuleIndex = rules.length - 1;
            rules.forEach((rule, index) => {
                rule.Filter.And ?
                    colorsArray.push({
                        color: geometryType === 'Point' ? rule.PointSymbolizer.Graphic.Mark.Fill.CssParameter.$ :
                            rule.PolygonSymbolizer.Fill.CssParameter.$,
                        min: rule.Filter.And.PropertyIsGreaterThan ?
                            floorRuleValue(rule.Filter.And.PropertyIsGreaterThan.Literal, index) :
                            floorRuleValue(rule.Filter.And.PropertyIsGreaterThanOrEqualTo.Literal, index),
                        max: rule.Filter.And.PropertyIsLessThan ?
                            ceilRuleValue(rule.Filter.And.PropertyIsLessThan.Literal, index, lastRuleIndex) :
                            ceilRuleValue(rule.Filter.And.PropertyIsLessThanOrEqualTo.Literal, index, lastRuleIndex)
                    })
                    : colorsArray.push({
                        color: geometryType === 'Point' ? rule.PointSymbolizer.Graphic.Mark.Fill.CssParameter.$ :
                            rule.PolygonSymbolizer.Fill.CssParameter.$,
                        min: rule.Filter.PropertyIsEqualTo.Literal,
                        max: rule.Filter.PropertyIsEqualTo.Literal
                    });
            });
            setColors(colorsArray);
        }).catch(error => {
            if (error.status && error.status === 404) {
                setErrorTitle("Dati non disponibili");
                setErrorMessage("Non ci sono dati disponibi per la ricerca effettuata.");
            } else {
                setErrorTitle("Errore");
                setErrorMessage("Errore nella classificazione dei dati.");
            }
            // console.error(error);
            setColors([]);
            setSldError(true);
            wmsLayer.title = getWmsTitle();
            removeLayer(wmsLayer);
        });
    }

    React.useEffect(() => {
        formData.current = {
            selectedRisSpaziale: selectedRisSpaziale,
            selectedIndicatore: selectedIndicatore,
            selectedPeriodicita: selectedPeriodicita,
            selectedDettaglioPeriodicita: selectedDettaglioPeriodicita,
            classification: classification,
            intervals: intervals,
            colorramp: colorramp,
            rampColors: rampColors,
            colors: colors,
            tematizePanelExpanded: tematizePanelExpanded
        };
        setupStyle();
    }, [intervals,
        classification,
        colorramp,
        selectedRisSpaziale,
        selectedIndicatore,
        selectedPeriodicita,
        selectedDettaglioPeriodicita]
    );

    React.useEffect(() => {
        formData.current.colors = colors;
    }, [colors]);

    React.useEffect(() => {
        formData.current.tematizePanelExpanded = tematizePanelExpanded;
    }, [tematizePanelExpanded]);

    React.useEffect(() => {
        setDimOptions(dimensione.filter(dim => { return dim.fk_ris_spaziale === selectedRisSpaziale.id; }));
    }, [selectedRisSpaziale]);

    function getOptionFromValue(array, value) {
        return array.filter((opt) => {
            return value === opt.value && opt;
        })[0];
    }

    const updateField = useCallback((id, name, value) => {
        setFormTouched(true);
        if (name === "risoluzioneSpaziale") {
            const opt = getOptionFromValue(risoluzioneSpaziale, value);
            setSelectedRisSpaziale(opt);
            setSelectedIndicatore({});
        }
        if (name === "dimensione") {
            const opt = getOptionFromValue(dimOptions, value);
            setSelectedIndicatore(opt);
            setIntervals(opt.intervals);
            setClassification(opt.method);
            setColorRamp(opt.ramp);
            setCustomColors(opt.ramp);
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

    const updateSymbolizer = useCallback((evt) => {
        setFormTouched(true);
        switch (evt.param) {
        case "intervals":
            if (evt.value >= 1 && evt.value <= 10) {
                setIntervals(evt.value);
            }
            break;
        case "classification":
            setClassification(evt.value);
            break;
        case "colorramp":
            setColorRamp(evt.value);
            setCustomColors(evt.value);
            break;
        default:
            break;
        }
        if (evt.classification) {
            setColors(evt.classification);
        }
    });

    const params = {
        "intervals": {
            type: "input",
            label: LocaleUtils.getMessageById(messages, "IndicaBuilder.intervalsLabel"),
            getValue: (value) => ({ param: "intervals", value: parseInt(value, 10) }),
            config: {
                type: "number"
            }
        },
        "classification": {
            type: "select",
            label: LocaleUtils.getMessageById(messages, "IndicaBuilder.classificationLabel"),
            config: {
                getOptions: () => [{ label: "Equal Interval", value: "equalInterval" }, { label: "Quantile", value: "quantile" }, { label: "Jenks", value: "jenks" }],
                selectProps: {},
                isValid: () => true
            },
            getValue: (value) => ({ param: "classification", value })
        },
        "colorramp": {
            type: "colorRamp",
            label: LocaleUtils.getMessageById(messages, "IndicaBuilder.colorRampLabel"),
            config: {
                samples: 4,
                getOptions: () => getColors(),
                // eslint-disable-next-line no-shadow
                rampFunction: ({ colors }) => colors
            },
            getValue: (value) => ({ param: "colorramp", value })
        },
        "colors": {
            type: "colorMap"
        }
    };

    const properties = {
        intervals,
        classification,
        colorramp,
        colors
    };

    function isUpdate() {
        return currLayer && currLayer.params.viewparams === wmsLayer.params.viewparams;
    }

    function applyStyle() {
        if (!(selectedRisSpaziale.id && selectedIndicatore.id && selectedDettaglioPeriodicita.id)) {
            return;
        }

        // layer.url = "http://localhost:8080/geoserver";
        layer.url = ConfigUtils.getConfigProp('geoserverSldServiceUrl');
        const sldUrl = getStyleService(layer, {
            ramp: "custom",
            customClasses: colors.map(col => { return col.min + ',' + col.max + ',' + col.color;}).join(';'),
            attribute: attribute,
            intervals,
            method: classification,
            viewparams: getViewParams(),
            strokeColor: geometryType === 'Point' ? '#000000' : undefined,
            pointSize: geometryType === 'Point' ? 10 : undefined
        });

        wmsLayer.title = getWmsTitle();
        wmsLayer.opacity = geometryType === 'Point' ? 1 : 0.7;
        wmsLayer.params = assign({}, wmsLayer.params, {
            SLD: sldUrl,
            viewparams: getViewParams(),
            isIndicatore: true,
            indicaform: formData.current,
            siraId: currentSiraId,
            indicaTitle: getIndicaTitle()
        });
        // wmsLayer.indicaTitle = getIndicaTitle();
        // wmsLayer.viewparams = getViewParams();
        // wmsLayer.isIndicatore = true;
        // wmsLayer.indicaform = formData.current;
        // wmsLayer.siraId = currentSiraId;

        if (isUpdate()) {
            wmsLayer.id = currLayer.id;
        } else {
            // Annullo l'id del vecchio layer
            wmsLayer.id = undefined;
            // Chiedo un id random per il nuovo layer
            wmsLayer.id = LayersUtils.getLayerId(wmsLayer);
        }
        addLayer(wmsLayer);
        closeConfiguration();
    }

    function renderErrorModal() {
        return (
            <Modal show bsSize="small" onHide={() => {
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
            {sldError ? renderErrorModal() : ""}
            <SwitchPanel
                id="configFilterPanel"
                title={LocaleUtils.getMessageById(messages, "IndicaBuilder.configPanelTitle")}
                expanded
                locked
            >
                <div className="container-fluid">
                    <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
                        <Col xs={6}>
                            <div><I18N.Message msgId={"IndicaBuilder.risoluzioneSpaziale"}/></div>
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
                            <div><I18N.Message msgId={"IndicaBuilder.dimensione"}/></div>
                        </Col>
                        <Col xs={6}>
                            <ComboField
                                fieldOptions={dimOptions.map(a => a.value)}
                                // fieldOptions={dimensione.map(a => a.value)}
                                fieldName="dimensione"
                                fieldRowId={new Date().getUTCMilliseconds()}
                                fieldValue={selectedIndicatore.value}
                                onUpdateField={updateField}/>
                        </Col>
                    </Row>
                    <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
                        <Col xs={6}>
                            <div><I18N.Message msgId={"IndicaBuilder.periodicita"}/></div>
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
                            <div><I18N.Message msgId={"IndicaBuilder.dettaglioPeriod"}/></div>
                        </Col>
                        <Col xs={6}>
                            <ComboField
                                fieldOptions={dettaglioPeriodicita.filter(dett => { return dett.fk_ris_temporale === selectedPeriodicita.id;}).map(a => a.value)}
                                fieldName="dettaglioPeriodicita"
                                fieldRowId={new Date().getUTCMilliseconds()}
                                fieldValue={selectedDettaglioPeriodicita.value}
                                onUpdateField={updateField}/>
                        </Col>
                    </Row>
                </div>
            </SwitchPanel>
            <div className="dhContainer">
                <b><I18N.Message msgId={"IndicaBuilder.selectedIndica"}/></b> <br/> {getIndicaTitle()}
            </div>
            <SwitchPanel
                id="tematizePanel"
                title={LocaleUtils.getMessageById(messages, "IndicaBuilder.temaPanelTitle")}
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
                                    onChange={updateSymbolizer}
                                />
                            </Symbolizer>
                        </Col>
                    </Row>
                </div>
            </SwitchPanel>
            <Row className="logicHeader inline-form filter-field-row filter-field-fixed-row">
                <Col xs={12}>
                    <Button onClick={applyStyle}><I18N.Message msgId={"IndicaBuilder.applyBtn"}/></Button>
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
    const layers = state.layers.flat;
    const layerId = state.siradec.currentNodeId ? state.siradec.currentNodeId : null;
    const currLayer = layerId ? layers.filter((l) => l.id === layerId)[0] : null;
    const layerConfig = currLayer ? state.siradec.configOggetti[currLayer.featureType] : null;
    const config = layerConfig ? layerConfig : activeConfig;

    let risSp = []; let dettPer = []; let dim = []; let period = [];
    if (config.indicaFilters) {
        let filters = config.indicaFilters;
        risSp = filters[0].values.map((att) => {
            return { id: att.fk_ris_spaziale, value: att.des_ris_spaziale };
        });
        dim = filters[1].values.map((att) => {
            return {
                id: att.fk_dimensione,
                value: att.des_dimensione,
                unitaMisura: att.des_unita_misura,
                ramp: att.des_ramp,
                method: att.method,
                intervals: att.intervals,
                fk_ris_spaziale: att.fk_ris_spaziale
            };
        });
        period = filters[2].values.map((att) => {
            return { id: att.fk_ris_temporale, value: att.des_ris_temporale };
        });
        dettPer = filters[3].values.map((att) => {
            return { fk_ris_temporale: att.fk_ris_temporale, id: att.fk_ambito_temporale, value: att.valore ? att.valore + " - " + att.anno : att.anno };
        });
    }

    return {
        wmsLayer: config.layer,
        risoluzioneSpaziale: risSp,
        dimensione: dim,
        periodicita: period,
        dettaglioPeriodicita: dettPer,
        currLayer: currLayer,
        // currSiraId: state.siradec.currentSiraId,
        indicaform: currLayer ? currLayer.params.indicaform : undefined,
        geometryType: config.geometryType,
        messages: state.locale.messages
    };
}, {
    addLayer: addIndicaLayer,
    removeLayer: removeIndicaLayer,
    closeConfiguration: closeIndicaConfiguration
})(IndicaBuilder);
