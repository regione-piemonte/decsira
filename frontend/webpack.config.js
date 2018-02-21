var path = require("path");
var DefinePlugin = require("webpack/lib/DefinePlugin");
var NormalModuleReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");
var NoErrorsPlugin = require("webpack/lib/NoErrorsPlugin");

var rewriteUrl = function(replacePath) {
    return function(req, opt) {  // gets called with request and proxy object
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
    };
};

module.exports = {
    entry: {
        'webpack-dev-server': 'webpack-dev-server/client?http://0.0.0.0:8081', // WebpackDevServer host and port
        'webpack': 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        sira: path.join(__dirname, "js", "app"),
        siranomap: path.join(__dirname, "js", "siranomap", "app"),
        qgis: path.join(__dirname, "js", "qGis", "app")
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    plugins: [
        new DefinePlugin({
            "__DEVTOOLS__": true
        }),
        new NormalModuleReplacementPlugin(/leaflet$/, path.join(__dirname, "MapStore2", "web", "client", "libs", "leaflet")),
        new NormalModuleReplacementPlugin(/openlayers$/, path.join(__dirname, "MapStore2", "web", "client", "libs", "openlayers")),
        new NormalModuleReplacementPlugin(/proj4$/, path.join(__dirname, "MapStore2", "web", "client", "libs", "proj4")),
        new NormalModuleReplacementPlugin(/ConfigUtils/, path.join(__dirname, "js", "utils", "ConfigUtils.js")),
        new NormalModuleReplacementPlugin(/map\/openlayers\/Feature/, path.join(__dirname, "js", "Ms2Override", "Feature.jsx")),
        new NormalModuleReplacementPlugin(/VectorLayer/, path.join(__dirname, "js", "Ms2Override", "VectorLayer.jsx")),
        new NoErrorsPlugin()
    ],
    resolve: {
      extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.less$/, loader: "style!css!less-loader" },
            { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?name=[path][name].[ext]&limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.jsx?$/,
                exclude: /ol\.js$/,
                loader: "react-hot",
                include: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
            }, {
                test: /\.jsx?$/,
                exclude: /ol\.js$/,
                loader: "babel-loader",
                include: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
            }
        ]
    },
    devServer: {
        proxy: [{
            path: new RegExp("/mapstore/rest/geostore/(.*)"),
            rewrite: rewriteUrl("/geostore/rest/$1"),
            host: "mapstore.geo-solutions.it",
            target: "http://mapstore.geo-solutions.it"
        }, {
            path: new RegExp("/proxy(.*)"),
            rewrite: rewriteUrl("/decsiraweb/proxy$1"),
            host: "localhost",
            target: "http://tst-sipradecweb.territorio.csi.it:8080/"
        }, {
            path: new RegExp("/services/metadata/(.*)"),
            rewrite: rewriteUrl("/decsiraweb/services/metadata/$1"),
            host: "localhost",
            target: "http://tst-sipradecweb.territorio.csi.it:8080/"
        }, {
            path: new RegExp("/services/iride/(.*)"),
            rewrite: rewriteUrl("/decsiraweb/services/iride/$1"),
            host: "localhost",
            target: "http://tst-sipradecweb.territorio.csi.it:8080/"
        }, {
            path: new RegExp("/decsiraweb/services/queryformconfig(.*)"),
            host: "localhost",
            target: "http://tst-sipradecweb.territorio.csi.it:8080/"
        }, {
            path: new RegExp("/geoserver/ows(.*)"),
            host: "localhost",
            target: "http://tst-sipradecweb.territorio.csi.it:8080/"
        }, {
            path: new RegExp("/territoriosliv1sisp/(.*)"),
            host: "localhost",
            target: "https://tst-conoscenzaambientale.sistemapiemonte.it/"
        }]
    },

    devtool: 'inline-source-map',
    debug: true
};
