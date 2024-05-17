const React = require('react');
const I18N = require('@mapstore/components/I18N/I18N');

class MetadataNavLink extends React.Component {

    render() {
        let { provider, urlMetadato, wfsUrl, wmsUrl, buttonLegend } = this.props;
        return (
            <div className="containerDefaultNodeFooter handleMetadato ">
                <p>
                    <strong><I18N.Message msgId={"metadataInfoBox.entePA"} /></strong>
                    {provider}
                </p>
                <p>
                    <strong><I18N.Message msgId={"metadataInfoBox.urlMetadato"} /></strong>
                    <a target="_blank" rel="noopener noreferrer" href={urlMetadato}>
                        <I18N.Message msgId={"metadataInfoBox.goToMetadato"} />
                    </a>
                </p>
                <p>
                    {wfsUrl}
                    {wmsUrl}
                </p>

                { btnShowLegend }

            </div>
        );
    }
}


module.exports = MetadataNavLink;
