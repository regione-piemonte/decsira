import React, {PropTypes} from 'react';
const { Panel} = require('react-bootstrap');
const {connect} = require('react-redux');
const {closeTree} = require("../actions/siraTree");
import Tree, {TreeNode} from 'rc-tree';
import './SiraTree.less';

const Draggable = require('react-draggable');

const SiraTree = React.createClass({
    propTypes: {
        treeData: PropTypes.array,
        show: React.PropTypes.string,
        panelStyle: React.PropTypes.object,
        closePanel: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            treeData: [],
            show: 'none',
            panelStyle: {
                        height: "300px",
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
        const loop = (data) => {
            return data.map((item) => {
                if (item.children) {
                    return <TreeNode title={item.title} key={item.key}>{loop(item.children)}</TreeNode>;
                }
                return <TreeNode title={item.title} key={item.key} />;
            });
        };
        const treeNodes = loop(this.props.treeData);

        let expandedKeys = [];
        const children = this.props.treeData.map(item => item.children);
        children.forEach(item => {
            expandedKeys.push(...item.map(child => child.key));
        });

        return (
            <div className="infobox-container" style={{display: this.props.show}}>
              <Draggable start={{x: 400, y: 200}} handle=".panel-heading,.handle_featuregrid,.handle_featuregrid *">
                  <Panel
                      className = "infobox-content toolbar-panel modal-dialog-container react-draggable"
                      style={this.props.panelStyle}
                      header={
                        <span>
                            <span className="snapshot-panel-title">
                                Sira Tree
                            </span>
                            <button className="print-panel-close close" onClick={this.props.closePanel}><span>×</span></button>
                        </span>}>
                        <Tree showLine
                            showIcon={false}
                            expandedKeys={expandedKeys}
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
    show: state.siraTree.show
}), (dispatch) => {
    return {
      closePanel: () => {
          dispatch(closeTree());
      }
  };
})(SiraTree);
