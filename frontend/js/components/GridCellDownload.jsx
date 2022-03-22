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
// const LocaleUtils = require('@mapstore/utils/LocaleUtils');

class GridCellDownload extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };
    static contextTypes = {
        messages: PropTypes.object
    };

    render() {
        // let tooltipDownload = <Tooltip id="tpm-download">Scarica il documento</Tooltip>;
        let glyphIcon = this.props.params.value === 'download' ? "download-alt" : "new-window";
        let tooltipDownload = this.props.params.value === 'download' ? <Tooltip id="tpm-download">Scarica</Tooltip> : <Tooltip id="tpm-download">Apri</Tooltip>;
        return (<OverlayTrigger key={"download"} rootClose placement="right" overlay={tooltipDownload}>
            <Glyphicon
                key="toggle-download"
                glyph={glyphIcon} />
        </OverlayTrigger>);
    }
}

module.exports = GridCellDownload;
