create table structural_element_basement
(
    id                          integer          not null
        constraint structural_element_basement_pk
            primary key,
    result_id                   integer          not null
        constraint structural_element_basement_results_id_fk
            references results,
    perimeter_of_external_walls double precision not null,
    internal_wall_length        double precision not null,
    concrete_piles              text             not null,
    concrete                    text             not null
);

alter table structural_element_basement
    owner to postgres;

create unique index structural_element_basement_id_uindex
    on structural_element_basement (id);

create index structural_element_basement_result_id_index
    on structural_element_basement (result_id);

