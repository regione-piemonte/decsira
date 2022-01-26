const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const {Link} = require('react-router');
const I18N = require('@mapstore/components/I18N/I18N');

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
        liClass: "list-group-item col-md-3 col-xs-4 tiles"
    };

    renderInfo = () => {
        return this.props.useLink ? (
            <div className="ogg_appl">
                <span>
                    <Link to={'/dataset/' + this.props.objectNumber + '/0'} className="list-group-item">
                        <I18N.Message msgId={"MosaicTile.objectsBtnText"}/> <span className="items-badge" > {this.props.objectNumber} </span>
                    </Link>
                </span>
                <span>
                    <Link to={'/dataset/0/' + this.props.tematicViewNumber} className="list-group-item" >
                        <I18N.Message msgId={"MosaicTile.thematicViewsBtnText"}/> <span className="items-badge" > {this.props.tematicViewNumber} </span>
                    </Link>
                </span>
            </div>
        ) : (
            <div className="ogg_appl">
                <span>
                    <a tabIndex="0" className="list-group-item" onClick={() => this.props.onClick('objects')} onKeyPress={() => this.props.onClick('objects')}>
                        <I18N.Message msgId={"MosaicTile.objectsBtnText"}/> <span className="items-badge" > {this.props.objectNumber} </span>
                    </a>
                </span>
                <span>
                    <a tabIndex="0" className="list-group-item" onClick={() => this.props.onClick('views')} onKeyPress={() => this.props.onClick('views')}>
                        <I18N.Message msgId={"MosaicTile.thematicViewsBtnText"}/> <span className="items-badge" > {this.props.tematicViewNumber} </span>
                    </a>
                </span>
            </div>
        );
    };

    render() {
        let bClass = `${this.props.liClass} ${this.props.icon}`;
        return (
            <li className={bClass} style={this.props.boxStyle} tabIndex="0">
                <div className="ogg_title">{this.props.name}</div>
                {this.renderInfo()}
            </li>

        );
    }
}

module.exports = MosaicTile;
