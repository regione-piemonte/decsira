const PropTypes = require('prop-types');
/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');

const SearchBar = require('@mapstore/components/mapcontrols/search/SearchBar').default;
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

const {categorySelector} = require('../selectors/sira');
const {selectCategory, searchTextChange, selectSubCategory} = require('../actions/siracatalog');

class SiraSearchBar extends React.Component {
    static propTypes = {
        containerClasses: PropTypes.string.isRequired,
        searchClasses: PropTypes.string.isRequired,
        addCategoriesSelector: PropTypes.bool.isRequired,
        overlayPlacement: PropTypes.string.isRequired,
        serchCatliClasses: PropTypes.string.isRequired,
        btnClasses: PropTypes.string.isRequired,
        mosaicContainerClasses: PropTypes.string.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            icon: PropTypes.string,
            objectNumber: PropTypes.number,
            tematicViewNumber: PropTypes.number
        }).isRequired,
        onSearch: PropTypes.func,
        onReset: PropTypes.func,
        searchText: PropTypes.string,
        onTextChange: PropTypes.func,
        tileClick: PropTypes.func,
        selectSubCategory: PropTypes.func,
        subcat: PropTypes.string,
        tiles: PropTypes.array,
        searchOptions: PropTypes.object
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
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
        selectSubCategory: () => {},
        searchOptions: {
            services: [{type: "nominatim", priority: 5}]
        }
    };

    render() {
        const {containerClasses, searchClasses, onSearch, onReset, onTextChange, searchText, searchOptions} = this.props;
        return (
            <div className={containerClasses}>
                <SearchBar
                    placeholder={LocaleUtils.getMessageById(this.context.messages, "SiraSearchBar.placeholder")}
                    placeholderMsgId=""
                    className={searchClasses}
                    onSearchTextChange={onTextChange}
                    typeAhead={false}
                    searchText={searchText}
                    searchOptions={searchOptions}
                    showOptions={false}
                    onSearch={(text) => onSearch({text, category: this.props.category})}
                    onSearchReset={() => {
                        onTextChange("");
                        onReset({text: "", category: this.props.category});
                    }}
                />
            </div>);
    }

}


module.exports = connect(createSelector([categorySelector, (state) => ({
    category: state.siracatalog && state.siracatalog.category || {},
    subcat: state.siracatalog && state.siracatalog.subcat,
    searchText: state.siracatalog && state.siracatalog.searchText
})], (category, state)=>({
    tiles: category.tiles,
    ...state
})), {
    onTextChange: searchTextChange,
    tileClick: selectCategory,
    selectSubCategory
})(SiraSearchBar);

