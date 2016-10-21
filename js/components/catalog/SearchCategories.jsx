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
            title: React.PropTypes.string.isRequired,
            id: React.PropTypes.string.isRequired,
            img: React.PropTypes.string.isRequired
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
                    title: "Acqua", id: "acqua", img: "./assets/application/conoscenze_ambientali/css/images/gocce-small.png"
                },
                {
                    title: "Aria", id: "aria", img: "./assets/application/conoscenze_ambientali/css/images/aria-small.png"
                },
                {
                    title: "Bonifiche", id: "bonifiche", img: "./assets/application/conoscenze_ambientali/css/images/bonifiche-small.png"
                },
                {
                    title: "Energia", id: "energia", img: "./assets/application/conoscenze_ambientali/css/images/energia-small.png"
                },
                {
                    title: "Inquinamento Acustico", id: "acustico", img: "./assets/application/conoscenze_ambientali/css/images/acustico-small.png"
                },
                {
                    title: "Inquinamento Elettromagnetico", id: "elettro", img: "./assets/application/conoscenze_ambientali/css/images/elettro-small.png"
                },
                {
                    title: "Imprese aut. in campo ambientale", id: "imprese", img: "./assets/application/conoscenze_ambientali/css/images/imprese-small.png"
                },
                {
                    title: "Rifiuti", id: "rifiuti", img: "./assets/application/conoscenze_ambientali/css/images/rifiuti-small.png"
                },
                {
                    title: "Rishio Industirale", id: "rischio", img: "./assets/application/conoscenze_ambientali/css/images/rischio-small.png"
                },
                {
                    title: "Valutaz. impatto ambientale", id: "via", img: "./assets/application/conoscenze_ambientali/css/images/via-small.png"
                },
                {
                    title: "Informazioni ambientali", id: "info", img: "./assets/application/conoscenze_ambientali/css/images/info-small.png"
                }


            ]
        };
    },
    renderCategories() {
        return this.props.categories.map((cat) => <div key={cat.id} className="sira-search-category" onClick={() => this.props.onSelect(cat) }><Image src={cat.img}/>{cat.title}</div>);
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
