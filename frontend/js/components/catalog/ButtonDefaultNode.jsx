const React = require('react');

const classNameBtnLink = "btn btn-link linkStyle";

class ButtonDefaultNode extends React.Component {
    render() {
        let { text } = this.props;

        return (
            <p>
                <button className={classNameBtnLink}>
                    <strong>
                        {text}
                    </strong>
                </button>
            </p>
        );
    }
}

module.exports = ButtonDefaultNode;