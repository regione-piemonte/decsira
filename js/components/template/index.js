/*eslint-disable */
const{Panel} = require('react-bootstrap');
const React = require('react');
const DetailTitle = require("./DetailTitle");
const Section = require("./Section");
const LabeledField = require("./LabeledField");
const LinkToPage = require ('../../../MapStore2/web/client/components/misc/LinkToPage');
const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('../GoToDetail');
const ZoomToRenderer = require ('../../../MapStore2/web/client/components/data/featuregrid/ZoomToFeatureRenderer');
const MappaScheda = require("./PreviewMap");
const SiraTable = require("./SiraTable");
const renderSira = function(comp, props) {
    let model = props.model;
    return eval(comp);
};
/*eslint-enable */
module.exports = renderSira;
