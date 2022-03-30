/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Tooltip, Glyphicon, OverlayTrigger } from 'react-bootstrap';

const Dialog = require('@mapstore/components/misc/Dialog');
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
            <Dialog
                id="mapstore-export-data-results"
                style={{display: active ? "block" : "none"}}
                draggable={false}
                modal>
                <span role="header">
                    <span className="about-panel-title"><I18N.Message msgId="exportDataResults.title"/></span>
                    <Button onClick={() => onToggle("downloadResultsDialog", false)} className="settings-panel-close close"><Glyphicon glyph="1-close"/></Button>
                </span>
                <div role="body">
                    <DownloadResults
                        loading={checkingDownload}
                        results={results}
                        onRemoveResult={onRemoveResult}
                        onUpdate={onActive}/>
                </div>
                <span role="footer">
                    <Button onClick={() => onActive(results)} className="btn btn-default" bsSize="small"> <Glyphicon glyph="refresh"/> <I18N.Message msgId="exportDataResults.refresh"/></Button>
                </span>
            </Dialog>
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
