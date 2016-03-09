/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const Debug = require('../../MapStore2/web/client/components/development/Debug');
const Localized = require('../../MapStore2/web/client/components/I18N/Localized');
const {connect} = require('react-redux');

const SiraMap = require('../components/SiraMap');
const SiraQueryPanel = require('../components/SiraQueryPanel');
const SiraFeatureGrid = require('../components/SiraFeatureGrid');
const Card = require('../components/template/Card');
const {Link} = require('react-router');

const {toggleControl} = require('../actions/controls');

const Sira = React.createClass({
    propTypes: {
        params: React.PropTypes.shape({
            profile: React.PropTypes.string
        }),
        error: React.PropTypes.object,
        loading: React.PropTypes.bool,
        messages: React.PropTypes.object,
        locale: React.PropTypes.string,
        cardModel: React.PropTypes.object,
        nsResolver: React.PropTypes.func,
        controls: React.PropTypes.object,
        toggleControl: React.PropTypes.func
    },
    getDefaultProps() {
        return {};
    },
    render() {
        let card = this.props.cardModel ? (
            <Card model={this.props.cardModel}/>
        ) : (
            <span/>
        );

        return (
            <Localized messages={this.props.messages} locale={this.props.locale}>
                <div>
                    <span className={this.props.error && 'error' || !this.props.loading && 'hidden' || ''}>
                        {this.props.error && ("Error: " + this.props.error) || (this.props.loading && "Loading...")}
                    </span>

                    <div className="links"><Link to="/">Home</Link></div>
                    <div className="toolbar">
                        <div className={"toolbar-item" + (this.props.controls.grid ? " open" : "")}><a href="#" onClick={this.toggleGrid}>Lista</a></div>
                        <div className={"toolbar-item" + (this.props.controls.detail ? " open" : "")}><a href="#" onClick={this.toggleDetail}>Scheda</a></div>
                    </div>
                    <div className="info">Profile: {this.props.params.profile}</div>
                    <SiraMap/>
                    <SiraQueryPanel/>
                    <SiraFeatureGrid/>
                    {card}
                    <Debug/>
                </div>
            </Localized>
        );
    },
    toggleGrid(evt) {
        evt.preventDefault();
        this.props.toggleControl('grid');
    },
    toggleDetail(evt) {
        evt.preventDefault();
        this.props.toggleControl('detail');
    }
});

module.exports = connect((state) => {
    return {
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {},
        cardModel: state.cardtemplate.model,
        controls: state.controls
    };
}, {
    toggleControl
})(Sira);
