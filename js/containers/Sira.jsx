/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const Localized = require('../../MapStore2/web/client/components/I18N/Localized');
const {connect} = require('react-redux');

const SiraMap = require('../components/SiraMap');

const Viewer = (props) => (
    <Localized messages={props.messages} locale={props.locale}>
        <div>
            <span className={props.error && 'error' || !props.loading && 'hidden' || ''}>
                {props.error && ("Error: " + props.error) || (props.loading && "Loading...")}
            </span>
            <SiraMap/>
        </div>
    </Localized>
);

module.exports = connect((state) => {
    return {
        loading: !state.config || !state.locale || false,
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {}
    };
})(Viewer);
