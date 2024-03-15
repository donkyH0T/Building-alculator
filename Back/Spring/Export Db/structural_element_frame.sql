create table structural_element_frame
(
    id                                integer          not null
        constraint structural_element_frame_pk
            primary key,
    result_id                         integer          not null
        constraint structural_element_frame_results_id_fk
            references results,
    amount_floor                      integer          not null,
    floor_number                      integer          not null,
    floor_height                      integer          not null,
    perimeter_of_external_walls       integer          not null,
    base_area                         double precision not null,
    external_wall_thickness           double precision not null,
    internal_wall_length              double precision not null,
    internal_wall_thickness           double precision not null,
    osb_external                      text             not null,
    steam_waterproofing_external_wall text             not null,
    windscreen_external_wall          text             not null,
    insulation_external_wall          text             not null,
    overlap_thickness                 text             not null,
    osb_thickness                     text             not null,
    steam_waterproofing_thickness     text             not null,
    windscreen_thickness              text             not null,
    insulation_thickness              text             not null,
    osb_internal_wall                 integer
);

alter table structural_element_frame
    owner to postgres;

create unique index structural_element_frame_id_uindex
    on structural_element_frame (id);

create index structural_element_frame_result_id_index
    on structural_element_frame (result_id);

