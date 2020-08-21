/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const PropTypes = require('prop-types');
const React = require('react');
const createReactClass = require('create-react-class');
const ReactDOM = require('react-dom');
const reactUpdate = require('react-addons-update');
const cloneWithProps = React.cloneElement;

module.exports = createReactClass({
    displayName: 'Sortable',
    propTypes: {
        onSort: PropTypes.func,
        horizontal: PropTypes.bool,
        sensitivity: PropTypes.bool,
        minDragDistance: PropTypes.number
    },
    getDefaultProps: function() {
        return {
            onSort: function() {},
            horizontal: false,
            sensitivity: 0,
            minDragDistance: 0
        };
    },
    getInitialState: function() {
        this.rerender(this.props.children);

        return {
            isDragging: false,
            placeHolderIndex: null,
            left: null,
            top: null
        };
    },
    componentWillReceiveProps: function(nextProps) {
        if (this.props.children !== nextProps.children) {
            this.rerender(nextProps.children);
        }
    },
    rerender: function(children) {
        this._firstDraggable = 0;
        this._lastDraggable = React.Children.count(children) - 1;
        let lastDraggableSet = false;
        this._orderArr = [];
        this._dimensionArr = children.map(function(item, idx) {
            if (!item.props.isDraggable && idx <= this._lastDraggable && !lastDraggableSet) {
                this._lastDraggable = idx - 1;
                lastDraggableSet = true;
            } else if (!item.props.isDraggable && idx >= this._firstDraggable) {
                this._firstDraggable = idx + 1;
            }
            this._orderArr.push(idx);
            return {};
        }.bind(this));
    },
    componentDidMount: function() {
        this._dragDimensions = null;
    },
    componentWillUnmount: function() {
        this.unbindEvent();
    },
    bindEvent: function() {
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    },
    unbindEvent: function() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseDown: function(e, index) {
        this.containerWidth = ReactDOM.findDOMNode(this).offsetWidth;
        this.containerHeight = ReactDOM.findDOMNode(this).offsetHeight;
        this._draggingIndex = index;
        this._prevX = e.pageX;
        this._prevY = e.pageY;
        this._initOffset = e.offset;
        this.bindEvent();
    },
    handleMouseMove: function(e) {
        const newOffset = this.calculateNewOffset(e);
        const newIndex = this.calculateNewIndex(e);

        const newState = {
            isDragging: true,
            top: newOffset.top,
            left: newOffset.left
        };
        const deltaX = newOffset.left - this._initOffset.left;
        const deltaY = newOffset.top - this._initOffset.top;
        const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        if (distance > this.props.minDragDistance) {
            if (newIndex !== -1) {
                this._draggingIndex = newIndex;
                newState.placeHolderIndex = newIndex;
            }

            this.setState(newState);

            this._prevX = e.pageX;
            this._prevY = e.pageY;
        }

    },
    handleMouseUp: function() {
        this.unbindEvent();

        // reset temp vars
        this._draggingIndex = null;
        this._initOffset = null;
        this._prevX = null;
        this._prevY = null;
        this._dragDimensions = null;

        if (this.state.isDragging) {
            this.props.onSort(this.getSortData());
        }

        this.isMounted() && this.setState({
            isDragging: false,
            placeHolderIndex: null,
            left: null,
            top: null
        });
    },

    handleChildUpdate: function(offset, width, height, index) {
        this._dimensionArr[index] = reactUpdate(this._dimensionArr[index], {
            top: { $set: offset.top },
            left: { $set: offset.left },
            width: { $set: width },
            height: { $set: height }
        });
    },

    getIndexByOffset: function(offset, direction) {
        if (!offset || !this.isNumeric(offset.top) || !this.isNumeric(offset.left)) {
            return -1;
        }

        const offsetX = offset.left;
        const offsetY = offset.top;
        const prevIndex = this.state.placeHolderIndex !== null ?
            this.state.placeHolderIndex :
            this._draggingIndex;
        let newIndex;

        if (this.props.horizontal) {
            newIndex = this.getHorizontalIndexOffset(offsetX, offsetY, direction);
        } else {
            newIndex = this.getVerticalIndexOffset(offsetX, offsetY, direction);
        }

        return newIndex !== undefined ? newIndex : prevIndex;
    },
    getVerticalIndexOffset: function(offsetX, offsetY, direction) {
        let newIndex;
        const lastDimens = this._dimensionArr[this._dimensionArr.length - 1];
        const buffer = 1 - this.props.sensitivity;
        this._dimensionArr.every(function(coord, index) {
            const relativeLeft = offsetX - coord.left;
            const relativeTop = offsetY - coord.top;
            if (offsetY < 0) {
                newIndex = 0;
                return false;
            } else if (offsetY > this.containerHeight || offsetY > (lastDimens.top + lastDimens.height)) {
                newIndex = this._dimensionArr.length - 1;
                return false;
            } else if (relativeTop < coord.height && relativeLeft < coord.width) {
                if (relativeTop < ((coord.height / 2) - ((coord.height / 4) * buffer)) && direction === 'up') {
                    newIndex = index;
                } else if (relativeTop > ((coord.height / 2) + ((coord.height / 4) * buffer)) && direction === 'down') {
                    newIndex = Math.min(index + 1, this._dimensionArr.length - 1);
                }
                return false;
            }
            return true;
        }.bind(this));

        return newIndex;
    },
    getHorizontalIndexOffset: function(offsetX, offsetY, direction) {
        let newIndex;
        const lastDimens = this._dimensionArr[this._dimensionArr.length - 1];
        const buffer = 1 - this.props.sensitivity;
        this._dimensionArr.every(function(coord, index) {
            const relativeLeft = offsetX - coord.left;
            if (offsetX < 0) {
                newIndex = 0;
                return false;
            } else if (offsetX > this.containerWidth || offsetX > (lastDimens.left + lastDimens.width)) {
                newIndex = this._dimensionArr.length - 1;
                return false;
            } else if (relativeLeft < coord.width) {
                if (relativeLeft < ((coord.width / 2) - ((coord.width / 4) * buffer)) && direction === 'left') {
                    newIndex = index;
                } else if (relativeLeft > ((coord.width / 2) + ((coord.width / 4) * buffer)) && direction === 'right') {
                    newIndex = Math.min(index + 1, this._dimensionArr.length - 1);
                }
                return false;
            }
            return true;
        }.bind(this));
        return newIndex;
    },
    isNumeric: function(val) {
        return !isNaN(parseFloat(val)) && isFinite(val);
    },

    swapArrayItemPosition: function(arr, from, to) {
        if (!arr || !this.isNumeric(from) || !this.isNumeric(to)) {
            return arr;
        }

        const fromEl = arr.splice(from, 1)[0];
        arr.splice(to, 0, fromEl);
        return arr;
    },
    calculateNewOffset: function(e) {
        const deltaX = this._prevX - e.pageX;
        const deltaY = this._prevY - e.pageY;

        const prevLeft = this.state.left !== null ? this.state.left : this._initOffset.left;
        const prevTop = this.state.top !== null ? this.state.top : this._initOffset.top;
        const newLeft = prevLeft - deltaX;
        const newTop = prevTop - deltaY;

        return {
            left: newLeft,
            top: newTop
        };
    },
    getPosition: function() {
        return {
            left: ReactDOM.findDOMNode(this).offsetLeft,
            top: ReactDOM.findDOMNode(this).offsetTop
        };
    },
    closest: function(element, f) {
        return element && (f(element) ? element : this.closest(element.parentNode, f));
    },
    calculateNewIndex: function(e) {
        const placeHolderIndex = this.state.placeHolderIndex !== null ?
            this.state.placeHolderIndex :
            this._draggingIndex;
        const dragElement = this.closest(e.target, function(element) {
            if (typeof element === 'undefined' || typeof element.classList === 'undefined') return false;
            return element.classList.contains('SortableItem');
        });

        let offset;
        if (dragElement) {
            offset = { left: dragElement.offsetLeft, top: dragElement.offsetTop };
        }

        let direction = '';

        if (this.props.horizontal) {
            direction = this._prevX > e.pageX ? 'left' : 'right';
        } else {
            direction = this._prevY > e.pageY ? 'up' : 'down';
        }

        let newIndex = this.getIndexByOffset(offset, direction);
        if (newIndex !== -1 && newIndex < this._firstDraggable) {
            newIndex = this._firstDraggable;
            if (this._draggingIndex < this._firstDraggable) {
                newIndex = this._firstDraggable - 1;
                this._firstDraggable -= 1;
            }
        } else if (newIndex !== -1 && newIndex > this._lastDraggable) {
            newIndex = this._lastDraggable;
            if (this._draggingIndex > this._lastDraggable) {
                newIndex = this._lastDraggable + 1;
                this._lastDraggable += 1;
            }
        }

        if (newIndex !== -1 && newIndex !== placeHolderIndex) {
            this._dimensionArr = this.swapArrayItemPosition(this._dimensionArr, placeHolderIndex, newIndex);
            this._orderArr = this.swapArrayItemPosition(this._orderArr, placeHolderIndex, newIndex);
        }

        return newIndex;
    },
    getSortData: function() {
        return this._orderArr.map(function(itemIndex) {
            return this.props.children[itemIndex].props.sortData;
        }.bind(this));
    },
    renderItems: function() {
        const draggingItem = [];

        const items = this._orderArr.map(function(itemIndex, index) {
            const item = this.props.children[itemIndex];
            if (index === this._draggingIndex && item.props.isDraggable) {
                if (this._dragDimensions === null) {
                    this._dragDimensions = {
                        width: this._dimensionArr[this._draggingIndex].width,
                        height: this._dimensionArr[this._draggingIndex].height
                    };
                }
                draggingItem.push(this.renderDraggingItem(item));
            }
            return cloneWithProps(item, {
                key: index,
                _isPlaceholder: index === this.state.placeHolderIndex,
                sortableIndex: index,
                onSortableItemMouseDown: function(e) {
                    this.handleMouseDown(e, index);
                }.bind(this),
                onSortableItemMount: this.handleChildUpdate
            });
        }.bind(this));

        return items.concat(draggingItem);
    },
    renderDraggingItem: function(item) {
        const style = {
            top: this.state.top,
            left: this.state.left,
            width: this._dragDimensions.width,
            height: this._dragDimensions.height
        };
        return cloneWithProps(item, {
            key: this._dimensionArr.length,
            sortableStyle: style,
            _isDragging: true
        });
    },
    render: function() {
        return (
            <div className="Sortable" ref="movable">
                {this.renderItems()}
            </div>
        );
    }
});
