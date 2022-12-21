const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');

var {FormattedDate} = require('react-intl');

const TemplateUtils = require('../../../utils/TemplateUtils');
const assign = require('object-assign');
const uuid = require('uuid');
const { Button } = require('react-bootstrap');

class AttachmentTableApi extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        card: PropTypes.object,
        columns: PropTypes.array,
        dependsOn: PropTypes.object,
        attachments: PropTypes.array,
        wfsVersion: PropTypes.string,
        profile: PropTypes.string
    };

    static contextTypes = {
        locale: PropTypes.string
    };

    static defaultProps = {
        id: "AttachmentTableApi",
        features: [],
        wfsVersion: null,
        card: null,
        dependsOn: null,
        columns: [],
        attachments: [],
        profile: null
    };

    renderTableHeader = (columns) => {
        return columns.map((c) => {
            return (<th key={c.field}>{c.headerName}</th>);
        });
    };

    renderDate = (value, dateFormat, locale) => {
        const date = new Date(value);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={locale} value={date} {...dateFormat} />) : (<span/>);
    };

    renderLinkDownload = (url) => {
        return <Button bsStyle="link" href={url} target="_blank">{url}</Button>;
    };

    renderTableBody = (attachments, columns) => {
        return attachments.map((f, idx) => {
            return (<tr key={idx}>{columns.map((c) => {
                if (c.url === true) {
                    return (<td key={c.field}>{this.renderLinkDownload(f[c.field])}</td>);
                }
                return (<td key={c.field}>{c.dateFormat ? this.renderDate(f[c.field], c.dateFormat, c.locale || 'it-IT' ) : f[c.field]}</td>);
            })}</tr>);
        });
    };

    renderChildrenTable = (columns, attachments, id, title) => {
        return (
            <div key={id}>
                <h5 className="pdf-title">{title}</h5>
                <table className="pdf-table" >
                    <thead>
                        <tr>
                            {this.renderTableHeader(columns)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody(attachments, columns)}
                    </tbody>
                </table>
            </div>);
    };

    render() {
        let columns = this.props.columns.map((column) => {
            if (TemplateUtils.verifyProfiles(column.profiles, this.props.profile)) {
                let fieldName = !column.field ? uuid.v1() : column.field;
                this.idFieldName = column.id === true ? fieldName : this.idFieldName;
                return assign({}, column, {field: fieldName});
            }
            return null;
        }, this)?.filter((c) => c);

        let attachments = this.props.attachments;

        columns = columns.filter((col) => ((col.hide !== true || col.field === 'url') && col.download !== true));

        return (
            <div>
                <table className="pdf-table">
                    <thead>
                        <tr>
                            {this.renderTableHeader(columns)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody(attachments, columns)}
                    </tbody>
                </table></div>);
    }
}

module.exports = connect((state) => {
    return {
        card: state.cardtemplate || {},
        attachments: state.cardtemplate.attachments
    };
})(AttachmentTableApi);
