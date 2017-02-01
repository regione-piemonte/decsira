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
        const date = new Date(this.props.params.value);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={locale} value={date} {...this.props.params.colDef.dateFormat} />) : (<noscript/>);
    }
});

module.exports = GridCellDate;
