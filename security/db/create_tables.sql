
DROP TABLE IF EXISTS sipra.denorm_aua;
CREATE TABLE sipra.denorm_aua AS (
    WITH istanza AS (
        SELECT
           ia.id_istanza, ia.data_rilascio, ia.nr_provvedimento, ia.cf_soggetto,
           p.id_procedimento, p.des_procedimento, p.codice_bdc
        FROM
            sipra.sipra_t_istanza_autorizzativa ia
                INNER JOIN sipra.sipra_r_proc_attivita pa ON (ia.fk_proc_attivita = pa.id_proc_attivita)
                LEFT OUTER JOIN sipra.sipra_d_procedimento p ON (pa.fk_procedimento = p.id_procedimento)
    ),
    sede AS (
        SELECT
           s.codice_sira, s.istat_comune, s.flg_depuratore, g.geometria,
           c.toponimo as comune, c.sigla_provincia as provincia,
           rs.id_istanza
        FROM
            sipra.sipra_r_istanza_sede rs
                INNER JOIN sipra.sipra_t_sede s ON (rs.codice_sira = s.codice_sira)
                INNER JOIN sipra.sipra_t_comuni c ON (s.istat_comune = c.istat)
                LEFT OUTER JOIN sipra.sipra_geo_pt_sede g ON (s.codice_sira = g.codice_sira)
    ),
    rifiuto AS (
        SELECT
            r.id_istanza, r.id_attivita, r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero
        FROM
            sipra.sipra_dt_t_rifiuto r
    )
    SELECT
        s.codice_sira || '_' || ia.id_istanza || '_' || ia.id_attivita AS id_aua, -- single-column surrogate key
        ia.id_istanza || '_' || ia.id_attivita AS id_rifiuto, -- single-column surrogate FK
        ia.id_istanza, ia.id_attivita, ia.nota_quadro_tecnico,
        i.data_rilascio, i.nr_provvedimento, i.cf_soggetto, i.id_procedimento, i.des_procedimento, i.codice_bdc,
        s.codice_sira, s.istat_comune, s.flg_depuratore, s.comune, s.provincia, s.geometria,
        r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero,
        tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta,
        a.des_attivita
    FROM
        sipra_dt_r_istanza_attivita ia
            INNER JOIN istanza i ON (ia.id_istanza = i.id_istanza)
            INNER JOIN sede s ON (ia.id_istanza = s.id_istanza)
            INNER JOIN rifiuto r ON (ia.id_istanza = r.id_istanza AND ia.id_attivita = r.id_attivita)
            INNER JOIN sipra.sipra_dt_d_tipo_richiesta tr ON (ia.fk_tipo_richiesta = tr.id_tipo_richiesta)
            INNER JOIN sipra.sipra_d_attivita a ON (ia.id_attivita = a.id_attivita)
);

ALTER TABLE sipra.denorm_aua ADD CONSTRAINT pk_denorm_aua PRIMARY KEY (id_aua);
ALTER TABLE sipra.denorm_aua ADD CONSTRAINT uq_denorm_aua__id_rifiuto UNIQUE (id_rifiuto);
ALTER TABLE sipra.denorm_aua ADD CONSTRAINT uq_denorm_aua__codice_sira UNIQUE (codice_sira);


DROP TABLE IF EXISTS sipra.denorm_scheda_rifiuto;
CREATE TABLE sipra.denorm_scheda_rifiuto AS
    SELECT
        sr.id_istanza || '_' || sr.id_attivita AS id_rifiuto, -- single-column surrogate key
        sr.nr_scheda || '_' || sr.id_istanza || '_' || sr.id_attivita AS id_scheda_rifiuto, -- single-column surrogate key
        sr.*,
        trec.id_tipo_recupero, trec.des_tipo_recupero,
        trif.id_tipo_rifiuto, trif.codice_tipo_rifiuto, trif.des_tipo_rifiuto, trif.flg_pericoloso AS flg_pericoloso_tipo_rifiuto,
        rm.qta_anno_recupero, rm.perc_prodotto_recupero
    FROM
        sipra.sipra_dt_t_scheda_rifiuto sr
            INNER JOIN sipra.sipra_dt_d_tipo_recupero trec ON (sr.fk_tipo_recupero = trec.id_tipo_recupero)
            INNER JOIN sipra.sipra_dt_d_tipo_rifiuto trif ON (sr.fk_tipo_rifiuto = trif.id_tipo_rifiuto)
            LEFT OUTER JOIN sipra.sipra_dt_t_recupero_materia rm ON (sr.nr_scheda = rm.nr_scheda AND sr.id_istanza = rm.id_istanza AND sr.id_attivita = rm.id_attivita)
            LEFT OUTER JOIN sipra.sipra_dt_t_recupero_amb ra ON (sr.nr_scheda = ra.nr_scheda AND sr.id_istanza = ra.id_istanza AND sr.id_attivita = ra.id_attivita);

ALTER TABLE sipra.denorm_scheda_rifiuto ADD CONSTRAINT pk_denorm_scheda_rifiuto PRIMARY KEY (id_scheda_rifiuto);
ALTER TABLE sipra.denorm_scheda_rifiuto ADD CONSTRAINT fk_denorm_scheda_rifiuto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES sipra.denorm_aua (id_rifiuto);


DROP TABLE IF EXISTS sipra.denorm_operaz_recupero;
CREATE TABLE sipra.denorm_operaz_recupero AS
    SELECT
        ror.nr_scheda || '_' || ror.id_istanza || '_' || ror.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        ror.*, _or.codice_operaz_recupero, _or.des_operaz_recupero
    FROM
        sipra.sipra_dt_r_rifiuto_or ror
            INNER JOIN sipra.sipra_dt_d_operaz_recupero _or ON (ror.id_operaz_recupero = _or.id_operaz_recupero);

ALTER TABLE sipra.denorm_operaz_recupero ADD CONSTRAINT fk_denorm_operaz_recupero__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES sipra.denorm_scheda_rifiuto (id_scheda_rifiuto);


DROP TABLE IF EXISTS sipra.denorm_codice_cer;
CREATE TABLE sipra.denorm_codice_cer AS
    SELECT
        rc.nr_scheda || '_' || rc.id_istanza || '_' || rc.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rc.*, cc.des_cer, cc.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_cer rc
            INNER JOIN sipra.sipra_dt_d_codice_cer cc ON (rc.codice_cer = cc.codice_cer);

ALTER TABLE sipra.denorm_codice_cer ADD CONSTRAINT fk_denorm_codice_cer__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES sipra.denorm_scheda_rifiuto (id_scheda_rifiuto);


DROP TABLE IF EXISTS sipra.denorm_tipo_impianto;
CREATE TABLE sipra.denorm_tipo_impianto AS
    SELECT
        rti.id_istanza || '_' || rti.id_attivita AS id_rifiuto, -- single-column surrogate foreign key
        rti.*, ti.des_tipo_impianto
    FROM
        sipra.sipra_dt_r_tipimp_imprif rti
            INNER JOIN sipra.sipra_dt_d_tipo_impianto ti ON (rti.id_tipo_impianto = ti.id_tipo_impianto);

ALTER TABLE sipra.denorm_tipo_impianto ADD CONSTRAINT fk_denorm_tipo_impianto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES sipra.denorm_aua (id_rifiuto);
