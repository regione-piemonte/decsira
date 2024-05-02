const React = require('react');

const classNameBtnLink = "btn btn-link linkStyle";

class ButtonDefaultNode extends React.Component {
    render() {
        let { text, onClick } = this.props;

        return (
            <p>
                <button className={classNameBtnLink} onClick={onClick}>
                    <strong>
                        <p className="linkColorMetadata">{text}</p>
                    </strong>
                </button>
            </p>
        );
    }
}

module.exports = ButtonDefaultNode;