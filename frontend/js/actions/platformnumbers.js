/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const axios = require('../../MapStore2/web/client/libs/ajax');

const LOAD_PLATFORM_NUMBER = 'LOAD_PLATFORM_NUMBER';
const PLATFORM_NUMBER_LOADED = 'PLATFORM_NUMBER_LOADED';
const PLATFORM_NUMBER_ERROR = 'PLATFORM_NUMBER_ERROR';

function platformNumbersLoaded(data) {
    return {
		type: PLATFORM_NUMBER_LOADED,
		functionObjectMap: data.functionObjectMap,
        functionObjectSearch: data.functionObjectSearch,
        functionObjectView: data.functionObjectView,
        siradecObject: data.siradecObject
	};
}

function platformNumbersError(error) {
    return {
		type: PLATFORM_NUMBER_ERROR,
		error
	};
}

function loadPlatformNumbers() {
    return (dispatch) => {
        return axios.get('services/metadata/getPlatformNumbers').then((response) => {
            if (typeof response.data === 'object') {
                dispatch(platformNumbersLoaded(response.data));
            } else {
                try {
                    JSON.parse(response.data);
                } catch(e) {
                    dispatch(platformNumbersError('Service for platfomrNumbers is broken: ' + e.message));
                }

            }

        }).catch((e) => {
            dispatch(platformNumbersError(e));
        });
    };
}


module.exports = {
		LOAD_PLATFORM_NUMBER,
		PLATFORM_NUMBER_LOADED,
		PLATFORM_NUMBER_ERROR,
		loadPlatformNumbers
};
