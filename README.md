# Padres EnSync

## Summary
ENSYnc simplifies and syncs coparenting for parents through an intuitive platform. It streamlines expense and task management, fostering collaborative parenting.

## Set-up
### Dependencies
- In your terminal, navigate to the project directory and run `npm install`. This will install Express and other server-related dependencies.

- `cd client` and run `npm install`. This will install React client dependencies.


### Database
- If you do not have MySQL, [install it](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) before proceeding.

- Open MySQL in your terminal by running `mysql -u root -p`

- Create a new database called "custodia": `CREATE DATABASE custodia`


- Create an `.env` file in the project folder, and write your MySQL authentication information in it. For example:
```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=custodia
DB_PASS=(your password)
```


- Open another terminal window, navigate to the project folder and run `npm run migrate`. Your database should be ready!

- (After this, if you need to reload the database you can simply run `npm run migrate` - you only need to set global permissions once.)

- In your MySQL terminal window, run `USE custodia;` then `SHOW TABLES;`. Your database should contain 1 tables: `gastos` 

![db plan](data/db_plan.png)

- You can run `DESCRIBE gastos;` to check that your tables have been set up correctly.

### Development
- Run `npm start` in project directory to start the Express server on port 4000

- In another terminal window, `cd client` and `npm run dev` to start the client in development mode with hot reloading in port 5173.


## Learn More
Full [project description here](https://docs.google.com/presentation/d/1_EdyenWgTMccjMarms_NokJdGRqnymZNSk9TNrDqOjU/edit?usp=sharing).

Includes file map, user flow, design, data methodology, links to source data, feature extension recommendations and more.


_This is a student project that was created by vanina cucchietti [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.


