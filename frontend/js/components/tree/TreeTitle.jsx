const PropTypes = require('prop-types');
const React = require('react');
const {Grid, Row, Col} = require('react-bootstrap');
const {closeTree} = require('../../actions/siraTree');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');

class TreeTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.array,
        id: PropTypes.string,
        closeTree: PropTypes.func
    };

    static defaultProps = {
        title: '',
        subtitle: '',
        id: null,
        closeTree: () => {}
    };

    render() {
        let subtitle = this.props.subtitle.join(" ");

        return (
            <Grid className="detail-title" fluid>
                <Row>
                    <Col xs={11} sm={11} md={11} lg={11}>
                        <h4>{this.props.title}<br/><small>{subtitle}</small></h4>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <button style={{paddingRight: "15px"}} onClick={this.props.closeTree} className="close card-close"><span>X</span></button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = connect(null, dispatch => {
    return bindActionCreators({closeTree}, dispatch);
})(TreeTitle);
