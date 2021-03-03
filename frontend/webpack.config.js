const path = require('path');
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const themeEntries = require('./MapStore2/build/themes.js').themeEntries;
const assign = require('object-assign');

module.exports = assign({}, require('./MapStore2/build/buildConfig')(
    {
        sira: path.join(__dirname, "js", "app"),
        siranomap: path.join(__dirname, "js", "siranomap", "app"),
        qgis: path.join(__dirname, "js", "qGis", "app")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "dist/",
    '.sira-ms2',
    null,
    {
        '@mapstore': path.resolve(__dirname, 'MapStore2/web/client'),
        '@js': path.resolve(__dirname, 'js')
    },
    [{
        path: '/rest/geostore',
        pathRewrite: {'^/rest/geostore': '/geostore/rest/'},
        host: "mapstore.geo-solutions.it",
        target: "http://mapstore.geo-solutions.it"
    }, {
        path: '/proxy',
        pathRewrite: {'^/proxy': '/decsiraweb/proxy'},
        host: "localhost",
        target: "http://tst-sipradecweb.territorio.csi.it:8080/"
    }, {
        path: '/services/metadata',
        pathRewrite: {'^/services/metadata': '/decsiraweb/services/metadata'},
        host: "localhost",
        target: "http://tst-sipradecweb.territorio.csi.it:8080/"
    }, {
        path: '/services/iride',
        pathRewrite: {'^/services/iride': '/decsiraweb/services/iride'},
        host: "localhost",
        target: "http://tst-sipradecweb.territorio.csi.it:8080/"
    }, {
        path: '/decsiraweb/services/queryformconfig',
        host: "localhost",
        target: "http://tst-sipradecweb.territorio.csi.it:8080/"
    }, {
        path: '/geoserver/ows',
        host: "localhost",
        target: "http://tst-sipradecweb.territorio.csi.it:8080/"
    }, {
        path: '/territoriosliv1sisp',
        host: "localhost",
        target: "https://tst-conoscenzaambientale.sistemapiemonte.it"
    }]
), { devtool: "inline-source-map" }
);
