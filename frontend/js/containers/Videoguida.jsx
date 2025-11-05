const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const I18N = require('@mapstore/components/I18N/I18N');
const Header = require('../components/Header');
const { HashLink } = require('react-router-hash-link');
const Footer = require('../components/Footer');

class Videoguida extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        show: PropTypes.string,
        closePanel: PropTypes.func
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        title: 'title',
        show: 'none',
        closePanel: () => {}
    };

    render() {
        return (
            <div>
                <div role="navigation" className="skip-navigation" aria-label="Navigazione veloce">
                    <HashLink to="/dataset/#main-content">Salta al contenuto principale</HashLink>
                </div>
                <Header/>
                <div id="main-content"></div>

                <div id="credits-container" className="container">
                    <h1><I18N.Message msgId={"Homepage.videoTitle"}/></h1>

                    <h3><I18N.Message msgId={"Videoguida.video1Desc"}/></h3>
                    <div style={{"marginTop": "20px", "marginBottom": "20px"}}>
                        <iframe width="500" height="300"
                            src="https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/Video_Sistema_Conoscenze_Ambientali.mp4"
                            frameBorder="0"
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            title="Videoguida SCA"
                        />
                    </div>

                    <h3><I18N.Message msgId={"Videoguida.video2Desc"}/></h3>
                    <div style={{"marginTop": "20px", "marginBottom": "20px"}}>
                        <iframe width="500" height="300"
                            src="https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/2_Catalogo_Sistema_Conoscenze_Ambientali.mp4"
                            frameBorder="0"
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            title="Videoguida SCA Catalogo"
                        />
                    </div>

                    <h3><I18N.Message msgId={"Videoguida.video3Desc"}/></h3>
                    <div style={{"marginTop": "20px", "marginBottom": "20px"}}>
                        <iframe width="500" height="300"
                            src="https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/3_Funzioni_Specialistiche_Sistema_Conoscenze_Ambientali.mp4"
                            frameBorder="0"
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            title="Videoguida SCA Funzioni specialistiche"
                        />
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

module.exports = Videoguida;
