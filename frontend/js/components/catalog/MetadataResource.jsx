const React = require('react');


class MetadataResource extends React.Component {
    render() {
        return (<>
            <div className="containerDefaultNodeFooter handleMetadato">
                    <p>Fonte metadato: <b>Regione Piemonte</b></p>
                    <p>Metadato:  <b>Vai Al metadato</b> </p>
                    <p>Servizio WMS: <b>Copia url del Servizio</b></p>
            </div>
        </>);
    }
}




module.exports = MetadataResource;