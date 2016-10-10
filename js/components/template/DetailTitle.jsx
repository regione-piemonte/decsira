/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Grid, Row, Col} = require('react-bootstrap');
const {toggleSiraControl} = require('../../actions/controls');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');

const DetailTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.array,
        id: React.PropTypes.string,
        toggleSiraControl: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            title: '',
            subtitle: '',
            id: null,
            toggleSiraControl: () => {}
        };
    },
    render() {
        let subtitle = this.props.subtitle.join(" ");

        return (
            <Grid className="detail-title" fluid={true}>
                <Row>
                    <Col xs={11} sm={11} md={11} lg={11}>
                        <h4>{this.props.title}<br/><small>{subtitle}</small></h4>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <button style={{paddingRight: "15px"}} onClick={this.props.toggleSiraControl} className="close card-close"><span>X</span></button>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = connect(null, dispatch => {
    return bindActionCreators({toggleSiraControl: toggleSiraControl.bind(null, 'detail')}, dispatch);
})(DetailTitle);
