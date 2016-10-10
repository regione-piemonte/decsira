--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: sipra; Type: SCHEMA; Schema: -; Owner: sipra
--

CREATE SCHEMA sipra;


ALTER SCHEMA sipra OWNER TO sipra;

--
-- Name: SCHEMA sipra; Type: COMMENT; Schema: -; Owner: sipra
--

COMMENT ON SCHEMA sipra IS 'richiedente: F. Zinnai';


SET search_path = sipra, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: sipra_d_attivita; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_d_attivita (
    id_attivita numeric(6,0) NOT NULL,
    des_attivita character varying(500)
);


ALTER TABLE sipra.sipra_d_attivita OWNER TO sipra;

--
-- Name: sipra_d_parametro; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_d_parametro (
    id_parametro character varying(20) NOT NULL,
    des_parametro character varying(100) NOT NULL,
    codice_cas character varying(20)
);


ALTER TABLE sipra.sipra_d_parametro OWNER TO sipra;

--
-- Name: sipra_d_procedimento; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_d_procedimento (
    id_procedimento numeric(6,0) NOT NULL,
    des_procedimento character varying(500),
    fl_visualizza character varying(1),
    codice_bdc character varying(10),
    CONSTRAINT dom_s_n CHECK (((fl_visualizza)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_d_procedimento OWNER TO sipra;

--
-- Name: sipra_dt_d_attiv_recupero; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_attiv_recupero (
    id_attiv_recupero integer NOT NULL,
    codice_att_recupero character varying(10),
    des_attiv_recupero character varying(2000) NOT NULL,
    flg_pericoloso character varying(1),
    CONSTRAINT flg_peric2 CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_attiv_recupero OWNER TO sipra;

--
-- Name: sipra_dt_d_caratt_merc; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_caratt_merc (
    id_caratt_merc integer NOT NULL,
    codice_caratt_merc character varying(20),
    des_caratt_merc character varying(500) NOT NULL,
    flg_pericoloso character varying(1),
    CONSTRAINT flg_peric1 CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_caratt_merc OWNER TO sipra;

--
-- Name: sipra_dt_d_caratt_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_caratt_rifiuto (
    id_caratt_rifiuto integer NOT NULL,
    codice_caratt_rifiuto character varying(10) NOT NULL,
    des_caratt_rifiuto character varying(1000) NOT NULL,
    flg_pericoloso character varying(1),
    CONSTRAINT dom_s_n CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_caratt_rifiuto OWNER TO sipra;

--
-- Name: sipra_dt_d_classe_appartenenza; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_classe_appartenenza (
    id_classe_appartenenza integer NOT NULL,
    des_classe_appartenenza character varying(20) NOT NULL
);


ALTER TABLE sipra.sipra_dt_d_classe_appartenenza OWNER TO sipra;

--
-- Name: sipra_dt_d_codice_cer; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_codice_cer (
    codice_cer character varying(8) NOT NULL,
    des_cer character varying(300),
    flg_pericoloso character varying(1),
    CONSTRAINT flg_pericoloso_s_n CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_codice_cer OWNER TO sipra;

--
-- Name: sipra_dt_d_operaz_recupero; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_operaz_recupero (
    id_operaz_recupero integer NOT NULL,
    codice_operaz_recupero character varying(10),
    des_operaz_recupero character varying(100) NOT NULL
);


ALTER TABLE sipra.sipra_dt_d_operaz_recupero OWNER TO sipra;

--
-- Name: sipra_dt_d_proven_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_proven_rifiuto (
    id_proven_rifiuto integer NOT NULL,
    codice_proven_rifiuto character varying(10) NOT NULL,
    des_proven_rifiuto character varying(100) NOT NULL,
    flg_pericoloso character varying(1),
    CONSTRAINT flg_peric8 CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_proven_rifiuto OWNER TO sipra;

--
-- Name: sipra_dt_d_tipo_impianto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_tipo_impianto (
    id_tipo_impianto integer NOT NULL,
    des_tipo_impianto character varying(100) NOT NULL
);


ALTER TABLE sipra.sipra_dt_d_tipo_impianto OWNER TO sipra;

--
-- Name: sipra_dt_d_tipo_recupero; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_tipo_recupero (
    id_tipo_recupero integer NOT NULL,
    des_tipo_recupero character varying(100) NOT NULL
);


ALTER TABLE sipra.sipra_dt_d_tipo_recupero OWNER TO sipra;

--
-- Name: sipra_dt_d_tipo_richiesta; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_tipo_richiesta (
    id_tipo_richiesta integer NOT NULL,
    des_tipo_richiesta character varying(50) NOT NULL,
    flg_richiesta character varying(1),
    CONSTRAINT dom_i_a CHECK (((flg_richiesta)::text = ANY (ARRAY[('I'::character varying)::text, ('A'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_tipo_richiesta OWNER TO sipra;

--
-- Name: sipra_dt_d_tipo_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_tipo_rifiuto (
    id_tipo_rifiuto integer NOT NULL,
    codice_tipo_rifiuto character varying(10),
    des_tipo_rifiuto character varying(100) NOT NULL,
    flg_pericoloso character varying(1),
    CONSTRAINT flg_peric3 CHECK (((flg_pericoloso)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_d_tipo_rifiuto OWNER TO sipra;

--
-- Name: sipra_dt_d_tipo_sede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_d_tipo_sede (
    id_tipo_sede integer NOT NULL,
    des_tipo_sede character varying(100) NOT NULL
);


ALTER TABLE sipra.sipra_dt_d_tipo_sede OWNER TO sipra;

--
-- Name: sipra_dt_r_istanza_attivita; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_istanza_attivita (
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    fk_tipo_richiesta integer NOT NULL,
    nota_quadro_tecnico character varying(4000)
);


ALTER TABLE sipra.sipra_dt_r_istanza_attivita OWNER TO sipra;

--
-- Name: sipra_dt_r_merc_recmateria; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_merc_recmateria (
    id_caratt_merc integer NOT NULL,
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    destinazione character varying(300)
);


ALTER TABLE sipra.sipra_dt_r_merc_recmateria OWNER TO sipra;

--
-- Name: sipra_dt_r_recener_param; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_recener_param (
    nr_scheda integer NOT NULL,
    id_parametro character varying(20) NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    des_altro_param character varying(100)
);


ALTER TABLE sipra.sipra_dt_r_recener_param OWNER TO sipra;

--
-- Name: sipra_dt_r_rifiuto_ar; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_rifiuto_ar (
    nr_scheda integer NOT NULL,
    id_attiv_recupero integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_rifiuto_ar OWNER TO sipra;

--
-- Name: sipra_dt_r_rifiuto_cer; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_rifiuto_cer (
    nr_scheda integer NOT NULL,
    codice_cer character varying(8) NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_rifiuto_cer OWNER TO sipra;

--
-- Name: sipra_dt_r_rifiuto_cr; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_rifiuto_cr (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_caratt_rifiuto integer NOT NULL,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_rifiuto_cr OWNER TO sipra;

--
-- Name: sipra_dt_r_rifiuto_or; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_rifiuto_or (
    nr_scheda integer NOT NULL,
    id_operaz_recupero integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    qta_max_recupero numeric,
    qta_max_gest numeric,
    qta_max_stocc_t numeric,
    qta_max_stocc_mc numeric
);


ALTER TABLE sipra.sipra_dt_r_rifiuto_or OWNER TO sipra;

--
-- Name: sipra_dt_r_rifiuto_proven; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_rifiuto_proven (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_proven_rifiuto integer NOT NULL,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_rifiuto_proven OWNER TO sipra;

--
-- Name: sipra_dt_r_sede_tiposede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_sede_tiposede (
    codice_sira numeric NOT NULL,
    id_tipo_sede integer NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_sede_tiposede OWNER TO sipra;

--
-- Name: sipra_dt_r_tipimp_imprif; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_r_tipimp_imprif (
    id_istanza numeric NOT NULL,
    id_tipo_impianto integer NOT NULL,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_r_tipimp_imprif OWNER TO sipra;

--
-- Name: sipra_dt_t_imp_apparecchiatura; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_imp_apparecchiatura (
    nr_apparecchiatura character varying(20) NOT NULL,
    fk_istanza numeric NOT NULL,
    nr_scheda integer NOT NULL,
    pot_max_oraria numeric,
    pot_max_giorn numeric,
    descrizione character varying(1000),
    p_perc_matprima_combust numeric,
    id_attivita numeric(6,0) NOT NULL
);


ALTER TABLE sipra.sipra_dt_t_imp_apparecchiatura OWNER TO sipra;

--
-- Name: sipra_dt_t_recupero_amb; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_recupero_amb (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    fk_comune integer,
    sigla_prov character varying(2),
    indirizzo character varying(100),
    nr_civico character varying(20),
    consiste_in character varying(1000),
    titolo_progetto_amb character varying(500),
    approvato_da character varying(50),
    nr_provved_approv character varying(50),
    data_provved_approv date,
    qta_max_impieg_t numeric,
    qta_max_impieg_mc numeric,
    perc_rifiuti numeric,
    desc_mod_utilizzo character varying(1000)
);


ALTER TABLE sipra.sipra_dt_t_recupero_amb OWNER TO sipra;

--
-- Name: sipra_dt_t_recupero_energia; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_recupero_energia (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    flg_alim_autom_comb character varying(1),
    flg_controllo_param character varying(1),
    flg_impiego_sim_comb character varying(1),
    perc_impiego_sim_comb numeric,
    mod_utilizzo_energia character varying(1000),
    accordi_aziende character varying(1000),
    pot_termica_mwt numeric,
    pot_termica_mwe numeric,
    calore_mwh numeric,
    energia_elettr_mwh numeric,
    perc_rend_energ numeric,
    combustibile character varying(100),
    CONSTRAINT flg_alim CHECK (((flg_alim_autom_comb)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT flg_ctl_param CHECK (((flg_controllo_param)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT flg_isc CHECK (((flg_impiego_sim_comb)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_dt_t_recupero_energia OWNER TO sipra;

--
-- Name: sipra_dt_t_recupero_materia; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_recupero_materia (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    qta_anno_recupero numeric,
    perc_prodotto_recupero numeric
);


ALTER TABLE sipra.sipra_dt_t_recupero_materia OWNER TO sipra;

--
-- Name: sipra_dt_t_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_rifiuto (
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    fk_classe_appartenenza integer,
    qta_tot_recupero numeric,
    capacita_max_stocc_t numeric,
    capacita_max_stocc_mc numeric,
    nr_iscr_provinciale character varying(20),
    data_iscr_provinciale date,
    data_scadenza date
);


ALTER TABLE sipra.sipra_dt_t_rifiuto OWNER TO sipra;

--
-- Name: sipra_dt_t_scheda_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_dt_t_scheda_rifiuto (
    nr_scheda integer NOT NULL,
    id_istanza numeric NOT NULL,
    id_attivita numeric(6,0) NOT NULL,
    fk_tipo_recupero integer NOT NULL,
    fk_tipo_rifiuto integer NOT NULL,
    flg_pericoloso character(18),
    flg_quadro_tecn character varying(1),
    CONSTRAINT ddt2_s_n CHECK (((flg_quadro_tecn)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT flg_peric4 CHECK ((flg_pericoloso = ANY (ARRAY['S'::bpchar, 'N'::bpchar])))
);


ALTER TABLE sipra.sipra_dt_t_scheda_rifiuto OWNER TO sipra;

--
-- Name: sipra_geo_pt_sede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_geo_pt_sede (
    codice_sira numeric NOT NULL,
    geometria public.geometry(Geometry,32632)
);


ALTER TABLE sipra.sipra_geo_pt_sede OWNER TO sipra;

--
-- Name: sipra_r_istanza_sede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_r_istanza_sede (
    codice_sira numeric NOT NULL,
    id_istanza numeric NOT NULL,
    fk_suap numeric(6,0)
);


ALTER TABLE sipra.sipra_r_istanza_sede OWNER TO sipra;

--
-- Name: sipra_r_proc_attivita; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_r_proc_attivita (
    id_proc_attivita numeric NOT NULL,
    fk_attivita numeric(6,0),
    fk_procedimento numeric(6,0) NOT NULL,
    tipo_modulo character varying(2),
    fl_gestione_interna character varying(1),
    url character varying(200),
    modulo_pdf character varying(100),
    ordine numeric(3,0),
    fl_sede_operativa character varying(1),
    fk_tipo_attivita numeric(6,0),
    pref_codice_istanza character varying(3),
    fk_accra_tipo_sogg_autorita numeric,
    fl_gestito_suap character varying(1),
    fl_scelta_autorita character varying(1),
    fk_tipo_oggetto numeric(6,0),
    config_vgeo character varying(100),
    config_vgeo_rw character varying(100),
    config_vgeo_objrw character varying(100),
    fl_istat character varying(1),
    config_vgeo_obj character varying(100),
    nr_gg_calcolo_autorizz integer,
    fk_stato_ist_persist numeric(3,0),
    fk_stato_dt_tecnici numeric(3,0),
    metodo character varying(200),
    fk_stato_ist_persist_geo numeric(3,0),
    fk_stato_dt_geo numeric(3,0),
    file_xslt text,
    fl_georif_obbligatorio character varying(1),
    fl_modifica_qtecnico character varying(1),
    config_vgeo_be character varying(100),
    config_vgeo_obj_be character varying(100),
    config_vgeo_arada character varying(100),
    config_vgeo_obj_arada character varying(100),
    config_vgeo_arada_rw character varying(100),
    config_vgeo_obj_arada_rw character varying(100),
    modulo_qt character varying(100),
    config_vgeo_sedi_rw character varying(100),
    CONSTRAINT chk_fl_sede_op CHECK (((fl_sede_operativa)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text, ('O'::character varying)::text, ('M'::character varying)::text]))),
    CONSTRAINT fl_georif_obbligatorio CHECK (((fl_georif_obbligatorio)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT fl_istat CHECK (((fl_istat)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT fl_modifica_qtecnico CHECK (((fl_modifica_qtecnico)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT flg_gestito_suap CHECK (((fl_gestito_suap)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text]))),
    CONSTRAINT flg_scelta_autorita CHECK (((fl_scelta_autorita)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_r_proc_attivita OWNER TO sipra;

--
-- Name: sipra_t_comuni; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_t_comuni (
    id_comune numeric,
    istat character(6),
    toponimo character varying(50),
    sigla_provincia character varying(2),
    geometria public.geometry
);


ALTER TABLE sipra.sipra_t_comuni OWNER TO sipra;

--
-- Name: sipra_t_istanza_autorizzativa; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_t_istanza_autorizzativa (
    id_istanza numeric NOT NULL,
    fk_stato numeric(3,0) NOT NULL,
    fk_proc_attivita numeric NOT NULL,
    cf_utente character varying(16),
    cf_soggetto character varying(16),
    data_inserimento timestamp without time zone,
    titolo character varying(300),
    progressivo numeric(6,0),
    codice_istanza character varying(50),
    fk_modulo numeric(6,0),
    codice_pratica character varying(50),
    num_pratica numeric,
    fl_provenienza_esterna character varying(1),
    fk_tipo_richiesta integer,
    nr_provvedimento character varying(20),
    data_rilascio date,
    fk_autorita_competente numeric,
    CONSTRAINT fl_provenienza_esterna CHECK (((fl_provenienza_esterna)::text = ANY (ARRAY[('S'::character varying)::text, ('N'::character varying)::text])))
);


ALTER TABLE sipra.sipra_t_istanza_autorizzativa OWNER TO sipra;

--
-- Name: sipra_t_province; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_t_province (
    id_provincia integer NOT NULL,
    sigla character(2) NOT NULL,
    toponimo character varying(50)
);


ALTER TABLE sipra.sipra_t_province OWNER TO sipra;

--
-- Name: sipra_t_sede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE sipra_t_sede (
    codice_sira numeric NOT NULL,
    istat_comune character varying(6),
    coord_utmx numeric,
    coord_utmy numeric,
    flg_depuratore character varying(1),
    CONSTRAINT dom_d_s_e CHECK (((flg_depuratore)::text = ANY (ARRAY[('D'::character varying)::text, ('S'::character varying)::text, ('E'::character varying)::text])))
);


ALTER TABLE sipra.sipra_t_sede OWNER TO sipra;

--
-- Name: t_aua; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_aua (
    gml_id text NOT NULL,
    id_rifiuto text,
    gml_id_istanza text,
    id_istanza numeric,
    gml_id_attivita text,
    id_attivita numeric(6,0),
    nota_quadro_tecnico character varying(4000),
    data_rilascio date,
    nr_provvedimento character varying(20),
    cf_soggetto character varying(16),
    gml_id_procedimento text,
    id_procedimento numeric(6,0),
    des_procedimento character varying(500),
    codice_bdc character varying(10),
    capacita_max_stocc_mc numeric,
    capacita_max_stocc_t numeric,
    qta_tot_recupero numeric,
    gml_id_tipo_richiesta text,
    id_tipo_richiesta integer,
    des_tipo_richiesta character varying(50),
    flg_richiesta character varying(1),
    des_attivita character varying(500),
    geometria public.geometry
);


ALTER TABLE sipra.t_aua OWNER TO sipra;

--
-- Name: t_denorm_codice_cer; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_denorm_codice_cer (
    gml_id text NOT NULL,
    id_scheda_rifiuto text NOT NULL,
    nr_scheda integer,
    codice_cer character varying(8),
    id_istanza numeric,
    id_attivita numeric(6,0),
    des_cer character varying(300),
    flg_pericoloso character varying(1)
);


ALTER TABLE sipra.t_denorm_codice_cer OWNER TO sipra;

--
-- Name: t_denorm_operaz_recupero; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_denorm_operaz_recupero (
    gml_id text NOT NULL,
    id_scheda_rifiuto text NOT NULL,
    nr_scheda integer,
    id_operaz_recupero integer,
    id_istanza numeric,
    id_attivita numeric(6,0),
    qta_max_recupero numeric,
    qta_max_gest numeric,
    qta_max_stocc_t numeric,
    qta_max_stocc_mc numeric,
    codice_operaz_recupero character varying(10),
    des_operaz_recupero character varying(100)
);


ALTER TABLE sipra.t_denorm_operaz_recupero OWNER TO sipra;

--
-- Name: t_denorm_sede; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_denorm_sede (
    gml_id text,
    codice_sira numeric NOT NULL,
    istat_comune character varying(6),
    flg_depuratore character varying(1),
    comune character varying(50),
    provincia character varying(2),
    geometria public.geometry(Geometry,32632),
    id_istanza numeric NOT NULL
);


ALTER TABLE sipra.t_denorm_sede OWNER TO sipra;

--
-- Name: t_denorm_tipo_impianto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_denorm_tipo_impianto (
    gml_id text NOT NULL,
    id_rifiuto text NOT NULL,
    id_istanza numeric,
    id_tipo_impianto integer,
    id_attivita numeric(6,0),
    des_tipo_impianto character varying(100)
);


ALTER TABLE sipra.t_denorm_tipo_impianto OWNER TO sipra;

--
-- Name: t_scheda_rifiuto; Type: TABLE; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE TABLE t_scheda_rifiuto (
    id_rifiuto text,
    id_scheda_rifiuto text NOT NULL,
    nr_scheda integer,
    id_istanza numeric,
    id_attivita numeric(6,0),
    fk_tipo_recupero integer,
    fk_tipo_rifiuto integer,
    flg_pericoloso character(18),
    flg_quadro_tecn character varying(1),
    gml_id_tipo_recupero text,
    des_tipo_recupero character varying(100),
    gml_id_tipo_rifiuto text,
    codice_tipo_rifiuto character varying(10),
    des_tipo_rifiuto character varying(100),
    flg_pericoloso_tipo_rifiuto character varying(1),
    qta_anno_recupero numeric,
    perc_prodotto_recupero numeric
);


ALTER TABLE sipra.t_scheda_rifiuto OWNER TO sipra;

--
-- Name: v_attiv_rec; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_attiv_rec AS
    SELECT ((((rar.nr_scheda || '_'::text) || rar.id_istanza) || '_'::text) || rar.id_attivita) AS id_scheda_rifiuto, rar.nr_scheda, rar.id_attiv_recupero, rar.id_istanza, rar.id_attivita, ar.codice_att_recupero, ar.des_attiv_recupero, ar.flg_pericoloso FROM (sipra_dt_r_rifiuto_ar rar JOIN sipra_dt_d_attiv_recupero ar ON ((rar.id_attiv_recupero = ar.id_attiv_recupero)));


ALTER TABLE sipra.v_attiv_rec OWNER TO sipra;

--
-- Name: v_aua; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_aua AS
    SELECT ((((s.codice_sira || '_'::text) || ia.id_istanza) || '_'::text) || ia.id_attivita) AS id_aua, ((ia.id_istanza || '_'::text) || ia.id_attivita) AS id_rifiuto, s.codice_sira, ia.id_istanza, ia.id_attivita, g.geometria FROM ((sipra_dt_r_istanza_attivita ia LEFT JOIN sipra_r_istanza_sede s ON ((s.id_istanza = ia.id_istanza))) LEFT JOIN sipra_geo_pt_sede g ON ((g.codice_sira = s.codice_sira)));


ALTER TABLE sipra.v_aua OWNER TO sipra;

--
-- Name: v_caratt_rec_mat; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_caratt_rec_mat AS
    SELECT ((((rm.nr_scheda || '_'::text) || rm.id_istanza) || '_'::text) || rm.id_attivita) AS id_scheda_rifiuto, rm.id_caratt_merc, rm.nr_scheda, rm.id_istanza, rm.id_attivita, rm.destinazione, cm.codice_caratt_merc, cm.des_caratt_merc, cm.flg_pericoloso FROM (sipra_dt_r_merc_recmateria rm JOIN sipra_dt_d_caratt_merc cm ON ((rm.id_caratt_merc = cm.id_caratt_merc)));


ALTER TABLE sipra.v_caratt_rec_mat OWNER TO sipra;

--
-- Name: v_caratt_rifiuto; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_caratt_rifiuto AS
    SELECT ((((rcr.nr_scheda || '_'::text) || rcr.id_istanza) || '_'::text) || rcr.id_attivita) AS id_scheda_rifiuto, rcr.nr_scheda, rcr.id_istanza, rcr.id_caratt_rifiuto, rcr.id_attivita, cr.codice_caratt_rifiuto, cr.des_caratt_rifiuto, cr.flg_pericoloso FROM (sipra_dt_r_rifiuto_cr rcr JOIN sipra_dt_d_caratt_rifiuto cr ON ((rcr.id_caratt_rifiuto = cr.id_caratt_rifiuto)));


ALTER TABLE sipra.v_caratt_rifiuto OWNER TO sipra;

--
-- Name: v_codice_cer; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_codice_cer AS
    SELECT ((((rc.nr_scheda || '_'::text) || rc.id_istanza) || '_'::text) || rc.id_attivita) AS id_scheda_rifiuto, rc.nr_scheda, rc.codice_cer, rc.id_istanza, rc.id_attivita, cc.des_cer, cc.flg_pericoloso FROM (sipra_dt_r_rifiuto_cer rc JOIN sipra_dt_d_codice_cer cc ON (((rc.codice_cer)::text = (cc.codice_cer)::text)));


ALTER TABLE sipra.v_codice_cer OWNER TO sipra;

--
-- Name: v_dict_operaz_rec; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_dict_operaz_rec AS
    SELECT sipra_dt_d_operaz_recupero.id_operaz_recupero AS id, (((sipra_dt_d_operaz_recupero.codice_operaz_recupero)::text || ' - '::text) || (sipra_dt_d_operaz_recupero.des_operaz_recupero)::text) AS label FROM sipra_dt_d_operaz_recupero;


ALTER TABLE sipra.v_dict_operaz_rec OWNER TO sipra;

--
-- Name: v_dict_tipo_rif; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_dict_tipo_rif AS
    SELECT sipra_dt_d_tipo_rifiuto.id_tipo_rifiuto AS id, btrim((((sipra_dt_d_tipo_rifiuto.codice_tipo_rifiuto)::text || ' - '::text) || (sipra_dt_d_tipo_rifiuto.des_tipo_rifiuto)::text)) AS label FROM sipra_dt_d_tipo_rifiuto;


ALTER TABLE sipra.v_dict_tipo_rif OWNER TO sipra;

--
-- Name: v_imp_apparecchiatura; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_imp_apparecchiatura AS
    SELECT ((((a.nr_scheda || '_'::text) || a.fk_istanza) || '_'::text) || a.id_attivita) AS id_scheda_rifiuto, a.nr_apparecchiatura, a.fk_istanza, a.nr_scheda, a.pot_max_oraria, a.pot_max_giorn, a.descrizione, a.p_perc_matprima_combust, a.id_attivita FROM sipra_dt_t_imp_apparecchiatura a;


ALTER TABLE sipra.v_imp_apparecchiatura OWNER TO sipra;

--
-- Name: v_istanza_autorizzativa; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_istanza_autorizzativa AS
    SELECT ia.id_istanza, ia.fk_stato, ia.fk_proc_attivita, ia.cf_utente, ia.cf_soggetto, ia.data_inserimento, ia.titolo, ia.progressivo, ia.codice_istanza, ia.fk_modulo, ia.codice_pratica, ia.num_pratica, ia.fl_provenienza_esterna, ia.fk_tipo_richiesta, ia.nr_provvedimento, ia.data_rilascio, ia.fk_autorita_competente, pa.id_proc_attivita, pa.fk_attivita, pa.fk_procedimento, pa.tipo_modulo, pa.fl_gestione_interna, pa.url, pa.modulo_pdf, pa.ordine, pa.fl_sede_operativa, pa.fk_tipo_attivita, pa.pref_codice_istanza, pa.fk_accra_tipo_sogg_autorita, pa.fl_gestito_suap, pa.fl_scelta_autorita, pa.fk_tipo_oggetto, pa.config_vgeo, pa.config_vgeo_rw, pa.config_vgeo_objrw, pa.fl_istat, pa.config_vgeo_obj, pa.nr_gg_calcolo_autorizz, pa.fk_stato_ist_persist, pa.fk_stato_dt_tecnici, pa.metodo, pa.fk_stato_ist_persist_geo, pa.fk_stato_dt_geo, pa.file_xslt, pa.fl_georif_obbligatorio, pa.fl_modifica_qtecnico, pa.config_vgeo_be, pa.config_vgeo_obj_be, pa.config_vgeo_arada, pa.config_vgeo_obj_arada, pa.config_vgeo_arada_rw, pa.config_vgeo_obj_arada_rw, pa.modulo_qt, pa.config_vgeo_sedi_rw, p.id_procedimento, p.des_procedimento, p.codice_bdc, a.id_attivita, a.des_attivita, tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta FROM ((((sipra_t_istanza_autorizzativa ia JOIN sipra_dt_d_tipo_richiesta tr ON ((ia.fk_tipo_richiesta = tr.id_tipo_richiesta))) JOIN sipra_r_proc_attivita pa ON ((ia.fk_proc_attivita = pa.id_proc_attivita))) LEFT JOIN sipra_d_procedimento p ON ((pa.fk_procedimento = p.id_procedimento))) LEFT JOIN sipra_d_attivita a ON ((pa.fk_attivita = a.id_attivita))) WHERE (ia.fk_stato = (9)::numeric);


ALTER TABLE sipra.v_istanza_autorizzativa OWNER TO sipra;

--
-- Name: v_operaz_recupero; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_operaz_recupero AS
    SELECT ((((ror.nr_scheda || '_'::text) || ror.id_istanza) || '_'::text) || ror.id_attivita) AS id_scheda_rifiuto, ror.nr_scheda, ror.id_operaz_recupero, ror.id_istanza, ror.id_attivita, ror.qta_max_recupero, ror.qta_max_gest, ror.qta_max_stocc_t, ror.qta_max_stocc_mc, _or.codice_operaz_recupero, _or.des_operaz_recupero FROM (sipra_dt_r_rifiuto_or ror JOIN sipra_dt_d_operaz_recupero _or ON ((ror.id_operaz_recupero = _or.id_operaz_recupero)));


ALTER TABLE sipra.v_operaz_recupero OWNER TO sipra;

--
-- Name: v_proven_rifiuto; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_proven_rifiuto AS
    SELECT ((((rpr.nr_scheda || '_'::text) || rpr.id_istanza) || '_'::text) || rpr.id_attivita) AS id_scheda_rifiuto, rpr.nr_scheda, rpr.id_istanza, rpr.id_proven_rifiuto, rpr.id_attivita, pr.codice_proven_rifiuto, pr.des_proven_rifiuto, pr.flg_pericoloso FROM (sipra_dt_r_rifiuto_proven rpr JOIN sipra_dt_d_proven_rifiuto pr ON ((rpr.id_proven_rifiuto = pr.id_proven_rifiuto)));


ALTER TABLE sipra.v_proven_rifiuto OWNER TO sipra;

--
-- Name: v_rec_ener; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_rec_ener AS
    SELECT ((((re.nr_scheda || '_'::text) || re.id_istanza) || '_'::text) || re.id_attivita) AS id_scheda_rifiuto, re.nr_scheda, re.id_istanza, re.id_attivita, re.flg_alim_autom_comb, re.flg_controllo_param, re.flg_impiego_sim_comb, re.perc_impiego_sim_comb, re.mod_utilizzo_energia, re.accordi_aziende, re.pot_termica_mwt, re.pot_termica_mwe, re.calore_mwh, re.energia_elettr_mwh, re.perc_rend_energ, re.combustibile FROM sipra_dt_t_recupero_energia re;


ALTER TABLE sipra.v_rec_ener OWNER TO sipra;

--
-- Name: v_rec_ener_param; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_rec_ener_param AS
    SELECT ((((rep.nr_scheda || '_'::text) || rep.id_istanza) || '_'::text) || rep.id_attivita) AS id_scheda_rifiuto, rep.nr_scheda, rep.id_parametro, rep.id_istanza, rep.id_attivita, rep.des_altro_param, p.des_parametro, p.codice_cas FROM (sipra_dt_r_recener_param rep JOIN sipra_d_parametro p ON (((rep.id_parametro)::text = (p.id_parametro)::text)));


ALTER TABLE sipra.v_rec_ener_param OWNER TO sipra;

--
-- Name: v_rifiuto; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_rifiuto AS
    SELECT ((r.id_istanza || '_'::text) || r.id_attivita) AS id_rifiuto, r.id_istanza, r.id_attivita, r.fk_classe_appartenenza, r.qta_tot_recupero, r.capacita_max_stocc_t, r.capacita_max_stocc_mc, r.nr_iscr_provinciale, r.data_iscr_provinciale, r.data_scadenza, ia.nota_quadro_tecnico, ca.id_classe_appartenenza, ca.des_classe_appartenenza, tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta FROM (((sipra_dt_t_rifiuto r JOIN sipra_dt_r_istanza_attivita ia ON (((r.id_istanza = ia.id_istanza) AND (r.id_attivita = ia.id_attivita)))) JOIN sipra_dt_d_tipo_richiesta tr ON ((ia.fk_tipo_richiesta = tr.id_tipo_richiesta))) LEFT JOIN sipra_dt_d_classe_appartenenza ca ON ((r.fk_classe_appartenenza = ca.id_classe_appartenenza)));


ALTER TABLE sipra.v_rifiuto OWNER TO sipra;

--
-- Name: v_scheda_rifiuto; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_scheda_rifiuto AS
    SELECT ((sr.id_istanza || '_'::text) || sr.id_attivita) AS id_rifiuto, ((((sr.nr_scheda || '_'::text) || sr.id_istanza) || '_'::text) || sr.id_attivita) AS id_scheda_rifiuto, sr.nr_scheda, sr.id_istanza, sr.id_attivita, sr.fk_tipo_recupero, sr.fk_tipo_rifiuto, sr.flg_pericoloso, sr.flg_quadro_tecn, trec.id_tipo_recupero, trec.des_tipo_recupero, trif.id_tipo_rifiuto, trif.codice_tipo_rifiuto, trif.des_tipo_rifiuto, trif.flg_pericoloso AS flg_pericoloso_tipo_rifiuto, rm.qta_anno_recupero, rm.perc_prodotto_recupero FROM ((((sipra_dt_t_scheda_rifiuto sr JOIN sipra_dt_d_tipo_recupero trec ON ((sr.fk_tipo_recupero = trec.id_tipo_recupero))) JOIN sipra_dt_d_tipo_rifiuto trif ON ((sr.fk_tipo_rifiuto = trif.id_tipo_rifiuto))) LEFT JOIN sipra_dt_t_recupero_materia rm ON ((((sr.nr_scheda = rm.nr_scheda) AND (sr.id_istanza = rm.id_istanza)) AND (sr.id_attivita = rm.id_attivita)))) LEFT JOIN sipra_dt_t_recupero_amb ra ON ((((sr.nr_scheda = ra.nr_scheda) AND (sr.id_istanza = ra.id_istanza)) AND (sr.id_attivita = ra.id_attivita))));


ALTER TABLE sipra.v_scheda_rifiuto OWNER TO sipra;

--
-- Name: v_sede; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_sede AS
    SELECT s.codice_sira, s.istat_comune, s.coord_utmx, s.coord_utmy, s.flg_depuratore, si.id_istanza, si.fk_suap, g.geometria FROM ((sipra_t_sede s LEFT JOIN sipra_geo_pt_sede g ON ((s.codice_sira = g.codice_sira))) LEFT JOIN sipra_r_istanza_sede si ON ((s.codice_sira = si.codice_sira)));


ALTER TABLE sipra.v_sede OWNER TO sipra;

--
-- Name: v_tipo_impianto; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_tipo_impianto AS
    SELECT ((rti.id_istanza || '_'::text) || rti.id_attivita) AS id_rifiuto, rti.id_istanza, rti.id_tipo_impianto, rti.id_attivita, ti.des_tipo_impianto FROM (sipra_dt_r_tipimp_imprif rti JOIN sipra_dt_d_tipo_impianto ti ON ((rti.id_tipo_impianto = ti.id_tipo_impianto)));


ALTER TABLE sipra.v_tipo_impianto OWNER TO sipra;

--
-- Name: v_tipo_sede; Type: VIEW; Schema: sipra; Owner: sipra
--

CREATE VIEW v_tipo_sede AS
    SELECT rts.codice_sira, rts.id_tipo_sede, ts.des_tipo_sede FROM (sipra_dt_r_sede_tiposede rts JOIN sipra_dt_d_tipo_sede ts ON ((rts.id_tipo_sede = ts.id_tipo_sede)));


ALTER TABLE sipra.v_tipo_sede OWNER TO sipra;

--
-- Name: pk_aua; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_aua
    ADD CONSTRAINT pk_aua PRIMARY KEY (gml_id);


--
-- Name: pk_scheda_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_scheda_rifiuto
    ADD CONSTRAINT pk_scheda_rifiuto PRIMARY KEY (id_scheda_rifiuto);


--
-- Name: pk_sipra_d_attivita; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_d_attivita
    ADD CONSTRAINT pk_sipra_d_attivita PRIMARY KEY (id_attivita);


--
-- Name: pk_sipra_d_parametro; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_d_parametro
    ADD CONSTRAINT pk_sipra_d_parametro PRIMARY KEY (id_parametro);


--
-- Name: pk_sipra_d_procedimento; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_d_procedimento
    ADD CONSTRAINT pk_sipra_d_procedimento PRIMARY KEY (id_procedimento);


--
-- Name: pk_sipra_dt_d_attiv_recupero; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_attiv_recupero
    ADD CONSTRAINT pk_sipra_dt_d_attiv_recupero PRIMARY KEY (id_attiv_recupero);


--
-- Name: pk_sipra_dt_d_caratt_merc; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_caratt_merc
    ADD CONSTRAINT pk_sipra_dt_d_caratt_merc PRIMARY KEY (id_caratt_merc);


--
-- Name: pk_sipra_dt_d_caratt_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_caratt_rifiuto
    ADD CONSTRAINT pk_sipra_dt_d_caratt_rifiuto PRIMARY KEY (id_caratt_rifiuto);


--
-- Name: pk_sipra_dt_d_classe_appartene; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_classe_appartenenza
    ADD CONSTRAINT pk_sipra_dt_d_classe_appartene PRIMARY KEY (id_classe_appartenenza);


--
-- Name: pk_sipra_dt_d_codice_cer; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_codice_cer
    ADD CONSTRAINT pk_sipra_dt_d_codice_cer PRIMARY KEY (codice_cer);


--
-- Name: pk_sipra_dt_d_operaz_recupero; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_operaz_recupero
    ADD CONSTRAINT pk_sipra_dt_d_operaz_recupero PRIMARY KEY (id_operaz_recupero);


--
-- Name: pk_sipra_dt_d_proven_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_proven_rifiuto
    ADD CONSTRAINT pk_sipra_dt_d_proven_rifiuto PRIMARY KEY (id_proven_rifiuto);


--
-- Name: pk_sipra_dt_d_tipo_impianto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_tipo_impianto
    ADD CONSTRAINT pk_sipra_dt_d_tipo_impianto PRIMARY KEY (id_tipo_impianto);


--
-- Name: pk_sipra_dt_d_tipo_recupero; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_tipo_recupero
    ADD CONSTRAINT pk_sipra_dt_d_tipo_recupero PRIMARY KEY (id_tipo_recupero);


--
-- Name: pk_sipra_dt_d_tipo_richiesta; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_tipo_richiesta
    ADD CONSTRAINT pk_sipra_dt_d_tipo_richiesta PRIMARY KEY (id_tipo_richiesta);


--
-- Name: pk_sipra_dt_d_tipo_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_tipo_rifiuto
    ADD CONSTRAINT pk_sipra_dt_d_tipo_rifiuto PRIMARY KEY (id_tipo_rifiuto);


--
-- Name: pk_sipra_dt_d_tipo_sede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_d_tipo_sede
    ADD CONSTRAINT pk_sipra_dt_d_tipo_sede PRIMARY KEY (id_tipo_sede);


--
-- Name: pk_sipra_dt_r_istanza_attivita; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_istanza_attivita
    ADD CONSTRAINT pk_sipra_dt_r_istanza_attivita PRIMARY KEY (id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_merc_recmateria; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_merc_recmateria
    ADD CONSTRAINT pk_sipra_dt_r_merc_recmateria PRIMARY KEY (id_caratt_merc, nr_scheda, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_recener_param; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_recener_param
    ADD CONSTRAINT pk_sipra_dt_r_recener_param PRIMARY KEY (nr_scheda, id_parametro, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_rifiuto_ar; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_ar
    ADD CONSTRAINT pk_sipra_dt_r_rifiuto_ar PRIMARY KEY (nr_scheda, id_attiv_recupero, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_rifiuto_cer; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cer
    ADD CONSTRAINT pk_sipra_dt_r_rifiuto_cer PRIMARY KEY (nr_scheda, codice_cer, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_rifiuto_cr; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cr
    ADD CONSTRAINT pk_sipra_dt_r_rifiuto_cr PRIMARY KEY (nr_scheda, id_istanza, id_caratt_rifiuto, id_attivita);


--
-- Name: pk_sipra_dt_r_rifiuto_or; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_or
    ADD CONSTRAINT pk_sipra_dt_r_rifiuto_or PRIMARY KEY (nr_scheda, id_operaz_recupero, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_r_rifiuto_proven; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_proven
    ADD CONSTRAINT pk_sipra_dt_r_rifiuto_proven PRIMARY KEY (nr_scheda, id_istanza, id_proven_rifiuto, id_attivita);


--
-- Name: pk_sipra_dt_r_sede_tiposede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_sede_tiposede
    ADD CONSTRAINT pk_sipra_dt_r_sede_tiposede PRIMARY KEY (codice_sira, id_tipo_sede);


--
-- Name: pk_sipra_dt_r_tipimp_imprif; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_r_tipimp_imprif
    ADD CONSTRAINT pk_sipra_dt_r_tipimp_imprif PRIMARY KEY (id_istanza, id_tipo_impianto, id_attivita);


--
-- Name: pk_sipra_dt_t_imp_apparecchiat; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_imp_apparecchiatura
    ADD CONSTRAINT pk_sipra_dt_t_imp_apparecchiat PRIMARY KEY (nr_apparecchiatura);


--
-- Name: pk_sipra_dt_t_recupero_amb; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_recupero_amb
    ADD CONSTRAINT pk_sipra_dt_t_recupero_amb PRIMARY KEY (nr_scheda, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_t_recupero_energia; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_recupero_energia
    ADD CONSTRAINT pk_sipra_dt_t_recupero_energia PRIMARY KEY (nr_scheda, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_t_recupero_materia; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_recupero_materia
    ADD CONSTRAINT pk_sipra_dt_t_recupero_materia PRIMARY KEY (nr_scheda, id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_t_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_rifiuto
    ADD CONSTRAINT pk_sipra_dt_t_rifiuto PRIMARY KEY (id_istanza, id_attivita);


--
-- Name: pk_sipra_dt_t_scheda_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_dt_t_scheda_rifiuto
    ADD CONSTRAINT pk_sipra_dt_t_scheda_rifiuto PRIMARY KEY (nr_scheda, id_istanza, id_attivita);


--
-- Name: pk_sipra_geo_pt_sede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_geo_pt_sede
    ADD CONSTRAINT pk_sipra_geo_pt_sede PRIMARY KEY (codice_sira);


--
-- Name: pk_sipra_r_istanza_sede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_r_istanza_sede
    ADD CONSTRAINT pk_sipra_r_istanza_sede PRIMARY KEY (codice_sira, id_istanza);


--
-- Name: pk_sipra_r_proc_attivita; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_r_proc_attivita
    ADD CONSTRAINT pk_sipra_r_proc_attivita PRIMARY KEY (id_proc_attivita);


--
-- Name: pk_sipra_t_istanza_autorizzati; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_t_istanza_autorizzativa
    ADD CONSTRAINT pk_sipra_t_istanza_autorizzati PRIMARY KEY (id_istanza);


--
-- Name: pk_sipra_t_sede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_t_sede
    ADD CONSTRAINT pk_sipra_t_sede PRIMARY KEY (codice_sira);


--
-- Name: pk_t_denorm_codice_cer; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_denorm_codice_cer
    ADD CONSTRAINT pk_t_denorm_codice_cer PRIMARY KEY (gml_id, id_scheda_rifiuto);


--
-- Name: pk_t_denorm_operaz_recupero; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_denorm_operaz_recupero
    ADD CONSTRAINT pk_t_denorm_operaz_recupero PRIMARY KEY (gml_id, id_scheda_rifiuto);


--
-- Name: pk_t_denorm_sede; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_denorm_sede
    ADD CONSTRAINT pk_t_denorm_sede PRIMARY KEY (codice_sira, id_istanza);


--
-- Name: pk_t_denorm_tipo_impianto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_denorm_tipo_impianto
    ADD CONSTRAINT pk_t_denorm_tipo_impianto PRIMARY KEY (gml_id, id_rifiuto);


--
-- Name: sipra_t_province_pkey; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_t_province
    ADD CONSTRAINT sipra_t_province_pkey PRIMARY KEY (id_provincia);


--
-- Name: sipra_t_province_sigla_key; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY sipra_t_province
    ADD CONSTRAINT sipra_t_province_sigla_key UNIQUE (sigla);


--
-- Name: uq_aua__id_rifiuto; Type: CONSTRAINT; Schema: sipra; Owner: sipra; Tablespace: 
--

ALTER TABLE ONLY t_aua
    ADD CONSTRAINT uq_aua__id_rifiuto UNIQUE (id_rifiuto);


--
-- Name: idx_t_denorm_sede__id_istanza; Type: INDEX; Schema: sipra; Owner: sipra; Tablespace: 
--

CREATE INDEX idx_t_denorm_sede__id_istanza ON t_denorm_sede USING btree (id_istanza);


--
-- Name: fk_comuni_province; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_t_comuni
    ADD CONSTRAINT fk_comuni_province FOREIGN KEY (sigla_provincia) REFERENCES sipra_t_province(sigla);


--
-- Name: fk_scheda_rifiuto__id_rifiuto; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY t_scheda_rifiuto
    ADD CONSTRAINT fk_scheda_rifiuto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES t_aua(id_rifiuto);


--
-- Name: fk_sipra_d_attivita_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_r_proc_attivita
    ADD CONSTRAINT fk_sipra_d_attivita_01 FOREIGN KEY (fk_attivita) REFERENCES sipra_d_attivita(id_attivita);


--
-- Name: fk_sipra_d_attivita_02; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_istanza_attivita
    ADD CONSTRAINT fk_sipra_d_attivita_02 FOREIGN KEY (id_attivita) REFERENCES sipra_d_attivita(id_attivita);


--
-- Name: fk_sipra_d_parametro_05; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_recener_param
    ADD CONSTRAINT fk_sipra_d_parametro_05 FOREIGN KEY (id_parametro) REFERENCES sipra_d_parametro(id_parametro);


--
-- Name: fk_sipra_d_procedimento_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_r_proc_attivita
    ADD CONSTRAINT fk_sipra_d_procedimento_01 FOREIGN KEY (fk_procedimento) REFERENCES sipra_d_procedimento(id_procedimento);


--
-- Name: fk_sipra_dt_d_attiv_recup_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_ar
    ADD CONSTRAINT fk_sipra_dt_d_attiv_recup_01 FOREIGN KEY (id_attiv_recupero) REFERENCES sipra_dt_d_attiv_recupero(id_attiv_recupero);


--
-- Name: fk_sipra_dt_d_carat_rifiuto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cr
    ADD CONSTRAINT fk_sipra_dt_d_carat_rifiuto_01 FOREIGN KEY (id_caratt_rifiuto) REFERENCES sipra_dt_d_caratt_rifiuto(id_caratt_rifiuto);


--
-- Name: fk_sipra_dt_d_caratt_merc_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_merc_recmateria
    ADD CONSTRAINT fk_sipra_dt_d_caratt_merc_01 FOREIGN KEY (id_caratt_merc) REFERENCES sipra_dt_d_caratt_merc(id_caratt_merc);


--
-- Name: fk_sipra_dt_d_classe_appart_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_rifiuto
    ADD CONSTRAINT fk_sipra_dt_d_classe_appart_01 FOREIGN KEY (fk_classe_appartenenza) REFERENCES sipra_dt_d_classe_appartenenza(id_classe_appartenenza);


--
-- Name: fk_sipra_dt_d_codice_cer_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cer
    ADD CONSTRAINT fk_sipra_dt_d_codice_cer_01 FOREIGN KEY (codice_cer) REFERENCES sipra_dt_d_codice_cer(codice_cer);


--
-- Name: fk_sipra_dt_d_operaz_recup_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_or
    ADD CONSTRAINT fk_sipra_dt_d_operaz_recup_01 FOREIGN KEY (id_operaz_recupero) REFERENCES sipra_dt_d_operaz_recupero(id_operaz_recupero);


--
-- Name: fk_sipra_dt_d_prov_rifiuto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_proven
    ADD CONSTRAINT fk_sipra_dt_d_prov_rifiuto_01 FOREIGN KEY (id_proven_rifiuto) REFERENCES sipra_dt_d_proven_rifiuto(id_proven_rifiuto);


--
-- Name: fk_sipra_dt_d_tipo_impianto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_tipimp_imprif
    ADD CONSTRAINT fk_sipra_dt_d_tipo_impianto_01 FOREIGN KEY (id_tipo_impianto) REFERENCES sipra_dt_d_tipo_impianto(id_tipo_impianto);


--
-- Name: fk_sipra_dt_d_tipo_recupero_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_scheda_rifiuto
    ADD CONSTRAINT fk_sipra_dt_d_tipo_recupero_01 FOREIGN KEY (fk_tipo_recupero) REFERENCES sipra_dt_d_tipo_recupero(id_tipo_recupero);


--
-- Name: fk_sipra_dt_d_tipo_rich_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_istanza_attivita
    ADD CONSTRAINT fk_sipra_dt_d_tipo_rich_01 FOREIGN KEY (fk_tipo_richiesta) REFERENCES sipra_dt_d_tipo_richiesta(id_tipo_richiesta);


--
-- Name: fk_sipra_dt_d_tipo_rich_02; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_t_istanza_autorizzativa
    ADD CONSTRAINT fk_sipra_dt_d_tipo_rich_02 FOREIGN KEY (fk_tipo_richiesta) REFERENCES sipra_dt_d_tipo_richiesta(id_tipo_richiesta);


--
-- Name: fk_sipra_dt_d_tipo_rifiuto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_scheda_rifiuto
    ADD CONSTRAINT fk_sipra_dt_d_tipo_rifiuto_01 FOREIGN KEY (fk_tipo_rifiuto) REFERENCES sipra_dt_d_tipo_rifiuto(id_tipo_rifiuto);


--
-- Name: fk_sipra_dt_r_istanza_attiv_02; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_rifiuto
    ADD CONSTRAINT fk_sipra_dt_r_istanza_attiv_02 FOREIGN KEY (id_istanza, id_attivita) REFERENCES sipra_dt_r_istanza_attivita(id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_r_istanza_attiv_03; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_scheda_rifiuto
    ADD CONSTRAINT fk_sipra_dt_r_istanza_attiv_03 FOREIGN KEY (id_istanza, id_attivita) REFERENCES sipra_dt_r_istanza_attivita(id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_imp_rifiuto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_tipimp_imprif
    ADD CONSTRAINT fk_sipra_dt_t_imp_rifiuto_01 FOREIGN KEY (id_istanza, id_attivita) REFERENCES sipra_dt_t_rifiuto(id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_recupero_materia; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_merc_recmateria
    ADD CONSTRAINT fk_sipra_dt_t_recupero_materia FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_recupero_materia(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_ar
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_01 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_03; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cer
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_03 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_04; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_cr
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_04 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_05; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_or
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_05 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_06; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_rifiuto_proven
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_06 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_07; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_imp_apparecchiatura
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_07 FOREIGN KEY (nr_scheda, fk_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_08; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_recupero_amb
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_08 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_09; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_recupero_energia
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_09 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_dt_t_rifiuto_10; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_t_recupero_materia
    ADD CONSTRAINT fk_sipra_dt_t_rifiuto_10 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_scheda_rifiuto(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_r_proc_attivita_02; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_t_istanza_autorizzativa
    ADD CONSTRAINT fk_sipra_r_proc_attivita_02 FOREIGN KEY (fk_proc_attivita) REFERENCES sipra_r_proc_attivita(id_proc_attivita);


--
-- Name: fk_sipra_t_istanza_autorizz_03; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_r_istanza_sede
    ADD CONSTRAINT fk_sipra_t_istanza_autorizz_03 FOREIGN KEY (id_istanza) REFERENCES sipra_t_istanza_autorizzativa(id_istanza);


--
-- Name: fk_sipra_t_istanza_autorizz_09; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_istanza_attivita
    ADD CONSTRAINT fk_sipra_t_istanza_autorizz_09 FOREIGN KEY (id_istanza) REFERENCES sipra_t_istanza_autorizzativa(id_istanza);


--
-- Name: fk_sipra_t_recupero_energia_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_recener_param
    ADD CONSTRAINT fk_sipra_t_recupero_energia_01 FOREIGN KEY (nr_scheda, id_istanza, id_attivita) REFERENCES sipra_dt_t_recupero_energia(nr_scheda, id_istanza, id_attivita);


--
-- Name: fk_sipra_t_sede_01; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_r_istanza_sede
    ADD CONSTRAINT fk_sipra_t_sede_01 FOREIGN KEY (codice_sira) REFERENCES sipra_t_sede(codice_sira);


--
-- Name: fk_sipra_t_sede_07; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_geo_pt_sede
    ADD CONSTRAINT fk_sipra_t_sede_07 FOREIGN KEY (codice_sira) REFERENCES sipra_t_sede(codice_sira);


--
-- Name: fk_t_denorm_codice_cer__id_scheda_rifiuto; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY t_denorm_codice_cer
    ADD CONSTRAINT fk_t_denorm_codice_cer__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES t_scheda_rifiuto(id_scheda_rifiuto);


--
-- Name: fk_t_denorm_operaz_recupero__id_scheda_rifiuto; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY t_denorm_operaz_recupero
    ADD CONSTRAINT fk_t_denorm_operaz_recupero__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES t_scheda_rifiuto(id_scheda_rifiuto);


--
-- Name: fk_t_denorm_sede__istanza; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY t_denorm_sede
    ADD CONSTRAINT fk_t_denorm_sede__istanza FOREIGN KEY (id_istanza) REFERENCES sipra_t_istanza_autorizzativa(id_istanza);


--
-- Name: fk_t_denorm_tipo_impianto__id_rifiuto; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY t_denorm_tipo_impianto
    ADD CONSTRAINT fk_t_denorm_tipo_impianto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES t_aua(id_rifiuto);


--
-- Name: r_255; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_sede_tiposede
    ADD CONSTRAINT r_255 FOREIGN KEY (codice_sira) REFERENCES sipra_t_sede(codice_sira);


--
-- Name: r_256; Type: FK CONSTRAINT; Schema: sipra; Owner: sipra
--

ALTER TABLE ONLY sipra_dt_r_sede_tiposede
    ADD CONSTRAINT r_256 FOREIGN KEY (id_tipo_sede) REFERENCES sipra_dt_d_tipo_sede(id_tipo_sede);


--
-- PostgreSQL database dump complete
--

