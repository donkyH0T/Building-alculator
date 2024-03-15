create table materials
(
    id                         integer not null
        constraint materials_pk
            primary key,
    name                       text    not null,
    material_characteristic_id integer not null,
    material_type              text,
    structural_element_type    text
);

alter table materials
    owner to postgres;

create unique index materials_id_uindex
    on materials (id);

create unique index materials_material_characteristic_id_uindex
    on materials (material_characteristic_id);

