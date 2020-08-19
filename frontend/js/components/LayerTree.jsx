var PropTypes = require('prop-types');
/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');

// var TOC = require('../../MapStore2/web/client/components/TOC/TOC');
var TOC = require('frontend/js/components/toc/TOC');
var DefaultGroup = require('./Group');
// var DefaultLayer = require('../../MapStore2/web/client/components/TOC/DefaultLayer');
var DefaultLayer = require('frontend/js/components/toc/DefaultLayer');

var icon = require('./images/layers.png');

class LayerTree extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        buttonContent: PropTypes.node,
        groups: PropTypes.array,
        groupStyle: PropTypes.object,
        propertiesChangeHandler: PropTypes.func,
        changeGroupProperties: PropTypes.func,
        onToggleGroup: PropTypes.func,
        onToggleLayer: PropTypes.func,
        onSort: PropTypes.func
    };

    static defaultProps = {
        buttonContent: <img src={icon}/>,
        propertiesChangeHandler: () => {},
        changeGroupProperties: () => {},
        onToggleGroup: () => {},
        onToggleLayer: () => {}
    };

    getNoBackgroundLayers = (group) => {
        return group.name !== 'background';
    };

    render() {
        if (!this.props.groups) {
            return <div></div>;
        }

        return (
            <div>
                <TOC onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={this.props.groups}>
                    <DefaultGroup
                        propertiesChangeHandler={this.props.changeGroupProperties} onSort={this.props.onSort} onToggle={this.props.onToggleGroup} style={this.props.groupStyle}>
                        <DefaultLayer
                            onToggle={this.props.onToggleLayer}
                            propertiesChangeHandler={this.props.propertiesChangeHandler}
                        />
                    </DefaultGroup>
                </TOC>
            </div>
        );
    }
}

module.exports = LayerTree;
