/*eslint-disable */

const Panel = require('./Panel');
const React = require('react');
const DetailTitle = require("./DetailTitle");
const Section = require("./Section");
const LabeledField = require("./LabeledField");
const LinkToPage = require ('../../../../MapStore2/web/client/components/misc/LinkToPage');
const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('../../GoToDetail');
const ZoomToRenderer = require ('../../../../MapStore2/web/client/components/data/featuregrid/ZoomToFeatureRenderer');
const MappaScheda = require("./PreviewMap");
const LinkScheda = require("../LinkScheda");
const AuthorizedObject = require("../AuthorizedObject");
const AdempimentiAmbientali = require("../AdempimentiAmbientali");
const SiraTable = require("./SiraTable");


const TemplateUtils = require('../../../utils/TemplateUtils');
const ProfileWrapper = require('../ProfileWrapper');
const QGisZoom = require('./QgisZoom')

const renderSira = function(comp, props) {
    let model = props.model;
    // let impiantoModel = props.impiantoModel;
    return eval(comp);
};

/*eslint-enable */
module.exports = renderSira;
