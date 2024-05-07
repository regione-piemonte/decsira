const React = require('react');


class MetadataResource extends React.Component {

    render() {
        const { urlMetadato } = this.props;

        return (<>
            <div className="containerDefaultNodeFooter handleMetadato">
                <p>Fonte metadato: <stron>*** </stron></p>
                <p>Metadato:  <stron><a>*** </a></stron> </p>
                <p>Servizio WMS: <stron>*** </stron></p>
            </div>
        </>);
    }
}




module.exports = MetadataResource;