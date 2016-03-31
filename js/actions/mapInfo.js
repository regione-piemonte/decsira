/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const axios = require('axios');

const LOAD_TEMPLATE_INFO = 'LOAD_TEMPLATE_INFO';
const CONFIGURE_GET_FEATURE_INFO_ERROR = 'LOAD_TEMPLATE_ERROR';
const CONFIGURE_GET_FEATURE_INFO = 'CONFIGURE_GET_FEATURE_INFO';


function configureGetFeatureInfo(config) {
    return {
        type: CONFIGURE_GET_FEATURE_INFO,
        config: config
    };
}

function configureTemplate(template) {
    return {
        type: LOAD_TEMPLATE_INFO,
        template: template
    };
}

function configureGetFeatureInfoError(e) {
    return {
        type: CONFIGURE_GET_FEATURE_INFO_ERROR,
        error: e
    };
}

function loadFeatureInfoTemplateConfig(templateURL) {
    return (dispatch) => {
        return axios.get(templateURL).then((response) => {
            let template = response.data;
            dispatch(configureTemplate(template));
        }).catch((e) => {
            dispatch(configureGetFeatureInfoError(e));
        });
    };
}

function loadGetFeatureInfoConfig(infoConfigURL) {
    return (dispatch) => {
        return axios.get(infoConfigURL).then((response) => {
            let infoConfig = response.data;
            if (typeof infoConfig !== "object") {
                try {
                    infoConfig = JSON.parse(infoConfig);
                } catch(e) {
                    dispatch(configureGetFeatureInfoError(e));
                }
            }
            dispatch(configureGetFeatureInfo(infoConfig));
            dispatch(loadFeatureInfoTemplateConfig(infoConfig.templateURL));
        }).catch((e) => {
            dispatch(configureGetFeatureInfoError(e));
        });
    };
}

module.exports = {
    LOAD_TEMPLATE_INFO,
    CONFIGURE_GET_FEATURE_INFO_ERROR,
    CONFIGURE_GET_FEATURE_INFO,
    configureTemplate,
    loadGetFeatureInfoConfig,
    configureGetFeatureInfoError,
    configureGetFeatureInfo
};
