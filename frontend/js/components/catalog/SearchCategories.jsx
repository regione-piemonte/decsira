/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Image} = require('react-bootstrap');


const SearchCategories = React.createClass({
    propTypes: {
        categories: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            id: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired
        })).isRequired,
        onSelect: React.PropTypes.func
    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            onSelect: () => {},
            categories: [
                {
                    name: "Acqua", id: "acqua", icon: "./assets/application/conoscenze_ambientali/css/images/gocce-small.png"
                },
                {
                    name: "Aria", id: "aria", icon: "./assets/application/conoscenze_ambientali/css/images/aria-small.png"
                },
                {
                    name: "Bonifiche", id: "bonifiche", icon: "./assets/application/conoscenze_ambientali/css/images/bonifiche-small.png"
                },
                {
                    name: "Energia", id: "energia", icon: "./assets/application/conoscenze_ambientali/css/images/energia-small.png"
                },
                {
                    name: "Inquinamento Acustico", id: "acustico", icon: "./assets/application/conoscenze_ambientali/css/images/acustico-small.png"
                },
                {
                    name: "Inquinamento Elettromagnetico", id: "elettro", icon: "./assets/application/conoscenze_ambientali/css/images/elettro-small.png"
                },
                {
                    name: "Imprese aut. in campo ambientale", id: "imprese", icon: "./assets/application/conoscenze_ambientali/css/images/imprese-small.png"
                },
                {
                    name: "Rifiuti", id: "rifiuti", icon: "./assets/application/conoscenze_ambientali/css/images/rifiuti-small.png"
                },
                {
                    name: "Rishio Industirale", id: "rischio", icon: "./assets/application/conoscenze_ambientali/css/images/rischio-small.png"
                },
                {
                    name: "Valutaz. impatto ambientale", id: "via", icon: "./assets/application/conoscenze_ambientali/css/images/via-small.png"
                },
                {
                    name: "Informazioni ambientali", id: "info", icon: "./assets/application/conoscenze_ambientali/css/images/info-small.png"
                }


            ]
        };
    },
    renderCategories() {
        return this.props.categories.map((cat) => <div key={cat.id} className="sira-search-category" onClick={() => this.props.onSelect(cat) }><Image src={cat.icon}/>{cat.name}</div>);
    },
    render() {
        return (
            <div className="sira-search-categories">
                {this.renderCategories()}
            </div>
            );
    }
});

module.exports = SearchCategories;
