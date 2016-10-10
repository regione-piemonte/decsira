/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const Debug = require('../../MapStore2/web/client/components/development/Debug');

const {Router, Route, hashHistory} = require('react-router');

const Sira = require('./Sira');
const Home = require('./Home');
const Dataset = require('./Dataset');

const Localized = require('../../MapStore2/web/client/components/I18N/Localized');

const App = (props) => {
    return (
        <div className="fill">
            <Localized messages={props.messages} locale={props.current} loadingError={props.localeError}>
                <Router history={hashHistory}>
                    <Route path="/new" component={Home}/>
                    <Route path="/dataset/:oggetto/:tematica" component={Dataset}/>
                    <Route path="/map/:profile" component={Sira}/>
                </Router>
            </Localized>
            <Debug/>
        </div>
    );
};

module.exports = connect((state) => {
    return state.locale && {...state.locale} || {};
})(App);
