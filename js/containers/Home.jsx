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

 const Localized = require('../../MapStore2/web/client/components/I18N/Localized');

 const {Link} = require('react-router');

 const {Glyphicon} = require('react-bootstrap');
 const SearchBar = require('../../MapStore2/web/client/components/mapcontrols/search/SearchBar');

 require('../../assets/css/home.css');
 require('../../assets/application/conoscenze_ambientali/css/skin-home.css');

 const Mosaic = connect((state) => ({
     tiles: state.mosaic.tiles
 }))(require('../components/Mosaic'));



 const Home = (props) => (
     <Localized messages={props.messages} locale={props.locale}>
         <div className="home">

           <div id="header-servizio" className="container-fluid">
               <div className="row-fluid">
                     <div className="container testalino">
                         <div className="row">
                              <div id="portalHeader">
                                     <noscript className="alert_js">
                                     <p>ATTENZIONE! Il browser in uso non supporta le applicazioni Javascript.<br />
                                     Per usufruire in maniera completa di alcuni servizi presenti in RuparPiemonte,
                                     potrebbe essere necessario l&acute;utilizzo dei Javascript.
                                     </p></noscript>

                                     <div className="header" >
                                         <h1><h1><a href="http://www.sistemapiemonte.it/cms/privati/" title="Home page Sistemapiemonte">SP</a></h1>
                                         </h1>
                                     </div>

                              </div>

                              <div id="sx">
                              </div>

                              <div id="dx">
                              </div>

                              <div className="titoloServizio col-lg-11 col-md-11 col-sm-11 col-xs-11">
                                 <h2>Sira</h2>
                              </div>

                              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 menu-righe">
                               <button className="pimenu-navbar-toggle pull-right" type="button" data-toggle="collapse" data-target=".pimenu-navbar-collapse">
                                 <i className="fa fa-bars"></i>
                               </button>
                             </div>

                             <nav className="pimenu-navbar-collapse collapse">
                                 <ul className="nav navbar-nav">
                                     <li className="item-113"><a id="profileALink" href="#">Profilo A</a></li>
                                     <li className="item-125"><a id="profileBLink" href="#">Profilo B</a></li>
                                 </ul>
                             </nav>


                         </div>
                     </div>
               </div>
           </div>



           <div className="container-fluid">
               <div className="row-fluid sb-sx">
                   <div className="container search-home">
                       <div className="row">
                           <div clclassNameass="col-md-7 col-xs-12 testo-home">
                               <div>
                                 Piattaforma di fruizione delle conoscenze alfanumeriche e geografiche prodotte nel contesto del SIRA Piemonte (Sistema Informativo Ambientale della Regione Piemonte), che si configura come una rete di cooperazione tra soggetti produttori e/o detentori di informazioni di interesse ambientale (Imprese, Regione, Province e ARPA)
                               </div>
                           </div>
                           <div className="col-md-5 col-xs-12 ricerca-home">
                             <form className="form-inline">
                                 <div className="form-group">
                                   <input type="text" className="form-control" id="search" placeholder="cerca oggetti, viste tematiche"> </input>
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


             <div className="modal fade" id="modalNews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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


            <div className="container-fluid piattaforma">
             <div className="row-fluid">
                 <div className="container">
                     <div className="row">
                         <h3>I numeri della piattaforma</h3>
                         <ul className="list-group numeri">
                           <li className="list-group-item col-md-4"><span className="cifra">25</span> <span className="sotto_cifra">Oggetti in continuo aggiornamento</span></li>
                           <li className="list-group-item col-md-4"><span className="cifra">24<span class="con_cifra">%</span></span> <span className="sotto_cifra">Crescita annuale base&nbsp;dati previsto</span></li>
                           <li className="list-group-item col-md-4"><span className="cifra">50</span> <span className="sotto_cifra">Indicatori ambientali disponibili</span></li>
                         </ul>
                     </div>
                 </div>
             </div>
            </div>









             <div className="homepage">
                 <div className="header">
                     <div className="header-text">
                         Sistema della conoscenza dell&apos;Ambiente
                     </div>
                     <div className="header-burger">
                         <Glyphicon glyph="glyphicon glyphicon-menu-hamburger"/>
                     </div>
                 </div>
                 <div className="header-2">
                     <p>
                         <span>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at urna lobortis libero viverra elementum et et nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a felis sit amet libero ultricies elementum a vitae quam...... scopri di più
                         </span>
                     </p>
                 </div>
                 <div className="header-3">
                     <div className="header-4">
                         <h2 className="search-title">Cerca</h2>
                         <SearchBar
                             className="siraSearchBar"
                             placeholder="Cerca dataset, applicazioni tematiche"/>
                     </div>
                 </div>
                 <div className="header-5">
                     <div className="box-left">
                         <Link to="/map/A">
                             <p><span style={{"color": "rgb(66, 66, 66)", "fontSize": "24px", "fontWeight": "bold"}}>AUA</span></p>
                             <p><span style={{"color": "#808080", "fontSize": "16px"}}>PROFILO A</span></p>
                         </Link>
                     </div>
                     <div className="box-right">
                         <Link to="/map/B">
                             <p><span style={{"color": "rgb(66, 66, 66)", "fontSize": "24px", "fontWeight": "bold"}}>AUA</span></p>
                             <p><span style={{"color": "#808080", "fontSize": "16px"}}>PROFILO B</span></p>
                         </Link>
                     </div>
                 </div>

             </div>

             <Debug/>
         </div>
     </Localized>
 );

 module.exports = connect((state) => {
     return {
         error: state.loadingError || (state.locale && state.locale.localeError) || null,
         locale: state.locale && state.locale.locale,
         messages: state.locale && state.locale.messages || {}
     };
 })(Home);
