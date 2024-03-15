create table measurement_unit
(
    id   integer not null
        constraint measurement_unit_pk
            primary key,
    name text    not null
);

alter table measurement_unit
    owner to postgres;

create unique index measurement_unit_id_uindex
    on measurement_unit (id);

