create table customers
(
    id          bigint       not null
        constraint customers_pk
            primary key,
    last_name   varchar(100) not null,
    first_name  varchar(100) not null,
    second_name varchar(100) not null,
    phone       integer      not null,
    "e-mail"    varchar(200) not null,
    addres      text         not null
);

alter table customers
    owner to postgres;

