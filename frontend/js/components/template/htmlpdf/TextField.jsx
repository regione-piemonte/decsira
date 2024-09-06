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
        value: PropTypes.any,
        values: PropTypes.array
    };

    static defaultProps = {
        value: null,
        values: []
    };

    render() {
        let values = this.props.values;
        let resultValues = [];
        if (values) {
            values.forEach((item) => {
                resultValues.push(item);
                resultValues.push('\n');
            });
        }
        resultValues = <p>{resultValues}</p>;
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
                            {this.props.value ? this.props.value : ''}
                            {resultValues}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

module.exports = TextField;
