/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const React = require('react');

const PlatformNumbers = React.createClass({
render() {
    return (
        <div className="container-fluid piattaforma">
        <div className="row-fluid">
        <div className="container">
        <div className="row">
        <h3>I numeri della piattaforma</h3>
        <ul className="list-group numeri">
          <li className="list-group-item col-md-4"><span className="cifra">25</span> <span className="sotto_cifra">Oggetti in continuo aggiornamento</span></li>
          <li className="list-group-item col-md-4"><span className="cifra">24<span className="con_cifra">%</span></span> <span className="sotto_cifra">Crescita annuale base&nbsp;dati previsto</span></li>
          <li className="list-group-item col-md-4"><span className="cifra">50</span> <span className="sotto_cifra">Indicatori ambientali disponibili</span></li>
        </ul>
          </div>
        </div>
          </div>
        </div>
);
}
});

module.exports = PlatformNumbers;
