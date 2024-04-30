const React = require('react');
const ButtonDefaultNode = require('./ButtonDefaultNode');


class DefaultNodeFooter extends React.Component {
    render() {
        return (<>

            <hr />

            <div className="containerDefaultNodeFooter">
                <div className="ContainerParagraph">
                        <ButtonDefaultNode text="MOSTRA DATI" />
                        <ButtonDefaultNode text="MOSTRA LEGGENDA"  />
                </div>

                <div>
                    <ButtonDefaultNode text="Leggi di piu" />
                </div>
            </div>
        </>);
    }
}

module.exports = DefaultNodeFooter;

