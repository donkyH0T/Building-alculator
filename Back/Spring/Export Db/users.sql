create table users
(
    id          integer not null
        constraint users_pk
            primary key,
    customer_id bigint
        constraint users_customers_id_fk
            references customers,
    last_name   varchar(100),
    first_name  varchar(100),
    second_name varchar(100),
    phone       integer,
    "e-mail"    varchar(200),
    password    varchar(20),
    login       varchar(50),
    state_id    bigint  not null
        constraint users_user_state_state_id_fk
            references user_state
);

alter table users
    owner to postgres;

create unique index users_id_uindex
    on users (id);

create unique index users_customer_id_uindex
    on users (customer_id);

