/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const Panel = React.createClass({
    propTypes: {
        header: React.PropTypes.node
    },
    getDefaultProps() {
    },
    renderHeader() {
        return React.isValidElement(this.props.header) ? this.props.header : (<h3 className="pdf-title">{this.props.header}</h3>);
    },
    renderBody() {
        return this.props.children ? this.props.children : null;
    },
    render() {
        return this.props.children ? (
            <div className="pdf-panel">
                {this.props.header ? this.renderHeader() : null}
                {this.renderBody()}
            </div>
        ) : null;
    }
});

module.exports = Panel;
