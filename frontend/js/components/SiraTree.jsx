import React, {PropTypes} from 'react';
const { Panel, Grid, Row, Col} = require('react-bootstrap');
const {connect} = require('react-redux');
const {closeTree} = require("../actions/siraTree");
const {getWindowSize} = require('../../MapStore2/web/client/utils/AgentUtils');
import Tree, {TreeNode} from 'rc-tree';
import './SiraTree.less';

const Draggable = require('react-draggable');

const SiraTree = React.createClass({
    propTypes: {
        treeData: PropTypes.array,
        defaultExpandedKeys: PropTypes.array,
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        show: React.PropTypes.string,
        panelStyle: React.PropTypes.object,
        closePanel: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            treeData: [],
            defaultExpandedKeys: [],
            title: '',
            subtitle: '',
            show: 'none',
            panelStyle: {
                height: "400px",
                width: "550px",
                zIndex: 100,
                position: "absolute",
                overflow: "auto"
            },
            closePanel: () => {}
        };
    },
    onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys, arguments);
    },
    onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
        this.selKey = info.node.props.eventKey;
    },
    render() {
        const {maxWidth} = getWindowSize();
        const loop = (data) => {
            return data.map((item) => {
                if (item.children) {
                    return <TreeNode title={item.title} key={item.key}>{loop(item.children)}</TreeNode>;
                }
                return <TreeNode title={item.title} key={item.key} />;
            });
        };
        const treeNodes = loop(this.props.treeData);

        return (
            <div className="infobox-container" style={{display: this.props.show}}>
              <Draggable start={{x: (maxWidth / 2) - 300, y: 100}} handle=".panel-heading, .panel-heading *">
                  <Panel
                      className = "infobox-content toolbar-panel modal-dialog-container react-draggable"
                      style={this.props.panelStyle}
                      header={
                            <Grid className="detail-title" fluid={true}>
                                <Row>
                                    <Col xs={11} sm={11} md={11} lg={11}>
                                        <h4>{this.props.title}<br/><small>{this.props.subtitle}</small></h4>
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1}>
                                        <button style={{paddingRight: "15px"}} onClick={this.props.closePanel} className="close card-close"><span>X</span></button>
                                    </Col>
                                </Row>
                            </Grid>
                        }>
                        <Tree showLine
                            showIcon={false}
                            defaultExpandedKeys={this.props.defaultExpandedKeys}
                            onSelect={this.onSelect}
                            onExpand={this.onExpand}>
                            {treeNodes}
                        </Tree>
                  </Panel>
            </Draggable>
            </div>);
    }
  });

module.exports = connect((state) => ({
    treeData: state.siraTree.treeData,
    title: state.siraTree.title,
    subtitle: state.siraTree.subtitle,
    show: state.siraTree.show,
    defaultExpandedKeys: state.siraTree.defaultExpandedKeys
}), (dispatch) => {
    return {
        closePanel: () => {
            dispatch(closeTree());
        }
  };
})(SiraTree);
