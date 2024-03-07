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
const { Modal, Button } = require("react-bootstrap");
const I18N = require('@mapstore/components/I18N/I18N');
const { getMetadataObjects, selectCategory, resetObjectAndView } = require('../actions/siracatalog');
const { resetUserIdentityError } = require('../actions/userprofile');
const {categorySelector} = require('../selectors/sira');
const Mosaic = connect(categorySelector)(require('../components/Mosaic'));
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

const PlatformNumbers = connect((state) => ({
    siradecObject: state.platformnumbers.siradecObject,
    functionObjectMap: state.platformnumbers.functionObjectMap,
    functionObjectSearch: state.platformnumbers.functionObjectSearch,
    functionObjectView: state.platformnumbers.functionObjectView
}))(require('../components/PlatformNumbers'));

const SiraSearchBar = require('../components/SiraSearchBar');
const { handleKeyFocus } = require('../utils/SiraUtils');
const { HashLink } = require('react-router-hash-link');


class Home extends React.Component {
    static propTypes = {
        loadMetadata: PropTypes.func,
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        selectCategory: PropTypes.func,
        allCategory: PropTypes.object,
        resetObjectAndView: PropTypes.func,
        profile: PropTypes.object,
        resetUserIdentityError: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    state = {
        searchText: "",
        profileError: ''
    };

    componentDidMount() {
        document.body.className = "body_home";
        window.addEventListener('keyup', handleKeyFocus);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', handleKeyFocus);
    }

    renderProfileAlert = () => {
        return (<Modal show bsSize="small">
            <Modal.Header closeButton onClick={() => { this.props.resetUserIdentityError(); }}>
                <Modal.Title><I18N.Message msgId="Modal.InfoTitle"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mapstore-error"><I18N.Message msgId="Modal.NoRoleMessage"/></div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { this.props.resetUserIdentityError(); }}><I18N.Message msgId="Accessibility.button"/></Button>
            </Modal.Footer>
        </Modal>);
    };

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    render() {
        let description = LocaleUtils.getMessageById(this.context.messages, "Homepage.appDescription");
        return (
            <div className="home-page">
                <div role="navigation" className="skip-navigation" aria-label="Navigazione veloce">
                    <HashLink to="/#main-content">Salta al contenuto principale</HashLink>
                </div>
                <Header />
                <h1 className="sr-only">{LocaleUtils.getMessageById(this.context.messages, "sr-only.homepage")}</h1>
                <div id="main-content"></div>

                <div className="hero-home">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1>I dati ambientali e territoriali del Piemonte.</h1>
                                    <p>Una piattaforma di fruizione delle conscenze alfanumeriche e geografiche prodotte nel contesto del <acoronim title="Sistema Informativo Regionale Ambientale">SIRA</acoronim> Piemonte.</p>
                                    <div><a href="#" className='btn btn-outline-primary btn-lg'>SCOPRI DI PIÙ</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="container">
                    <div className="row cont-la-mappa">
                        <div className="col-md-6 col-xs-12">
                            <h2>La mappa</h2>
                            <p>Consulta la mappa incorporata all’interno della piattaforma per georeferenziare e analizzare i dati messi a disposizione.</p>
                            <p>Potrai visualizzare i dati raggruppati per <strong>categorie</strong> o  <strong>viste tematiche</strong> che aggregano al loro interno dataset per una chiara consultazione e un pi&ugrave; facile confronto.</p>
                            <div>
                                <Button onClick={() => {this.goMap(); }} className='btn btn-primary btn-lg'>
                                <I18N.Message msgId={"cartpanel.goToMap"}/>
                                </Button>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 la-mappa"></div>
                    </div>
                </div>

                <div className='catalogo-home'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2>Il catalogo</h2>
                                <h3>Consulta per categoria</h3>
                            </div>
                        </div>
                    </div>
                    <Mosaic useLink={false} tileClick={this.selectCategory} />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2>Consulta per vista tematica</h2>
                                <ul className='tematica'>
                                    <li><a href="#">Valutazione impatto ambientale</a></li>
                                    <li><a href="#">Impianti gestione rifiuti</a></li>
                                    <li><a href="#">Siti contaminati (ASCO - Anagrafe siti contaminati)</a></li>
                                    <li><a href="#">Ciclo dell'acqua:scarichi e impianti di depurazione acque reflue urbane</a></li>
                                    <li><a href="#">Derivazioni</a></li>
                                    <li><a href="#">Stabilimenti soggetti ad autorizzazioni ambientali</a></li>
                                    <li><a href="#">BDN - Vista su specie fiora</a></li>
                                    <li><a href="#">BDN - Vista</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <PlatformNumbers />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2>Video guida a SCA</h2>
                                <p>Guarda i nostri tip per scoprire come accedere a tutti i darti disponibili sul Sistema Conoscenze Ambientali</p>
                            </div>
                        </div>

                        <div className="row video">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                             <img alt="anteprima video" src="assets/application/conoscenze_ambientali/css/images/anteprima-video.jpg" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="row  mb-24">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <img alt="anteprima video" src="assets/application/conoscenze_ambientali/css/images/anteprima-video.jpg" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                    descrizione
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <img alt="anteprima video" src="assets/application/conoscenze_ambientali/css/images/anteprima-video.jpg" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        descrizione
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                               <a href="#" className='btn btn-primary btn-lg'>VEDI TUTTI</a>
                            </div>
                        </div>
                    </div>













                </div>

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
        messages: state.locale && state.locale.messages || {},
        profile: state.userprofile
    };
}, {
    loadMetadata: getMetadataObjects,
    selectCategory,
    resetObjectAndView,
    resetUserIdentityError
})(Home);
