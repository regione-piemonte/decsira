const React = require('react');
const ButtonDefaultNode = require('./ButtonDefaultNode');
const MetadataResource = require('./MetadataResource');
const { p } = require('react-dom-factories');


class DefaultNodeFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResource: false
        };
    }

    toogleShowMetadata() {
        this.setState((currState) => {
            return { showResource: !currState.showResource };
        });
    }

    showInfoBox = () => {
        this.props.showInfoBox(this.props.node.id);
    };

    render() {
        const myClass = !this.state.showResource ? "layer-description" : "";

        return (<>

            <br />

            <div className="layer-content">
                <span
                    tabIndex="0"
                    className={myClass}
                    onClick={this.showInfoBox}>
                    {this.props.node.text}
                    <br />
                    {
                        this.state.showResource ?
                            <MetadataResource /> :
                            <noscript />
                    }
                </span>

                {/* {this.renderTools()} */}

            </div>

            <hr />

            <div className="containerDefaultNodeFooter">
                <div className="ContainerParagraph">
                    <ButtonDefaultNode text="MOSTRA DATI" />
                    <ButtonDefaultNode text="MOSTRA LEGGENDA" />
                </div>

                <div>
                    <ButtonDefaultNode text="Leggi di piu" onClick={() => this.toogleShowMetadata()} />
                </div>
            </div>
        </>);
    }
}

module.exports = DefaultNodeFooter;

