/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const cx = require('classnames');

module.exports = {
    getDefaultProps: function() {
        return {
            sortableStyle: {},
            onSortableItemMount: function() {},
            onSortableItemMouseDown: function() {},
            isDraggable: true,
            _isPlaceholder: false,
            _isDragging: false
        };
    },
    handleSortableItemMouseDown: function(e) {
        const evt = {
            pageX: e.pageX,
            pageY: e.pageY,
            offset: this.getPosition()
        };
        if (!e.target.classList.contains('is-isolated') && this.props.isDraggable) {
            this.props.onSortableItemMouseDown(evt, this.props.sortableIndex);
            e.stopPropagation();
        }
    },
    outerHeight: function() {
        const element = ReactDOM.findDOMNode(this);
        const style = getComputedStyle(element);
        return element.offsetHeight + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    },
    outerWidth: function() {
        const element = ReactDOM.findDOMNode(this);
        const style = getComputedStyle(element);
        return element.offsetWidth + parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    },
    getPosition: function() {
        return {
            left: ReactDOM.findDOMNode(this).offsetLeft,
            top: ReactDOM.findDOMNode(this).offsetTop
        };
    },
    componentDidMount: function() {
        this.props.onSortableItemMount(this.getPosition(), this.outerWidth(), this.outerHeight(), this.props.sortableIndex);
    },
    componentDidUpdate: function() {
        this.props.onSortableItemMount(this.getPosition(), this.outerWidth(), this.outerHeight(), this.props.sortableIndex);
    },
    renderWithSortable: function(item) {
        const classNames = cx({
            'SortableItem': true,
            'is-dragging': this.props._isDragging,
            'is-undraggable': !this.props.isDraggable,
            'is-placeholder': this.props._isPlaceholder
        });
        return React.cloneElement(
            this.props._isPlaceholder && this.getPlaceholderContent && Object.prototype.toString.call(this.getPlaceholderContent) === '[object Function]'
                ? this.getPlaceholderContent() : item, {
                className: classNames,
                style: this.props.sortableStyle,
                key: this.props.sortableIndex,
                onMouseDown: this.handleSortableItemMouseDown,
                onMouseUp: this.handleSortableItemMouseUp
            });
    }
};
