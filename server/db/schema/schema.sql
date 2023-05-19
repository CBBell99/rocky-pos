DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS tables;

CREATE TABLE tables (
  id SERIAL PRIMARY KEY NOT NULL,
  available BOOLEAN DEFAULT FALSE
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  category VARCHAR(50),
  price INTEGER
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(50),
  job VARCHAR(50),
  isAdmin BOOLEAN DEFAULT FALSE,
  passcode INTEGER
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id),
  table_id INTEGER REFERENCES tables(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id),
  menu_item_id INTEGER REFERENCES menu_items(id)
);
