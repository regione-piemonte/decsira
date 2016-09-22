-- tabelle denormalizzate, evitano feature chaining ove possibile e spostano transformazioni sui campi direttamente nel DB 

DROP TABLE IF EXISTS sipra.t_aua;
CREATE TABLE sipra.t_aua AS (
    WITH istanza AS (
        SELECT
           ia.id_istanza, ia.data_rilascio, ia.nr_provvedimento, ia.cf_soggetto,
           p.id_procedimento, p.des_procedimento, p.codice_bdc
        FROM
            sipra.sipra_t_istanza_autorizzativa ia
                INNER JOIN sipra.sipra_r_proc_attivita pa ON (ia.fk_proc_attivita = pa.id_proc_attivita)
                LEFT OUTER JOIN sipra.sipra_d_procedimento p ON (pa.fk_procedimento = p.id_procedimento)
    ),
    rifiuto AS (
        SELECT
            r.id_istanza, r.id_attivita, r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero
        FROM
            sipra.sipra_dt_t_rifiuto r
    )
    SELECT
        'aua.' || ia.id_istanza || '_' || ia.id_attivita AS gml_id, -- single-column surrogate key
        'rifiuto.' || ia.id_istanza || '_' || ia.id_attivita AS id_rifiuto, -- single-column surrogate FK
        'istanza.' || ia.id_istanza AS gml_id_istanza, ia.id_istanza,
        'attivita.' || ia.id_attivita AS gml_id_attivita, ia.id_attivita, ia.nota_quadro_tecnico,
        i.data_rilascio, i.nr_provvedimento, i.cf_soggetto,
        'procedimento.' || i.id_procedimento AS gml_id_procedimento, i.id_procedimento, i.des_procedimento, i.codice_bdc,
        r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero,
        'tipo_richiesta.' || tr.id_tipo_richiesta AS gml_id_tipo_richiesta, tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta,
        a.des_attivita,
        ST_Union(g.geometria) AS geometria
    FROM
        sipra.sipra_dt_r_istanza_attivita ia
            INNER JOIN istanza i ON (ia.id_istanza = i.id_istanza)
            INNER JOIN rifiuto r ON (ia.id_istanza = r.id_istanza AND ia.id_attivita = r.id_attivita)
            INNER JOIN sipra.sipra_dt_d_tipo_richiesta tr ON (ia.fk_tipo_richiesta = tr.id_tipo_richiesta)
            INNER JOIN sipra.sipra_d_attivita a ON (ia.id_attivita = a.id_attivita)
            LEFT JOIN sipra.sipra_r_istanza_sede s ON s.id_istanza = ia.id_istanza
            LEFT JOIN sipra.sipra_geo_pt_sede g ON g.codice_sira = s.codice_sira
    GROUP BY
        ia.id_istanza, ia.id_attivita, ia.nota_quadro_tecnico,
        i.data_rilascio, i.nr_provvedimento, i.cf_soggetto, i.id_procedimento, i.des_procedimento, i.codice_bdc,
        r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero,
        tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta,
        a.des_attivita
);

ALTER TABLE sipra.t_aua ADD CONSTRAINT pk_aua PRIMARY KEY (gml_id);
ALTER TABLE sipra.t_aua ADD CONSTRAINT uq_aua__id_rifiuto UNIQUE (id_rifiuto);


DROP TABLE IF EXISTS sipra.t_denorm_sede;
CREATE TABLE sipra.t_denorm_sede AS (
    SELECT
       'sede.' || s.codice_sira AS gml_id, s.codice_sira, s.istat_comune, s.flg_depuratore,
       c.toponimo as comune, c.sigla_provincia as provincia,
       g.geometria,
       rs.id_istanza
    FROM
        sipra.sipra_r_istanza_sede rs
            INNER JOIN sipra.sipra_t_sede s ON (rs.codice_sira = s.codice_sira)
            INNER JOIN sipra.sipra_t_comuni c ON (s.istat_comune = c.istat)
            LEFT OUTER JOIN sipra.sipra_geo_pt_sede g ON (s.codice_sira = g.codice_sira)
);

ALTER TABLE sipra.t_denorm_sede ADD CONSTRAINT pk_t_denorm_sede PRIMARY KEY (codice_sira, id_istanza);
ALTER TABLE sipra.t_denorm_sede ADD CONSTRAINT fk_t_denorm_sede__istanza FOREIGN KEY (id_istanza) REFERENCES sipra.sipra_t_istanza_autorizzativa (id_istanza);
CREATE INDEX idx_t_denorm_sede__id_istanza ON sipra.t_denorm_sede (id_istanza);


DROP TABLE IF EXISTS sipra.t_scheda_rifiuto;
CREATE TABLE sipra.t_scheda_rifiuto AS
    SELECT
        'rifiuto.' || sr.id_istanza || '_' || sr.id_attivita AS id_rifiuto, -- single-column surrogate key
        'scheda_rifiuto.' || sr.nr_scheda || '_' || sr.id_istanza || '_' || sr.id_attivita AS id_scheda_rifiuto, -- single-column surrogate key
        sr.*,
        'tipo_recupero.' || trec.id_tipo_recupero AS gml_id_tipo_recupero, trec.des_tipo_recupero,
        'tipo_rifiuto.' || trif.id_tipo_rifiuto AS gml_id_tipo_rifiuto, trif.codice_tipo_rifiuto, trif.des_tipo_rifiuto, trif.flg_pericoloso AS flg_pericoloso_tipo_rifiuto,
        rm.qta_anno_recupero, rm.perc_prodotto_recupero
    FROM
        sipra.sipra_dt_t_scheda_rifiuto sr
            INNER JOIN sipra.sipra_dt_d_tipo_recupero trec ON (sr.fk_tipo_recupero = trec.id_tipo_recupero)
            INNER JOIN sipra.sipra_dt_d_tipo_rifiuto trif ON (sr.fk_tipo_rifiuto = trif.id_tipo_rifiuto)
            LEFT OUTER JOIN sipra.sipra_dt_t_recupero_materia rm ON (sr.nr_scheda = rm.nr_scheda AND sr.id_istanza = rm.id_istanza AND sr.id_attivita = rm.id_attivita)
            LEFT OUTER JOIN sipra.sipra_dt_t_recupero_amb ra ON (sr.nr_scheda = ra.nr_scheda AND sr.id_istanza = ra.id_istanza AND sr.id_attivita = ra.id_attivita);

ALTER TABLE sipra.t_scheda_rifiuto ADD CONSTRAINT pk_scheda_rifiuto PRIMARY KEY (id_scheda_rifiuto);
ALTER TABLE sipra.t_scheda_rifiuto ADD CONSTRAINT fk_scheda_rifiuto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES sipra.t_aua (id_rifiuto);


DROP TABLE IF EXISTS sipra.t_denorm_operaz_recupero;
CREATE TABLE sipra.t_denorm_operaz_recupero AS
    SELECT
        'operaz_rec.' || ror.id_operaz_recupero AS gml_id,
        'scheda_rifiuto.' || ror.nr_scheda || '_' || ror.id_istanza || '_' || ror.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        ror.*, _or.codice_operaz_recupero, _or.des_operaz_recupero
    FROM
        sipra.sipra_dt_r_rifiuto_or ror
            INNER JOIN sipra.sipra_dt_d_operaz_recupero _or ON (ror.id_operaz_recupero = _or.id_operaz_recupero);

ALTER TABLE sipra.t_denorm_operaz_recupero ADD CONSTRAINT pk_t_denorm_operaz_recupero PRIMARY KEY ("gml_id", "id_scheda_rifiuto");
ALTER TABLE sipra.t_denorm_operaz_recupero ADD CONSTRAINT fk_t_denorm_operaz_recupero__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES sipra.t_scheda_rifiuto (id_scheda_rifiuto);


DROP TABLE IF EXISTS sipra.t_denorm_codice_cer;
CREATE TABLE sipra.t_denorm_codice_cer AS
    SELECT
        'cer.' || rc.codice_cer AS gml_id,
        'scheda_rifiuto.' || rc.nr_scheda || '_' || rc.id_istanza || '_' || rc.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rc.*, cc.des_cer, cc.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_cer rc
            INNER JOIN sipra.sipra_dt_d_codice_cer cc ON (rc.codice_cer = cc.codice_cer);

ALTER TABLE sipra.t_denorm_codice_cer ADD CONSTRAINT pk_t_denorm_codice_cer PRIMARY KEY ("gml_id", "id_scheda_rifiuto");
ALTER TABLE sipra.t_denorm_codice_cer ADD CONSTRAINT fk_t_denorm_codice_cer__id_scheda_rifiuto FOREIGN KEY (id_scheda_rifiuto) REFERENCES sipra.t_scheda_rifiuto (id_scheda_rifiuto);


DROP TABLE IF EXISTS sipra.t_denorm_tipo_impianto;
CREATE TABLE sipra.t_denorm_tipo_impianto AS
    SELECT
        'tipo_impianto.' || rti.id_tipo_impianto AS gml_id,
        'rifiuto.' || rti.id_istanza || '_' || rti.id_attivita AS id_rifiuto, -- single-column surrogate foreign key
        rti.*, ti.des_tipo_impianto
    FROM
        sipra.sipra_dt_r_tipimp_imprif rti
            INNER JOIN sipra.sipra_dt_d_tipo_impianto ti ON (rti.id_tipo_impianto = ti.id_tipo_impianto);
            
ALTER TABLE sipra.t_denorm_tipo_impianto ADD CONSTRAINT pk_t_denorm_tipo_impianto PRIMARY KEY ("gml_id", "id_rifiuto");
ALTER TABLE sipra.t_denorm_tipo_impianto ADD CONSTRAINT fk_t_denorm_tipo_impianto__id_rifiuto FOREIGN KEY (id_rifiuto) REFERENCES sipra.t_aua (id_rifiuto);
