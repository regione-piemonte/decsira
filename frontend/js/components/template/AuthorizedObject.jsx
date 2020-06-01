const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');

const {loadCardTemplate/* , setSiraImpiantoModel*/} = require('../../actions/card');

class AuthorizedObject extends React.Component {
    static propTypes = {
        list: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        listTitle: PropTypes.string,
        detailsTemplateConfigURL: PropTypes.string,
        actions: PropTypes.shape({
            drillDown: PropTypes.func/* ,
            setSiraImpiantoModel: React.PropTypes.func*/
        })
    };

    static defaultProps = {
        list: [],
        listTitle: "",
        actions: {
            drillDown: () => {}
        }
    };

    render() {
        return (
            <div>
                <h4>{this.props.listTitle}</h4>
                <ul className={"list-style-type:circle"}>
                    {
                        this.props.list instanceof Array ? this.props.list.map((codicesira) => (
                            // <li key={"factoryelement_" + element.codicesira}><a style={{cursor: "pointer"}} onClick={() => this.drillDown(element)}>Impianto codice sira {element.codicesira}</a></li>
                            <li key={"factoryelement_" + codicesira}><a style={{cursor: "pointer"}} onClick={() => this.drillDown()}>Impianto codice sira {codicesira}</a></li>
                        )) : (
                            <li key={"factoryelement_" + this.props.list}><a style={{cursor: "pointer"}} onClick={() => this.drillDown()}>Impianto codice sira {this.props.list}</a></li>
                        )
                    }
                </ul>
            </div>
        );
    }

    drillDown = () => {
        // this.props.actions.setSiraImpiantoModel(element);
        this.props.actions.drillDown(this.props.detailsTemplateConfigURL);
    };
}

module.exports = connect(null, dispatch => {
    return {
        actions: bindActionCreators({
            // setSiraImpiantoModel: setSiraImpiantoModel,
            drillDown: loadCardTemplate
        }, dispatch)
    };
})(AuthorizedObject);
