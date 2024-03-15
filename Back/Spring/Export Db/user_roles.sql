create table user_roles
(
    user_id bigint  not null
        constraint user_roles_pk
            primary key
        constraint user_roles_users_id_fk
            references users,
    role_id integer not null
        constraint user_roles_roles_id_fk
            references roles
);

alter table user_roles
    owner to postgres;

create unique index user_roles_user_id_uindex
    on user_roles (user_id);

