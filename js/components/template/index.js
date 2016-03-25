/*eslint-disable */
const{Panel} = require('react-bootstrap');
const React = require('react');
const DetailTitle = require("./DetailTitle");
const Section = require("./Section");
const LabeledField = require("./LabeledField");
const LinkToPage = require ('../../../MapStore2/web/client/components/misc/LinkToPage');
const MappaScheda = require("./PreviewMap");
const SiraTable = require("./SiraTable");
const renderSira = function(comp, model) {
        return eval(comp);
};
/*eslint-enable */
module.exports = renderSira;
