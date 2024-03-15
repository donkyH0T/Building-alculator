create table openings_in_structural_element_frame
(
    id                         integer not null
        constraint openings_in_structural_element_frame_pk
            primary key,
    structural_element_fram_id integer not null
        constraint openings_structural_element_frame_structural_element_frame_id_f
            references structural_element_frame,
    openings_id                integer not null
        constraint openings_in_structural_element_frame_openings_id_fk
            references openings,
    amount                     integer
);

alter table openings_in_structural_element_frame
    owner to postgres;

create unique index openings_in_structural_element_frame_id_uindex
    on openings_in_structural_element_frame (id);

create index openings_in_structural_element_frame_openings_id_index
    on openings_in_structural_element_frame (openings_id);

create index openings_structural_element_frame_structural_element_fram_id_in
    on openings_in_structural_element_frame (structural_element_fram_id);

