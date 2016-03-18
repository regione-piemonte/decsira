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

const store = require('../../../stores/store');
const OperazioniRecupero = require('../OperazioniRecupero');

describe('OperazioniRecupero tests', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test OperazioniRecupero rendering default', () => {
        let comp = ReactDOM.render(<OperazioniRecupero store={store}/>, document.getElementById("container"));
        expect(comp).toExist();
    });
    it('Test OperazioniRecupero rendering with features', () => {
        let feat = {id: '', opRecupero: {codice: "A", descrizione: "TEST"}};
        let comp = ReactDOM.render(<OperazioniRecupero store={store} features={[feat]}/>, document.getElementById("container"));
        expect(comp).toExist();
    });
});
