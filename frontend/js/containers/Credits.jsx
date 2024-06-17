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
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const Header = require('../components/Header');
const { HashLink } = require('react-router-hash-link');
const Footer = require('../components/Footer');

class Credits extends React.Component {
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
                    <h1><I18N.Message msgId={"RightMenu.CreditsTitle"}/></h1>
                    <div dangerouslySetInnerHTML={{ __html: LocaleUtils.getMessageById(this.context.messages, "CreditsPanel.text") }} />
                </div>
                <Footer />
            </div>
        );
    }
}

module.exports = Credits;
