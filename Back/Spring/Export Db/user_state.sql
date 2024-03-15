create table user_state
(
    state_id bigint not null
        constraint user_state_state_id_uindex
            primary key,
    state    text
);

alter table user_state
    owner to postgres;

