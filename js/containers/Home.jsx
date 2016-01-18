/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const Debug = require('../../MapStore2/web/client/components/development/Debug');
const {connect} = require('react-redux');

const Localized = require('../../MapStore2/web/client/components/I18N/Localized');

const {Link} = require('react-router');

const Home = (props) => (
    <Localized messages={props.messages} locale={props.locale}>
        <div>
            <div className="homepage">
                <div className="header">HomePage</div>
                <div className="main">
                    <ul>
                        <li><Link to="/map/A">Profilo A</Link></li>
                        <li><Link to="/map/B">Profilo B</Link></li>
                    </ul>
                </div>
            </div>
            <Debug/>
        </div>
    </Localized>
);

module.exports = connect((state) => {
    return {
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {}
    };
})(Home);
