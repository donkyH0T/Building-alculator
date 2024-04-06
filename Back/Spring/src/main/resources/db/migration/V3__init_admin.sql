INSERT INTO public.users (id, email, first_name, last_name, login, password, phone, second_name, customer_id, state_id)
values (1, 'slava.kurenkov@bk.ru', 'Вячеслав', 'Куренков', 'slava', '$2a$10$vq2KmXJwrnPFPxpHSq.wgerUrjYkxW1hv9AsuxUN3QavvY7Di8.li', '89613446405', 'Андреевич', null, 1);

insert into user_roles (user_id, role_id) values (1, 3);