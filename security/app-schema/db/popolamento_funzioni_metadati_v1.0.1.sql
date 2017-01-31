
-- *********************************************************************************************************************************************
-- POPOLAMENTO FUNZIONI METADATI 10012017 
-- *********************************************************************************************************************************************

--- Inserimento metadato 'Prototipo Rifiuti AUA' 'Mappa applicativa'= 5 - cioè una mappa che carica url da DB invece che da metadato
insert into sipra_mtd_t_funzione(id_funzione, 
                                 fk_tipo_funzione, 
                                 fk_metadato, 
                                 request_url)
values (nextval('seq_sipra_mtd_t_funzione'), 
                5, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:0ac19e92-2e73-4217-be1e-ad165974c301'), 
                'aua');

--- Inserimento metadato 'Prototipo Rifiuti AUA' a funzione "Cerca'= 2

insert into sipra_mtd_t_funzione(id_funzione, 
                                 fk_tipo_funzione, 
                                 fk_metadato, 
                                 request_url)
values (nextval('seq_sipra_mtd_t_funzione'), 
                2, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:0ac19e92-2e73-4217-be1e-ad165974c301'), 
                'aua');

--Inserimento metadato come vista tematica del 'Prototipo Rifiuti AUA'
insert into sipra_mtd_t_funzione(id_funzione, 
                                 fk_tipo_funzione, 
                                 fk_metadato, 
                                 request_url)
values (nextval('seq_sipra_mtd_t_funzione'), 
                4, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:51040b64-0a40-4ef5-96e5-2abeccc18659'), 
                'tematiche');      


--Metadato 'Prototipo Rifiuti AUA' inserimento nelle categorie DECSIRA
insert into sipra_mtd_r_categoria_mtd (id_categoria, 
				       id_metadato)
values (nextval('sipra_mtd_r_categoria_mtd'), 
                61, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:51040b64-0a40-4ef5-96e5-2abeccc18659'));
                
--Metadato Vista tematica 'Prototipo Rifiuti AUA' inserimento nelle categorie DECSIRA
insert into sipra_mtd_r_categoria_mtd (id_categoria, 
				       id_metadato)
values (nextval('sipra_mtd_r_categoria_mtd'), 
                61, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:0ac19e92-2e73-4217-be1e-ad165974c301'));



--Metadato WFD dentro categoria ACQUA
insert into sipra_mtd_r_categoria_mtd (id_categoria, 
				       id_metadato)
values (nextval('sipra_mtd_r_categoria_mtd'), 
                55, 
                (select id_metadato from sipra_mtd_t_mtd_csw where dc_identifier like 'r_piemon:c8da4262-463f-4d9e-8e26-672ce8c965e1'));
                     
                     
