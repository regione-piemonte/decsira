const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {IntlProvider, FormattedDate} = require('react-intl');

class GridCellDate extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    static contextTypes = {
        locale: PropTypes.string
    };

    render() {
        const locale = this.props.params.colDef.locale || this.context.locale || 'it-IT';
        const value = this.props.params.value !== null && this.props.params.value !== undefined && this.props.params.value.indexOf('Z') !== -1 ? this.props.params.value.replace('Z', '') : this.props.params.value;
        const date = value !== null ? new Date(value) : null;
        // When rendered in cell with render cell factory, the component loses the provider
        return date !== null && !isNaN(date.getTime()) ? (<IntlProvider locale={locale}><FormattedDate locales={locale} value={date} {...this.props.params.colDef.dateFormat} /></IntlProvider>) : (<noscript/>);
    }
}

module.exports = GridCellDate;
