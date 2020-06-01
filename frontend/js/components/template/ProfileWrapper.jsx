const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class ProfileWrapper extends React.Component {
    static propTypes = {
        condition: PropTypes.func
    };

    static defaultProps = {
        condition: () => { return true; }
    };

    render() {
        return this.props.condition() ? <div>{this.props.children}</div> : <div/>;
    }
}

module.exports = ProfileWrapper;
