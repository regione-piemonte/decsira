/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Glyphicon} = require('react-bootstrap');
const PropTypes = require('prop-types');

class ZoomToFeature extends React.Component {
    static propTypes = {
        params: PropTypes.object
    };

    render() {
        const geometry = this.props.params && this.props.params.data && this.props.params.data.geometry;
        return geometry && geometry.coordinates ? (
            <Glyphicon glyph="search" width={16}/>
        ) : null;
    }
}

module.exports = ZoomToFeature;
