import React from 'react';

const {connect} = require('react-redux');
const {getWindowSize} = require('../../../MapStore2/web/client/utils/AgentUtils');
const TemplateSira = require('../template/TemplateSira');
const TemplateUtils = require('../../utils/TemplateUtils');
const assign = require('object-assign');
import './SiraTree.less';

const Draggable = require('react-draggable');

const SiraTree = React.createClass({
    propTypes: {
        card: React.PropTypes.shape({
            treeTemplate: React.PropTypes.oneOfType([
                    React.PropTypes.string,
                    React.PropTypes.func]),
            xml: React.PropTypes.oneOfType([
                    React.PropTypes.string])
        }),
        show: React.PropTypes.string,
        panelStyle: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            show: 'none',
            panelStyle: {
                height: "400px",
                width: "550px",
                zIndex: 100,
                position: "absolute",
                overflow: "auto"
            }
        };
    },
    render() {
        const {maxWidth, maxHeight} = getWindowSize();
        const xml = this.props.card.xml;
        const model = assign({}, this.props.card, {
            getValue: (element) => TemplateUtils.getValue(xml, element),
            getList: (element) => TemplateUtils.getList(xml, element)
        });

        return (
            <Draggable bounds={{left: 0, top: 0, right: maxWidth - 100, bottom: maxHeight - 100}} start={{x: (maxWidth / 2) - 300, y: 100}} handle=".panel-heading, .panel-heading *">
            <div className="scheda-tree" style={{display: this.props.show}}>
                <TemplateSira template={this.props.card.treeTemplate} model={model} />
            </div>
            </Draggable>);
    }
  });

module.exports = connect((state) => {
    return {
        show: state.siraTree.show,
        card: state.siraTree.card || {}
    };
})(SiraTree);
