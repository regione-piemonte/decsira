const React = require('react');
const PropTypes = require('prop-types');
const I18N = require('@mapstore/components/I18N/I18N');

class WmsCopyNotification extends React.Component {
    static propTypes = {
        onTimeOut: PropTypes.func
    };

    componentDidMount() {
        this.timeOutId = setTimeout(this.props.onTimeOut, 2000);
    };

    componentWillUnmount() {
        clearTimeout(this.timeOutId);
    };



    render() {
        const content = (
            <div className="alert alert-success" role="alert">{/* alert-dismissible */}
                <I18N.Message msgId={"metadataInfoBox.wmsCopyLinkNotification"} />
            </div>
        );


        return (content);
    }
}

module.exports = WmsCopyNotification;
