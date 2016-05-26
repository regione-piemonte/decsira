-- viste denormalizzate versione 2, evitano feature chaining ove possibile

DROP VIEW IF EXISTS sipra.v_aua_v2;
CREATE VIEW sipra.v_aua_v2 AS
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
        ia.id_istanza || '_' || ia.id_attivita AS id_aua, -- single-column surrogate key
        ia.id_istanza, ia.id_attivita, ia.nota_quadro_tecnico,
        i.data_rilascio, i.nr_provvedimento, i.cf_soggetto, i.id_procedimento, i.des_procedimento, i.codice_bdc,
        r.capacita_max_stocc_mc, r.capacita_max_stocc_t, r.qta_tot_recupero,
        tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta,
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
        a.des_attivita;


DROP VIEW IF EXISTS sipra.v_sede;
CREATE VIEW sipra.v_sede AS
    SELECT
        s.*,
        c.toponimo as comune, c.sigla_provincia as provincia,
        si.id_istanza, si.fk_suap,
        g.geometria
    FROM
        sipra.sipra_t_sede s
            LEFT OUTER JOIN sipra.sipra_t_comuni c ON (s.istat_comune = c.istat)
            LEFT OUTER JOIN sipra.sipra_geo_pt_sede g ON (s.codice_sira = g.codice_sira)
            LEFT OUTER JOIN sipra.sipra_r_istanza_sede si ON (s.codice_sira = si.codice_sira);


DROP VIEW IF EXISTS sipra.v_istanza_autorizzativa;
CREATE VIEW sipra.v_istanza_autorizzativa AS
    SELECT
       ia.*, pa.*,
       p.id_procedimento, p.des_procedimento, p.codice_bdc,
       a.id_attivita, a.des_attivita,
       tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta
    FROM
        sipra.sipra_t_istanza_autorizzativa ia
            INNER JOIN sipra.sipra_dt_d_tipo_richiesta tr ON (ia.fk_tipo_richiesta = tr.id_tipo_richiesta)
            INNER JOIN sipra.sipra_r_proc_attivita pa ON (ia.fk_proc_attivita = pa.id_proc_attivita)
            LEFT OUTER JOIN sipra.sipra_d_procedimento p ON (pa.fk_procedimento = p.id_procedimento)
            LEFT OUTER JOIN sipra.sipra_d_attivita a ON (pa.fk_attivita = a.id_attivita)
    WHERE
        ia.fk_stato = 9;

DROP VIEW IF EXISTS sipra.v_rifiuto;
CREATE VIEW sipra.v_rifiuto AS
    SELECT
        r.id_istanza || '_' || r.id_attivita AS id_rifiuto, -- single-column surrogate key
        r.*,
        ia.nota_quadro_tecnico,
        ca.id_classe_appartenenza, ca.des_classe_appartenenza,
        tr.id_tipo_richiesta, tr.des_tipo_richiesta, tr.flg_richiesta
    FROM
        sipra.sipra_dt_t_rifiuto r
            INNER JOIN sipra.sipra_dt_r_istanza_attivita ia ON (r.id_istanza = ia.id_istanza AND r.id_attivita = ia.id_attivita)
            INNER JOIN sipra.sipra_dt_d_tipo_richiesta tr ON (ia.fk_tipo_richiesta = tr.id_tipo_richiesta)
            LEFT OUTER JOIN sipra.sipra_dt_d_classe_appartenenza ca ON (r.fk_classe_appartenenza = ca.id_classe_appartenenza);


DROP VIEW IF EXISTS sipra.v_tipo_impianto;
CREATE VIEW sipra.v_tipo_impianto AS
    SELECT
        rti.id_istanza || '_' || rti.id_attivita AS id_rifiuto, -- single-column surrogate foreign key
        rti.*, ti.des_tipo_impianto
    FROM
        sipra.sipra_dt_r_tipimp_imprif rti
            INNER JOIN sipra.sipra_dt_d_tipo_impianto ti ON (rti.id_tipo_impianto = ti.id_tipo_impianto);


DROP VIEW IF EXISTS sipra.v_tipo_sede;
CREATE VIEW sipra.v_tipo_sede AS
    SELECT rts.*, ts.des_tipo_sede
    FROM
        sipra.sipra_dt_r_sede_tiposede rts
            INNER JOIN sipra.sipra_dt_d_tipo_sede ts ON (rts.id_tipo_sede = ts.id_tipo_sede);


DROP VIEW IF EXISTS sipra.v_scheda_rifiuto;
CREATE VIEW sipra.v_scheda_rifiuto AS
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


DROP VIEW IF EXISTS sipra.v_codice_cer;
CREATE VIEW sipra.v_codice_cer AS
    SELECT
        rc.nr_scheda || '_' || rc.id_istanza || '_' || rc.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rc.*, cc.des_cer, cc.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_cer rc
            INNER JOIN sipra.sipra_dt_d_codice_cer cc ON (rc.codice_cer = cc.codice_cer);


DROP VIEW IF EXISTS sipra.v_proven_rifiuto;
CREATE VIEW sipra.v_proven_rifiuto AS
    SELECT
        rpr.nr_scheda || '_' || rpr.id_istanza || '_' || rpr.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rpr.*, pr.codice_proven_rifiuto, pr.des_proven_rifiuto, pr.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_proven rpr
            INNER JOIN sipra.sipra_dt_d_proven_rifiuto pr ON (rpr.id_proven_rifiuto = pr.id_proven_rifiuto);


DROP VIEW IF EXISTS sipra.v_operaz_recupero;
CREATE VIEW sipra.v_operaz_recupero AS
    SELECT
        ror.nr_scheda || '_' || ror.id_istanza || '_' || ror.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        ror.*, _or.codice_operaz_recupero, _or.des_operaz_recupero
    FROM
        sipra.sipra_dt_r_rifiuto_or ror
            INNER JOIN sipra.sipra_dt_d_operaz_recupero _or ON (ror.id_operaz_recupero = _or.id_operaz_recupero);


DROP VIEW IF EXISTS sipra.v_caratt_rec_mat;
CREATE VIEW sipra.v_caratt_rec_mat AS
    SELECT
        rm.nr_scheda || '_' || rm.id_istanza || '_' || rm.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rm.*, cm.codice_caratt_merc, cm.des_caratt_merc, cm.flg_pericoloso
    FROM
        sipra.sipra_dt_r_merc_recmateria rm
            INNER JOIN sipra.sipra_dt_d_caratt_merc cm ON (rm.id_caratt_merc = cm.id_caratt_merc);


DROP VIEW IF EXISTS sipra.v_caratt_rifiuto;
CREATE VIEW sipra.v_caratt_rifiuto AS
    SELECT
        rcr.nr_scheda || '_' || rcr.id_istanza || '_' || rcr.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rcr.*, cr.codice_caratt_rifiuto, cr.des_caratt_rifiuto, cr.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_cr rcr
            INNER JOIN sipra.sipra_dt_d_caratt_rifiuto cr ON (rcr.id_caratt_rifiuto = cr.id_caratt_rifiuto);


DROP VIEW IF EXISTS sipra.v_attiv_rec;
CREATE VIEW sipra.v_attiv_rec AS
    SELECT
        rar.nr_scheda || '_' || rar.id_istanza || '_' || rar.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rar.*, ar.codice_att_recupero, ar.des_attiv_recupero, ar.flg_pericoloso
    FROM
        sipra.sipra_dt_r_rifiuto_ar rar
            INNER JOIN sipra.sipra_dt_d_attiv_recupero ar ON (rar.id_attiv_recupero = ar.id_attiv_recupero);


DROP VIEW IF EXISTS sipra.v_rec_ener;
CREATE VIEW sipra.v_rec_ener AS
    SELECT
        re.nr_scheda || '_' || re.id_istanza || '_' || re.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        re.*
    FROM
        sipra.sipra_dt_t_recupero_energia re;


DROP VIEW IF EXISTS sipra.v_rec_ener_param;
CREATE VIEW sipra.v_rec_ener_param AS
    SELECT
        rep.nr_scheda || '_' || rep.id_istanza || '_' || rep.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        rep.*, p.des_parametro, p.codice_cas
    FROM
        sipra.sipra_dt_r_recener_param rep
            INNER JOIN sipra.sipra_d_parametro p ON (rep.id_parametro = p.id_parametro);


DROP VIEW IF EXISTS sipra.v_imp_apparecchiatura;
CREATE VIEW sipra.v_imp_apparecchiatura AS
    SELECT
        a.nr_scheda || '_' || a.fk_istanza || '_' || a.id_attivita AS id_scheda_rifiuto, -- single-column surrogate FK
        a.*
    FROM
        sipra.sipra_dt_t_imp_apparecchiatura a;
