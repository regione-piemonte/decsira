/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Legend = require('./legend/Legend');
const PropTypes = require('prop-types');

class WMSLegend extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        showOnlyIfVisible: PropTypes.bool
    };

    static defaultProps = {
        showOnlyIfVisible: false
    };

    render() {
        let node = this.props.node || {};
        if (this.canShow(node) && (node.type === "wms" || node.type === "wmspost") && node.group !== "background") {
            return <div style={{marginLeft: "15px"}}><Legend layer={node}/></div>;
        }
        return null;
    }

    canShow = (node) => {
        return node.visibility || !this.props.showOnlyIfVisible;
    };
}

module.exports = WMSLegend;
