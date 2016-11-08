/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const TemplateSira = require('../../template/TemplateSira');
const TemplateUtils = require('../../../utils/TemplateUtils');

const GMLViewer = React.createClass({
    propTypes: {
        params: React.PropTypes.object,
        profile: React.PropTypes.string,
        response: React.PropTypes.string,
        contentConfig: React.PropTypes.object,
        detailOpen: React.PropTypes.bool,
        templateProfile: React.PropTypes.string,
        actions: React.PropTypes.shape({
            onDetail: React.PropTypes.func,
            onShowDetail: React.PropTypes.func
        })
    },
    getDefaultProps() {
        return {
            templateProfile: 'default'
        };
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.response !== this.props.response;
    },
    onCellClicked(node) {
        if (node.colIndex === 0 && node.colDef.id) {
            this.goToDetail(node.data, node.colDef.field);
        }
    },
    render() {
        const xml = this.props.response;
        // const authParam = this.props.authParam;
        const model = {
            // authParam: authParam,
            profile: this.props.profile,
            getValue: (element) => TemplateUtils.getValue(xml, element, null)
        };

        /*let model = TemplateUtils.getModels(this.props.response,
            this.props.contentConfig.modelConfig.root,
            this.props.contentConfig.modelConfig.columns, "1.1.0");*/

        return (
            <TemplateSira
                template={this.props.contentConfig.template}
                model={model}
                onCellClicked={this.onCellClicked}/>
        );
    },
    goToDetail(data, idFieldName) {
        let url = this.props.contentConfig.detailsConfig.service.url;
        let urlParams = this.props.contentConfig.detailsConfig.service.params;
        for (let param in urlParams) {
            if (urlParams.hasOwnProperty(param)) {
                url += "&" + param + "=" + urlParams[param];
            }
        }

        let templateUrl = typeof this.props.contentConfig.detailsConfig.template === "string" ? this.props.contentConfig.detailsConfig.template : this.props.contentConfig.detailsConfig.template[this.props.templateProfile];
        this.props.actions.onDetail(
             templateUrl,
            // this.props.detailsConfig.cardModelConfigUrl,
            url + "&FEATUREID=" + data[idFieldName]
        );

        if (!this.props.detailOpen) {
            this.props.actions.onShowDetail();
        }
    }
});

module.exports = GMLViewer;
