const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { Image, Panel } = require('react-bootstrap');
const I18N = require('@mapstore/components/I18N/I18N');

class ShowInfoNode extends React.Component {
    static propTypes = {
        show: PropTypes.string,
        showButtonLegend: PropTypes.string,
        openLegendPanel: PropTypes.bool,
        panelTitle: PropTypes.string,
        header: PropTypes.string,
        panelStyle: PropTypes.object,
        title: PropTypes.string,
        text: PropTypes.string,
        dataProvider: PropTypes.string,
        urlMetadato: PropTypes.string,
        dataUrl: PropTypes.string,
        numDatasetObjectCalc: PropTypes.number,
        urlWMS: PropTypes.array,
        urlWFS: PropTypes.array,
        urlLegend: PropTypes.array,
        error: PropTypes.string,
        closePanel: PropTypes.func,
        toggleLegendPanel: PropTypes.func,
        loadLegend: PropTypes.func,
        loadMetadataInfo: PropTypes.func
    };

    static defaultProps = {
        show: 'none',
        showButtonLegend: 'none',
        openLegendPanel: false,
        panelTitle: "",
        error: '',
        title: '',
        text: '',
        dataUrl: '',
        urlWMS: [],
        urlWFS: [],
        urlLegend: [],
        numDatasetObjectCalc: 0,
        dataProvider: '',
        urlMetadato: '',
        header: "featuregrid.header",
        closePanel: () => { },
        loadMetadataInfo: () => { },
        toggleLegendPanel: () => { },
        loadLegend: () => { },
        panelStyle: {
            height: "500px",
            width: "450px",
            zIndex: 100,
            position: "absolute",
            overflow: "auto"
        }
    };



    showInfoBox = () => {
        return this.props.showInfoBox(this.props.node.id);
    };

    onOpenLegendPanel = () => {
        this.props.loadLegend(this.props.urlWMS, this.props.urlLegend);
    };

    renderLegend = () => {
        return this.props.urlLegend.map((url) => {
            return (<Image src={url} />);
        });
    };

    renderError = () => {
        if (this.props.error) {
            return (
                <p className="infobox-error">
                    <I18N.Message msgId={"metadataInfoBox.errorLoadMetadata"} />
                </p>
            );
        }
        return ('');
    };

    renderLegends = () => {
        if (this.props.urlLegend) {
            return (
                this.props.urlLegend.map((urlObject, index) =>
                    <Panel className="infobox-legend-container" key={'lc_' + index}>
                        <h4 className="infobox-legend-service-title" key={'h4_lc_' + index} >{urlObject.serviceTitle}</h4>
                        {this.renderSingleLegend(urlObject.urls)}
                    </Panel>
                ));
        }
        return ('');
    };

    renderSingleLegend = (legends) => {
        if (legends) {
            return (
                legends.map((legend, index) =>
                    <div className="infobox-legendpanel">
                        <h4 className="infobox-legend-title" key={'legend_' + index}>{legend.title}</h4>
                        <Image key={'im_legend_' + index} src={legend.url} />
                    </div>
                ));
        }
        return ('');
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
                    <p>
                        <a tabIndex="0" className="infobox-service-url"
                            title="wms" key={'wms_' + index}
                            href={val} target="_blank" >
                            <I18N.Message msgId={"metadataInfoBox.link_to_ogc_service"} />
                        </a>
                    </p>
                )
            );
        }

        return (
            <div>
                <div className="containerDefaultNodeFooter handleMetadato ">

                    <p> Fonte metadato: {this.props.dataProvider} </p>

                    <p> Metadato:
                        <a target="_blank" rel="noopener noreferrer" href={this.props.urlMetadato}> Vai al metadato </a>
                    </p>

                    <p>
                        {renderWfsUrl}
                        {renderWmsUrl}
                    </p>

                </div>
            </div>
        );
    }

    render() {
        let { showAllText } = this.props;
        const showAllTextClass = !showAllText ? "layer-description" : "";

        let renderLegendPanel = null;
        if (this.props.openLegendPanel) {
            renderLegendPanel =
                (<Panel
                    className="toolbar-panel modal-dialog-container react-draggable"
                    collapsible expanded={this.props.openLegendPanel}>
                    {this.renderLegends()}
                </Panel>);
        }

        console.log('props>>>>>',this.props);

        return (
            <div className='layer-content'>
                <span
                    tabIndex="0"
                    className={showAllTextClass}
                    onclick={this.showInfoBox}>
                    {this.props.node.text}
                </span>

                {/* <button onClick={() => this.toggleLegendPanel()}>toggleLegendPanel</button>
                {renderLegendPanel} */}

                {showAllText ? this.renderMetadata() : null}
            </div>
        );
    }


}



/* module.exports = ShowInfoNode; */


module.exports = connect((state) => {
    return {
        show: state.metadatainfobox.show,
        openLegendPanel: state.metadatainfobox.openLegendPanel,
        title: state.metadatainfobox.title,
        text: state.metadatainfobox.text,
        numDatasetObjectCalc: state.metadatainfobox.numDatasetObjectCalc,
        dataProvider: state.metadatainfobox.dataProvider,
        urlMetadato: state.metadatainfobox.urlMetadato,
        urlWMS: state.metadatainfobox.urlWMS,
        urlWFS: state.metadatainfobox.urlWFS,
        urlLegend: state.metadatainfobox.urlLegend,
        error: state.metadatainfobox.error,
        showButtonLegend: state.metadatainfobox.showButtonLegend
    };
}, dispatch => {
    return bindActionCreators({
        loadLegend: (u, actualUrl) => {
            if (actualUrl && actualUrl.length === 0) {
                dispatch(loadLegends(u));
            }
            dispatch(toggleLegendBox());
        }
    }, dispatch);
})(ShowInfoNode);