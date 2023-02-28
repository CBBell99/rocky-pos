DROP TABLE IF EXISTS railcars CASCADE;
DROP TABLE IF EXISTS tables CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS orders_items CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE railcars (
    id SERIAL PRIMARY KEY NOT NULL,
    railcar_number INTEGER
  )

CREATE TABLE tables (
    id SERIAL PRIMARY KEY NOT NULL,
    table_number INTEGER NOT NULL,
    available_seats INTEGER,
    railcar_id INTEGER REFERENCES railcars(id) ON DELETE CASCADE
  )

CREATE TABLE customers (
    id SERIAL PRIMARY KEY NOT NULL,
    seat_number INTEGER,
    table_id INTEGER REFERENCES tables(table_number)
  )

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  table_id INTEGER REFERENCES tables(table_number)
  customer_id INTEGER REFERENCES customers(id)
  created_at TIMESTAMP DEFAULT NOW()
)  

CREATE TABLE orders_item(
  id PRIMARY SERIAL KEY,
  order_id INTEGER REFERENCES orders(id),
  menu_item_id INTEGER REFERENCES menu_items(id),
  modifications VARCHAR(255),
  item_price INTEGER,
  quantity INTEGER
)

CREATE TABLE menu_items(
  id PRIMARY SERIAL KEY NOT NULL,
  item_name, VARCHAR(30),
  price INTEGER,
  category VARCHAR 
)