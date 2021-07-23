const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Tile = require('./MosaicTile');

class Mosaic extends React.Component {
    static propTypes = {
        tiles: PropTypes.array,
        boxStyle: PropTypes.object,
        tileClick: PropTypes.func,
        useLink: PropTypes.bool,
        liClass: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        tiles: [],
        className: "container blocchetti"
    };

    renderTiles = () => {
        return this.props.tiles.map((tile) => {
            return (<Tile key={tile.id}
                onClick={this.props.tileClick ? this.props.tileClick.bind(null, tile) : undefined}
                boxStyle={this.props.boxStyle}
                useLink={this.props.useLink}
                liClass={this.props.liClass ? this.props.liClass : undefined}
                {...tile}
            />);
        });
    };

    render() {
        return (
            <div className={this.props.className} role="contentinfo" aria-labelledby=" argomenti">
                <div className="row">
                    <h3 className="sr-only" id="argomenti">Elenco argomenti</h3>
                    <ul className="list-group categorie">
                        {this.renderTiles()}
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = Mosaic;
