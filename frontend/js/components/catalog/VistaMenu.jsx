/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const { selectView } = require('../../actions/siracatalog');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');

class VistaMenu extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        selectView: PropTypes.func
    };

    render() {
        let selected = (this.props.node.selected !== undefined) ? this.props.node.selected : false;
        return (
            <div className="sira-view">
                <div className={selected ? "sira-view-title btn-link" : "sira-view-title"}>
                    <span onClick={this.selectView}>{this.props.node.title}</span>
                </div>
            </div>);
    }

    selectView = () => {
        let view = this.props.node;
        if (view.id === 999) {
            this.props.selectView(null);
        } else {
            this.props.selectView(view);
        }
    };
}

module.exports = connect(null, dispatch => {
    return bindActionCreators({selectView}, dispatch);
})(VistaMenu);
