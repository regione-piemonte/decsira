import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import TemplateSira from '../template/TemplateSira';
import TemplateUtils from '../../utils/TemplateUtils';
import assign from 'object-assign';
import './SiraTree.less';
import Moveable from "react-moveable";

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
        const xml = this.props.card.xml;
        const model = assign({}, this.props.card, {
            getValue: (element) => TemplateUtils.getValue(xml, element),
            getList: (element) => TemplateUtils.getList(xml, element)
        });

        return (
            <>
                <div className="scheda-tree react-draggable" style={{
                    maxWidth: "auto",
                    maxHeight: "auto",
                    minWidth: "auto",
                    minHeight: "auto",
                    display: this.props.show}}>
                    <TemplateSira template={this.props.card.treeTemplate} model={model} />
                </div>
                <Moveable
                    target = {".scheda-tree"}
                    draggable = {'true'}
                    resizable = {'true'}
                    renderDirections={this.props.show === 'block' ? ["se"] : []}
                    origin = {false}
                    hideDefaultLines = {'true'}
                    onDrag= {e => {
                        e.target.style.transform = e.transform;
                    }}
                    onResize={e => {
                        e.target.style.width = `${e.width}px`;
                        e.target.style.height = `${e.height}px`;
                        e.target.style.transform = e.drag.transform;

                        let titlePanel = document.getElementById("tree-title-panel");
                        let contentPanel = document.getElementById("tree-content-panel");
                        let titleHeigt = titlePanel.offsetHeight - contentPanel.offsetHeight;
                        contentPanel.style.height = `${e.height - titleHeigt}px`;
                    }}
                />
            </>
        );
    }
}

export default connect((state) => {
    return {
        show: state.siraTree.show,
        card: state.siraTree.card || {}
    };
})(SiraTree);
