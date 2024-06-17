const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class MosaicTile extends React.Component {
    static propTypes = {
        icon: PropTypes.string,
        name: PropTypes.string,
        objectNumber: PropTypes.number,
        tematicViewNumber: PropTypes.number,
        setData: PropTypes.func,
        useLink: PropTypes.bool,
        boxStyle: PropTypes.object,
        onClick: PropTypes.func,
        liClass: PropTypes.string.isRequired
    };

    static defaultProps = {
        icon: "",
        useLink: true,
        boxStyle: { },
        liClass: "list-group-item tiles"
    };

    renderInfo = () => {
        return (
            <div className="ogg_appl">
                <a tabIndex="0" className="list-group-item" onClick={() => this.props.onClick('objects')} onKeyPress={() => this.props.onClick('objects')}>
                    <div className="ogg_title">{this.props.name} </div>
                </a>
            </div>
        );
    };

    render() {
        let bClass = `${this.props.liClass} ${this.props.icon}`;
        return (
            <li className={bClass} style={this.props.boxStyle} tabIndex="0">
                {this.renderInfo()}
            </li>
        );
    }
}

module.exports = MosaicTile;
