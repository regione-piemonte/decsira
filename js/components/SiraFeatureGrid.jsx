/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');

const Draggable = require('react-draggable');

const {Panel, Grid, Row, Col} = require('react-bootstrap');
const FeatureGrid = require('../../MapStore2/web/client/components/data/featuregrid/FeatureGrid');

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');

const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('./GoToDetail');

const {loadCardTemplate} = require('../actions/card');
const {toggleControl} = require('../actions/controls');

const SiraFeatureGrid = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        detailOpen: React.PropTypes.bool,
        expanded: React.PropTypes.bool,
        header: React.PropTypes.string,
        features: React.PropTypes.array,
        map: React.PropTypes.object,
        onDetail: React.PropTypes.func,
        onShowDetail: React.PropTypes.func,
        toggleControl: React.PropTypes.func
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            open: true,
            detailOpen: true,
            expanded: true,
            header: "featuregrid.header",
            features: [],
            onDetail: () => {},
            onShowDetail: () => {},
            toggleControl: () => {}
        };
    },
    renderHeader() {
        const header = LocaleUtils.getMessageById(this.context.messages, this.props.header);

        return (

            <div className="handle_featuregrid">
                <Grid className="featuregrid-title" fluid={true}>
                    <Row>
                        <Col xs={11} sm={11} md={11} lg={11}>
                            <span>{header}</span>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1}>
                            <button onClick={this.props.toggleControl} className="close grid-close"><span>×</span></button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    },
    render() {
        const columns = [{
            onCellClicked: this.goToDetail,
            headerName: '',
            cellRenderer: reactCellRendererFactory(GoToDetail),
            suppressSorting: true,
            suppressMenu: true,
            pinned: true,
            width: 25,
            suppressResize: true
        }, {
            headerName: 'Codice SIRA',
            field: 'codice',
            width: 100
        }, {
            headerName: 'Codice fiscale (P.IVA)',
            field: 'codicefisc'
        }, {
            headerName: 'Comune',
            field: 'comune'
        }, {
            headerName: 'Autorizzazioni ambientali',
            field: 'autamb',
            width: 250
        }];

        if (this.props.open) {
            return (
                <Draggable start={{x: 20, y: 50}} handle=".panel-heading">
                    <Panel className="featuregrid-container" collapsible expanded={this.props.expanded} header={this.renderHeader()} bsStyle="primary">
                        <FeatureGrid map={this.props.map} columnDefs={columns} features={this.props.features} style={{height: "300px", width: "100%"}}/>
                    </Panel>
                </Draggable>
            );
        }
        return null;
    },
    goToDetail(params) {
        this.props.onDetail(
            "assets/",
            "cardTemplate.config",
            // "http://sira.csi.geo-solutions.it/geoserver/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=sira:AutorizzazioneUnicaAmbientale&FEATUREID=" + params.data.id
            "assets/features.xml",
            params.data.id
        );
        if (!this.props.detailOpen) {
            this.props.onShowDetail();
        }
    }
});

module.exports = connect((state) => ({
    open: state.controls.grid,
    detailOpen: state.controls.detail,
    features: state.grid && state.grid.model || [],
    map: (state.map && state.map) || (state.config && state.config.map)
}), {
    onDetail: loadCardTemplate,
    onShowDetail: toggleControl.bind(null, 'detail'),
    toggleControl: toggleControl.bind(null, 'grid')
})(SiraFeatureGrid);
