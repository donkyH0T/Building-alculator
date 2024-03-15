create table material_characteristics
(
    id                  integer          not null
        constraint material_characteristics_pk
            primary key,
    name                varchar(200)     not null,
    measurement_unit_id integer          not null
        constraint material_characteristics_measurement_unit_id_fk
            references measurement_unit,
    materials_id        integer          not null
        constraint material_characteristics_materials_id_fk
            references materials,
    length              double precision not null,
    wedth               double precision not null,
    thickness           double precision,
    volume              double precision
);

alter table material_characteristics
    owner to postgres;

create unique index material_characteristics_id_uindex
    on material_characteristics (id);

create unique index material_characteristics_materials_id_uindex
    on material_characteristics (materials_id);

create unique index material_characteristics_measurement_unit_id_uindex
    on material_characteristics (measurement_unit_id);

