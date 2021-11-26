const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon, Tooltip, OverlayTrigger} = require('react-bootstrap');

class GridCellDownload extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    render() {
        let tooltipDownload = <Tooltip id="tpm-download">Scarica il documento</Tooltip>;
        return (<OverlayTrigger key={"download"} rootClose placement="right" overlay={tooltipDownload}>
            <Glyphicon
                key="toggle-download"
                glyph="download-alt" />
        </OverlayTrigger>);
    }
}

module.exports = GridCellDownload;
