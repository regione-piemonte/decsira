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
const PreviewMap = require('../PreviewMap');

describe('PreviewMap tests', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test PreviewMap rendering default empty map', () => {
        let comp = ReactDOM.render(<PreviewMap center={{type: "Point", coordinates: [7.288747410652236, 44.800614935398094]}} store={store}/>, document.getElementById("container"));
        store.dispatch({type: "CHANGE_MAP_CRS", crs: "EPSG:900913"});
        expect(comp).toExist();
    });
});
