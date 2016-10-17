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
        tiles: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            tiles: []
        };
    },

    renderTiles() {
        return this.props.tiles.map(function(tile) {
            return (<Tile
                        {...tile}
                    />);
        });
    },
    render() {
        return (

                <div className="container blocchetti">
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
