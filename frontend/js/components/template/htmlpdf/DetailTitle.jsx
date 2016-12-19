/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const DetailTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            title: '',
            subtitle: ''
        };
    },
    render() {
        let subtitle = this.props.subtitle.join(" ");
        return (
            <h3 className="pdf-title">{this.props.title}<br/><small>{subtitle}</small></h3>
        );
    }
});

module.exports = DetailTitle;
