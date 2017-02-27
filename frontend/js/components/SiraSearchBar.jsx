/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {OverlayTrigger, Popover, Button} = require('react-bootstrap');

const SearchBar = require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar');

const {categorySelector} = require('../selectors/sira');
const {selectCategory, searchTextChange, selectSubCategory} = require('../actions/siracatalog');
const SearchCategories = connect(categorySelector)(require('../components/Mosaic'));

const SiraSearchBar = React.createClass({
    propTypes: {
        containerClasses: React.PropTypes.string.isRequired,
        searchClasses: React.PropTypes.string.isRequired,
        addCategoriesSelector: React.PropTypes.bool.isRequired,
        overlayPlacement: React.PropTypes.string.isRequired,
        serchCatliClasses: React.PropTypes.string.isRequired,
        btnClasses: React.PropTypes.string.isRequired,
        mosaicContainerClasses: React.PropTypes.string.isRequired,
        category: React.PropTypes.shape({
            name: React.PropTypes.string,
            id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
            icon: React.PropTypes.string,
            objectNumber: React.PropTypes.number,
            tematicViewNumber: React.PropTypes.number
        }).isRequired,
        onSearch: React.PropTypes.func,
        onReset: React.PropTypes.func,
        searchText: React.PropTypes.string,
        onTextChange: React.PropTypes.func,
        tileClick: React.PropTypes.func,
        selectSubCategory: React.PropTypes.func,
        subcat: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            containerClasses: "catalog-search-container",
            searchClasses: "sira-cat-search",
            addCategoriesSelector: true,
            mosaicContainerClasses: "tilescontainer",
            serchCatliClasses: "list-group-item col-xs-4 tiles searchtile",
            overlayPlacement: "right",
            btnClasses: "siracatalog-search-selector",
            onSearch: () => {},
            onReset: () => {},
            onTextChange: () => {},
            tileClick: () => {},
            selectSubCategory: () => {}
        };
    },
    renderPopover() {
        const {serchCatliClasses, mosaicContainerClasses} = this.props;
        return (
            <Popover id="search-categories">
                <SearchCategories
                    useLink={false}
                    className={mosaicContainerClasses}
                    liClass={serchCatliClasses}
                    tileClick={this.changeCategory}
                />
            </Popover>);
    },
    renderSearchCategories() {
        const {btnClasses, category, overlayPlacement} = this.props;
        return (
            <OverlayTrigger
                trigger={["focus", "click"]}
                placement={overlayPlacement}
                overlay={this.renderPopover()}>
                <Button className={btnClasses}>
                    <div className={category && category.icon}/>
                </Button>
             </OverlayTrigger>);
    },
    render() {
        const {containerClasses, searchClasses, addCategoriesSelector, onSearch, onReset, onTextChange, searchText} = this.props;
        return (
        <div className={containerClasses}>
            <SearchBar
                placeholder="Cerca oggetti"
                placeholderMsgId=""
                className={searchClasses}
                onSearchTextChange={onTextChange}
                typeAhead={false}
                searchText={searchText}
                onSearch={(text) => onSearch({text, category: this.props.category})}
                onSearchReset={() => {
                    onTextChange("");
                    onReset({text: "", category: this.props.category});
                }}
            />
            {addCategoriesSelector ? this.renderSearchCategories() : (<noscript/>)}
        </div>);
    },
    changeCategory(cat, subcat) {
        if (cat.id !== this.props.category.id) {
            this.props.onSearch({text: "", category: cat});
            this.props.onTextChange("");
            this.props.tileClick(cat, subcat);
        }else if (this.props.subcat !== subcat) {
            this.props.selectSubCategory(subcat);
        }


    }
});

module.exports = connect((state) => ( {
    category: state.siracatalog && state.siracatalog.category || {},
    subcat: state.siracatalog && state.siracatalog.subcat,
    searchText: state.siracatalog && state.siracatalog.searchText
    }), {
    onTextChange: searchTextChange,
    tileClick: selectCategory,
    selectSubCategory
})(SiraSearchBar);
