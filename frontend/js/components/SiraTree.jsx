import React, {PropTypes} from 'react';
const { Panel, Grid, Row, Col, Glyphicon} = require('react-bootstrap');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const {closeTree} = require("../actions/siraTree");
const {getWindowSize} = require('../../MapStore2/web/client/utils/AgentUtils');
import Tree, {TreeNode} from 'rc-tree';
import './SiraTree.less';

const {loadCardTemplate} = require('../actions/card');
const {loadFeatureTypeConfig, setWaitingForConfig} = require('../actions/siradec');

const Draggable = require('react-draggable');

const SiraTree = React.createClass({
    propTypes: {
        treeData: PropTypes.array,
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        show: React.PropTypes.string,
        panelStyle: React.PropTypes.object,
        configOggetti: React.PropTypes.object,
        waitingForConfig: React.PropTypes.object,
        authParams: React.PropTypes.object,
        closePanel: React.PropTypes.func,
        onDetail: React.PropTypes.func,
        loadFeatureTypeConfig: React.PropTypes.func,
        setWaitingForConfig: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            treeData: [],
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
            waitingForConfig: null,
            closePanel: () => {},
            onDetail: () => {},
            setWaitingForConfig: () => {}
        };
    },
    componentWillMount() {
        if (this.props.waitingForConfig && this.props.waitingForConfig.info) {
            const info = this.props.waitingForConfig.info;
            this.props.setWaitingForConfig(null);
            this.onSelect(null, info);
        }
    },
    onSelect(selectedKeys, info) {
        let selectedData = this.searchKey(this.props.treeData, info.node.props.eventKey);
        if (selectedData && selectedData.linkToDetail) {
            if (selectedData.linkToDetail.featureId) {
                const featureType = selectedData.linkToDetail.featureType;
                const detailsConfig = this.props.configOggetti[featureType];
                const templateUrl = detailsConfig.card.template.default || detailsConfig.card.template;
                let url = detailsConfig.card.service.url;
                Object.keys(detailsConfig.card.service.params).forEach((param) => {
                    url += `&${param}=${detailsConfig.card.service.params[param]}`;
                });
                url = url += "&FEATUREID=" + selectedData.linkToDetail.featureId;
                this.props.onDetail(templateUrl, url);
            } else {
                const cqlFilter = selectedData.linkToDetail.cqlFilter;
                const featureType = selectedData.linkToDetail.featureType.indexOf(":") > 1 ? selectedData.linkToDetail.featureType.split(":")[1] : selectedData.linkToDetail.featureType;
                if (this.props.configOggetti[featureType]) {
                    const detailsConfig = this.props.configOggetti[featureType];
                    const templateUrl = selectedData.linkToDetail.templateUrl ? selectedData.linkToDetail.templateUrl : (detailsConfig.card.template.default || detailsConfig.card.template);
                    let url = detailsConfig.card.service.url;
                    Object.keys(detailsConfig.card.service.params).forEach((param) => {
                        url += `&${param}=${detailsConfig.card.service.params[param]}`;
                    });
                    url = url += "&cql_filter=" + cqlFilter;
                    this.props.onDetail(templateUrl, url);
                } else {
                    let waitingForConfig = {
                        featureType,
                        info
                    };
                    this.props.setWaitingForConfig(waitingForConfig);
                    this.props.loadFeatureTypeConfig(null, {authkey: this.authParams && this.authParams.authkey ? this.authParams.authkey : ''}, featureType, false);
                }
            }
        }
    },
    render() {
        const {maxWidth, maxHeight} = getWindowSize();

        const loop = (data) => {
            return data.map((item) => {
                if (item.children) {
                    return <TreeNode title={item.title} key={item.key}>{loop(item.children)}</TreeNode>;
                }
                return <TreeNode title={item.title} key={item.key} />;
            });
        };
        const treeNodes = loop(this.props.treeData);

        const getKeys = (data) => {
            return data.reduce(function(acc, o) {
                let ret = acc;
                if (o.key) {
                    ret.push(o.key);
                }
                if (o.children) {
                    ret = ret.concat(getKeys(o.children));
                }
                return ret;
            }, []);
        };
        const expandedKeys = getKeys(this.props.treeData);
        console.log(expandedKeys);

        return (
            <Draggable bounds={{left: 0, top: 0, right: maxWidth - 100, bottom: maxHeight - 100}} start={{x: (maxWidth / 2) - 300, y: 100}} handle=".panel-heading, .panel-heading *">
            <div className="scheda-tree" style={{display: this.props.show}}>
                  <Panel
                      className = "info-header panel panel-primary"
                      header={
                            <Grid className="detail-title" fluid={true}>
                                <Row>
                                    <Col xs={1} sm={1} md={1} lg={1}>
                                        <Glyphicon id="treeIcon" glyph="link"/>
                                    </Col>
                                    <Col xs={10} sm={10} md={10} lg={10}>
                                        <h4>{this.props.title}<br/><small>{this.props.subtitle}</small></h4>
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1}>
                                        <button style={{paddingRight: "15px"}} onClick={this.props.closePanel} className="close card-close"><span>X</span></button>
                                    </Col>
                                </Row>
                            </Grid>
                        }>
                    <Panel className="tree-content infobox-content">
                        <Tree showLine
                            showIcon={false}
                            defaultExpandedKeys={expandedKeys}
                            onSelect={this.onSelect}>
                            {treeNodes}
                        </Tree>
                    </Panel>
                  </Panel>
            </div>
            </Draggable>);
    },
    searchKey(data, key) {
        let selectedData;
        if (data[0].key === key) {
            selectedData = data[0];
        } else {
            const children = data.map(item => item.children);
            if (children) {
                children.forEach(item => {
                    let found = item.find(obj => obj.key === key);
                    if (found) {
                        selectedData = found;
                    } else {
                        selectedData = this.searchKey(item, key);
                    }
                });
            }
        }
        return selectedData;
    }
  });

module.exports = connect((state) => {
    return {
        treeData: state.siraTree.treeData,
        title: state.siraTree.title,
        subtitle: state.siraTree.subtitle,
        show: state.siraTree.show,
        card: state.cardtemplate || {},
        configOggetti: state.siradec.configOggetti,
        authParams: state.userprofile.authParams,
        waitingForConfig: state.siradec.waitingForConfig
    };
}, dispatch => {
    return bindActionCreators({
        closePanel: closeTree,
        onDetail: loadCardTemplate,
        setWaitingForConfig: setWaitingForConfig,
        loadFeatureTypeConfig
    }, dispatch);
})(SiraTree);
