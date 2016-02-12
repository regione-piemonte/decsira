/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Grid, Row, Col} = require('react-bootstrap');
const {toggleCard} = require('../../actions/card');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const DetailTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        id: React.PropTypes.number,
        toggleCard: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            title: '',
            subtitle: '',
            id: null,
            toggleCard: () => {}
        };
    },
    render() {
        return (
            <Grid className="detail-title" fluid={true}>
                <Row>
                    <Col xs={11} sm={11} md={11} lg={11}>
                        <h4>{this.props.title}<br/><small>{this.props.subtitle + this.props.id}</small></h4>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <button onClick={() => this.props.toggleCard(false)} className="close"><span>×</span></button>
                    </Col>
                </Row>
            </Grid>
            );
    }
});

module.exports = connect(null, dispatch => {
    return bindActionCreators({toggleCard: toggleCard}, dispatch);

})(DetailTitle);

