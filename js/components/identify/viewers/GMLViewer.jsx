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
        response: React.PropTypes.string,
        contentConfig: React.PropTypes.object,
        detailOpen: React.PropTypes.bool,
        actions: React.PropTypes.shape({
            onDetail: React.PropTypes.func,
            onShowDetail: React.PropTypes.func
        })
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.response !== this.props.response;
    },
    onCellClicked(node) {
        if (node.colIndex === 0) {
            this.goToDetail(node.data);
        }
    },
    render() {
        let model = TemplateUtils.getModels(this.props.response,
            this.props.contentConfig.modelConfig.root,
            this.props.contentConfig.modelConfig.config, "1.1.0");

        return (
            <TemplateSira
                template={this.props.contentConfig.template}
                model={{rows: model}}
                onCellClicked={this.onCellClicked}/>
        );
    },
    goToDetail(data) {
        let reqURL = this.props.contentConfig.detailsConfig.wfsUrl + "&FEATUREID=" + data.id;
        for (let param in this.props.params) {
            if (this.props.params.hasOwnProperty(param)) {
                reqURL += "&" + param + "=" + this.props.params[param];
            }
        }

        this.props.actions.onDetail(
            this.props.contentConfig.detailsConfig.cardTemplateConfigUrl,
            this.props.contentConfig.detailsConfig.cardModelConfigUrl,
            reqURL
        );

        if (!this.props.detailOpen) {
            this.props.actions.onShowDetail();
        }
    }
});

module.exports = GMLViewer;
