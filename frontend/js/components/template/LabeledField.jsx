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
const Message = require('@mapstore/components/I18N/Message');

class LabeledField extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.any,
        dateFormat: PropTypes.object,
        link: PropTypes.string,
        locale: PropTypes.string
    };

    static defaultProps = {
        label: '',
        value: null,
        locale: 'it-IT'
    };

    renderDate = (value, dateFormat) => {
        const valueOk = value !== null && value !== undefined && value.indexOf('Z') !== -1 ? value.replace('Z', '') : value;
        const date = new Date(valueOk);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={this.props.locale} value={date} {...dateFormat} />) : (<span/>);
    };

    renderLink = (value) => {
        return <a href={value} target="_blank">{value}</a>;
    };

    renderValue = (value) => {
        let isDate = this.props.dateFormat !== undefined;
        let isLink = this.props.link !== undefined;
        if (isDate) {
            return this.renderDate(value, this.props.dateFormat);
        }
        if (isLink) {
            return this.renderLink(value);
        }
        return value;
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
                                    <Message msgId={"labeledfield.label_value_not_specified"}/>
                                </span>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = LabeledField;
