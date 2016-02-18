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

const Sira = (props) => (
    <Localized messages={props.messages} locale={props.locale}>
        <div>
            <span className={props.error && 'error' || !props.loading && 'hidden' || ''}>
                {props.error && ("Error: " + props.error) || (props.loading && "Loading...")}
            </span>

            <div className="links"><Link to="/">Home</Link></div>
            <div className="info">Profile: {props.params.profile}</div>
            <SiraMap/>
            <SiraQueryPanel/>
            <Card model={{id: 10, codicesira: "12345", comune: "Torino", provincia: "Torino", tipo: "Provvedimento"}}/>
            <Debug/>
        </div>
    </Localized>
);

Sira.propTypes = {
    params: React.PropTypes.shape({
        profile: React.PropTypes.string
    }),
    messages: React.PropTypes.object,
    locale: React.PropTypes.string
};

module.exports = connect((state) => {
    return {
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {}
    };
})(Sira);
