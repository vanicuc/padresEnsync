--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists gastos;
SET foreign_key_checks = 1;

--
-- Create Tables
--


CREATE TABLE gastos (
  id INT NOT NULL AUTO_INCREMENT,
  dateExpense DATE not null,
  description VARCHAR(400) not null,
  total  DECIMAL(8,2) not null,
  userId int(11) not null,
  approved tinyint(1),
  PRIMARY KEY (id)
);

-- CREATE TABLE `lista`(
--     `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );
-- CREATE TABLE `calendario`(
--     `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );
-- CREATE TABLE `gastos_parentales`(
--     `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     `data` DATE MOT NULL,
--     `description` VARCHAR(400) NOT NULL,
--     `TOTAL` INT NOT NULL,
--     `pay`  NOT NULL,
--     `approved` TINYINT
-- );