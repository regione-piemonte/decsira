/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const Debug = require('../../MapStore2/web/client/components/development/Debug');
const {connect} = require('react-redux');

const Footer = require('../components/Footer');
const Header = require('../components/Header');
// const PlatformNumbers = require('../components/PlatformNumbers');

// require('../../assets/css/home.css');
// require('../../assets/application/conoscenze_ambientali/css/skin-home.css');
// require('../../assets/global/css/skin.css');
// require('../../assets/application/conoscenze_ambientali/css/skin-interna.css');
// require('../../assets/global/css/bootstrap-themes/yeti/bootstrap.css');

const {showBox, hideBox, loadMetadata, loadLegends, toggleLegendBox} = require('../actions/metadatainfobox');

const Mosaic = connect((state) => ({
     tiles: state.mosaic.tiles
 }))(require('../components/Mosaic'));

const PlatformNumbers = connect((state) => ({
      siradecObject: state.platformnumbers.siradecObject,
      functionObjectMap: state.platformnumbers.functionObjectMap,
      functionObjectSearch: state.platformnumbers.functionObjectSearch,
      functionObjectView: state.platformnumbers.functionObjectView
  }))(require('../components/PlatformNumbers'));

const mapDispatchToPropsLinkMIB = (dispatch) => {
    return {
    openMetadataInfobox: () => {
        // todo forse manca il load...
        dispatch(loadMetadata());
        dispatch(showBox());
    }
  };
};

const LinkToMetadataInfoBox = connect(
    null,
    mapDispatchToPropsLinkMIB
    )(require('../components/LinkToMetadataInfoBox'));

const mapStateToPropsMIB = (state) => {
    return {
      show: state.metadatainfobox.show,
      openLegendPanel: state.metadatainfobox.openLegendPanel,
      panelStyle: state.metadatainfobox.panelStyle,
      title: state.metadatainfobox.title,
      text: state.metadatainfobox.text,
      numDatasetObjectCalc: state.metadatainfobox.numDatasetObjectCalc,
      dataProvider: state.metadatainfobox.dataProvider,
      urlWMS: state.metadatainfobox.urlWMS,
      urlWFS: state.metadatainfobox.urlWFS,
      urlLegend: state.metadatainfobox.urlLegend,
      error: state.metadatainfobox.error
  };
};

const mapDispatchToPropsMIB = (dispatch) => {
    return {
    loadLegend: (url, actualUrl) => {
        if (actualUrl && actualUrl.length === 0) {
            dispatch(loadLegends(url));
        }
        dispatch(toggleLegendBox());
    },
    closePanel: () => {
        dispatch(hideBox());
    }
  };
};

const MetadataInfoBox = connect(
    mapStateToPropsMIB,
    mapDispatchToPropsMIB
    )(require('../components/MetadataInfoBox'));

const Home = () => (
     <div className="home">

       <Header />

           <div className="container-fluid">
               <div className="row-fluid sb-sx">
                   <div className="container search-home">
                       <div className="row">
                           <div clclassName="col-md-7 col-xs-12 testo-home">
                               <div>
                                 Piattaforma di fruizione delle conoscenze alfanumeriche e geografiche prodotte nel contesto del SIRA Piemonte (Sistema Informativo Ambientale della Regione Piemonte), che si configura come una rete di cooperazione tra soggetti produttori e/o detentori di informazioni di interesse ambientale (Imprese, Regione, Province e ARPA)
                               </div>
                           </div>
                           <div className="col-md-5 col-xs-12 ricerca-home">
                             <form className="form-inline">
                                 <div className="form-group">
                                   <input type="text" className="form-control" id="search" placeholder="cerca oggetti, viste tematiche" />
                                 </div>
                                 <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                             </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <div className="container-fluid">
             <div className="row-fluid sb-dx">
                 <div className="container news-home">
                     <div className="row">
                         <div className="col-md-12 testo-news">
                         <p className="data-news">7 aprile 2016</p>
                         <h3 className="titolo-news">Nuova risorsa Disponibile</h3>
                         <p>&Egrave; disponibile questa nuova risorsa "Impianti autorizzati a recupero di energia e materia" <a href="#" data-toggle="modal" data-target="#modalNews">Continua</a></p>
                         </div>
                     </div>
                 </div>
             </div>
           </div>


             <div className="modal fade" id="modalNews" role="dialog" aria-labelledby="myModalLabel">
               <div className="modal-dialog" role="document">
                 <div className="modal-content">
                   <div className="modal-header">
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 className="modal-title" id="myModalLabel">Nuova risorsa Disponibile</h4>
                   </div>
                   <div className="modal-body">
                     <p>Nuova risorsa Disponibile: &egrave; disponibile questa nuova risorsa "Impianti autorizzati a recupero di energia e materia"</p>

                       <p>Proin quam metus, bibendum a lacus eget, tempor tincidunt est. Ut ac laoreet diam. Integer pretium pharetra venenatis. Sed luctus metus lacinia mauris porta, eget imperdiet enim commodo. Phasellus ornare diam sed massa tempus varius. Fusce mollis blandit vehicula. Phasellus ac vulputate purus, eget aliquam arcu. Nam nec orci nunc. Mauris pellentesque tellus eget nulla auctor, nec consectetur nisl porttitor. Proin ullamcorper vestibulum sapien, et congue sem ultricies nec. Fusce imperdiet imperdiet neque sit amet elementum. Suspendisse ac massa volutpat, iaculis augue nec, tristique urna. In ut congue nisi.</p>

                       <p>Praesent condimentum tincidunt condimentum. Sed et convallis dui. Duis id nisl dui. Duis commodo ex non nulla aliquet pulvinar. Donec venenatis, purus eu efficitur dapibus, enim urna eleifend nisi, eu sodales nisl ligula in turpis. Donec posuere ullamcorper tellus in sagittis. Donec ullamcorper vel risus vitae finibus. Suspendisse viverra enim in cursus gravida. In hac habitasse platea dictumst. Suspendisse ac enim in justo vestibulum placerat eu et massa. Curabitur elementum neque sit amet semper blandit. Suspendisse imperdiet dolor et est consectetur, nec luctus nulla pharetra.</p>

                       <p>Duis rutrum felis a ultrices ornare. Maecenas non ex suscipit, pharetra tellus vitae, placerat ligula. Aliquam dolor neque, lacinia a congue id, rhoncus lobortis urna. Duis mollis tortor eros, vel efficitur libero fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed erat lectus, interdum eu pellentesque sed, posuere eu risus. Morbi facilisis fringilla molestie. Pellentesque ac feugiat erat, quis aliquet turpis. Aenean dapibus dui non venenatis finibus.</p>

                       <p>Sed commodo sollicitudin diam at sagittis. In at maximus leo. Pellentesque sed dolor nec nulla sagittis volutpat a sed nisi. Phasellus tristique facilisis enim eu congue. Sed egestas libero nulla, non fringilla felis bibendum id. Praesent et eros aliquet, elementum mauris vel, iaculis nunc. Nam congue accumsan nisl. Mauris vitae egestas nisl. Curabitur rutrum vehicula dui, laoreet ultricies mi finibus vel. Sed quam felis, lacinia ac eros quis, dignissim tincidunt quam. Aliquam eleifend varius lacus. Donec non interdum odio. Fusce sed tellus interdum, condimentum nulla vitae, commodo libero. Pellentesque nulla mi, commodo non lectus sit amet, mollis suscipit nisl. Proin auctor nisi risus, id finibus leo cursus vitae. </p>
                   </div>
                 </div>
               </div>
             </div>


            <Mosaic />
            <LinkToMetadataInfoBox />
            <MetadataInfoBox />
            <PlatformNumbers />
            <Footer />
            <Debug/>
</div>
 );

module.exports = connect((state) => {
    return {
         error: state.loadingError || (state.locale && state.locale.localeError) || null,
         locale: state.locale && state.locale.locale,
         messages: state.locale && state.locale.messages || {}
     };
})(Home);
