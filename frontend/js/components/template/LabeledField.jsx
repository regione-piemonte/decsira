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
var {FormattedDate} = require('react-intl');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

class LabeledField extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.any,
        dateFormat: PropTypes.object,
        locale: PropTypes.string
    };

    static defaultProps = {
        label: '',
        value: null,
        locale: 'it-IT'
    };

    renderDate = (value, dateFormat) => {
        const date = new Date(value);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={this.props.locale} value={date} {...dateFormat} />) : (<span/>);
    };

    renderValue = (value) => {
        return this.props.dateFormat ? this.renderDate(value, this.props.dateFormat) : value;
    };

    render() {
        return (
            <Grid className="labeled-field" fluid>
                <Row>
                    <Col className="label-sira" xs={5} sm={5} md={5} lg={5}>
                        {this.props.label}
                    </Col>
                    <Col className="value-sira" xs={7} sm={7} md={7} lg={7}>
                        {
                            this.props.value ? this.renderValue(this.props.value) :
                                <span className="labeledfield-no-value">
                                    {LocaleUtils.getMessageById(this.context.messages, "labeledfield.label_value_not_specified")}
                                </span>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = LabeledField;
