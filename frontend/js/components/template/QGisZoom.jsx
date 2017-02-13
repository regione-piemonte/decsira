/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const {Button} = require("react-bootstrap");
const img = require('../../../MapStore2/web/client/components/data/featuregrid/images/magnifier.png');
const QGisZoom = React.createClass({
    propTypes: {
        geometry: React.PropTypes.object,
        style: React.PropTypes.object,
        pointSRS: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            pointSRS: "EPSG:4326",
            geometry: null,
            style: {position: "relative", top: "-", 'float': "right", margin: "2px"}
        };
    },
    render() {
        return this.props.geometry ? (
                <Button onClick={this.zoomTo} style={this.props.style}>
                    <img src={img} width={16}/></Button>
                ) : null;
    },
    zoomTo() {
        let [minX, minY, maxX, maxY] = CoordinatesUtils.getGeoJSONExtent(this.props.geometry);
        /*eslint-disable */
        if (typeof window.parent !== 'undefined' && typeof parent.VALAMB !== 'undefined' && parent.VALAMB.zoomOn) {
            console.log("parent.VALAMB present", `parent.VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
            parent.VALAMB.zoomOn(`'${minX}'`, `'${minY}'`, `'${maxX}'`, `'${maxY}'`, "EPSG:4326");
        }else {
           console.log("parent.VALAMB absent", `parent.VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
           if (typeof VALAMB !== 'undefined' && VALAMB.zoomOn) {
               console.log("VALAMB present", `VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
               VALAMB.zoomOn(`'${minX}'`, `'${minY}'`, `'${maxX}'`, `'${maxY}'`, "EPSG:4326");
           }else {
              console.log("VALAMB absent", `VALAMB.zoomOn('${minX}', '${minY}', '${maxX}', '${maxY}', "EPSG:4326")`);
           }
        }
        /*eslint-enable */
    }
});

module.exports = QGisZoom;
