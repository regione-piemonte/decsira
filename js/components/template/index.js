/*eslint-disable */
const{Panel} = require('react-bootstrap');
const React = require('react');
const DetailTitle = require("./DetailTitle");
const Section = require("./Section");
const LabeledField = require("./LabeledField");
const TipoRifiuti = require("./TipoRifiuti");
const Cer = require("./Cer");
const OpRec = require("./OperazioniRecupero");
const LinkToPage = require ('../../../MapStore2/web/client/components/misc/LinkToPage');
const LinkScheda = require("./LinkScheda");
const MappaScheda = require("./PreviewMap");
const renderSira = function(comp, model) {
        return eval(comp);
};
/*eslint-enable */
module.exports = renderSira;
