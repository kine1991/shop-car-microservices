<!--  -->

ALTER TABLE book
ADD COLUMN fk_publisher_id;

ALTER TABLE book
ADD CONSTRAINT fk_book_publisher
FOREIGN KEY(fk_publisher_id) REFERENCES publisher(publisher_id)


SELECT DISTINCT city, country
FROM employees

SELECT * FROM customers WHERE country NOT IN ('Mexico', 'Germany');

SELECT DISTINCT country, city FROM customers
ORDER BY country ASC, city Desc;

SELECT MAX(order_date) FROM orders
WHERE ship_city = 'London';

SELECT AVG(unit_price) FROM products WHERE discontinued <> 1;

SELECT SUM(units_in_stock) FROM products WHERE discontinued <> 1;

SELECT * FROM orders WHERE ship_country IN ('France', 'Germany');

SELECT AVG(unit_price) FROM products WHERE units_in_stock > 30;

SELECT ship_city from orders WHERE ship_region is not null;

SELECT ship_country, COUNT(*) FROM orders WHERE freight > 50 GROUP BY ship_country;

SELECT ship_country, COUNT(*) as count2 FROM orders WHERE freight > 50 
GROUP BY ship_country
ORDER BY count2 DESC;

SELECT category_id, SUM(units_in_stock * unit_price) as sum2 FROM products
WHERE discontinued <> 1
GROUP BY category_id
HAVING SUM(units_in_stock * unit_price) > 11000



<!--  обеденение (все) -->
SELECT country FROM customers
UNION
SELECT country FROM employees;


<!-- пересечение (и те и те) -->
SELECT country FROM customers
INTERSECT
SELECT country FROM suppliers;

<!-- взодит customers и не входит suppliers -->
SELECT country FROM customers
EXCEPT
SELECT country FROM suppliers;


SELECT category_name, SUM(units_in_stock) FROM products INNER JOIN categories 
ON products.category_id = categories.category_id GROUP BY category_name;

SELECT order_id, customer_id, first_name, last_name FROM orders INNER JOIN employees ON orders.employee_id = employees.employee_id;



<!-- подзапросы -->

SELECT * FROM suppliers WHERE country IN (SELECT DISTINCT country FROM customers);

SELECT category_name, SUM(units_in_stock) FROM products 
JOIN categories USING(category_id) GROUP BY category_name
ORDER BY SUM(units_in_stock) DESC
LIMIT (SELECT MIN(product_id) + 4 FROM products);


SELECT units_in_stock FROM products WHERE units_in_stock < (SELECT AVG(units_in_stock) FROM products);


<!-- DDL -->

CREATE SEQUENCE sec1;

SELECT nextval('sec1');
SELECT currval('sec1');
SELECT lastval();


SELECT setval('sec1', 16, true);
SELECT nextval('sec1');
SELECT currval('sec1');

SELECT setval('sec1', 16, false);
SELECT nextval('sec1');
SELECT currval('sec1');


CREATE SEQUENCE IF NOT EXISTS sec2 INCREMENT 16;

SELECT nextval('sec2');
SELECT currval('sec2');



CREATE SEQUENCE IF NOT EXISTS sec3 INCREMENT 16
MINVALUE 0
MAXVALUE 128
START WITH 0;


SELECT nextval('sec3');
SELECT currval('sec3');

ALTER SEQUENCE sec3 RENAME TO sec4;
ALTER SEQUENCE sec4 RESTART WITH 11;
DROP SEQUENCE sec4;

SELECT title, isbn INTO book3 FROM book2 WHERE publisher_id = 1;

insert into book2 select * from book where publisher_id = 2;

UPDATE book2 SET title = 'TITLE ID 11' WHERE book_id = 11;
DELETE FROM book2 WHERE book_id = 10; 
INSERT INTO book3 VALUES ('text6', 'isbn6') RETURNING title, isbn;
INSERT INTO book3 VALUES ('text6', 'isbn6') RETURNING *;


CREATE TABLE exam(
	exam_id serial UNIQUE NOT NULL,
	exam_name varchar(256),
	exam_date date
);

ALTER TABLE exam DROP CONSTRAINT exam_exam_id_key;


ALTER TABLE exam ADD PRIMARY KEY(exam_id);



CREATE TABLE person (
	person_id int NOT NULL,
	first_name varchar(64) NOT NULL,
	last_name varchar(64) NOT NULL,
	
  CONSTRAINT pk_person_person_id PRIMARY KEY (person_id)
);

CREATE TABLE password (
	password_id integer NOT NULL,
	serial_number int NOT NULL,
	registration text NOT NULL,
	person_id int NOT NULL,
	
	CONSTRAINT pk_password_password_id PRIMARY KEY(password_id),
	CONSTRAINT fk_person_person FOREIGN KEY (person_id) REFERENCES person(person_id)
);

ALTER TABLE book ADD COLUMN weight decimal CONSTRAINT chk_book_weight CHECK (weight > 0 AND weight < 100);
INSERT INTO book VALUES ( 22, 'title7', 'isbn7', 1, 199);





