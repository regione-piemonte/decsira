const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const I18N = require('@mapstore/components/I18N/I18N');
const { hideLegendBox } = require('../../actions/metadatainfobox');
const MetadataNavLink = require('./MetadataNavLink');
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
        showAllText: PropTypes.string,
    };

    static defaultProps = {
        urlLegend: [],
        loadLegend: () => { }
    };

    render() {
        let { showAllText } = this.props;
        const showAllTextClass = !showAllText ? "layer-description" : "";
        let metadato = this.props.node.metadato;

        console.log(metadato);

        let renderWfsUrl = [];
        if (metadato && metadato.urlWFS && metadato.urlWFS.length > 0) {
            renderWfsUrl.push(<I18N.Message msgId={"metadataInfoBox.urlWFS"} />);
            metadato.urlWFS.map((val, index) =>
                renderWfsUrl.push(
                    <a tabIndex="0" className="infobox-service-url"
                        title="wfs" key={'wfs_' + index}
                        href={val} target="_blank" >
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
                        href={val} target="_blank" >
                        <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"} />
                    </a>
                )
            );
        }
        return (
            <div className="layer-content">
                <span
                    tabIndex="0"
                    className={showAllTextClass}>
                    {this.props.node.text}
                </span>

                {showAllText && metadato ?
                    <MetadataNavLink
                        provider={metadato?.dataProvider}
                        urlMetadato={metadato?.urlMetadato}
                        wfsUrl={renderWfsUrl}
                        wmsUrl={renderWmsUrl}
                        buttonLegend={<p><button
                            className="btn btn-link"
                            onClick={() => this.props.loadLegend(metadato.urlWMS, metadato.urlLegend)}>
                            <I18N.Message msgId={"metadataInfoBox.showLegendButton"} />
                        </button>
                        </p>} /> : null}

                <LegendBox />
            </div>
        );
    }

}

module.exports = ShowInfoNode;
