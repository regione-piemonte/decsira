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

const {loadCardTemplate} = require('../../actions/card');

class AdempimentiAmbientali extends React.Component {
    static propTypes = {
        // profile: React.PropTypes.string,
        codiceSira: PropTypes.string,
        listTitle: PropTypes.string,
        numAuth: PropTypes.string,
        dataAuth: PropTypes.string,
        activity: PropTypes.string,
        detailsTemplateConfigURL: PropTypes.string,
        actions: PropTypes.shape({
            drillUp: PropTypes.func
        })
    };

    static defaultProps = {
        actions: {
            drillUp: () => {}
        }
    };

    render() {
        return (
            <div>
                <h5>{this.props.listTitle + " - " + "N° " + this.props.numAuth + " data " + this.props.dataAuth}</h5>
                <ul key="factorylist" className={"list-style-type:circle"}>
                    <li><a style={{cursor: "pointer"}} onClick={() => this.drillUp()}>{this.props.activity}</a></li>
                </ul>
            </div>
        );
    }

    drillUp = () => {
        this.props.actions.drillUp(this.props.detailsTemplateConfigURL);
    };
}

module.exports = connect(() => {
    return {
        // profile: state.userprofile && state.userprofile.profile || false
    };
}, dispatch => {
    return {
        actions: bindActionCreators({
            drillUp: loadCardTemplate
        }, dispatch)
    };
})(AdempimentiAmbientali);
