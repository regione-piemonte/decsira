/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
// include application component
const Template = require('../../../MapStore2/web/client/components/data/template/jsx/Template');
// Template needs to import all component used in string definition.
// The referene should be available in eval scope. Needs to disable eslint
const renderSira = require("./htmlpdf/index");

const TemplateSiraHtml = React.createClass({
    render() {
        return (<Template {...this.props} renderContent={renderSira}/>);
    }
});
module.exports = TemplateSiraHtml;
