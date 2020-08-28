const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Button, Glyphicon} = require('react-bootstrap');

const {expandFilterPanel} = require('../actions/siradec');

require('../../assets/css/sira.css');
require('@mapstore/product/assets/css/viewer.css');

const {connect} = require('react-redux');

const SidePanel = require('./SidePanel');
const Card = require('../components/template/Card');

const {setProfile} = require('../actions/userprofile');

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

const authParams = {
    admin: {
        userName: "admin",
        authkey: "84279da9-f0b9-4e45-ac97-48413a48e33f"
    },
    A: {
        userName: "profiloa",
        authkey: "59ccadf2-963e-448c-bc9a-b3a5e8ed20d7"
    },
    B: {
        userName: "profilob",
        authkey: "d6e5f5a5-2d26-43aa-8af3-13f8dcc0d03c"
    },
    C: {
        userName: "profiloc",
        authkey: "0505bb64-21b6-436c-86f9-9c1280f15a6c"
    },
    D: {
        userName: "profilod",
        authkey: "4176ea85-9a9a-42a5-8913-8f6f85813dab"
    }
};

const {
    loadFeatureTypeConfig
} = require('../actions/siradec');


class NoMap extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        featureTypeConfigUrl: PropTypes.string,
        error: PropTypes.object,
        setProfile: PropTypes.func,
        onLoadFeatureTypeConfig: PropTypes.func,
        expandFilterPanel: PropTypes.func,
        configLoaded: PropTypes.bool,
        featureType: PropTypes.string
    };

    static defaultProps = {
        setProfile: () => {},
        onLoadFeatureTypeConfig: () => {},
        configLoaded: false
    };

    componentWillMount() {
        if (this.props?.match?.params?.profile) {
            this.props.setProfile(this.props?.match?.params?.profile, authParams[this.props?.match?.params?.profile]);
        }
    }

    componentDidMount() {
        if (!this.props.configLoaded && this.props.featureTypeConfigUrl) {
            this.props.onLoadFeatureTypeConfig(
                this.props.featureTypeConfigUrl, {authkey: authParams[this.props?.match?.params?.profile]?.authkey || ""}, this.props.featureType, true);
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        let fturl = props.featureTypeConfigUrl;
        if (fturl !== this.props.featureTypeConfigUrl) {
            this.props.onLoadFeatureTypeConfig(fturl, {authkey: authParams[this.props?.match?.params?.profile]?.authkey || ""}, this.props.featureType, true);
        }
    }

    render() {
        return (
            <div className="mappaSiraDecisionale">
                <Button id="drawer-menu-button" bsStyle="primary" key="menu-button" className="square-button" onClick={() => this.props.expandFilterPanel(true)}><Glyphicon glyph="1-stilo"/></Button>
                <SidePanel withMap={false} auth={authParams[this.props?.match?.params?.profile]} profile={this.props?.match?.params?.profile}/>
                <Card withMap={false} authParam={authParams[this.props?.match?.params?.profile]}/>
            </div>
        );
    }

    back = () => {
        window.location.href = urlQuery.back + ".html?profile=" + this.props?.match?.params?.profile;
    };

    goHome = () => {
        window.location.href = "index.html?profile=" + this.props?.match?.params?.profile;
    };
}

module.exports = connect((state) => {
    return {
        mode: 'desktop',
        error: state.loadingError || (state.locale && state.locale.localeError) || null,
        // card: state.cardtemplate,
        featureType: state.siradec && state.siradec.featureType,
        featureTypeConfigUrl: state.siradec && state.siradec.featureType && 'assets/' + state.siradec.featureType + '.json',
        configLoaded: state.siradec && state.siradec[state.siradec.activeFeatureType] && state.siradec[state.siradec.activeFeatureType].card ? true : false
        // featureGrigConfigUrl: state.grid.featureGrigConfigUrl
    };
}, {
    setProfile,
    onLoadFeatureTypeConfig: loadFeatureTypeConfig,
    expandFilterPanel
})(NoMap);
