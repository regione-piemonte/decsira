/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const expect = require('expect');

const store = require('../../stores/store');
const Home = require('../Home');

describe('Home test suite', () => {
    var home = null;

    before(() => {
        document.body.innerHTML = '<div id="container"></div>';
        home = ReactDOM.render(
          <Provider store={store}>
            <Home ref={(ref) => { home = ref; }} />
          </Provider>,
          document.getElementById('container')
        );
    });

    it('checks that homepage has been rendered', () => {
        expect(home).toNotBe(null);
        let homeNode = ReactDOM.findDOMNode(home);
        expect(homeNode).toExist();

        // check header
        let headerElems = homeNode.getElementsByClassName('header');
        expect(headerElems.length).toBe(1);
        expect(headerElems[0].innerHTML).toBe("HomePage");

        // check links
        let anchorElems = homeNode.getElementsByTagName('a');
        expect(anchorElems.length).toBe(2);
        expect(anchorElems[0].innerHTML).toBe('Profilo A');
        expect(anchorElems[1].innerHTML).toBe('Profilo B');
    });
});
