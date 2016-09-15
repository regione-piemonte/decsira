ALTER TABLE "sipra"."t_aua" ADD COLUMN "big_data" integer;
update "t_aua" set big_data = 0 where id_istanza <= 147;
update "t_aua" set big_data = 1 where id_istanza > 147;
create index "idx_t_aua_big_data" on "sipra"."t_aua" ("big_data" ASC);