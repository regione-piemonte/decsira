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

const store = require('../../../stores/store')(undefined, undefined, {});
const DetailTitle = require('../DetailTitle');

describe('DetailTitle tests', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test DetailTitle rendering', () => {
        let comp = ReactDOM.render(<DetailTitle subtitle={['x', "y", 'z']} store={store}/>, document.getElementById("container"));
        expect(comp).toExist();
    });

});
