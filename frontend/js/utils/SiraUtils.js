const url = require('url');


module.exports = {
    goToMapPage(center, zoom) {
        const currentUrl = url.parse(window.location.href, true);
        if (currentUrl.pathname.endsWith("map.html")) {
            // Strip first part of route needs to be improved
            window.location.href = currentUrl.href.replace(/#\/\w+\//, '#/');
        } else {
            let query = encodeURI(`map=${JSON.stringify({zoom, center})}`);
            window.open(`map.html?${query}${currentUrl.hash}`, '_blank');
           // window.location.href = `map.html?${query}${currentUrl.hash}`;
        }
    }
};
