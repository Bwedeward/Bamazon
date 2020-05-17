DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;


USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 5) NOT NULL,
    stock_quantity INTEGER(5) NOT NULL,
    PRIMARY KEY (item_id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
    'dog harness',
    'pets',
    23.99,
    12
),
(
    'shorts',
    'clothing',
    19.99,
    55
),
(
    'water bottle',
    'sports',
    12.99,
    109
),
(
    'bike',
    'sports',
    4321.99,
    6
),
(
    'sandles',
    'footwear',
    55.99,
    24
),
(
    'wine',
    'alcohol',
    9.99,
    90
),
(
    'shirt',
    'clothing',
    16.99,
    204
),
(
    'tequila',
    'alcohol',
    148.99,
    3
),
(
    'skate board',
    'sports',
    74.99,
    69
),
(
    'subaru',
    'automotive',
    5399.99,
    2
)