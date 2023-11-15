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
