const React = require('react');

const classNameBtnLink = "btn btn-link linkStyle";

class ButtonDefaultNode extends React.Component {
    render() {
        const { text, onClickEvent } = this.props;

        function handleOnClickEvent() {
            onClickEvent();
        }

        return (
            <p>
                <button className={classNameBtnLink} onClick={() => handleOnClickEvent()}>
                    <strong>
                        <p className="linkColorMetadata">{text}</p>
                    </strong>
                </button>
            </p>
        );
    }
}

module.exports = ButtonDefaultNode;