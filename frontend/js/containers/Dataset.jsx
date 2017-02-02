/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const Debug = require('../../MapStore2/web/client/components/development/Debug');
const {connect} = require('react-redux');
const {OverlayTrigger, Popover, Button, Glyphicon} = require('react-bootstrap');
const {Link} = require('react-router');
const Footer = require('../components/Footer');
const Header = require('../components/Header');
const SearchBar = require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar');

const {toggleNode, selectCategory, getThematicViewConfig, selectSubCategory} = require('../actions/siracatalog');
const {categorySelector, tocSelector} = require('../selectors/sira');

const SiraSearchBar = require('../components/SiraSearchBar');

require('../../assets/application/conoscenze_ambientali/css/skin-home.css');

const Dataset = React.createClass({
    propTypes: {
        category: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
            icon: React.PropTypes.string.isRequired,
            objectNumber: React.PropTypes.number,
            tematicViewNumber: React.PropTypes.number
        }).isRequired
    },
    getInitialState() {
            return {
                searchText: ""
            };
        },
    renderSerchBar() {
        return (
            <SiraSearchBar
                containerClasses="col-lg-12 col-md-12 col-sm-12 col-xs-12 ricerca-home catalog-search-container"
                searchClasses="home-search"
                overlayPlacement="bottom"
                onSearch={() => {
                }}
                onReset={() => {}}
            />);
    },
    render() {
        return ( <div className="home">
                    <Header/>
                    <div className="container-fluid search-int">
                        <div className="row-fluid">
                            <div className="container search-interna">
                                <div className="row">
                                    {this.renderSerchBar()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                    <Debug/>
                </div>);
    }
});

module.exports = connect(tocSelector)(Dataset);
