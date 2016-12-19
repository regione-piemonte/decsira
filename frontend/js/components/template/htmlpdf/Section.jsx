/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const Section = React.createClass({
    propTypes: {
        header: React.PropTypes.node
    },
    getDefaultProps() {
        return {

        };
    },
    renderHeader() {
        return React.isValidElement(this.props.header) ? this.props.header : (<h4 className="pdf-title">{this.props.header}</h4>);
    },
    renderBody() {
        return this.props.children ? this.props.children : null;
    },
    render() {
        return this.props.children ? (
                  <div className="pdf-section">
                      {this.props.header ? this.renderHeader() : null}
                      {this.renderBody()}
                  </div>
              ) : null;
    }
});

module.exports = Section;
