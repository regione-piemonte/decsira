/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const LinkToMetadataInfoBox = React.createClass({
     propTypes: {
         openMetadataInfobox: React.PropTypes.func
     },

     getDefaultProps() {
         return {
             openMetadataInfobox: () => {}
         };
     },

     render() {
         return (
         <button
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#nomeModale"
            onClick={this.props.openMetadataInfobox}>
            Metadata Info Box
         </button>
     );
     }

// openInfoBox() {
//    this.props.loadMetadataInfo();
//    this.props.openMetadataInfobox();
// }

});

module.exports = LinkToMetadataInfoBox;
