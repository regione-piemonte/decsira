/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const {Link} = require('react-router');

const MosaicTile = React.createClass({
    propTypes: {
        icon: React.PropTypes.string,
        name: React.PropTypes.string,
        objectNumber: React.PropTypes.number,
        tematicViewNumber: React.PropTypes.number,
        setData: React.PropTypes.func,
        useLink: React.PropTypes.bool,
        boxStyle: React.PropTypes.object,
        onClick: React.PropTypes.func,
        liClass: React.PropTypes.string.isRequired
    },
    getDefaultProps() {
        return {
            icon: "",
            useLink: true,
            boxStyle: { },
            liClass: "list-group-item col-md-3 col-xs-4 tiles"
        };
    },
    renderInfo() {
        return this.props.useLink ? (
            <div className="ogg_appl">
                <span>
                    <Link to={'/dataset/' + this.props.objectNumber + '/0'} className="list-group-item">
                        Oggetti <span className="items-badge" > {this.props.objectNumber} </span>
                    </Link>
                </span>
                <span>
                    <Link to={'/dataset/0/' + this.props.tematicViewNumber} className="list-group-item" >
                        Viste tematiche <span className="items-badge" > {this.props.tematicViewNumber} </span>
                    </Link>
                </span>
            </div>
            ) : (
            <div className="ogg_appl">
                <span >
                    <a className="list-group-item" onClick={() => this.props.onClick('objects')}>
                        Oggetti <span className="items-badge" > {this.props.objectNumber} </span>
                    </a>
                </span>
                <span >
                    <a className="list-group-item" onClick={() => this.props.onClick('views')}>
                        Viste tematiche <span className="items-badge" > {this.props.tematicViewNumber} </span>
                    </a>
                </span>
            </div>
            );
    },
    render() {
        let bClass = `${this.props.liClass} ${this.props.icon}`;
        return (
            <li className={bClass} style={this.props.boxStyle}>
               {this.props.name}
               {this.renderInfo()}
            </li>

        );
    }

});

module.exports = MosaicTile;
