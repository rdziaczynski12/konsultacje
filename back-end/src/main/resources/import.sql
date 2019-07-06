INSERT INTO ROLES (name) VALUES('ROLE_ADMIN');
INSERT INTO ROLES (name) VALUES('ROLE_MODER');
INSERT INTO ROLES (name) VALUES('ROLE_USER');

INSERT INTO DB_USER (first_Name, last_Name, username, password, email, position, activated) VALUES('Rafał','Dziaczyński','admin','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','admin@admin', 'Profesor', true );

INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 1);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 2);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 3);

INSERT INTO TITLE (name) values ('prof');
INSERT INTO TITLE (name) values ('dr hab');
INSERT INTO TITLE (name) values ('dr');
INSERT INTO TITLE (name) values ('mgr');
INSERT INTO TITLE (name) values ('inż');

INSERT INTO user_titles (user_id, title_id) values (1, 1);
INSERT INTO user_titles (user_id, title_id) values (1, 2);

insert into type_subject (name) values ('ćwiczenia');
insert into type_subject (name) values ('projekt');
insert into type_subject (name) values ('wykład');
insert into type_subject (name) values ('laboratorium');

INSERT INTO specialization (name, type) values ('Automatyka i robotyka', 'inżynierskie');
INSERT INTO specialization (name, type) values ('Informatyka', 'inżynierskie');

INSERT INTO subject( name, semester, id_specialization)  values ('Roboty mobilne', 6, 1);
INSERT INTO subject( name, semester, id_specialization)  values ('Bezpieczeństwo', 6, 1);
INSERT INTO subject( name, semester, id_specialization)  values ('Informatyka', 5, 2);

INSERT into subject_user (subject_id, user_id) values (1, 1);
INSERT into subject_user (subject_id, user_id) values (2, 1);
INSERT into subject_user (subject_id, user_id) values (3, 1);

INSERT INTO consultation (active, "date", description, is_default, title, id_user) values (true, CURRENT_DATE, 'to jest opis posta', true, 'to jst tytul', 1 );
INSERT INTO consultation (active, "date", description, is_default, title, id_user) values (true, CURRENT_DATE, 'to jest opis posta 2', true, 'to jst tytul 2', 1 );

insert into consultation_subject (consultation_id, subject_id) values (1, 1);
insert into consultation_subject (consultation_id, subject_id) values (2, 2);



