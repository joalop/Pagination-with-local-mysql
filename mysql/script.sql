drop database if exists pagination;
create database pagination charset utf8mb4;
use pagination;
create table pagine (
id_page int unsigned auto_increment not null primary key,
title varchar(100),
asd Text,
data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
insert into pagine(title, asd) values
('Dia 1','hola de calor'),('Dia 2','hola de calor'),('Dia 3','hola de calor')
,('Dia 4','hola de calor'),('Dia 5','hola de calor'),('Dia 6','hola de calor')
,('Dia 7','hola de calor'),('Dia 8','hola de calor'),('Dia 9','hola de calor')
,('Dia 10','hola de calor'),('Dia 11','hola de calor'),('Dia 12','hola de calor')
,('Dia 13','hola de calor'),('Dia 14','hola de calor'),('Dia 15','hola de calor')
,('Dia 16','hola de calor'),('Dia 17','hola de calor'),('Dia 18','hola de calor');