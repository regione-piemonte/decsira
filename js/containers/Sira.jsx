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
const Card = require('../components/template/Card');
const {Link} = require('react-router');

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
        nsResolver: React.PropTypes.func
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
                    <div className="info">Profile: {this.props.params.profile}</div>
                    <SiraMap/>
                    <SiraQueryPanel/>
                    {card}
                    <Debug/>
                </div>
            </Localized>
        );
    }
});

module.exports = connect((state) => {
    return {
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {},
        cardModel: state.cardtemplate.model
    };
})(Sira);
