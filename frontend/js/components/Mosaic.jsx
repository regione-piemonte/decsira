/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Tile = require('./MosaicTile');

const Mosaic = React.createClass({
    propTypes: {
        tiles: React.PropTypes.array,
        boxStyle: React.PropTypes.object,
        tileClick: React.PropTypes.func,
        useLink: React.PropTypes.bool,
        liClass: React.PropTypes.string,
        className: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            tiles: [],
            className: "container blocchetti"
        };
    },
    renderTiles() {
        return this.props.tiles.map((tile) => {
            return (<Tile key={tile.id}
                    onClick={this.props.tileClick ? this.props.tileClick.bind(null, tile) : undefined}
                    boxStyle={this.props.boxStyle}
                    useLink={this.props.useLink}
                    liClass={this.props.liClass ? this.props.liClass : undefined}
                    {...tile}
                    />);
        });
    },
    render() {
        return (
                <div className={this.props.className}>
                  <div className="row">
                    <ul className="list-group categorie">
                        {this.renderTiles()}
                    </ul>
                  </div>
                </div>
        );
    }


});

module.exports = Mosaic;
