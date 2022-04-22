const PropTypes = require('prop-types');
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

const { isString } = require('lodash');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const {setTreeFeatureType} = require('../../../actions/siradec');
const {closeTree} = require('../../../actions/siraTree');

class GMLViewer extends React.Component {
    static propTypes = {
        params: PropTypes.object,
        profile: PropTypes.string,
        response: PropTypes.string,
        contentConfig: PropTypes.object,
        detailOpen: PropTypes.bool,
        templateProfile: PropTypes.string,
        layerId: PropTypes.string,
        actions: PropTypes.shape({
            onDetail: PropTypes.func,
            onShowDetail: PropTypes.func,
            loadTemplate: PropTypes.func
        })
    };

    static defaultProps = {
        templateProfile: 'default'
    };

    loadTemplate = (props) => {
        if (props.contentConfig.template && props.contentConfig.template.needsLoading && props.contentConfig.detailsConfig && props.contentConfig.detailsConfig.featureinfo.templateURL) {
            this.props.actions.loadTemplate(props.contentConfig.layerId, props.contentConfig.detailsConfig.featureinfo.templateURL);
        }
    };

    componentDidMount() {
        this.loadTemplate(this.props);

    }

    componentWillReceiveProps(newProps) {
        this.loadTemplate(newProps);
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.response !== this.props.response) ||
          nextProps.contentConfig.template !== this.props.contentConfig.template;
    }

    onCellClicked = (node) => {
        if (node.colIndex === 0 && node.colDef.id) {
            this.goToDetail(node.data, node.colDef.field);
        }
    };

    render() {
        const xml = this.props.response;
        // const authParam = this.props.authParam;
        const model = {
            // authParam: authParam,
            profile: this.props.profile,
            getValue: (element) => TemplateUtils.getValue(xml, element, null)
        };

        /* let model = TemplateUtils.getModels(this.props.response,
            this.props.contentConfig.modelConfig.root,
            this.props.contentConfig.modelConfig.columns, "1.1.0");*/

        return (
            isString(this.props.contentConfig.template) ?
                <TemplateSira
                    template={this.props.contentConfig.template}
                    model={model}
                    onCellClicked={this.onCellClicked}/> : null
        );
    }

    goToDetail = (data, idFieldName) => {
        this.props.setTreeFeatureType(undefined);
        this.props.closeTree();

        let url = this.props.contentConfig.detailsConfig.card.service.url;
        let urlParams = this.props.contentConfig.detailsConfig.card.service.params;
        for (let param in urlParams) {
            if (urlParams.hasOwnProperty(param)) {
                url += "&" + param + "=" + urlParams[param];
            }
        }

        let templateUrl = typeof this.props.contentConfig.detailsConfig.card.template === "string" ? this.props.contentConfig.detailsConfig.card.template : this.props.contentConfig.detailsConfig.card.template[this.props.templateProfile];
        this.props.actions.onDetail(
            templateUrl,
            // this.props.detailsConfig.cardModelConfigUrl,
            url + "&FEATUREID=" + data[idFieldName]
        );

        if (!this.props.detailOpen) {
            this.props.actions.onShowDetail();
        }
    };
}

// module.exports = GMLViewer;

module.exports = connect(() => { }, dispatch => {
    return bindActionCreators({
        setTreeFeatureType,
        closeTree
    }, dispatch);
})(GMLViewer);
