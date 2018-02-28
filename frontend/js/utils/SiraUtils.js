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

    sleep(milliseconds) {
        var start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    },

    sendLogOut: function() {
        let murl = ConfigUtils.getConfigProp('logOutService');
        return axios.get(murl).then(response => {
            let myData;
            if (typeof response.data === 'object') {
                myData = response.data;
            }
            return myData;
        });
    }

};
