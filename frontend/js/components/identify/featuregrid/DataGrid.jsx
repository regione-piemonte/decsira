/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AgGrid from 'ag-grid';
import PropTypes from 'prop-types';
import * as DOM from 'react-dom-factories';

/* @class DataGrid
 * Custom Data grid using AgGrid
 */
export default class DataGrid extends React.Component {

    getCallbackForEvent = (eventName) => {
        if (!eventName || eventName.length < 2) {
            return eventName;
        }
        return 'on' + eventName[0].toUpperCase() + eventName.substr(1);

    };

    globalEventListener = (eventName, event) => {
        const callbackMethodName = this.getCallbackForEvent(eventName);
        const callbackFromProps = this.props[callbackMethodName];
        if (callbackFromProps) {
            callbackFromProps(event);
        }

    };

    componentDidMount() {
        let domNode = ReactDOM.findDOMNode(this);
        this.gridOptions = AgGrid.ComponentUtil.copyAttributesToGridOptions(this.props.gridOptions, this.props);
        // eslint-disable-next-line no-new
        new AgGrid.Grid(domNode, this.gridOptions);

        this.api = this.gridOptions.api;
        this.columnApi = this.gridOptions.columnApi;
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        let changes = {};
        AgGrid.ComponentUtil.ALL_PROPERTIES.forEach( (propKey)=> {
            if (this.props[propKey] !== nextProps[propKey]) {
                changes[propKey] = {
                    previousValue: this.props[propKey],
                    currentValue: nextProps[propKey]
                };
            }
        });
        AgGrid.ComponentUtil.getEventCallbacks().forEach( (funcName)=> {
            if (this.props[funcName] !== nextProps[funcName]) {
                changes[funcName] = {
                    previousValue: this.props[funcName],
                    currentValue: nextProps[funcName]
                };
            }
        });

        AgGrid.ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
    }

    componentWillUnmount() {
        this.api.destroy();
    }

    render() {
        return DOM.div({
            style: {height: '100%'}
        });
    }

}

DataGrid.propTypes = {
    gridOptions: PropTypes.object
};

function addProperties(listOfProps, propType) {
    listOfProps.forEach( (propKey)=> {
        DataGrid[propKey] = propType;
    });
}

addProperties(AgGrid.ComponentUtil.getEventCallbacks(), PropTypes.func);
addProperties(AgGrid.ComponentUtil.BOOLEAN_PROPERTIES, PropTypes.bool);
addProperties(AgGrid.ComponentUtil.STRING_PROPERTIES, PropTypes.string);
addProperties(AgGrid.ComponentUtil.OBJECT_PROPERTIES, PropTypes.object);
addProperties(AgGrid.ComponentUtil.ARRAY_PROPERTIES, PropTypes.array);
addProperties(AgGrid.ComponentUtil.NUMBER_PROPERTIES, PropTypes.number);
addProperties(AgGrid.ComponentUtil.FUNCTION_PROPERTIES, PropTypes.func);
