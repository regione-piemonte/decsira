
-- *******************************************************************************************************************
-- POPOLAMENTO DECODIFICHE E CATEGORIE APPLICATIVE DECSIRA 
-- *******************************************************************************************************************

insert into sipra_mtd_d_tipo_funzione values (1, 'Mappa', 'OGC:WMS');
insert into sipra_mtd_d_tipo_funzione values (2, 'Cerca');
insert into sipra_mtd_d_tipo_funzione values (3, 'Download', 'OGC:WFS');
insert into sipra_mtd_d_tipo_funzione values (4, 'Vista tematica');
insert into sipra_mtd_d_tipo_funzione values (5, 'Mappa applicativa');

insert into sipra_mtd_d_tipo_categoria values (1, 'INSPIRE'); -- IMPORTATA DA CSW
insert into sipra_mtd_d_tipo_categoria values (2, 'PSR');     -- IMPORTATA DA CSW
insert into sipra_mtd_d_tipo_categoria values (3, 'DECSIRA'); -- CONFIGURATA A MANO

insert into sipra_mtd_d_lingua values (1, 'ITALIANO APOSTROFATO');
insert into sipra_mtd_d_lingua values (2, 'INGLESE');
insert into sipra_mtd_d_lingua values (3, 'ITALIANO ACCENTATO');

insert into sipra_mtd_d_standard_espos values (1, 'CSW');
insert into sipra_mtd_d_standard_espos values (2, 'CKAN');

insert into sipra_mtd_d_fontedati values (1, 1, 'FONTE GEOPORTALE', 'http://www.geoportale.piemonte.it/geonetworkrp/srv/ita/metadata.show?uuid=', 'http://www.geoportale.piemonte.it/geonetworkrp/srv/ita/csw', 'S', 'r_piemon');
insert into sipra_mtd_d_fontedati values (2, 1, 'FONTE GEOPORTALE (ARPA)', 'http://webgis.arpa.piemonte.it/geoportalserver_arpa/catalog/search/resource/details.page?uuid=', 'http://www.geoportale.piemonte.it/geonetworkrp/srv/ita/csw', 'S', 'ARLPA_');

-- ---------------------------------------------
-- CATEGORIE DEI METADATI
-- ---------------------------------------------

-- INSPIRE
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (1, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (2, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (3, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (4, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (5, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (6, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (7, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (8, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (9, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (10, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (11, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (12, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (13, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (14, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (15, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (16, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (17, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (18, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (19, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (20, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (21, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (22, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (23, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (24, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (25, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (26, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (27, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (28, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (29, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (30, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (31, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (32, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (33, 1);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (34, 1);

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (1, 1, 'Sistemi di coordinate', 'Sistemi di coordinate', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (2, 1, 'Sistemi di griglie geografiche', 'Sistemi di griglie geografiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (3, 1, 'Nomi geografici', 'Nomi geografici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (4, 1, 'Unita'' amministrative', 'Unita'' amministrative', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (5, 1, 'Indirizzi', 'Indirizzi', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (6, 1, 'Particelle catastali', 'Particelle catastali', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (7, 1, 'Reti di trasporto', 'Reti di trasporto', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (8, 1, 'Idrografia', 'Idrografia', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (9, 1, 'Siti protetti', 'Siti protetti', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (10, 1, 'Elevazione', 'Elevazione', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (11, 1, 'Copertura del suolo', 'Copertura del suolo', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (12, 1, 'Ortoimmagini', 'Ortoimmagini', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (13, 1, 'Geologia', 'Geologia', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (14, 1, 'Unita'' statistiche', 'Unita'' statistiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (15, 1, 'Edifici', 'Edifici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (16, 1, 'Suolo', 'Suolo', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (17, 1, 'Utilizzo del territorio', 'Utilizzo del territorio', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (18, 1, 'Salute umana e sicurezza', 'Salute umana e sicurezza', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (19, 1, 'Servizi di pubblica utilita'' e servizi amministrativi', 'Servizi di pubblica utilita'' e servizi amministrativi', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (20, 1, 'Impianti di monitoraggio ambientale', 'Impianti di monitoraggio ambientale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (21, 1, 'Produzione e impianti industriali', 'Produzione e impianti industriali', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (22, 1, 'Impianti agricoli e acquacoltura', 'Impianti agricoli e acquacoltura', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (23, 1, 'Distribuzione della popolazione - demografia', 'Distribuzione della popolazione - demografia', 'N');

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (24, 1, 'Zone sottoposte a gestione/limitazioni/regolamentazione e unita'' con obbligo di comunicare dati', 'Zone sottoposte a gestione/limitazioni/regolamentazione e unita'' con obbligo di comunicare dati', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (24, 3, 'Zone sottoposte a gestione/limitazioni/regolamentazione e unità con obbligo di comunicare dati', 'Zone sottoposte a gestione/limitazioni/regolamentazione e unità con obbligo di comunicare dati', 'N');

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (25, 1, 'Zone a rischio naturale', 'Zone a rischio naturale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (26, 1, 'Condizioni atmosferiche', 'Condizioni atmosferiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (27, 1, 'Elementi geografici meteorologici', 'Elementi geografici meteorologici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (28, 1, 'Elementi geografici oceanografici', 'Elementi geografici oceanografici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (29, 1, 'Regioni marine', 'Regioni marine', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (30, 1, 'Regioni biogeografiche', 'Regioni biogeografiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (31, 1, 'Habitat e biotopi', 'Habitat e biotopi', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (32, 1, 'Distribuzione delle specie', 'Distribuzione delle specie', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (33, 1, 'Risorse energetiche', 'Risorse energetiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (34, 1, 'Risorse minerarie', 'Risorse minerarie', 'N');

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (1, 2, 'Coordinate reference systems', 'Coordinate reference systems', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (2, 2, 'Geographical grid systems', 'Geographical grid systems', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (3, 2, 'Geographical names', 'Geographical names', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (4, 2, 'Administrative units', 'Administrative units', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (5, 2, 'Addresses', 'Addresses', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (6, 2, 'Cadastral parcels', 'Cadastral parcels', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (7, 2, 'Transport networks', 'Transport networks', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (8, 2, 'Hydrography', 'Hydrography', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (9, 2, 'Protected sites', 'Protected sites', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (10, 2, 'IElevation', 'IElevation', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (11, 2, 'Land cover', 'Land cover', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (12, 2, 'IOrthoimagery', 'IOrthoimagery', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (13, 2, 'IGeology', 'IGeology', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (14, 2, 'Statistical units', 'Statistical units', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (15, 2, 'Buildings', 'Buildings', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (16, 2, 'Soil', 'Soil', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (17, 2, 'Land use', 'Land use', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (18, 2, 'Human health and safety', 'Human health and safety', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (19, 2, 'Utility and governmental services', 'Utility and governmental services', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (20, 2, 'Environmental monitoring facilities', 'Environmental monitoring facilities', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (21, 2, 'Production and industrial facilities', 'Production and industrial facilities', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (22, 2, 'Agricultural and aquaculture facilities', 'Agricultural and aquaculture facilities', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (23, 2, 'Population distribution and demography', 'Population distribution and demography', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (24, 2, 'Area management/restriction/regulation zones and reporting units', 'Area management/restriction/regulation zones and reporting units', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (25, 2, 'Natural risk zones', 'Natural risk zones', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (26, 2, 'Atmospheric conditions', 'Atmospheric conditions', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (27, 2, 'Meteorological geographical features', 'Meteorological geographical features', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (28, 2, 'Oceanographic geographical features', 'Oceanographic geographical features', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (29, 2, 'Sea regions', 'Sea regions', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (30, 2, 'Bio-geographical regions', 'Bio-geographical regions', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (31, 2, 'Habitats and biotopes', 'Habitats and biotopes', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (32, 2, 'Species distribution', 'Species distribution', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (33, 2, 'Energy resources', 'Energy resources', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (34, 2, 'Mineral resources', 'Mineral resources', 'N');

-- PSR 
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (35, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (36, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (37, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (38, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (39, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (40, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (41, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (42, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (43, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (44, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (45, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (46, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (47, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (48, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (49, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (50, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (51, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (52, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (53, 2);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (54, 2);

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (35, 1, 'A1 PRESSIONE - distribuzione demografica e aspetti socio-economici', 'A1 PRESSIONE - distribuzione demografica e aspetti socio-economici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (36, 1, 'A2 PRESSIONE - agricoltura, foreste, allevamento, pesca', 'A2 PRESSIONE - agricoltura, foreste, allevamento, pesca', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (37, 1, 'A3 PRESSIONE - attivita'' produttive nell''industria e nell''artigianato', 'A3 PRESSIONE - attivita'' produttive nell''industria e nell''artigianato', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (38, 1, 'A4 PRESSIONE - commercio, produzione di servizi e turismo', 'A4 PRESSIONE - commercio, produzione di servizi e turismo', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (39, 1, 'A5 PRESSIONE - processi energetici', 'A5 PRESSIONE - processi energetici', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (40, 1, 'A6 PRESSIONE - trasporti, comunicazioni e infrastrutture', 'A6 PRESSIONE - trasporti, comunicazioni e infrastrutture', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (41, 1, 'A7 PRESSIONE - rifiuti e flussi di materiali', 'A7 PRESSIONE - rifiuti e flussi di materiali', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (42, 1, 'A8 PRESSIONE - agenti fisici (radiazioni ionizzanti e non, rumore)', 'A8 PRESSIONE - agenti fisici (radiazioni ionizzanti e non, rumore)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (43, 1, 'B1 STATO - antroposfera (utilizzo del territorio, beni culturali e paesistici)', 'B1 STATO - antroposfera (utilizzo del territorio, beni culturali e paesistici)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (44, 1, 'B2 STATO - atmosfera (aria, meteorologia, climatologia)', 'B2 STATO - atmosfera (aria, meteorologia, climatologia)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (45, 1, 'B3 STATO - biosfera (flora, fauna, ecosistemi)', 'B3 STATO - biosfera (flora, fauna, ecosistemi)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (46, 1, 'B4 STATO - idrosfera (idrografia, qualita'' delle acque, bilancio idrico)', 'B4 STATO - idrosfera (idrografia, qualita'' delle acque, bilancio idrico)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (47, 1, 'B5 STATO - geosfera (geologia, geomorfologia, idrogeologia, pedologia)', 'B5 STATO - geosfera (geologia, geomorfologia, idrogeologia, pedologia)', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (48, 1, 'C1 RISPOSTE - istituzioni e competenze della pubblica amministrazione', 'C1 RISPOSTE - istituzioni e competenze della pubblica amministrazione', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (49, 1, 'C2 RISPOSTE - legislazione e norme tecniche', 'C2 RISPOSTE - legislazione e norme tecniche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (50, 1, 'C3 RISPOSTE - politiche, pianificazione, programmazione e spesa', 'C3 RISPOSTE - politiche, pianificazione, programmazione e spesa', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (51, 1, 'C4 RISPOSTE - tutela, prevenzione, autorizzazioni e certificazioni ambientali', 'C4 RISPOSTE - tutela, prevenzione, autorizzazioni e certificazioni ambientali', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (52, 1, 'C5 RISPOSTE - sistemi di monitoraggio e controllo', 'C5 RISPOSTE - sistemi di monitoraggio e controllo', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (53, 1, 'C6 RISPOSTE - gestione del rischio antropico e naturale', 'C6 RISPOSTE - gestione del rischio antropico e naturale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (54, 1, 'C7 RISPOSTE - informazione ambientale', 'C7 RISPOSTE - informazione ambientale', 'N');

-- DECSIRA Categorie business

insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (55, 3); 
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (56, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (57, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (58, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (59, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (60, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (61, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (62, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (63, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (64, 3);
insert into sipra_mtd_t_categoria(id_categoria, fk_tipo_categoria) values (65, 3);

insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (55, 1, 'Acqua', 'Acqua', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (56, 1, 'Aria', 'Aria', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (57, 1, 'Bonifiche', 'Bonifiche', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (58, 1, 'Energia', 'Energia', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (59, 1, 'Inquinamento elettromagnetico', 'Inquinamento elettromagnetico', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (60, 1, 'Inquinamento acustico', 'Inquinamento acustico', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (61, 1, 'Imprese autorizzate in campo ambientale', 'Imprese autorizzate in campo ambientale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (62, 1, 'Rifiuti', 'Rifiuti', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (63, 1, 'Rischio industriale', 'Rischio industriale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (64, 1, 'Valutazione Impatto  Ambientale', 'Valutazione Impatto  Ambientale', 'N');
insert into sipra_mtd_r_categ_lingua(id_categoria, id_lingua, des_categoria, des_alias, fl_alias) values (65, 1, 'Monitoraggio Ambientale', 'Monitoraggio Ambientale', 'N');


-- ---------------------------------------------
-- CATEGORIE APPLICATIVE
-- ---------------------------------------------

-- TUTTE LE CATEGORIE (ad oggi questa categoria non viene passata dai servizi MZ ma è costruita in linea applicativa)- Da sistemare come Baco CSI

INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (1, null, 'TUTTE LE CATEGORIE', 0, 'info');

-- ANNEX INSPIRE

INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (2, 1, 'ANNEX INSPIRE', 1, 'inspire');
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (3, 2, 'ALLEGATO I', 2, null);
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (4, 2, 'ALLEGATO II', 2, null);
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (5, 2, 'ALLEGATO III', 2, null);

-- legame con categorie dei metadati

INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (1, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (2, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (3, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (4, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (5, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (6, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (7, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (8, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (9, 3);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (10, 4);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (11, 4);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (12, 4);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (13, 4);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (14, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (15, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (16, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (17, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (18, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (19, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (20, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (21, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (22, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (23, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (24, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (25, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (26, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (27, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (28, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (29, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (30, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (31, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (32, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (33, 5);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (34, 5);

-- ----------------------------------------------

-- Catalogo Informazioni Ambientali (PSR)

INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (6, 1, 'Catalogo Informazioni Ambientali', 1, 'catalogo-ambientale');
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (7, 6, 'Fattori di Pressione sull''ambiente', 2, null);
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (8, 6, 'Stato delle Risorse Ambientali', 2, null);
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (9, 6, 'Azioni di Mitigazione e Controllo', 2, null);

-- legame con categorie dei metadati

INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (35, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (36, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (37, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (38, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (39, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (40, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (41, 7);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (42, 7);

INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (43, 8);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (44, 8);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (45, 8);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (46, 8);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (47, 8);

INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (48, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (49, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (50, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (51, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (52, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (53, 9);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (54, 9);



-- INSERIMENTO CATEGORIE APPLICATIVE DECSIRA

-- Acqua (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (10, 1, 'Acqua', 1, 'acqua');

-- Aria (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (11, 1, 'Aria', 1, 'aria');

-- Bonifiche (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (12, 1, 'Bonifiche', 1, 'bonifiche');

-- Energia (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (13, 1, 'Energia', 1, 'energia');

-- Inquinamento elettromagnetico (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (14, 1, 'Inquinamento elettromagnetico', 1, 'elettro');

-- Rumore (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (15, 1, 'Inquinamento elettromagnetico e acustico', 1, 'acustico');

-- Imprese autorizzate in campo ambientale (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (16, 1, 'Imprese autorizzate in campo ambientale', 1, 'imprese');

-- Rifiuti (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (17, 1, 'Rifiuti', 1, 'rifiuti');

-- Rischio industriale (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (18, 1, 'Rischio industriale', 1, 'rischio');

-- Valutazione Impatto  Ambientale (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (19, 1, 'Valutazione Impatto  Ambientale', 1, 'via');

-- Monitoraggio Ambientale (DECSIRA)
INSERT INTO sipra_mtd_t_categoria_appl(id_categoria_appl, fk_padre, des_categoria, livello, url_icona) VALUES (20, 1, 'Monitoraggio Ambientale', 1, 'monitoraggio');


-- legame tra categoria tipologia DECSIRA e Categorie applicative (DECSIRA)  

INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (55, 10);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (56, 11);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (57, 12);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (58, 13);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (59, 14);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (60, 15);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (61, 16);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (62, 17);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (63, 18);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (64, 19);
INSERT INTO sipra_mtd_r_categapp_categori(id_categoria, id_categoria_appl) VALUES (65, 20);


