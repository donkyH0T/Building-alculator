create table usersgroup
(
    id    integer     not null
        constraint usersgroup_pk
            primary key,
    title varchar(20) not null
);

alter table usersgroup
    owner to postgres;

