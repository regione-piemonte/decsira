/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {isObject, isArray} = require('lodash');
const {Modal, Button} = require('react-bootstrap');
const DraggableModalDialog = require('./DraggableModalDialog');
const LayersTree = require('./LayersTree');
const Spinner = require('react-spinkit');

const AddMapModal = React.createClass({
    propTypes: {
        error: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string ]),
        node: React.PropTypes.object,
        records: React.PropTypes.array,
        loading: React.PropTypes.bool,
        show: React.PropTypes.bool,
        close: React.PropTypes.func,
        addLayers: React.PropTypes.func,
        srs: React.PropTypes.string
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getInitialState() {
        return {useTitle: true, useGroup: true};
    },
    getDefaultProps() {
        return {
            show: false,
            records: [],
            loading: false,
            close: () => {},
            addLayers: () => {},
            node: {},
            srs: 'EPSG:32632'
        };
    },
    renderSpinner() {
        return (<div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgoroundColor: "rgba(125,125,125,.5)"}}><Spinner style={{position: "absolute", top: "calc(50%)", left: "calc(50% - 30px)", width: "60px"}} spinnerName="three-bounce" noFadeIn/></div>);
    },
    renderTree(records) {
        return <LayersTree records={records} useTitle={this.state.useTitle} ref={(el) => this.tree = el}/>;
    },
    renderAddOptions() {
        return (<div className="addOptions">
                    <label style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox" onChange={(e) => this.setState({useTitle: e.target.checked})}
                    checked={this.state.useTitle}/><span>Titoli al posto dei nomi</span></label>
                    <label style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox" onChange={(e) => this.setState({useGroup: e.target.checked})} checked={this.state.useGroup}/><span>Aggiungi come gruppo</span></label>
                </div>);
    },
    renderError(error) {
        return isObject(error) ? error.toString() : error;
    },
    renderBody(error, records) {
        return error ? this.renderError(error) : (<div>{this.renderAddOptions()}{this.renderTree(records)}</div>);
    },
    render() {
        const {loading, show, node, records, error} = this.props;
        return (
            <Modal dialogComponent={DraggableModalDialog} dialogClassName="sira-add-map" show={show} container={document.getElementById("body")}>
                    <Modal.Header closeButton={!loading} onHide={this.props.close}><Modal.Title>{node ? node.title : ""}</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <div className="sira-add-map-body">
                            {loading ? this.renderSpinner() : this.renderBody(error, records)}
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                             <Button disabled={loading} bsSize={'small'} onClick={this.props.close}>Close</Button>
                             <Button bsSize={'small'} disabled={loading || (error ? true : false)} onClick={this.addLayers}>Add Layers</Button>
                        </Modal.Footer>
                </Modal>
            );
    },
    selectionChange(selection) {
        this.selectedLayers = selection;
    },
    isSelected(layer, flatLayers) {
        return layer.nodetype === 'layer' && flatLayers[layer.id] && flatLayers[layer.id].selected;
    },
    traverseRecords(records, flatLayers) {
        return (isArray(records) && records || [records]).reduce((acc, rec) => {
            if (rec.Layer) {
                return acc.concat(this.traverseRecords(rec.Layer, flatLayers));
            }
            return this.isSelected(rec, flatLayers) ? acc.concat(rec) : acc;
        }, []);
    },
    addLayers() {
        if (this.tree && this.tree.state && this.tree.state.flatLayers) {
            const {flatLayers} = this.tree.state;
            const {records} = this.props;
            const {useTitle, useGroup} = this.state;
            const selectedLayers = this.traverseRecords(records, flatLayers);
            if (selectedLayers.length > 0) {
                this.props.addLayers(selectedLayers, useTitle, useGroup, this.props.srs);
            }
        }
    }
});

module.exports = AddMapModal;
