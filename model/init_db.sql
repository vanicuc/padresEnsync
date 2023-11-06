--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists gastos_parentales;
SET foreign_key_checks = 1;

--
-- Create Tables
--


CREATE TABLE gastos_parentales (
  id INT NOT NULL AUTO_INCREMENT,
  date VARCHAR(40) not null,
  description VARCHAR(400) not null,
  total int not null,
  aproved tinyint(1),
  PRIMARY KEY (id)
);