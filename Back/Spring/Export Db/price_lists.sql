create table price_lists
(
    id                          integer          not null
        constraint price_lists_pk
            primary key,
    material_characreristics_id integer          not null
        constraint price_lists_material_characteristics_id_fk
            references material_characteristics,
    date                        date             not null,
    purchase_price              double precision not null,
    selling_price               double precision not null
);

alter table price_lists
    owner to postgres;

create unique index price_lists_id_uindex
    on price_lists (id);

create unique index price_lists_material_characreristics_id_uindex
    on price_lists (material_characreristics_id);

