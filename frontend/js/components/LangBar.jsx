/*
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');
const {DropdownButton, MenuItem, ButtonGroup} = require('react-bootstrap');
const {head} = require('lodash');

class LangBar extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        locales: PropTypes.object,
        currentLocale: PropTypes.string,
        onLanguageChange: PropTypes.func,
        dropdown: PropTypes.bool
    };

    static defaultProps = {
        id: 'mapstore-langselector',
        className: 'mapstore-langselector',
        locales: {},
        currentLocale: 'en-US',
        onLanguageChange: function() {},
        dropdown: true
    };

    render() {
        let supportedLocales = {
            "it": {
                code: "it-IT",
                description: "Italiano",
                label: "ITA"
            },
            "en": {
                code: "en-US",
                description: "English",
                label: "ENG"
            }
        };
        const locales = supportedLocales;
        const currentLanguage = head(Object.keys(locales).filter(lang => locales[lang].code === this.props.currentLocale));
        return this.props.dropdown ? (
            <div
                className={this.props.className}>
                <DropdownButton
                    pullRight
                    id={this.props.id}
                    title={
                        <span>{locales[currentLanguage].label}</span>
                    }>
                    {Object.keys(locales).filter(lang => locales[lang].code !== this.props.currentLocale).map(lang =>
                        <MenuItem key={lang} eventKey={lang} onClick={() => this.props.onLanguageChange(locales[lang].code)}>
                            {locales[lang].label}</MenuItem>)
                    }
                </DropdownButton>
            </div>
        ) : (
            <ButtonGroup id={this.props.id} type="select" bsSize="small">
                {Object.keys(locales).map(lang => (
                     <span>{locales[lang].label}</span>
                ))}
            </ButtonGroup>
        );
    }
}

module.exports = LangBar;
