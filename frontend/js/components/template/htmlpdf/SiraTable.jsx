/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');

const TemplateUtils = require('../../../utils/TemplateUtils');
var {FormattedDate} = require('react-intl');

const assign = require('object-assign');
const uuid = require('node-uuid');
const {isArray} = require('lodash');

const SiraTable = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        card: React.PropTypes.object,
        columns: React.PropTypes.array,
        dependsOn: React.PropTypes.object,
        features: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.func,
            React.PropTypes.object
        ]),
        wfsVersion: React.PropTypes.string,
        profile: React.PropTypes.string
    },
    contextTypes: {
        locale: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            id: "SiraTable",
            features: [],
            wfsVersion: null,
            card: null,
            dependsOn: null,
            columns: [],
            profile: null
        };
    },
    renderTableHeader(columns) {
        return columns.map((c) => {
            return (<th key={c.field}>{c.headerName}</th>);
        });
    },
    renderDate(value, dateFormat, locale) {
        const date = new Date(value);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={locale} value={date} {...dateFormat} />) : (<span/>);
    },
    renderTableBody(features, columns) {
        return features.map((f, idx) => {
            return (<tr key={idx}>{columns.map((c) => {
                return (<td key={c.field}>{c.dateFormat ? this.renderDate(f[c.field], c.dateFormat, c.locale || 'it-IT' ) : f[c.field]}</td>);
            })}</tr>);
        });
    },
    renderChildrenTable(columns, features, id, title) {
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
                {this.renderTableBody(features, columns)}
            </tbody>
        </table>
        </div>);
    },
    render() {
        let features;
        let columns = this.props.columns.map((column) => {
            // if (!column.profiles || (column.profiles && this.props.profile && column.profiles.indexOf(this.props.profile) !== -1)) {
            if (TemplateUtils.verifyProfiles(column.profiles, this.props.profile)) {
                let fieldName = !column.field ? uuid.v1() : column.field;
                this.idFieldName = column.id === true ? fieldName : this.idFieldName;
                return assign({}, column, {field: fieldName});
            }
        }, this).filter((c) => c);

        if (typeof this.props.features === 'function') {
            features = this.props.features();
        } else {
            features = this.props.features instanceof Array ? this.props.features : [this.props.features];
            features = features.map((feature) => {
                let f = {};
                columns.forEach((column) => {
                    if (column.field) {
                        f[column.field] = TemplateUtils.getElement({xpath: column.xpath}, feature, this.props.wfsVersion);
                    }
                });
                return f;
            }, this);
        }

        columns = columns.filter((col) => col.hide !== true);

        if (this.props.dependsOn) {
            const parentFeatures = isArray(this.props.dependsOn.parentFeatures) ? this.props.dependsOn.parentFeatures : [this.props.dependsOn.parentFeatures];
            const tables = parentFeatures.reduce((elements, pf) => {
                const id = TemplateUtils.getElement({xpath: this.props.dependsOn.xpath}, pf, this.props.wfsVersion);
                const ft = features.filter(function(feature) {
                    return feature[this.idFieldName] === id;
                }, this);
                if (ft.length > 0) {
                    let title = this.props.dependsOn.pdfTitle;
                    (title.match(/\{\{.+?\}\}/g) || []).forEach((placeholder) => {
                        const el = placeholder.replace('{{', '').replace('}}', '');
                        title = title.replace(placeholder, TemplateUtils.getElement({xpath: el}, pf, this.props.wfsVersion));
                    });
                // get parentFeatures
                    elements.push(this.renderChildrenTable(columns, ft, id, title));
                }
                return elements;
            }, []);
            if (tables.length > 0) {
                return (<div>
                    {tables}
                    </div>);
            }
        }
        return (
            <table className="pdf-table">
                <thead>
                    <tr>
                    {this.renderTableHeader(columns)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableBody(features, columns)}
                </tbody>
            </table>);
    }
});

module.exports = connect((state) => {
    return {
        card: state.cardtemplate || {}
    };
})(SiraTable);
