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
        value: PropTypes.any,
        values: PropTypes.array,
        bold: PropTypes.any,
        italic: PropTypes.any,
        smaller: PropTypes.any
    };

    static defaultProps = {
        value: null,
        values: []
    };

    render() {
        let values = this.props.values;
        let resultValues = [];
        if (values) {
            values.forEach((item) => {
                resultValues.push(item);
                resultValues.push(<br />);
            });
        }
        // resultValues = {resultValues};

        let style = {};
        if (this.props.bold) {
            style.fontWeight = "bold";
        }
        if (this.props.italic) {
            style.fontStyle = "italic";
        }
        if (this.props.smaller) {
            style.fontSize = "smaller";
        }
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <span style={style}>
                            {this.props.value ? this.props.value : ''}
                            {resultValues}
                        </span>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = TextField;
