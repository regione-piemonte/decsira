const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const I18N = require('@mapstore/components/I18N/I18N');
const { hideLegendBox } = require('../../actions/metadatainfobox');

const LegendBox = connect(
    (state) => {
        return {
            showLegend: state.metadatainfobox.showLegend,
            urlLegend: state.metadatainfobox.urlLegend
        };
    },
    (dispatch) => {
        return {
            closeLegend: () => {
                dispatch(hideLegendBox());
            }
        };
    }
)(require('../LegendBox'));

class ShowInfoNode extends React.Component {
    static propTypes = {
        urlLegend: PropTypes.array,
        loadLegend: PropTypes.func,
        node: PropTypes.object,
        showAllText: PropTypes.bool,
        isVistaDataset: PropTypes.bool,
        nodeVista: PropTypes.object
    };

    static defaultProps = {
        urlLegend: [],
        loadLegend: () => { }
    };

    renderMetadata = () => {
        let metadato = this.props.node.metadato;
        
        console.log('>>>>METADATO>>>>>', metadato);

        
        let renderWfsUrl = [];
        if (metadato && metadato.urlWFS && metadato.urlWFS.length > 0) {
            renderWfsUrl.push(<I18N.Message msgId={"metadataInfoBox.urlWFS"} />);
            metadato.urlWFS.map((val, index) =>
                renderWfsUrl.push(
                    <a tabIndex="0" className="infobox-service-url"
                        title="wfs" key={'wfs_' + index}
                        onClick={() => { navigator.clipboard.writeText(val); }} >
                        <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"} />
                    </a>
                ));
        }

        let renderWmsUrl = [];
        if (metadato && metadato.urlWMS && metadato.urlWMS.length > 0) {
            renderWmsUrl.push(<I18N.Message msgId={"metadataInfoBox.urlWMS"} />);
            metadato.urlWMS.map((val, index) =>
                renderWmsUrl.push(
                    <a tabIndex="0" className="infobox-service-url"
                        title="wms" key={'wms_' + index}
                        onClick={() => { navigator.clipboard.writeText(val); }} >
                        <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"} />
                    </a>
                )
            );
        }

        return (
            <div className="containerDefaultNodeFooter handleMetadato ">
                <p>
                    <strong><I18N.Message msgId={"metadataInfoBox.entePA"} /></strong>
                    {metadato ? metadato.dataProvider : null}
                </p>
                <p>
                    <strong><I18N.Message msgId={"metadataInfoBox.urlMetadato"} /></strong>
                    <a target="_blank" rel="noopener noreferrer" href={metadato ? metadato.urlMetadato : null}>
                        <I18N.Message msgId={"metadataInfoBox.goToMetadato"} />
                    </a>
                </p>
                <p>
                    {renderWfsUrl}
                    {renderWmsUrl}
                </p>
                <p>
                    <button
                        className="btn btn-link"
                        onClick={() => this.props.loadLegend(metadato.urlWMS, metadato.urlLegend)}>
                        <I18N.Message msgId={"metadataInfoBox.showLegendButton"} />
                    </button>
                </p>

                <LegendBox />
            </div>
        );
    }

    render() {
        let { isVistaDataset, showAllText, nodeVista } = this.props;
        let whichClass = '';

        if (!isVistaDataset) {
            whichClass = !showAllText ? "layer-description" : "";
        } else {
            whichClass = !showAllText ? 'sira-view-description' : 'sira-view-description-text';
        }

        console.log('>>>>SHOW INFO NODE>>>>>', this.props);


        return (
            <div className="layer-content">
                <span
                    tabIndex="0"
                    className={whichClass}>
                    {isVistaDataset ? nodeVista.text : this.props?.node?.text}
                </span>

                {showAllText ? this.renderMetadata() : null}
            </div>
        );
    }

}

module.exports = ShowInfoNode;
