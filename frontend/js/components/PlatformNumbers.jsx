/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const React = require('react');

const PlatformNumbers = React.createClass({

    propTypes: {
        siradecObject: React.PropTypes.number,
        functionObjectMap: React.PropTypes.number,
        functionObjectSearch: React.PropTypes.number,
        functionObjectView: React.PropTypes.number
    },
    getDefaultProps() {
        return {
            siradecObject: 0,
            functionObjectMap: 0,
            functionObjectSearch: 0,
            functionObjectView: 0
        };
    },

render() {
    return (
        <div className="container-fluid piattaforma">
            <div className="row-fluid">
                <div className="container">
                    <div className="row">
                        <h3>I numeri della piattaforma</h3>
                        <ul className="list-group numeri">
                          <li className="list-group-item col-md-4"><span className="cifra">{this.props.functionObjectMap}</span> <span className="sotto_cifra">Mappe visualizzabili</span></li>
                          <li className="list-group-item col-md-4"><span className="cifra">{this.props.functionObjectSearch}</span> <span className="sotto_cifra">Ricerche di dettaglio disponibili</span></li>
                          <li className="list-group-item col-md-4"><span className="cifra">{this.props.functionObjectView}</span> <span className="sotto_cifra">Viste tematiche disponibili</span></li>
                        </ul>
                </div>
            </div>
        </div>
        </div>
);
}
});

module.exports = PlatformNumbers;
