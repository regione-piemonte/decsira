/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');

class TextField extends React.Component {
    static propTypes = {
        value: PropTypes.any
    };

    static defaultProps = {
        value: null
    };

    render() {
        return (
            <table className="textfield">
                <thead>
                    <tr>
                        <th>
                    value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {this.props.value}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

module.exports = TextField;
