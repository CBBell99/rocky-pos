DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS tables;

CREATE TABLE tables(
  id SERIAL PRIMARY KEY NOT NULL,
  available BOOLEAN DEFAULT FALSE
);

CREATE TABLE menu_items(
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  price INTEGER
);

CREATE TABLE employees(
  id SERIAL PRIMARY KEY NOT NULL,
  passcode INTEGER,
  first_name VARCHAR(30),
  last_name VARCHAR(50)
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id),
  employee_id INTEGER REFERENCES employees(id),
  table_id INTEGER REFERENCES tables(id)
);