/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Button} = require('react-bootstrap');
const {connect} = require('react-redux');
const {loadCardTemplate} = require('../../actions/card');
const {toggleSiraControl} = require('../../actions/controls');
const {
    loadFeatureTypeConfig
} = require('../../actions/siradec');
const LinkScheda = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        linkTitle: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        btProps: React.PropTypes.object,
        card: React.PropTypes.object,
        open: React.PropTypes.bool,
        detailsTemplateConfigURL: React.PropTypes.string,
        featureType: React.PropTypes.string,
        activeFeatureType: React.PropTypes.string,
        configOggetti: React.PropTypes.object,
        authParams: React.PropTypes.object,
        templateProfile: React.PropTypes.string,
        loadFeatureTypeConfig: React.PropTypes.func,
        toggleDetail: React.PropTypes.func,
        loadCardTemplate: React.PropTypes.func,
        params: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            id: null,
            btProps: {},
            linkTitle: 'Link',
            templateProfile: 'default',
            params: {},
            toggleDetail: () => {},
            loadCardModelConfig: () => {},
            activateSection: () => {}
        };
    },
    getInitialState() {
        return {
            linkDisabled: false
        };
    },
    componentWillMount() {
        // Se non passano un detailsTemplateConfigUrl e mi passano la featureType ma non ho la configuraziine caricata, devo disabilitare il link e caricare le configurazioni
        if (this.props.featureType && !this.props.configOggetti[this.props.featureType]) {
            this.setState({linkDisabled: true});
            this.props.loadFeatureTypeConfig(null, {authkey: this.props.authParams.authkey ? this.props.authParams.authkey : ''}, this.props.featureType, false);
        }
    },
    componentWillReceiveProps(nextProps) {
        if (this.state.linkDisabled && nextProps.featureType && nextProps.configOggetti[nextProps.featureType]) {
            this.setState({linkDisabled: false});
        }
    },
    getTempleteUrl(detailsConfig) {
        return typeof detailsConfig.template === "string" ? detailsConfig.template : detailsConfig.template[this.props.templateProfile];
    },
    render() {
        return (
            <Button bsStyle="link" onClick={this.btnClick} {...this.props.btProps} disabled={this.state.linkDisabled}>
                {this.props.linkTitle}
            </Button>
        );
    },
    btnClick() {
        // Solo configurazione è un drill up and down come in authorizedObject
        const detailsConfig = this.props.configOggetti[this.props.featureType] || this.props.configOggetti[this.props.activeFeatureType];
        const templateUrl = this.props.detailsTemplateConfigURL ? this.props.detailsTemplateConfigURL : this.getTempleteUrl(detailsConfig.card);
        let url;
        if (this.props.id) {
            url = detailsConfig.card.service.url;
            Object.keys(detailsConfig.card.service.params).forEach((param) => {
                url += `&${param}=${detailsConfig.card.service.params[param]}`;
            });
            url = `${url}&FEATUREID=${this.props.id}&authkey=${this.props.authParams.authkey}`;
        }
        this.props.loadCardTemplate(templateUrl, url, this.props.params);
        if (!this.props.open) {
            this.props.toggleDetail();
        }
    }
});

module.exports = connect((state) => {

    return {
        activeFeatureType: state.siradec.activeFeatureType,
        configOggetti: state.siradec.configOggetti,
        card: state.cardtemplate || {},
        open: state.siraControls.detail,
        authParams: state.userprofile.authParams
    };
}, {
        toggleDetail: toggleSiraControl,
        loadCardTemplate,
        loadFeatureTypeConfig
    })(LinkScheda);
