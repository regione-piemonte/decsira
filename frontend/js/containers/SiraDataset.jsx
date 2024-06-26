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
const { selectCategory, resetObjectAndView, getMetadataObjects } = require('../actions/siracatalog');
const Spinner = require('react-spinkit');

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
        resetObjectAndView: PropTypes.func,
        getMetadataObjects: PropTypes.func
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
                if(this.props.loading){
                    category.directLink = true;
                }
                this.props.resetObjectAndView();
                this.props.selectCategory(category, 'objects');
                this.context.router.history.push('/dataset/');
            }
        });
    }

    loadMetadataByCategory = (category) => {
        let params = {};
        const  id  = category;
        if (id !== 999) {
            params.category = id;
        }
        this.props.getMetadataObjects({ params });
    };

    render() {
        return (
            <div className="home-page">
                Caricamento dati in corso. Attendere...
                <Spinner spinnerName="three-bounce" noFadeIn/>  
            </div>
        );
    }
}

module.exports = connect((state) => {
    return {
        loading: state.siracatalog.loading
    };
}, {
    selectCategory,
    resetObjectAndView,
    getMetadataObjects
})(SiraDataset);
