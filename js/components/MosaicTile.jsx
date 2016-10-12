const React = require('react');

const {Link} = require('react-router');

const MosaicTile = React.createClass({
    propTypes: {
        icon: React.PropTypes.string,
        name: React.PropTypes.string,
        objectNumber: React.PropTypes.number,
        tematicViewNumber: React.PropTypes.number,
        setData: React.PropTypes.func
    },

    render() {


        const boxStyle = {
              backgroundImage: this.props.icon,
              backgroundColor: '#000',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              paddingTop: '130px'
        };


        return (
            <li className="list-group-item col-md-3 col-xs-4 tiles" style={boxStyle}>
               {this.props.name}
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
            </li>

        );
    }

});

module.exports = MosaicTile;
