/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const {isObject, isEmpty, includes} = require('lodash');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const TemplateSira = require('./TemplateSira');
const {Modal, Button, Glyphicon} = require('react-bootstrap');
const {toggleSiraControl} = require("../../actions/controls");
const toggleDetail = toggleSiraControl.bind(null, 'detail');
const {generatePDF} = require("../../actions/card");
const img = require("../../../assets/img/scattered_poly.png");
const {configureTree} = require("../../actions/siraTree");
const assign = require('object-assign');
const SchedaToPDF = require('./SchedaToPDF');
const TemplateUtils = require('../../utils/TemplateUtils');
const {getWindowSize} = require('@mapstore/utils/AgentUtils');
const mapUtils = require('@mapstore/utils/mapUtils');
const {configureMultiLayerSelection, setCurrentFeatureRowData} = require('../../actions/featuregrid');
const {goToMapPage} = require('../../utils/SiraUtils');
const CoordinatesUtils = require('@mapstore/utils/CoordinatesUtils');
const {changeMapView} = require('@mapstore/actions/map');

const Draggable = require('react-draggable');
const SiraTree = require('../tree/SiraTree').default;

require("./card.css");

class Card extends React.Component {
    static propTypes = {
        card: PropTypes.shape({
            template: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.func]),
            loadingCardTemplateError: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object]),
            xml: PropTypes.oneOfType([
                PropTypes.string])
        }),
        authParam: PropTypes.object,
        profile: PropTypes.array,
        open: PropTypes.bool,
        withMap: PropTypes.bool,
        draggable: PropTypes.bool,
        // model: React.PropTypes.object,
        // impiantoModel: React.PropTypes.object,
        toggleDetail: PropTypes.func,
        generatePDF: PropTypes.func,
        configureTree: PropTypes.func,
        treeTemplate: PropTypes.string,
        configureMLS: PropTypes.func,
        pointSRS: PropTypes.string,
        zoom: PropTypes.number,
        multiLayerSelectionAttribute: PropTypes.string,
        rowData: PropTypes.object
    };

    static defaultProps = {
        card: {
            template: "",
            xml: null,
            loadingCardTemplateError: null
        },
        withMap: true,
        authParam: null,
        open: false,
        draggable: true,
        profile: [],
        pointSRS: "EPSG:4326",
        zoom: 15,
        // model: {},
        toggleDetail: () => {}
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.props.open) {
            !nextProps.open && this.props.setFeatureRowData({});
        }
    }

    renderLoadTemplateException = () => {
        let exception = this.props.card.loadingCardTemplateError;
        if (isObject(exception)) {
            exception = exception.status + ": " + exception.data;
        }

        return (
            <Modal
                show={ (exception) ? true : false}
                bsSize="small"
                onHide={this.props.toggleDetail} >
                <Modal.Header closeButton>
                    <Modal.Title>Data Exception</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mapstore-error">{exception}</div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    };

    renderTree = () => {
        this.props.configureTree(this.props.card.xml, this.props.treeTemplate);
    };

    renderCard = () => {
        const {maxWidth, maxHeight} = getWindowSize();
        const xml = this.props.card.xml;
        const authParam = this.props.authParam;
        const profile = this.props.profile;
        const model = assign({}, this.props.card, {
            authParam: authParam,
            profile: profile,
            withMap: this.props.withMap,
            getValue: (element) => TemplateUtils.getValue(xml, element),
            getList: (element) => TemplateUtils.getList(xml, element)
        });
        if (this.props.card.loadingCardTemplateError) {
            return this.renderLoadTemplateException();
        }
        const mlsButtonDisable = (!includes(window.location.hash, 'map') && isEmpty(this.props?.rowData?.geometry?.coordinates)) || isEmpty(this.props.geometryType);

        const Template = (
            <div className="scheda-sira">
                <TemplateSira template={this.props.card.template} model={model}/>
                <div id="card-btn-group">
                    <Button id="multiLayerSelect" disabled={mlsButtonDisable} style={{display: this.props.mlsShow ? 'inline-block' : 'none'}} onClick={this.onClickMLS}>
                        <img src={img} width={16} alt=""/>
                    </Button>
                    <Button id="scheda2pdf" onClick={this.props.generatePDF}>
                        <Glyphicon glyph="print"/>
                    </Button>
                    <Button id="treeButton" onClick={this.renderTree} style={{display: this.props.treeTemplate ? 'block' : 'none'}} disabled={this.props.card.xml === undefined || this.props.card.xml === null}>
                        <Glyphicon glyph="link"/>
                    </Button>
                </div>
                <SchedaToPDF profile={this.props.profile} authParam={authParam} withMap={this.props.withMap}/>
            </div>
        );
        return (this.props.draggable) ? (
            <div>
                <Draggable bounds={{left: 0, top: 0, right: maxWidth - 100, bottom: maxHeight - 100}} start={{x: (maxWidth / 2) - 425, y: 0}} handle=".panel-heading, .panel-heading *">
                    {Template}
                </Draggable>
                <SiraTree/>
            </div>) :
            <div>
                {Template}
                <SiraTree/>
            </div>;
    };

    render() {
        return (this.props.open) ? this.renderCard() : null;
    }

    onClickMLS = () => {
        const {geometry = {}} = this.props.rowData;
        this.props.configureMLS(this.props.columns, this.props.rowData);
        if (!!geometry?.coordinates) {
            this.changeMapView([geometry]);
        }
    }

    changeMapView = (geometries) => {
        let extent = geometries.reduce((prev, next) => {
            return CoordinatesUtils.extendExtent(prev, CoordinatesUtils.getGeoJSONExtent(next));
        }, CoordinatesUtils.getGeoJSONExtent(geometries[0]));
        let point = {crs: this.props.pointSRS, x: (extent[0] + extent[2]) / 2, y: (extent[1] + extent[3]) / 2};
        let center = this.props.pointSRS !== "EPSG:4326" ?
            CoordinatesUtils.reproject(point, this.props.pointSRS, "EPSG:4326") : point;
        const srs = "EPSG:4326";
        const proj = this.props.map.projection || "EPSG:3857";
        extent = (srs !== proj) ? CoordinatesUtils.reprojectBbox(extent, srs, proj) : extent;
        const zoom = mapUtils.getZoomForExtent(extent, this.props.map.size || {width: 876, height: 650}, 0, 16);
        this.props.changeMapView(center, zoom, null, null, null, this.props.map.projection || "EPSG:3857");
        if (!this.props.withMap) {
            goToMapPage(center, zoom);
        }
    };
}

module.exports = connect((state) => {
    const featureType = state.siradec.treeFeatureType || state.siradec.activeFeatureType;
    const cardConfig = state.siradec.configOggetti[featureType] || {};
    return {
        card: state.cardtemplate || {},
        open: state.siraControls.detail,
        treeTemplate: cardConfig && cardConfig.card ? cardConfig.card.treeTemplate : undefined,
        mlsShow: !isEmpty(cardConfig?.multiLayerSelect),
        map: state.map,
        rowData: state.siradec?.currentFeatureRowData || {},
        columns: cardConfig.featuregrid?.grid?.columns || [],
        geometryType: cardConfig.featuregrid?.geometryType || ''
    };
}, dispatch => {
    return bindActionCreators({
        toggleDetail: toggleDetail,
        generatePDF: generatePDF.bind(null, true),
        configureTree,
        configureMLS: configureMultiLayerSelection,
        changeMapView: changeMapView,
        setFeatureRowData: setCurrentFeatureRowData
    }, dispatch);
})(Card);
