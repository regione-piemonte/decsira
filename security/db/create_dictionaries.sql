
--DROP VIEW IF EXISTS sipra.dict_tipo_rec; 
--CREATE VIEW dict_tipo_rec AS
--    SELECT
--        id_tipo_recupero AS id, des_tipo_recupero AS label
--    FROM
--        sipra.sipra_dt_d_tipo_recupero;

DROP VIEW IF EXISTS sipra.v_dict_tipo_rif;
CREATE VIEW v_dict_tipo_rif AS
    SELECT
        id_tipo_rifiuto AS id, trim(both FROM codice_tipo_rifiuto || ' - ' || des_tipo_rifiuto) as label
    FROM
        sipra.sipra_dt_d_tipo_rifiuto;

DROP VIEW IF EXISTS sipra.v_dict_operaz_rec;
CREATE VIEW v_dict_operaz_rec AS
    SELECT
        id_operaz_recupero AS id, codice_operaz_recupero || ' - ' || des_operaz_recupero AS label
    FROM
        sipra.sipra_dt_d_operaz_recupero;

DROP TABLE IF EXISTS sipra.sipra_t_province;
CREATE TABLE sipra.sipra_t_province (
    id_provincia integer NOT NULL PRIMARY KEY,
    sigla character(2) NOT NULL UNIQUE,
    toponimo character varying(50)
);

INSERT INTO sipra.sipra_t_province VALUES 
    (1, 'AL', 'ALESSANDRIA'),
    (2, 'AT', 'ASTI'),
    (3, 'BI', 'BIELLA'),
    (4, 'CN', 'CUNEO'),
    (5, 'NO', 'NOVARA'),
    (6, 'TO', 'TORINO'),
    (7, 'VB', 'VERBANO CUSIO OSSOLA'),
    (8, 'VC', 'VERCELLI');

ALTER TABLE sipra.sipra_t_comuni ADD CONSTRAINT fk_comuni_province FOREIGN KEY (sigla_provincia) REFERENCES sipra.sipra_t_province (sigla);
