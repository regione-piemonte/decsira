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
                        setData {...tile}
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
