const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const React = require('react');
const I18N = require('@mapstore/components/I18N/I18N');

class PlatformNumbers extends React.Component {
    static propTypes = {
        siradecObject: PropTypes.number,
        functionObjectMap: PropTypes.number,
        functionObjectSearch: PropTypes.number,
        functionObjectView: PropTypes.number
    };

    static defaultProps = {
        siradecObject: 0,
        functionObjectMap: 0,
        functionObjectSearch: 0,
        functionObjectView: 0
    };

    render() {
        return (
            <div className="container-fluid piattaforma" role="contentinfo" aria-label="Approfondimento">
                <div className="container">
                    <div className="row">
                        <h3><I18N.Message msgId={"PlatformNumbers.numbersTitle"}/></h3>
                        <ul className="list-group numeri">
                            <li className="list-group-item col-md-4 mappe"><span className="cifra">{this.props.functionObjectMap}</span> <span className="sotto_cifra"><I18N.Message msgId={"PlatformNumbers.mapNumbersTitle"}/></span></li>
                            <li className="list-group-item col-md-4 viste"><span className="cifra">{this.props.functionObjectSearch}</span> <span className="sotto_cifra"><I18N.Message msgId={"PlatformNumbers.searchNumbersTitle"}/></span></li>
                            <li className="list-group-item col-md-4 ricerche"><span className="cifra">{this.props.functionObjectView}</span> <span className="sotto_cifra"><I18N.Message msgId={"PlatformNumbers.ViewsNumbersTitle"}/></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = PlatformNumbers;
