create table openings
(
    id     integer          not null
        constraint openings_pk
            primary key,
    type   text             not null,
    width  double precision not null,
    height double precision not null
);

alter table openings
    owner to postgres;

create unique index openings_id_uindex
    on openings (id);

