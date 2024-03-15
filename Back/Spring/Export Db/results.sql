create table results
(
    id                          integer not null
        constraint results_pk
            primary key,
    material_characteristics_id bigint  not null
        constraint results_material_characteristics_id_fk
            references material_characteristics,
    material                    text,
    amount                      integer,
    price                       double precision,
    measurement_unit            text,
    full_price                  double precision
);

alter table results
    owner to postgres;

create unique index results_id_uindex
    on results (id);

create index results_material_characteristics_id_index
    on results (material_characteristics_id);

