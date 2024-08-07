/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const urlUtil = require('url');
const PropTypes = require('prop-types');
const React = require('react');
const { isArray } = require('lodash');

const SecurityUtils = require('@mapstore/utils/SecurityUtils');

const assign = require('object-assign');

class Legend extends React.Component {
    static propTypes = {
        layer: PropTypes.object,
        legendHeigth: PropTypes.number,
        legendWidth: PropTypes.number,
        legendOptions: PropTypes.string
    };

    static defaultProps = {
        legendHeigth: 12,
        legendWidth: 12,
        legendOptions: "forceLabels:on;fontSize:10"
    };

    render() {
        if (this.props.layer && (this.props.layer.type === "wms" || this.props.layer.type === "wmspost") && this.props.layer.url) {
            let layer = this.props.layer;
            const url = isArray(layer.url) ?
                layer.url[Math.floor(Math.random() * layer.url.length)] :
                layer.url.replace(/[?].*$/g, '');

            let urlObj = urlUtil.parse(url);
            let query = assign({}, {
                service: "WMS",
                request: "GetLegendGraphic",
                format: "image/png",
                height: this.props.legendHeigth,
                width: this.props.legendWidth,
                layer: layer.name,
                style: layer.style || null,
                version: layer.version || "1.3.0",
                SLD_VERSION: "1.1.0",
                LEGEND_OPTIONS: this.props.legendOptions
                // SCALE TODO
            }, layer.legendParams || {},
            // layer.params || {},
            layer.params && layer.params.SLD ? { SLD: layer.params.SLD } : {});
            // layer.params && layer.params.SLD_BODY ? {SLD_BODY: layer.params.SLD_BODY} : {});
            SecurityUtils.addAuthenticationParameter(url, query);

            let legendUrl = urlUtil.format({
                host: urlObj.host,
                protocol: urlObj.protocol,
                pathname: urlObj.pathname,
                query: query
            });
            return <img alt={''} src={legendUrl} style={{ maxWidth: "100%" }} />;
        }
        return null;
    }
}

module.exports = Legend;
