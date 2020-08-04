const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon} = require('react-bootstrap');

class SelectTool extends React.Component {
    static propTypes = {
        selected: PropTypes.bool,
        toggleSelect: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        selected: false,
        toggleSelect: () => {}
    };

    render() {
        const {selected} = this.props;
        return (
            <Glyphicon onClick={() => this.props.toggleSelect(!selected)} glyph={selected ? "check" : "unchecked"}/>);
    }
}

module.exports = SelectTool;
