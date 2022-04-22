/**
  * Copyright 2020, GeoSolutions Sas.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * LICENSE file in the root directory of this source tree.
  */

import React from 'react';
import classnames from 'classnames';

const I18N = require('@mapstore/components/I18N/I18N');

const DefaultInnerComponent = ({
    msgId,
    msgParams,
    level = 'normal',
    className
}) => (
    <div className={classnames('mapstore-info-bubble-default-inner', `mapstore-info-bubble-default-inner-level-${level}`, className)}>
        {msgId ? <I18N.Message msgId={msgId} msgParams={msgParams}/> : null}
    </div>
);

export default DefaultInnerComponent;
