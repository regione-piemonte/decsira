/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const Sidebar = require('react-sidebar').default;
const SideQueryPanel = require('../components/SideQueryPanel');
const SideFeatureGrid = require('../components/SideFeatureGrid');
const {changeMapStyle} = require('../../MapStore2/web/client/actions/map');
const {expandFilterPanel} = require('../actions/siradec');

require('../../assets/css/sira.css');

const SidePanel = React.createClass({
    propTypes: {
        filterPanelExpanded: React.PropTypes.bool,
        gridExpanded: React.PropTypes.bool,
        auth: React.PropTypes.object,
        profile: React.PropTypes.string,
        changeMapStyle: React.PropTypes.func,
        withMap: React.PropTypes.bool.isRequired,
        expandFilterPanel: React.PropTypes.func.isRequired
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getInitialState: function() {
        return {width: 600};
    },
    getDefaultProps() {
        return {
            filterPanelExpanded: false,
            gridExpanded: false,
            withMap: true,
            expandFilterPanel: () => {},
            changeMapStyle: () => {}
        };
    },
    componentDidMount() {
        if (this.props.withMap && (this.props.filterPanelExpanded || this.props.gridExpanded)) {
            let style = {left: this.state.width, width: `calc(100% - ${this.state.width}px)`};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    },
    componentDidUpdate(prevProps) {
        const prevShowing = prevProps.filterPanelExpanded || prevProps.gridExpanded;
        const show = this.props.filterPanelExpanded || this.props.gridExpanded;
        if (prevShowing !== show && this.props.withMap) {
            let style = show ? {left: this.state.width, width: `calc(100% - ${this.state.width}px)`} : {};
            this.props.changeMapStyle(style, "sirasidepanel");
        }
    },
    renderQueryPanel() {
        return (<SideQueryPanel
                    withMap={this.props.withMap}
                    params={{
                        authkey: this.props.auth.authkey
                    }}
                    toggleControl={this.props.expandFilterPanel.bind(null, false)}
                    />);
    },
    renderGrid() {
        return (<SideFeatureGrid
            withMap={this.props.withMap}
            initWidth={this.state.width}
            params={{authkey: this.props.auth.authkey}}
            profile={this.props.profile}/>);
    },
    renderContent() {
        if (this.props.filterPanelExpanded) {
            return this.renderQueryPanel();
        }else if (this.props.gridExpanded) {
            return this.renderGrid();
        }
        return (<div/>);
    },
    render() {
        const show = this.props.filterPanelExpanded || this.props.gridExpanded;
        return (
            <Sidebar
                open={show}
                sidebar={this.renderContent()}
                styles={{
                        sidebar: {
                            backgroundColor: 'white',
                            zIndex: 1024,
                            width: this.state.width
                        },
                        overlay: {
                            zIndex: 1023,
                            width: 0
                        },
                         root: {
                             right: show ? 0 : 'auto',
                             width: '0',
                             overflow: 'visible'
                         }
                    }}
                >
                <div/>
            </Sidebar>);
    }
});
module.exports = connect((state) => {
    return {
        filterPanelExpanded: state.siradec.filterPanelExpanded,
        gridExpanded: state.siraControls.grid
    };
}, {
    changeMapStyle,
    expandFilterPanel
})(SidePanel);

