/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const { Provider } = require('react-redux');
const store = require('../../../stores/store');
const TipoRifiuti = require('../TipoRifiuti');

describe('TipoRifiuti tests', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test TipoRifiuti rendering default', () => {
        let comp = ReactDOM.render(
            <Provider store={store}>
                <TipoRifiuti store={store}/>
            </Provider>, document.getElementById("container"));
        expect(comp).toExist();

    });
});
