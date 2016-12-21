/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {generatePDF, mapImageReady} = require("../../actions/card");
const TemplateSiraHtml = require('./TemplateSiraHtml');
const TemplateUtils = require('../../utils/TemplateUtils');
const assign = require('object-assign');
const scheda2pdf = require('../../utils/ExportScheda');
const Spinner = require('react-spinkit');
const SchedaToPDF = React.createClass({
    propTypes: {
           card: React.PropTypes.shape({
               mapImageReady: React.PropTypes.bool,
               generatepdf: React.PropTypes.bool,
               template: React.PropTypes.oneOfType([
                       React.PropTypes.string,
                       React.PropTypes.func]),
               loadingCardTemplateError: React.PropTypes.oneOfType([
                       React.PropTypes.string,
                       React.PropTypes.object]),
               xml: React.PropTypes.oneOfType([
                       React.PropTypes.string])
           }),
           authParam: React.PropTypes.object,
           withMap: React.PropTypes.bool,
           generatePDF: React.PropTypes.func,
           mapImageReady: React.PropTypes.func
       },
       getDefaultProps() {
           return {
               card: {
                   template: "",
                   xml: null,
                   loadingCardTemplateError: null
               },
               withMap: true,
               authParam: null,
               open: false,
               draggable: true,
               // model: {},
               toggleDetail: () => {}
           };
       },
       componentWillReceiveProps(nextProps) {
           if (nextProps.card && nextProps.card.mapImageReady) {
               this.generatePDF();
           }
       },
       shouldComponentUpdate(nextProps) {
           return (nextProps.card && !nextProps.card.mapImageReady);
       },
       renderHtml() {
        const xml = this.props.card.xml;
        const authParam = this.props.authParam;
        const model = assign({}, this.props.card, {
            authParam: authParam,
            profile: authParam.userName,
            withMap: this.props.withMap,
            getValue: (element) => TemplateUtils.getValue(xml, element)
        });
        if (this.props.card.loadingCardTemplateError) {
            return this.renderLoadTemplateException();
        }
        const Template = (
            <div ref={(el) => { this.getRef(el); }} className="scheda-sira-html" style={{"visibility": "hidden"}}>
                 <TemplateSiraHtml template={this.props.card.template} model={model}/>
            </div>
            );
        return Template;
    },
    renderMask() {
        return (
            <div>
                <div className="schedapdf-spinner">
                        <Spinner style={{width: "60px"}} spinnerName="three-bounce" noFadeIn/>
                </div>
                {this.renderHtml()}
            </div>);
    },
    render() {
        return ( this.props.card && this.props.card.generatepdf && this.props.card.template && this.props.card.xml) ? (
            <div style={{'position': 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1300,
                backgroundColor: "rgba(10, 10, 10, 0.38)"}}>
                {this.renderMask()}
            </div>) : null;
    },
    getRef(el) {
        this.el = el ? el : null;
        if (this.props.card && (this.props.card.mapImageReady || !this.props.withMap)) {
            this.generatePDF();
        }
    },
    generatePDF() {
        if (this.el) {
            const pdf = scheda2pdf(this.el);
            pdf.save();
            this.props.generatePDF();
            this.props.mapImageReady(false);
        }
    }

});

module.exports = connect((state) => {
    return {
        card: state.cardtemplate || {}
    };
}, {
    generatePDF: generatePDF.bind(null, false),
    mapImageReady
})(SchedaToPDF);

