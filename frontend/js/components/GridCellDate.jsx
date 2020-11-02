const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const DateFormat = require('@mapstore/components/I18N/Date');

class GridCellDate extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    static contextTypes = {
        locale: PropTypes.string
    };

    render() {
        const value = this.props.params.value !== null && this.props.params.value !== undefined && this.props.params.value.indexOf('Z') !== -1 ? this.props.params.value.replace('Z', '') : this.props.params.value;
        const date = value !== null ? new Date(value) : null;
        return date !== null && !isNaN(date.getTime()) ? (<DateFormat value={date} dateParams={this.props.params.colDef.dateFormat} />) : (<noscript/>);
    }
}

module.exports = GridCellDate;
