import PropTypes from 'prop-types';
import React from 'react';

import {connect} from 'react-redux';
import {getWindowSize} from '../../../MapStore2/web/client/utils/AgentUtils';
import TemplateSira from '../template/TemplateSira';
import TemplateUtils from '../../utils/TemplateUtils';
import assign from 'object-assign';
import './SiraTree.less';

import Draggable from 'react-draggable';

class SiraTree extends React.Component {
    static propTypes = {
        card: PropTypes.shape({
            treeTemplate: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.func]),
            xml: PropTypes.oneOfType([
                PropTypes.string])
        }),
        show: PropTypes.string,
        panelStyle: PropTypes.object
    };

    static defaultProps = {
        show: 'none',
        panelStyle: {
            height: "400px",
            width: "550px",
            zIndex: 100,
            position: "absolute",
            overflow: "auto"
        }
    };

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
}

export default connect((state) => {
    return {
        show: state.siraTree.show,
        card: state.siraTree.card || {}
    };
})(SiraTree);
