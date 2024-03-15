create table status
(
    id         bigint      not null
        constraint status_pk
            primary key,
    state_name varchar(50) not null
);

alter table status
    owner to postgres;

