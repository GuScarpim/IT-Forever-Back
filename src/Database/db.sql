CREATE SCHEMA `foreverit`;

CREATE TABLE `foreverit`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL DEFAULT NULL,
  `valor` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `produtos` (descricao, valor) 
VALUES 
  ('Janela', 129.99),
  ('Porta', 259.99),
  ('Cadeira', 50);

CREATE TABLE `foreverit`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `foreverit`.`users` (`username`,`password`)
VALUES
('seu nome aqui', 'sua senha aqui');
