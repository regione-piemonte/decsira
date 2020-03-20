/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
var {FormattedDate} = require('react-intl');
const GridCellDate = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },
    contextTypes: {
        locale: React.PropTypes.string
    },
    render() {
        const locale = this.props.params.colDef.locale || this.context.locale || 'it-IT';
        const value = this.props.params.value !== null && this.props.params.value !== undefined && this.props.params.value.indexOf('Z') !== -1 ? this.props.params.value.replace('Z', '') : this.props.params.value;
        const date = value !== null ? new Date(value) : null;
        return date !== null && !isNaN(date.getTime()) ? (<FormattedDate locales={locale} value={date} {...this.props.params.colDef.dateFormat} />) : (<noscript/>);
    }
});

module.exports = GridCellDate;
