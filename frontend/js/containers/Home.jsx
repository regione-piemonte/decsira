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

const Home = React.createClass({
    propTypes: {
        loadMetadata: React.PropTypes.func,
        params: React.PropTypes.object,
        selectCategory: React.PropTypes.func,
        allCategory: React.PropTypes.object,
        resetObjectAndView: React.PropTypes.func
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            searchText: ""
        };
    },
    componentDidMount() {
        document.body.className = "body_home";
    },
    render() {
        return (
            <div className="home-page">
            <Header />
            <div className="container-fluid">
                <div className="row-fluid sb-sx">
                    <div className="container search-home">
                        <div className="row">
                            <div className="col-md-7 col-xs-12 testo-home">
                               <div>
                                 Piattaforma di fruizione delle conoscenze alfanumeriche e geografiche prodotte nel contesto del SIRA Piemonte (Sistema Informativo Ambientale della Regione Piemonte), che si configura come una rete di cooperazione tra soggetti produttori e/o detentori di informazioni di interesse ambientale (Imprese, Regione, Province e ARPA)
                               </div>
                            </div>
                                <SiraSearchBar
                                    containerClasses="col-md-5 col-xs-12 ricerca-home catalog-search-container"
                                    searchClasses="home-search"
                                    addCategoriesSelector={false}
                                    onSearch={({text}) => {
                                        this.props.selectCategory(this.props.allCategory, 'objects');
                                        this.props.loadMetadata({params: {text}});
                                        if (this.props.params.profile) {
                                            this.context.router.push('/dataset/${this.props.params.profile}/');
                                        }else {
                                            this.context.router.push('/dataset/');
                                        }
                                    }}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalNews" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Nuova risorsa Disponibile</h4>
                        </div>
                        <div className="modal-body">
                            <p>Nuova risorsa Disponibile: &egrave; disponibile questa nuova risorsa "Impianti autorizzati a recupero di energia e materia"</p>
                            <p>Proin quam metus, bibendum a lacus eget, tempor tincidunt est. Ut ac laoreet diam. Integer pretium pharetra venenatis. Sed luctus metus lacinia mauris porta, eget imperdiet enim commodo. Phasellus ornare diam sed massa tempus varius. Fusce mollis blandit vehicula. Phasellus ac vulputate purus, eget aliquam arcu. Nam nec orci nunc. Mauris pellentesque tellus eget nulla auctor, nec consectetur nisl porttitor. Proin ullamcorper vestibulum sapien, et congue sem ultricies nec. Fusce imperdiet imperdiet neque sit amet elementum. Suspendisse ac massa volutpat, iaculis augue nec, tristique urna. In ut congue nisi.</p>
                            <p>Praesent condimentum tincidunt condimentum. Sed et convallis dui. Duis id nisl dui. Duis commodo ex non nulla aliquet pulvinar. Donec venenatis, purus eu efficitur dapibus, enim urna eleifend nisi, eu sodales nisl ligula in turpis. Donec posuere ullamcorper tellus in sagittis. Donec ullamcorper vel risus vitae finibus. Suspendisse viverra enim in cursus gravida. In hac habitasse platea dictumst. Suspendisse ac enim in justo vestibulum placerat eu et massa. Curabitur elementum neque sit amet semper blandit. Suspendisse imperdiet dolor et est consectetur, nec luctus nulla pharetra.</p>
                            <p>Duis rutrum felis a ultrices ornare. Maecenas non ex suscipit, pharetra tellus vitae, placerat ligula. Aliquam dolor neque, lacinia a congue id, rhoncus lobortis urna. Duis mollis tortor eros, vel efficitur libero fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed erat lectus, interdum eu pellentesque sed, posuere eu risus. Morbi facilisis fringilla molestie. Pellentesque ac feugiat erat, quis aliquet turpis. Aenean dapibus dui non venenatis finibus.</p>
                            <p>Sed commodo sollicitudin diam at sagittis. In at maximus leo. Pellentesque sed dolor nec nulla sagittis volutpat a sed nisi. Phasellus tristique facilisis enim eu congue. Sed egestas libero nulla, non fringilla felis bibendum id. Praesent et eros aliquet, elementum mauris vel, iaculis nunc. Nam congue accumsan nisl. Mauris vitae egestas nisl. Curabitur rutrum vehicula dui, laoreet ultricies mi finibus vel. Sed quam felis, lacinia ac eros quis, dignissim tincidunt quam. Aliquam eleifend varius lacus. Donec non interdum odio. Fusce sed tellus interdum, condimentum nulla vitae, commodo libero. Pellentesque nulla mi, commodo non lectus sit amet, mollis suscipit nisl. Proin auctor nisi risus, id finibus leo cursus vitae. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Mosaic useLink={false} tileClick={this.selectCategory} />
            <PlatformNumbers />
            <Footer />
        </div>);
    },
    selectCategory(category, subcat) {
        this.props.resetObjectAndView();
        this.props.selectCategory(category, subcat);
        if (this.props.params.profile) {
            this.context.router.push('/dataset/${this.props.params.profile}/');
        }else {
            this.context.router.push('/dataset/');
        }
    }
});

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
