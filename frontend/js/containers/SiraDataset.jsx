/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const PropTypes = require('prop-types');
const axios = require('@mapstore/libs/ajax');
const { selectCategory, resetObjectAndView } = require('../actions/siracatalog');

class SiraDataset extends React.Component {
    static propTypes = {
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            icon: PropTypes.string.isRequired,
            objectNumber: PropTypes.number,
            tematicViewNumber: PropTypes.number
        }),
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        allCategory: PropTypes.array,
        selectCategory: PropTypes.func,
        resetObjectAndView: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.getCategories();
    }

    getCategories() {
        axios.get('services/metadata/getMosaico').then((resp) => {
            let categories = resp.data;
            if (this.props?.match?.params?.categoryName) {
                let myCat = this.props?.match?.params?.categoryName;
                let category = categories.find(cat => cat.icon === myCat);
                if (category === undefined) {
                    category = categories.find(cat => cat.icon === 'inspire');
                }
                this.props.resetObjectAndView();
                this.props.selectCategory(category, 'objects');
            }
            this.context.router.history.push('/dataset/');
        });
    }

    render() {
        return null;
    }
}

module.exports = connect(null, {
    selectCategory,
    resetObjectAndView
})(SiraDataset);
