/**
  * Copyright 2020, GeoSolutions Sas.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * LICENSE file in the root directory of this source tree.
  */

import React from 'react';
import { Button, Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';

import Loader from '../misc/Loader';
// const I18N = require('@mapstore/components/I18N/I18N');
import "./dataDownload.less";

const failButton = (
    <Button
        bsStyle="primary"
        bsSize="small"
        className="mapstore-exportdataresults-item-failed">
        <Glyphicon glyph="exclamation-sign"/>
    </Button>
);

const ExportDataResults = ({
    loading = false,
    results = [],
    onRemoveResult = () => {}
}) => loading ? <Loader size={100} style={{margin: '0 auto', padding: '10px'}}/> : (
    <div className="mapstore-exportdataresults-container">
        {results.map(({id, layerTitle, startTime, status, resultLocation, error}) => {
            const title = layerTitle;
            const startDate = new Date(startTime);
            const pad = x => x < 10 ? `0${x}` : `${x}`;
            const startDateStr = `${pad(startDate.getDate())}/${pad(startDate.getMonth() + 1)}/${startDate.getFullYear()} ${pad(startDate.getHours())}:${pad(startDate.getMinutes())}`;

            return (
                <div key={id} className="mapstore-exportdataresults-item">
                    <div className="mapstore-exportdataresults-item-name">
                        {title}
                    </div>
                    <div className="mapstore-exportdataresults-item-date">
                        {startDateStr}
                    </div>
                    <div className="mapstore-exportdataresults-item-buttons">
                        {status === 'pending' && <Loader size={22} style={{marginLeft: '2px'}}/>}
                        {status === 'failed' && error ?
                            <OverlayTrigger placement="top" overlay={<Tooltip id="exportresults-failure-tooltip">{error}</Tooltip>}>
                                {failButton}
                            </OverlayTrigger> : null}
                        {status === 'completed' &&
                            <a href={resultLocation}>
                                <Button bsStyle="default" bsSize="small">
                                    <Glyphicon glyph="floppy-disk"/>
                                </Button>
                            </a>}
                        <Button
                            bsStyle="default"
                            bsSize="small"
                            onClick={() => onRemoveResult(id)}>
                            <Glyphicon glyph="trash"/>
                        </Button>
                    </div>
                </div>
            );
        })}
    </div>
);

export default ExportDataResults;
