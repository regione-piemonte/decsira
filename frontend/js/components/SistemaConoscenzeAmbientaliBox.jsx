const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Panel} = require('react-bootstrap');
const Draggable = require('react-draggable');
const I18N = require('@mapstore/components/I18N/I18N');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');
const {getWindowSize} = require('@mapstore/utils/AgentUtils');

class SistemaConoscenzeAmbientaliBox extends React.Component {
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
        const {maxWidth, maxHeight} = getWindowSize();
        return (
            <Draggable bounds={{left: 0, top: 0, right: maxWidth - 100, bottom: maxHeight - 100}} start={{x: 300, y: 100}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                <div className="scheda-credits" style={{display: this.props.show}} role="contentinfo" arial-label="presentazione">
                    <Panel
                        className = "info-header panel panel-primary"
                        header={
                            <span>
                                <span className="snapshot-panel-title">
                                    <I18N.Message msgId={"RightMenu.ConoscenzeAmbTitle"}/>
                                </span>
                                <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                            </span>}>
                        <Panel className="credits-content infobox-content">
                            <div dangerouslySetInnerHTML={{ __html: LocaleUtils.getMessageById(this.context.messages, "SistemaConoscenzeAmbientaliBox.text") }} />
                        </Panel>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

module.exports = SistemaConoscenzeAmbientaliBox;
