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
        dataProvider: PropTypes.string,
        urlMetadato: PropTypes.string,
        urlWMS: PropTypes.array,
        urlWFS: PropTypes.array,
        urlLegend: PropTypes.array,
        loadLegend: PropTypes.func
    };

    static defaultProps = {
        urlWMS: [],
        urlWFS: [],
        urlLegend: [],
        dataProvider: '',
        urlMetadato: '',
        loadLegend: () => { }   
    };

    showInfoBox = () => {
        return this.props.showInfoBox(this.props.node.id);
    };

    renderMetadata = () => {
        let renderWfsUrl = [];
        if (this.props.urlWFS && this.props.urlWFS.length > 0) {
            renderWfsUrl.push(<I18N.Message msgId={"metadataInfoBox.urlWFS"} />);
            this.props.urlWFS.map((val, index) =>
                renderWfsUrl.push(
                    <a tabIndex="0" className="infobox-service-url"
                        title="wfs" key={'wfs_' + index}
                        href={val} target="_blank" >
                        <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"} />
                    </a>
                ));
        }

        let renderWmsUrl = [];
        if (this.props.urlWMS && this.props.urlWMS.length > 0) {
            renderWmsUrl.push(<I18N.Message msgId={"metadataInfoBox.urlWMS"} />);
            this.props.urlWMS.map((val, index) =>
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
      
                <div className="containerDefaultNodeFooter handleMetadato ">
                    <p>
                        <strong><I18N.Message msgId={"metadataInfoBox.entePA"} /></strong> 
                        {this.props.dataProvider}
                    </p>
                    <p>
                        <strong><I18N.Message msgId={"metadataInfoBox.urlMetadato"} /></strong> 
                        <a target="_blank" rel="noopener noreferrer" href={this.props.urlMetadato}> <I18N.Message msgId={"metadataInfoBox.goToMetadato"} /> </a>
                    </p>
                    <p>
                        {renderWfsUrl} 
                        {renderWmsUrl}
                    </p>
                    <p>
                        <button
                            className="btn btn-link mostra-legenda"
                            onClick={() => this.props.loadLegend(this.props.urlWMS, this.props.urlLegend)}>
                           <I18N.Message msgId={"metadataInfoBox.showLegendButton"} />
                        </button>
                    </p>

                    <LegendBox />
                </div>
 
        );
    }

    render() {
        let { showAllText } = this.props;
        const showAllTextClass = !showAllText ? "layer-description" : "";

        return (
            <div className='layer-content'>
                <span
                    tabIndex="0"
                    className={showAllTextClass}
                    onClick={this.showInfoBox}>
                    {this.props.node.text}
                </span>

                {showAllText ? this.renderMetadata() : null}
            </div>
        );
    }

}

module.exports = ShowInfoNode;