create table calculation
(
    id                           integer not null
        constraint calculation_pk
            primary key,
    manager_id                   bigint  not null
        constraint calculation_customers_id_fk
            references customers,
    address_object_constractions text    not null,
    number                       integer not null,
    created_date                 date    not null,
    result_id                    bigint  not null
        constraint calculation_results_id_fk
            references results,
    calculation_state_id         bigint  not null
        constraint calculation_state_id_fk
            references status
);

alter table calculation
    owner to postgres;

create index calculation_calculation_state_id_index
    on calculation (calculation_state_id);

create index calculation_manager_id_index
    on calculation (manager_id);

create index calculation_result_id_index
    on calculation (result_id);

