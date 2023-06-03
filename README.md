# Tracks POS api

Tracks POS api is a simple api to manage the products and orders of a restaurant.  As of now, it is a work in progress.  More features will be added in the future.
Tracks POS api is built with Node.js, Express, and Postgres.

## Installation

Use npm to install the dependencies.

```npm install```

Will install all the dependencies needed to run the project.

## Usage

```npm start```

Will start the local dev environment on http://localhost:5005 or what you have your .env config set to. 

```npm run db:reset```

This command will seed data into the database.  It will also drop all tables and recreate them.  If you need to reset the database, you will need to reset the sequence in psql with the following command: 

```ALTER SEQUENCE order_items_id_seq RESTART WITH 1;
ALTER SEQUENCE orders_id_seq RESTART WITH 1;
ALTER SEQUENCE menu_items_id_seq RESTART WITH 1;
ALTER SEQUENCE employees_id_seq RESTART WITH 1;
ALTER SEQUENCE tables_id_seq RESTART WITH 1;
```

Currently prisma doesn't play nice with raw sql, so this is the only way to reset the sequence.


You can test the endpoints using Postman, Insominia, or the RESTED Chrome extension.

## Additional Info

As of right now, the api only has basic CRUD functionality for orders, employees, menu items, and tables.  Features like sales aggregation, user authentication, and seve and more complex queries will be added in the future.
