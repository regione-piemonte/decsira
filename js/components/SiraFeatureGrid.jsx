/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {isObject} = require('lodash');

const Draggable = require('react-draggable');

const {Modal, Panel, Grid, Row, Col} = require('react-bootstrap');
const FeatureGrid = require('../../MapStore2/web/client/components/data/featuregrid/FeatureGrid');
const {changeMapView} = require('../../MapStore2/web/client/actions/map');

const LocaleUtils = require('../../MapStore2/web/client/utils/LocaleUtils');
const I18N = require('../../MapStore2/web/client/components/I18N/I18N');

const {reactCellRendererFactory} = require('ag-grid-react');
const GoToDetail = require('./GoToDetail');

const {loadCardTemplate} = require('../actions/card');
const {toggleControl} = require('../actions/controls');
const {loadFeatureGridConfig} = require('../actions/grid');

const Spinner = require('react-spinkit');

const SiraFeatureGrid = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        detailOpen: React.PropTypes.bool,
        expanded: React.PropTypes.bool,
        header: React.PropTypes.string,
        features: React.PropTypes.array,
        detailsConfig: React.PropTypes.object,
        map: React.PropTypes.object,
        loadingGrid: React.PropTypes.bool,
        loadingGridError: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        authParam: React.PropTypes.object,
        featureGrigConfigUrl: React.PropTypes.string,
        profile: React.PropTypes.string,
        onDetail: React.PropTypes.func,
        onShowDetail: React.PropTypes.func,
        toggleControl: React.PropTypes.func,
        changeMapView: React.PropTypes.func,
        loadFeatureGridConfig: React.PropTypes.func
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            open: true,
            detailOpen: true,
            loadingGrid: false,
            loadingGridError: null,
            featureGrigConfigUrl: null,
            profile: null,
            expanded: true,
            header: "featuregrid.header",
            features: [],
            authParam: null,
            detailsConfig: {},
            onDetail: () => {},
            onShowDetail: () => {},
            toggleControl: () => {},
            changeMapView: () => {},
            loadFeatureGridConfig: () => {}
        };
    },
    componentDidMount() {
        if (this.props.featureGrigConfigUrl && this.props.profile) {
            this.props.loadFeatureGridConfig(this.props.featureGrigConfigUrl + this.props.profile + ".json");
        }
    },
    componentWillReceiveProps(props) {
        let url = props.featureGrigConfigUrl;
        let profile = props.profile;
        if (url !== this.props.featureGrigConfigUrl && profile !== this.props.profile) {
            this.props.loadFeatureGridConfig(this.props.featureGrigConfigUrl + this.props.profile + ".json");
        }
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
    renderLoadingException(loadingError, msg) {
        let exception;
        if (isObject(loadingError)) {
            exception = loadingError.status +
                "(" + loadingError.statusText + ")" +
                ": " + loadingError.data;
        } else {
            exception = loadingError;
        }

        return (
            <Modal show={loadingError ? true : false} bsSize="small">
                <Modal.Header>
                    <Modal.Title><I18N.Message msgId={msg}/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mapstore-error">{exception}</div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    },
    render() {
        let loadingError = this.props.loadingGridError;
        if (loadingError) {
            return (
                this.renderLoadingException(loadingError, "Error while loading the features")
            );
        }

        let columns = [{
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
        }];

        if (this.props.profile === "B") {
            columns.push({
                headerName: 'Codice fiscale (P.IVA)',
                field: 'codicefisc'
            });
        }

        columns.push({
            headerName: 'Comune',
            field: 'comune'
        });

        columns.push({
            headerName: 'Autorizzazioni ambientali',
            field: 'autamb',
            width: this.props.profile === "B" ? 250 : 445
        });

        if (this.props.open) {
            return (
                <Draggable start={{x: 20, y: 50}} handle=".panel-heading">
                    <Panel className="featuregrid-container" collapsible expanded={this.props.expanded} header={this.renderHeader()} bsStyle="primary">
                        {!this.props.loadingGrid ? (
                            <FeatureGrid
                                changeMapView={this.props.changeMapView}
                                srs="EPSG:4326"
                                map={this.props.map}
                                columnDefs={columns}
                                features={this.props.features}
                                style={{height: "300px", width: "100%"}}
                                maxZoom={16}/>
                        ) : (
                            <div style={{height: "300px", width: "100%"}}>
                                <div style={{
                                    position: "relative",
                                    width: "60px",
                                    top: "50%",
                                    left: "45%"
                                }}><Spinner spinnerName="three-bounce" noFadeIn/></div>
                            </div>
                        )}
                    </Panel>
                </Draggable>
            );
        }

        return null;
    },
    goToDetail(params) {
        this.props.onDetail(
            this.props.detailsConfig.cardTemplateConfigUrl,
            this.props.detailsConfig.cardModelConfigUrl,
            this.props.detailsConfig.wfsUrl + "&FEATUREID=" + params.data.id + "&authkey=" + this.props.authParam.authkey
        );

        if (!this.props.detailOpen) {
            this.props.onShowDetail();
        }
    }
});

module.exports = connect((state) => ({
    open: state.controls.grid,
    detailOpen: state.controls.detail,
    detailsConfig: state.grid.detailsConfig,
    features: state.grid && state.grid.model || [],
    map: (state.map && state.map) || (state.config && state.config.map),
    loadingGrid: state.grid.loadingGrid,
    loadingGridError: state.grid.loadingGridError
}), {
    onDetail: loadCardTemplate,
    onShowDetail: toggleControl.bind(null, 'detail'),
    toggleControl: toggleControl.bind(null, 'grid'),
    changeMapView: changeMapView,
    loadFeatureGridConfig: loadFeatureGridConfig
})(SiraFeatureGrid);
