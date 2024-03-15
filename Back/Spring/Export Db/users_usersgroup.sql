create table users_usersgroup
(
    users_id      integer not null
        constraint users_usersgroup_users_id_fk
            references users,
    usersgroup_id integer not null
        constraint users_usersgroup_usersgroup_id_fk
            references usersgroup
);

alter table users_usersgroup
    owner to postgres;

create unique index users_usersgroup_users_id_uindex
    on users_usersgroup (users_id);

create unique index users_usersgroup_usersgroup_id_uindex
    on users_usersgroup (usersgroup_id);

