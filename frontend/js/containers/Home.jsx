const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const {head} = require('lodash');
const Footer = require('../components/Footer');
const Header = require('../components/Header');

const {getMetadataObjects, selectCategory, resetObjectAndView} = require('../actions/siracatalog');
const {categorySelector} = require('../selectors/sira');
const Mosaic = connect(categorySelector)(require('../components/Mosaic'));

const PlatformNumbers = connect((state) => ({
    siradecObject: state.platformnumbers.siradecObject,
    functionObjectMap: state.platformnumbers.functionObjectMap,
    functionObjectSearch: state.platformnumbers.functionObjectSearch,
    functionObjectView: state.platformnumbers.functionObjectView
}))(require('../components/PlatformNumbers'));

const SiraSearchBar = require('../components/SiraSearchBar');
const { handleKeyFocus } = require('../utils/SiraUtils');

class Home extends React.Component {
    static propTypes = {
        loadMetadata: PropTypes.func,
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        selectCategory: PropTypes.func,
        allCategory: PropTypes.object,
        resetObjectAndView: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        searchText: ""
    };

    componentDidMount() {
        document.body.className = "body_home";
        window.addEventListener('keyup', handleKeyFocus);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', handleKeyFocus);
    }

    render() {
        return (
            <div className="home-page">
                <Header />
                <div className="container-fluid" role="search">
                    <div className="row-fluid sb-sx">
                        <div className="container search-home">
                            <div className="row">
                                <div className="col-md-7 col-xs-12 testo-home">
                                    <div>
                                        Accedi ai <strong>dati ambientali e territoriali</strong> del <strong>Piemonte</strong>.<br />
                                        I dati ambientali sono raccolti e integrati nel SIRA Piemonte (Sistema Informativo Regionale Ambientale), in cooperazione tra soggetti produttori di informazioni ambientali (Regione, Province e ARPA).<br />
                                        Il servizio nasce per il <strong>governo</strong> e la <strong>tutela del territorio</strong>, la <strong>pianificazione partecipata</strong>, la <strong>sensibilizzazione e il coinvolgimento dei cittadini</strong>.
                                    </div>
                                </div>
                                <SiraSearchBar
                                    containerClasses="col-md-5 col-xs-12 ricerca-home catalog-search-container sira-ms2"
                                    searchClasses="home-search"
                                    addCategoriesSelector={false}
                                    onSearch={({text}) => {
                                        this.props.selectCategory(this.props.allCategory, 'objects');
                                        this.props.loadMetadata({params: {text}});
                                        if (this.props?.match?.params?.profile) {
                                            this.context.router.history.push(`/dataset/${this.props.match.params.profile}/`);
                                        } else {
                                            this.context.router.history.push('/dataset/');
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Mosaic useLink={false} tileClick={this.selectCategory} />
                <PlatformNumbers />
                <Footer />
            </div>);
    }

    selectCategory = (category, subcat) => {
        this.props.resetObjectAndView();
        this.props.selectCategory(category, subcat);
        if (this.props?.match?.params?.profile) {
            this.context.router.history.push(`/dataset/${this.props.match.params.profile}/`);
        } else {
            this.context.router.history.push('/dataset/');
        }
    };
}

module.exports = connect((state) => {
    const {tiles} = categorySelector(state);
    return {
        allCategory: head(tiles.filter((t) => t.id === 999)),
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        locale: state.locale && state.locale.locale,
        messages: state.locale && state.locale.messages || {}
    };
}, {
    loadMetadata: getMetadataObjects,
    selectCategory,
    resetObjectAndView
})(Home);
