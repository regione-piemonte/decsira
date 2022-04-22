const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { isObject, isArray } = require('lodash');
const { Modal, Button } = require('react-bootstrap');
const DraggableModalDialog = require('./DraggableModalDialog');
const LayersTree = require('./LayersTree');
const Spinner = require('react-spinkit');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

class AddMapModal extends React.Component {
    static propTypes = {
        error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        node: PropTypes.object,
        records: PropTypes.array,
        loading: PropTypes.bool,
        show: PropTypes.bool,
        close: PropTypes.func,
        addLayers: PropTypes.func,
        srs: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        show: false,
        records: [],
        loading: false,
        close: () => { },
        addLayers: () => { },
        node: {},
        srs: 'EPSG:32632'
    };

    state = { useTitle: true, useGroup: true };

    renderSpinner = () => {
        return (<div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)" }}><Spinner style={{ position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px" }} spinnerName="three-bounce" noFadeIn /></div>);
    };

    renderTree = (records) => {
        return <LayersTree records={records} useTitle={this.state.useTitle} ref={(el) => { this.tree = el; }} />;
    };

    renderAddOptions = () => {
        return (<div className="addOptions">
            <label style={{  marginLeft: "0px", marginRight: "10px " }} className="checkbox-inline"><input type="checkbox" onChange={(e) => this.setState({ useTitle: e.target.checked })}
                checked={this.state.useTitle} /><span>{LocaleUtils.getMessageById(this.context.messages, "AddMapModal.checkTitle")}</span></label>
            <label style={{ marginLeft: "0px", marginRight: "10px" }} className="checkbox-inline"><input type="checkbox" onChange={(e) => this.setState({ useGroup: e.target.checked })} checked={this.state.useGroup} /><span>{LocaleUtils.getMessageById(this.context.messages, "AddMapModal.checkGroup")}</span></label>
        </div>);
    };

    renderError = (error) => {
        return isObject(error) ? error.toString() : error;
    };

    renderBody = (error, records) => {
        return error ? this.renderError(error) : (<div>{this.renderAddOptions()}{this.renderTree(records)}</div>);
    };

    render() {
        const { loading, show, node, records, error } = this.props;
        return (
            <Modal dialogComponent={DraggableModalDialog} dialogClassName="sira-add-map" show={show} container={document.getElementById("body")}>
                <Modal.Header closeButton={!loading} onHide={this.props.close}><Modal.Title>{node && node.title ? node.title : LocaleUtils.getMessageById(this.context.messages, "AddMapModal.title")}</Modal.Title></Modal.Header>
                <Modal.Body>
                    <div className="sira-add-map-body">
                        {loading ? this.renderSpinner() : this.renderBody(error, records)}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={loading} bsSize={'small'} onClick={this.props.close}>{LocaleUtils.getMessageById(this.context.messages, "AddMapModal.closeButton")}</Button>
                    <Button bsSize={'small'} disabled={loading || (error ? true : false)} onClick={this.addLayers}>{LocaleUtils.getMessageById(this.context.messages, "AddMapModal.addButton")}</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    selectionChange = (selection) => {
        this.selectedLayers = selection;
    };

    isSelected = (layer, flatLayers) => {
        return layer.nodetype === 'layer' && flatLayers[layer.id] && flatLayers[layer.id].selected;
    };

    traverseRecords = (records, flatLayers) => {
        return (isArray(records) && records || [records]).reduce((acc, rec) => {
            if (rec.Layer) {
                return acc.concat(this.traverseRecords(rec.Layer, flatLayers));
            }
            return this.isSelected(rec, flatLayers) ? acc.concat(rec) : acc;
        }, []);
    };

    addLayers = () => {
        if (this.tree && this.tree.state && this.tree.state.flatLayers) {
            const { flatLayers } = this.tree.state;
            const { records } = this.props;
            const { useTitle, useGroup } = this.state;
            const selectedLayers = this.traverseRecords(records, flatLayers);
            if (selectedLayers.length > 0) {
                this.props.addLayers(selectedLayers, useTitle, useGroup, this.props.srs);
            }
        }
    };
}

module.exports = AddMapModal;
