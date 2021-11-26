/*eslint-disable */

const{Panel} = require('react-bootstrap');
const React = require('react');
const DetailTitle = require("./DetailTitle");
const Section = require("./Section");
const LabeledField = require("./LabeledField");
const LinkToPage = require ('@mapstore/components/misc/LinkToPage');
const {reactCellRendererFactory} = require('../identify/featuregrid/CellRendererFactory');
const GoToDetail = require('../GoToDetail');
const ZoomToRenderer = require ('../identify/featuregrid/ZoomToFeature');
const MappaScheda = require("./PreviewMap");
const LinkScheda = require("./LinkScheda");
const AuthorizedObject = require("./AuthorizedObject");
const AdempimentiAmbientali = require("./AdempimentiAmbientali");
const SiraTable = require("./SiraTable");
const AttachmentTable = require("./AttachmentTable");
const TreeTitle = require("../tree/TreeTitle");
const TreeData = require("../tree/TreeData");
const TemplateUtils = require('../../utils/TemplateUtils');
const ProfileWrapper = require('./ProfileWrapper');
const QGisZoom = require('./QGisZoom')

const renderSira = function(comp, props) {
    let model = props.model;
    // let impiantoModel = props.impiantoModel;
    return eval(comp);
};

/* eslint-enable */
module.exports = renderSira;
