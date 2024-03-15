create table roles
(
    id   integer     not null
        constraint roles_pk
            primary key,
    name varchar(20) not null
);

alter table roles
    owner to postgres;

create unique index roles_id_uindex
    on roles (id);

