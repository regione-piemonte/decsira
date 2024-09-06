const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Grid, Row, Col} = require('react-bootstrap');

class TextField extends React.Component {
    static propTypes = {
        value: PropTypes.any
    };

    static defaultProps = {
        value: null
    };

    render() {
        let values = this.props.values;
        let resultValues = [];
        if (values) {
            values.forEach((item, i) => {
                resultValues.push(item);     
                resultValues.push(<br />); 
            });
        }
        resultValues = <p>{resultValues}</p>;
        return (
            <Grid className="labeled-field" fluid>
                <Row>
                    <Col className="label-sira" xs={12} sm={12} md={12} lg={12}>
                        {this.props.value ? this.props.value : ''}
                        {resultValues}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = TextField;
