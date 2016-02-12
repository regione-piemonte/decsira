/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

// include application component
const Template = require('../../../MapStore2/web/client/components/template/jsx/Template');
// Template needs to import all component used in string definition.
// The referene should be available in eval scope. Needs to disable eslint
/*eslint-disable */
const React = require('react');
const {Panel} = require('react-bootstrap');
const DetailTitle= require("./DetailTitle");
/*eslint-enable */

module.exports = class TemplateSira extends Template {
    renderCard() {
        /*eslint-disable */
        let model = this.props.model;
        return (this.comp === '"use strict";') ? null : eval(this.comp);
        /*eslint-enable */
    }
};

