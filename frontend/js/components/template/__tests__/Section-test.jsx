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

const store = require('../../../stores/store')(undefined, {
    siradec: require('../../../reducers/siradec'),
    cardtemplate: require('../../../reducers/card')
    }, {} );
const Section = require('../Section');

describe('Section tests', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test Section rendering default', () => {
        let comp = ReactDOM.render(<Section eventKey="1" store={store}/>, document.getElementById("container"));
        expect(comp).toExist();
    });
    it('Test Section rendering expanded', () => {
        let comp = ReactDOM.render(<Section eventKey="1" store={store} expanded={true} header="TEST"/>, document.getElementById("container"));
        expect(comp).toExist();
    });
});
