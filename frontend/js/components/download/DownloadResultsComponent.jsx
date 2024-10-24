/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Modal, Button, Tooltip, Glyphicon, OverlayTrigger } from 'react-bootstrap';

// const Dialog = require('@mapstore/components/misc/Dialog');
import DownloadResults from './DownloadResults';
import InfoBubble from '../misc/infobubble/InfoBubble';
import DefaultInfoBubbleInner from '../misc/infobubble/DefaultInnerComponent';
const I18N = require('@mapstore/components/I18N/I18N');
const { connect } = require('react-redux');
const { toggleSiraControl } = require('../../actions/controls');
const { checkDownloadDataEntries, removeDownloadResult} = require('../../actions/siraexporter');
import "./dataDownload.less";

const DownloadResultsComponent = ({
    active = false,
    showInfoBubble = false,
    infoBubbleMessage = {},
    checkingDownload,
    results = [],
    onToggle,
    onActive,
    onRemoveResult
}) => {
    React.useEffect(() => {
        if (active) {
            onActive(results);
        }
    }, [active]);

    return (
        <>
            {results.length > 0 ? <div id="mapstore-export-data-results-button-container">
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="mapstore-export-data-results-tooltip"><I18N.Message msgId="exportDataResults.title"/></Tooltip>}>
                    <Button
                        bsStyle="default"
                        onClick={() => onToggle("downloadResultsDialog", true)}>
                        <Glyphicon glyph="download-alt"/>
                    </Button>
                </OverlayTrigger>
                <InfoBubble
                    show={showInfoBubble}
                    className="mapstore-export">
                    <DefaultInfoBubbleInner {...infoBubbleMessage} />
                </InfoBubble>
            </div> : null}
            <Modal
                show= {active}>
                <Modal.Header closeButton onClick={() => onToggle("downloadResultsDialog", false)}>
                    <Modal.Title><I18N.Message msgId="exportDataResults.title"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DownloadResults
                        loading={checkingDownload}
                        results={results}
                        onRemoveResult={onRemoveResult}
                        onUpdate={onActive}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onActive(results)}><Glyphicon glyph="refresh"/> <I18N.Message msgId="exportDataResults.refresh"/></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

// export default DownloadResultsComponent;

export default connect((state) => {
    return {
        active: state.siraControls.downloadResultsDialog,
        showInfoBubble: state.siraexporter.showInfoBubble,
        infoBubbleMessage: state.siraexporter.infoBubbleMessage,
        checkingDownload: state.siraexporter.checkingDownload,
        results: state.siraexporter.downloadResults
    };
}, {
    onToggle: toggleSiraControl,
    onActive: checkDownloadDataEntries,
    onRemoveResult: removeDownloadResult
})(DownloadResultsComponent);
