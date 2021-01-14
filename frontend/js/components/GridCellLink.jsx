const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class GridCellLink extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    render() {
        return <span className="grid-cell-link">{this.props.params.value}</span>;
    }
}

module.exports = GridCellLink;
