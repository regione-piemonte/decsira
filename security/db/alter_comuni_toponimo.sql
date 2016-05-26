-- deve essere varchar(50) invece di char(50), altrimenti il driver JDBC restituisce sempre
-- una stringa lunga 50 caratteri, riempita con spazi ove necessario
ALTER TABLE sipra.sipra_t_comuni ALTER COLUMN toponimo TYPE character varying(50);

