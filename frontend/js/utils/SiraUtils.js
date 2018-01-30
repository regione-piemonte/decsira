const url = require('url');
const {endsWith} = require('lodash');
const axios = require('../../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');


module.exports = {
    goToMapPage(center, zoom) {
        const currentUrl = url.parse(window.location.href, true);
        if (endsWith(currentUrl.pathname, "map.html")) {
            // Strip first part of route needs to be improved
            window.location.href = currentUrl.href.replace(/#\/\w+\//, '#/');
        } else {
            localStorage.setItem("sira.config.map", JSON.stringify({zoom, center}));
            window.open(`map.html?${currentUrl.hash}`, '_blank');
           // window.location.href = `map.html?${query}${currentUrl.hash}`;
        }
    },

    logOutService(serviceUrl = ConfigUtils.getConfigProp('logOutService')) {
        return () => {
            return axios.get(serviceUrl).then((response) => {
                /*eslint-disable */
                console.log("response " + response);
                /*eslint-enable */
            }).catch((e) => {
                /*eslint-disable */
                console.log("error " + e);
                /*eslint-enable */
            });
        };
    }

};
