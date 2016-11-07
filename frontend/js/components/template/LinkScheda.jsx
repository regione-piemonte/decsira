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
const {bindActionCreators} = require('redux');
const {loadCardModelConfig, activateSection} = require('../../actions/card');
const {toggleSiraControl} = require('../../actions/controls');

const LinkScheda = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        section: React.PropTypes.string,
        txt: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        btProps: React.PropTypes.object,
        toggleDetail: React.PropTypes.func,
        loadCardModelConfig: React.PropTypes.func,
        activateSection: React.PropTypes.func,
        card: React.PropTypes.object,
        open: React.PropTypes.bool,
        detailsConfig: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            id: null,
            section: null,
            btProps: {},
            txt: 'Link',
            toggleDetail: () => {},
            loadCardModelConfig: () => {},
            activateSection: () => {},
            card: {},
            open: false,
            detailsConfig: {}
        };
    },
    render() {
        return (this.props.id) ? (
            <Button bsStyle="link" onClick={this.btnClick} {...this.props.btProps}>
            {this.props.txt}
            </Button>
        ) : null;
    },
    btnClick() {
        this.props.loadCardModelConfig(this.props.card.template, this.props.detailsConfig.cardModelConfigUrl,
            this.props.detailsConfig.wfsUrl + "&FEATUREID=" + this.props.id);
        if (!this.props.open) {
            this.props.toggleDetail('detail');
        }
        if (this.props.section) {
            let sections = this.props.card.activeSections;
            let update = Object.keys(sections).some((k) => {
                return (k !== this.props.section && sections[k]);
            }, this);
            if (update || !this.props.card.activeSections[this.props.section]) {
                this.props.activateSection(this.props.section);
            }
        }

    }
});

module.exports = connect((state) => {
    return {
        card: state.cardtemplate || {},
        open: state.siraControls.detail,
        detailsConfig: state.grid.detailsConfig
    };
}, dispatch => {
    return bindActionCreators({
        toggleDetail: toggleSiraControl,
        loadCardModelConfig: loadCardModelConfig,
        activateSection: activateSection
    }, dispatch);
})(LinkScheda);
