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
const { selectCategory, selectView, resetObjectAndView, selectSubCategory } = require('../actions/siracatalog');
const { resetUserIdentityError, resetUserIdentity } = require('../actions/userprofile');
const {categorySelector} = require('../selectors/sira');
const Mosaic = connect(categorySelector)(require('../components/Mosaic'));
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');

const PlatformNumbers = connect((state) => ({
    siradecObject: state.platformnumbers.siradecObject,
    functionObjectMap: state.platformnumbers.functionObjectMap,
    functionObjectSearch: state.platformnumbers.functionObjectSearch,
    functionObjectView: state.platformnumbers.functionObjectView
}))(require('../components/PlatformNumbers'));

const { handleKeyFocus } = require('../utils/SiraUtils');
const { HashLink } = require('react-router-hash-link');


class Home extends React.Component {
    static propTypes = {
        selectCategory: PropTypes.func,
        selectSubCategory: PropTypes.func,
        allCategory: PropTypes.object,
        resetObjectAndView: PropTypes.func,
        profile: PropTypes.object,
        resetUserIdentityError: PropTypes.func,
        resetUserIdentity: PropTypes.func,
        selectView: PropTypes.func,
        match: PropTypes.object,
        params: PropTypes.object
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
                <Button onClick={() => { this.resetUser(); }}><I18N.Message msgId="Accessibility.button"/></Button>
            </Modal.Footer>
        </Modal>);
    };

    render() {
        return (
            <div className="home-page">
                <div role="navigation" className="skip-navigation" aria-label="Navigazione veloce">
                    <HashLink to="/#main-content">Salta al contenuto principale</HashLink>
                </div>
                <Header />
                {this.props.profile.error === 'empty_roles' && this.renderProfileAlert()}
                <h1 className="sr-only">{LocaleUtils.getMessageById(this.context.messages, "sr-only.homepage")}</h1>
                <div id="main-content"></div>

                <div className="hero-home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h1><I18N.Message msgId={"Homepage.titolo"}/></h1>
                                <p><I18N.Message msgId={"Homepage.descrizione"}/></p>
                                <div>
                                    <Button onClick={() => {this.goToSca(); }}>
                                        <I18N.Message msgId={"Homepage.scopri"}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row cont-la-mappa">
                        <div className="col-md-6 col-xs-12">
                            <div dangerouslySetInnerHTML={{ __html: LocaleUtils.getMessageById(this.context.messages, "Homepage.sezioneMappa") }} />
                            <div>
                                <br/>
                                <Button onClick={() => {this.goMap(); }} className="btn btn-mappa btn-default">
                                    <I18N.Message msgId={"Homepage.goToMap"}/>
                                </Button>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 la-mappa"></div>
                    </div>
                </div>

                <div className="catalogo-home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2><I18N.Message msgId={"Homepage.catalogo"}/></h2>
                                <h3><I18N.Message msgId={"Homepage.categorie"}/></h3>
                            </div>
                        </div>
                    </div>
                    <Mosaic useLink={false} tileClick={this.selectCategory} type="categories"/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h3><I18N.Message msgId={"Homepage.tematiche"}/></h3>
                                <Mosaic useLink={false} tileClick={this.selectView} type="views"/>
                            </div>
                        </div>
                    </div>

                    <PlatformNumbers />

                </div>

                <Footer />
            </div>);

        /** DA METTERE PRIMA DI <PlatformNumbers />
         *  <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h2><I18N.Message msgId={"Homepage.videoTitle"}/></h2>
                        <p><I18N.Message msgId={"Homepage.videoDesc"}/></p>
                        <br/>
                        <iframe width="500" height="300"
                            src="https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/Video_Sistema_Conoscenze_Ambientali.mp4"
                            frameBorder="0"
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            title="Videoguida SCA"
                        />
                        <br/><br/>
                        <Button onClick={() => {this.goToVideo(); }} className="btn btn-video btn-default">
                            <I18N.Message msgId={"Homepage.videoBtn"}/>
                        </Button>
                    </div>
                </div>
            </div>
            */
    }

    resetUser = () => {
        this.props.resetUserIdentityError();
        this.props.resetUserIdentity();
        window.location.href = ConfigUtils.getConfigProp('decsirawebUrl');
    }

    goMap = () => {
        this.context.router.history.replace("/map/");
    };

    goToSca = () => {
        this.context.router.history.replace("/sca/");
    };

    goToVideo = () => {
        this.context.router.history.replace("/video/");
    };

    selectCategory = (category, subcat) => {
        this.props.resetObjectAndView();
        this.props.selectCategory(category, subcat);
        if (this.props?.match?.params?.profile) {
            this.context.router.history.push(`/dataset/${this.props.match.params.profile}/`);
        } else {
            this.context.router.history.push('/dataset/');
        }
    };

    selectView = (view) => {
        this.props.resetObjectAndView();
        this.props.selectSubCategory("views");
        this.props.selectView(view);
        this.context.router.history.push('/dataset/');
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
    selectCategory,
    selectSubCategory,
    selectView,
    resetObjectAndView,
    resetUserIdentityError,
    resetUserIdentity
})(Home);
