# 📚 MySQL Complete Guide - From Scratch to Advanced

> A comprehensive guide with real-life examples, detailed explanations, and practical queries

---

## 📖 Table of Contents
1. [Getting Started](#getting-started)
2. [Database Basics](#database-basics)
3. [Table Operations](#table-operations)
4. [Data Manipulation](#data-manipulation)
5. [Querying Data](#querying-data)
6. [Advanced Queries](#advanced-queries)
7. [JOINs - Complete Guide](#joins-complete-guide)
8. [Real-Life Examples](#real-life-examples)
9. [Best Practices](#best-practices)

---

## 🚀 Getting Started

### Connecting to MySQL
```sql
mysql -u root -p
```
Enter your password when prompted to access the MySQL shell.

---

## 🗄️ Database Basics

### View All Databases
```sql
SHOW DATABASES;
```
**Real-Life Example:** Like viewing all folders on your computer to see what projects you have.

### Create a New Database
```sql
CREATE DATABASE ecommerce_store;
CREATE DATABASE school_management;
CREATE DATABASE hospital_system;
```
**Explanation:** Creates a new database container where you'll store related tables.

### Select a Database to Work With
```sql
USE ecommerce_store;
```
**Explanation:** Similar to opening a specific folder before you start working with files inside it.

### Delete a Database
```sql
DROP DATABASE test_database;
```
⚠️ **Warning:** This permanently deletes the database and all its data!

---

## 📊 Table Operations

### View All Tables in Current Database
```sql
SHOW TABLES;
```

### Create a Table

**Example 1: E-commerce Products Table**
```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Example 2: User Registration Table**
```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Example 3: Employee Management**
```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    hire_date DATE NOT NULL,
    job_title VARCHAR(50),
    salary DECIMAL(10, 2),
    department_id INT,
    manager_id INT
);
```

### View Table Structure
```sql
DESC products;
DESC users;
```
**Explanation:** Shows the column names, data types, and constraints of a table.

### Modify Table Structure

**Add a New Column**
```sql
ALTER TABLE products ADD brand VARCHAR(50) AFTER product_name;
ALTER TABLE users ADD last_login TIMESTAMP;
```

**Modify Existing Column**
```sql
ALTER TABLE products CHANGE price product_price DECIMAL(12, 2);
```

**Delete a Column**
```sql
ALTER TABLE products DROP brand;
```

**Add Column at Specific Position**
```sql
ALTER TABLE employees ADD middle_name VARCHAR(50) AFTER first_name;
ALTER TABLE employees ADD employee_code VARCHAR(20) FIRST;
```

---

## 💾 Data Manipulation

### Insert Data

**Single Row Insert**
```sql
INSERT INTO products (product_name, category, price, stock_quantity) 
VALUES ('iPhone 15 Pro', 'Electronics', 999.99, 50);
```

**Multiple Rows Insert**
```sql
INSERT INTO products (product_name, category, price, stock_quantity) 
VALUES 
    ('Samsung Galaxy S24', 'Electronics', 899.99, 45),
    ('MacBook Pro M3', 'Electronics', 1999.99, 20),
    ('Sony WH-1000XM5', 'Audio', 349.99, 100),
    ('Nike Air Max', 'Footwear', 129.99, 200);
```

**Real-Life Example: User Registration**
```sql
INSERT INTO users (username, email, password_hash, date_of_birth, gender) 
VALUES 
    ('john_doe', 'john@example.com', 'hashed_password_123', '1995-06-15', 'Male'),
    ('jane_smith', 'jane@example.com', 'hashed_password_456', '1998-03-22', 'Female'),
    ('alex_johnson', 'alex@example.com', 'hashed_password_789', '2000-11-08', 'Other');
```

### Update Data

**Update Single Record**
```sql
UPDATE products 
SET price = 949.99, stock_quantity = 55 
WHERE product_id = 1;
```

**Update Multiple Records**
```sql
UPDATE products 
SET price = price * 0.9 
WHERE category = 'Electronics';
```
**Explanation:** Applies a 10% discount to all electronics products.

**Real-Life Example: Employee Salary Increment**
```sql
UPDATE employees 
SET salary = salary * 1.15 
WHERE hire_date < '2020-01-01' AND department_id = 3;
```
**Explanation:** Give 15% raise to employees hired before 2020 in department 3.

### Delete Data

**Delete Specific Records**
```sql
DELETE FROM products 
WHERE stock_quantity = 0;
```
**Explanation:** Remove out-of-stock products.

**Delete with Conditions**
```sql
DELETE FROM users 
WHERE is_active = FALSE AND created_at < '2020-01-01';
```
**Explanation:** Clean up inactive users created before 2020.

**Delete All Records (Keep Table Structure)**
```sql
DELETE FROM temp_table;
```

---

## 🔍 Querying Data

### Basic SELECT Queries

**Select All Columns**
```sql
SELECT * FROM products;
```

**Select Specific Columns**
```sql
SELECT product_name, price FROM products;
```

**Select with Alias**
```sql
SELECT product_name AS "Product", price AS "Price (USD)" FROM products;
```

### WHERE Clause - Filtering Data

**Equality Comparison**
```sql
SELECT * FROM products WHERE category = 'Electronics';
```

**Numeric Comparisons**
```sql
SELECT * FROM products WHERE price > 500;
SELECT * FROM products WHERE stock_quantity <= 10;
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
```

**Real-Life Example: Find Premium Products**
```sql
SELECT product_name, price 
FROM products 
WHERE price > 1000 AND stock_quantity > 0;
```
**Explanation:** Find expensive products that are currently in stock.

**Pattern Matching with LIKE**
```sql
-- Products starting with 'iPhone'
SELECT * FROM products WHERE product_name LIKE 'iPhone%';

-- Products containing 'Pro'
SELECT * FROM products WHERE product_name LIKE '%Pro%';

-- Products ending with 'Max'
SELECT * FROM products WHERE product_name LIKE '%Max';

-- Products with exactly 5 characters
SELECT * FROM products WHERE product_name LIKE '_____';
```

**Real-Life Example: Search Users by Email Domain**
```sql
SELECT username, email 
FROM users 
WHERE email LIKE '%@gmail.com';
```
**Explanation:** Find all users with Gmail accounts.

### Logical Operators

**AND Operator**
```sql
SELECT * FROM products 
WHERE category = 'Electronics' AND price < 1000;
```

**OR Operator**
```sql
SELECT * FROM products 
WHERE category = 'Electronics' OR category = 'Audio';
```

**NOT Operator**
```sql
SELECT * FROM users 
WHERE NOT gender = 'Other';
```

**IN Operator**
```sql
SELECT * FROM products 
WHERE category IN ('Electronics', 'Audio', 'Computers');
```

**Real-Life Example: Find Employees in Specific Departments**
```sql
SELECT first_name, last_name, job_title 
FROM employees 
WHERE department_id IN (1, 3, 5) AND salary > 60000;
```

### Sorting Results

**Ascending Order (Default)**
```sql
SELECT * FROM products ORDER BY price;
SELECT * FROM users ORDER BY username;
```

**Descending Order**
```sql
SELECT * FROM products ORDER BY price DESC;
SELECT * FROM employees ORDER BY salary DESC;
```

**Multiple Column Sorting**
```sql
SELECT * FROM products 
ORDER BY category ASC, price DESC;
```
**Explanation:** Sort by category alphabetically, then by price (highest first) within each category.

**Real-Life Example: Top 5 Highest Paid Employees**
```sql
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 5;
```

### LIMIT and OFFSET

**Get First 10 Records**
```sql
SELECT * FROM products LIMIT 10;
```

**Pagination - Get Records 11-20**
```sql
SELECT * FROM products LIMIT 10 OFFSET 10;
```

**Real-Life Example: Product Listing with Pagination**
```sql
-- Page 1 (items 1-20)
SELECT product_name, price FROM products ORDER BY product_id LIMIT 20 OFFSET 0;

-- Page 2 (items 21-40)
SELECT product_name, price FROM products ORDER BY product_id LIMIT 20 OFFSET 20;

-- Page 3 (items 41-60)
SELECT product_name, price FROM products ORDER BY product_id LIMIT 20 OFFSET 40;
```

---

## 📈 Advanced Queries

### Aggregate Functions

**COUNT - Count Records**
```sql
SELECT COUNT(*) AS total_products FROM products;
SELECT COUNT(*) AS electronics_count FROM products WHERE category = 'Electronics';
```

**Real-Life Example: User Statistics**
```sql
SELECT 
    COUNT(*) AS total_users,
    COUNT(CASE WHEN gender = 'Male' THEN 1 END) AS male_users,
    COUNT(CASE WHEN gender = 'Female' THEN 1 END) AS female_users,
    COUNT(CASE WHEN is_active = TRUE THEN 1 END) AS active_users
FROM users;
```

**SUM - Calculate Total**
```sql
SELECT SUM(stock_quantity) AS total_inventory FROM products;
SELECT SUM(price * stock_quantity) AS inventory_value FROM products;
```

**AVG - Calculate Average**
```sql
SELECT AVG(price) AS average_price FROM products;
SELECT AVG(salary) AS average_salary FROM employees WHERE department_id = 2;
```

**MIN and MAX**
```sql
SELECT MIN(price) AS cheapest, MAX(price) AS most_expensive FROM products;
SELECT MIN(hire_date) AS first_hire, MAX(hire_date) AS latest_hire FROM employees;
```

### GROUP BY Clause

**Basic Grouping**
```sql
SELECT category, COUNT(*) AS product_count 
FROM products 
GROUP BY category;
```

**Real-Life Example: Sales Analysis by Category**
```sql
SELECT 
    category,
    COUNT(*) AS total_products,
    AVG(price) AS avg_price,
    SUM(stock_quantity) AS total_stock,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products
GROUP BY category
ORDER BY total_products DESC;
```

**Multiple Column Grouping**
```sql
SELECT category, 
       CASE 
           WHEN price < 100 THEN 'Budget'
           WHEN price BETWEEN 100 AND 500 THEN 'Mid-Range'
           ELSE 'Premium'
       END AS price_range,
       COUNT(*) AS count
FROM products
GROUP BY category, price_range;
```

### HAVING Clause

**Filter Grouped Results**
```sql
SELECT category, COUNT(*) AS product_count 
FROM products 
GROUP BY category 
HAVING COUNT(*) > 5;
```

**Real-Life Example: Find Popular Categories**
```sql
SELECT 
    category,
    COUNT(*) AS product_count,
    AVG(price) AS avg_price
FROM products
GROUP BY category
HAVING COUNT(*) >= 3 AND AVG(price) > 200
ORDER BY product_count DESC;
```
**Explanation:** Find categories with at least 3 products and average price above $200.

### DISTINCT - Unique Values

```sql
SELECT DISTINCT category FROM products;
SELECT DISTINCT department_id FROM employees;
```

**Real-Life Example: Unique Email Domains**
```sql
SELECT DISTINCT SUBSTRING_INDEX(email, '@', -1) AS email_domain 
FROM users 
ORDER BY email_domain;
```

### String Functions

**CONCAT - Combine Strings**
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
```

**UPPER and LOWER**
```sql
SELECT UPPER(product_name) AS product_upper FROM products;
SELECT LOWER(email) AS email_lower FROM users;
```

**SUBSTRING**
```sql
SELECT SUBSTRING(product_name, 1, 10) AS short_name FROM products;
```

**Real-Life Example: Format Employee Information**
```sql
SELECT 
    CONCAT(UPPER(LEFT(first_name, 1)), LOWER(SUBSTRING(first_name, 2))) AS formatted_first_name,
    CONCAT(UPPER(LEFT(last_name, 1)), LOWER(SUBSTRING(last_name, 2))) AS formatted_last_name,
    CONCAT(first_name, ' ', last_name, ' (', job_title, ')') AS employee_info
FROM employees;
```

---

## 🔗 JOINs - Complete Guide

JOINs are used to combine rows from two or more tables based on a related column between them. This is one of the most powerful features of SQL.

### Understanding JOINs with Real-Life Scenario

**Let's create a realistic e-commerce database:**

```sql
-- Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50),
    country VARCHAR(50)
);

-- Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2),
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Order Items Table
CREATE TABLE order_items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Insert Sample Data
INSERT INTO customers (customer_name, email, city, country) VALUES
    ('John Smith', 'john@example.com', 'New York', 'USA'),
    ('Emma Wilson', 'emma@example.com', 'London', 'UK'),
    ('Carlos Rodriguez', 'carlos@example.com', 'Madrid', 'Spain'),
    ('Yuki Tanaka', 'yuki@example.com', 'Tokyo', 'Japan'),
    ('Sarah Johnson', 'sarah@example.com', 'Toronto', 'Canada');

INSERT INTO orders (customer_id, order_date, total_amount, status) VALUES
    (1, '2024-01-15', 1299.99, 'Delivered'),
    (1, '2024-02-20', 449.99, 'Delivered'),
    (2, '2024-01-18', 899.99, 'Shipped'),
    (3, '2024-02-10', 2199.99, 'Delivered'),
    (4, '2024-03-05', 349.99, 'Pending');
-- Note: Customer 5 (Sarah) has no orders
```

---

### 1️⃣ INNER JOIN

**Definition:** Returns only the rows where there is a match in BOTH tables.

**Syntax:**
```sql
SELECT columns
FROM table1
INNER JOIN table2 ON table1.column = table2.column;
```

**Visual Representation:**
```
Table A          Table B
   ●                ●
   ●  ←→  MATCH  ←→ ●
   ●                ●
   ●                
```
Only the matching rows (●←→●) are returned.

**Example 1: Get All Orders with Customer Information**
```sql
SELECT 
    customers.customer_name,
    customers.email,
    orders.order_id,
    orders.order_date,
    orders.total_amount,
    orders.status
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;
```

**Result:**
```
customer_name    | email              | order_id | order_date | total_amount | status
-----------------|--------------------|---------|-----------|--------------|-----------
John Smith       | john@example.com   | 1       | 2024-01-15| 1299.99      | Delivered
John Smith       | john@example.com   | 2       | 2024-02-20| 449.99       | Delivered
Emma Wilson      | emma@example.com   | 3       | 2024-01-18| 899.99       | Shipped
Carlos Rodriguez | carlos@example.com | 4       | 2024-02-10| 2199.99      | Delivered
Yuki Tanaka      | yuki@example.com   | 5       | 2024-03-05| 349.99       | Pending
```

**Explanation:** Sarah Johnson doesn't appear because she has no orders (no match in orders table).

**Example 2: Complete Order Details with Products**
```sql
SELECT 
    c.customer_name,
    o.order_id,
    o.order_date,
    p.product_name,
    oi.quantity,
    oi.unit_price,
    (oi.quantity * oi.unit_price) AS line_total
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
ORDER BY o.order_date DESC;
```

**Explanation:** This joins 4 tables to show complete order information - who ordered what, when, and how much.

**Real-Life Use Case:** Generate an invoice or order summary for customers.

---

### 2️⃣ LEFT JOIN (LEFT OUTER JOIN)

**Definition:** Returns ALL rows from the left table, and matching rows from the right table. If no match, NULL values are returned for right table columns.

**Syntax:**
```sql
SELECT columns
FROM table1
LEFT JOIN table2 ON table1.column = table2.column;
```

**Visual Representation:**
```
Table A (LEFT)   Table B (RIGHT)
   ●  ←→  MATCH  ←→ ●
   ●  ←→  MATCH  ←→ ●
   ●  ←→  NO MATCH → NULL
   ●  ←→  NO MATCH → NULL
```
ALL rows from left table, with NULLs where no match exists.

**Example 1: Get All Customers and Their Orders (Including Customers Without Orders)**
```sql
SELECT 
    c.customer_name,
    c.email,
    c.city,
    o.order_id,
    o.order_date,
    o.total_amount,
    o.status
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
ORDER BY c.customer_name;
```

**Result:**
```
customer_name    | email              | city     | order_id | order_date | total_amount | status
-----------------|--------------------|---------|---------|-----------|--------------|-----------
Carlos Rodriguez | carlos@example.com | Madrid  | 4       | 2024-02-10| 2199.99      | Delivered
Emma Wilson      | emma@example.com   | London  | 3       | 2024-01-18| 899.99       | Shipped
John Smith       | john@example.com   | New York| 1       | 2024-01-15| 1299.99      | Delivered
John Smith       | john@example.com   | New York| 2       | 2024-02-20| 449.99       | Delivered
Sarah Johnson    | sarah@example.com  | Toronto | NULL    | NULL      | NULL         | NULL
Yuki Tanaka      | yuki@example.com   | Tokyo   | 5       | 2024-03-05| 349.99       | Pending
```

**Explanation:** Sarah Johnson appears with NULL order values because she hasn't placed any orders yet.

**Example 2: Find Customers Who Haven't Placed Orders**
```sql
SELECT 
    c.customer_id,
    c.customer_name,
    c.email
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

**Result:**
```
customer_id | customer_name  | email
------------|----------------|------------------
5           | Sarah Johnson  | sarah@example.com
```

**Explanation:** This finds customers with no orders by checking for NULL in the orders table.

**Real-Life Use Case:** 
- Marketing campaigns targeting inactive customers
- Finding users who registered but never made a purchase
- Identifying products that have never been ordered

**Example 3: Customer Purchase Summary**
```sql
SELECT 
    c.customer_name,
    c.country,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0) AS total_spent,
    COALESCE(AVG(o.total_amount), 0) AS avg_order_value
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name, c.country
ORDER BY total_spent DESC;
```

**Result:**
```
customer_name    | country | total_orders | total_spent | avg_order_value
-----------------|---------|--------------|-------------|----------------
Carlos Rodriguez | Spain   | 1            | 2199.99     | 2199.99
John Smith       | USA     | 2            | 1749.98     | 874.99
Emma Wilson      | UK      | 1            | 899.99      | 899.99
Yuki Tanaka      | Japan   | 1            | 349.99      | 349.99
Sarah Johnson    | Canada  | 0            | 0.00        | 0.00
```

**Explanation:** Shows spending patterns for ALL customers, including those who haven't ordered (using COALESCE to replace NULL with 0).

---

### 3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)

**Definition:** Returns ALL rows from the right table, and matching rows from the left table. If no match, NULL values are returned for left table columns.

**Syntax:**
```sql
SELECT columns
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column;
```

**Visual Representation:**
```
Table A (LEFT)   Table B (RIGHT)
   ●  ←→  MATCH  ←→ ●
   ●  ←→  MATCH  ←→ ●
NULL ← NO MATCH ←→ ●
NULL ← NO MATCH ←→ ●
```

**Example 1: All Orders with Customer Info (Even If Customer Was Deleted)**
```sql
SELECT 
    o.order_id,
    o.order_date,
    o.total_amount,
    c.customer_name,
    c.email
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;
```

**Explanation:** If a customer was deleted but their orders remain, those orders would show with NULL customer info.

**Example 2: Products and Their Order History**
```sql
SELECT 
    p.product_name,
    p.category,
    p.price,
    COUNT(oi.item_id) AS times_ordered,
    COALESCE(SUM(oi.quantity), 0) AS total_quantity_sold
FROM order_items oi
RIGHT JOIN products p ON oi.product_id = p.product_id
GROUP BY p.product_id, p.product_name, p.category, p.price
ORDER BY times_ordered DESC;
```

**Explanation:** Shows ALL products, including those that have never been ordered.

**Real-Life Use Case:**
- Finding products that aren't selling (inventory optimization)
- Audit trails where records might be orphaned
- Ensuring all items in a catalog are accounted for

---

### 4️⃣ FULL OUTER JOIN

**Definition:** Returns ALL rows when there is a match in either left or right table. Rows without a match show NULL for the other table's columns.

**Note:** MySQL doesn't directly support FULL OUTER JOIN, but we can simulate it using UNION.

**Syntax (Simulated):**
```sql
SELECT columns FROM table1 LEFT JOIN table2 ON condition
UNION
SELECT columns FROM table1 RIGHT JOIN table2 ON condition;
```

**Visual Representation:**
```
Table A          Table B
   ●  ←→  MATCH  ←→ ●
   ●  ←→  MATCH  ←→ ●
   ●  ←→  NO MATCH → NULL
NULL ← NO MATCH ←→ ●
```

**Example: All Customers and All Orders**
```sql
SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id

UNION

SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;
```

**Real-Life Use Case:** Data reconciliation and finding mismatches between systems.

---

### 5️⃣ CROSS JOIN (Cartesian Product)

**Definition:** Returns the Cartesian product of both tables - every row from table1 combined with every row from table2.

**Syntax:**
```sql
SELECT columns
FROM table1
CROSS JOIN table2;
```

**Example 1: Generate All Possible Product-Customer Combinations**
```sql
SELECT 
    c.customer_name,
    p.product_name,
    p.price
FROM customers c
CROSS JOIN products p
LIMIT 20;
```

**Result:** If you have 5 customers and 100 products, you get 500 rows (5 × 100).

**Real-Life Use Case:**
- Generating recommendation matrices
- Creating test data combinations
- Scheduling (all employees × all shifts)

**Example 2: Size and Color Combinations**
```sql
CREATE TABLE sizes (size_name VARCHAR(10));
CREATE TABLE colors (color_name VARCHAR(20));

INSERT INTO sizes VALUES ('S'), ('M'), ('L'), ('XL');
INSERT INTO colors VALUES ('Red'), ('Blue'), ('Green'), ('Black');

SELECT 
    CONCAT(sizes.size_name, ' - ', colors.color_name) AS variant
FROM sizes
CROSS JOIN colors
ORDER BY sizes.size_name, colors.color_name;
```

**Result:**
```
variant
-----------
S - Black
S - Blue
S - Green
S - Red
M - Black
M - Blue
... (16 total combinations)
```

**Explanation:** Creates all possible size-color combinations for a product catalog.

---

### 6️⃣ SELF JOIN

**Definition:** A table is joined with itself to compare rows within the same table.

**Example: Employee-Manager Relationship**
```sql
-- Find employees and their managers
SELECT 
    e.first_name AS employee_name,
    e.job_title AS employee_title,
    m.first_name AS manager_name,
    m.job_title AS manager_title
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id
ORDER BY m.first_name, e.first_name;
```

**Example 2: Find Customers from the Same City**
```sql
SELECT 
    c1.customer_name AS customer1,
    c2.customer_name AS customer2,
    c1.city
FROM customers c1
INNER JOIN customers c2 ON c1.city = c2.city AND c1.customer_id < c2.customer_id
ORDER BY c1.city;
```

**Explanation:** Finds pairs of customers living in the same city (avoiding duplicates with c1.customer_id < c2.customer_id).

**Real-Life Use Case:**
- Organizational hierarchies
- Finding duplicate or similar records
- Comparing time-series data (current vs previous)

---

### 7️⃣ NATURAL JOIN

**Definition:** Automatically joins tables based on columns with the same name.

**Syntax:**
```sql
SELECT columns
FROM table1
NATURAL JOIN table2;
```

**Example:**
```sql
SELECT *
FROM customers
NATURAL JOIN orders;
```

**⚠️ Warning:** Use with caution! It can produce unexpected results if tables have multiple columns with the same name.

---

## 🎯 Real-Life Complex JOIN Examples

### Example 1: E-commerce Sales Report
```sql
SELECT 
    c.customer_name,
    c.country,
    o.order_id,
    o.order_date,
    p.product_name,
    p.category,
    oi.quantity,
    oi.unit_price,
    (oi.quantity * oi.unit_price) AS line_total,
    o.status
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
WHERE o.order_date >= '2024-01-01'
ORDER BY o.order_date DESC, c.customer_name;
```

**Explanation:** Complete sales report showing who bought what, when, and for how much in 2024.

---

### Example 2: Customer Lifetime Value Analysis
```sql
SELECT 
    c.customer_id,
    c.customer_name,
    c.email,
    c.country,
    COUNT(DISTINCT o.order_id) AS total_orders,
    SUM(oi.quantity * oi.unit_price) AS lifetime_value,
    AVG(o.total_amount) AS avg_order_value,
    MIN(o.order_date) AS first_order_date,
    MAX(o.order_date) AS last_order_date,
    DATEDIFF(MAX(o.order_date), MIN(o.order_date)) AS customer_lifespan_days
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.customer_name, c.email, c.country
HAVING total_orders > 0
ORDER BY lifetime_value DESC;
```

**Explanation:** Analyzes customer value, purchase frequency, and engagement duration.

---

### Example 3: Product Performance Dashboard
```sql
SELECT 
    p.product_id,
    p.product_name,
    p.category,
    p.price AS current_price,
    COUNT(DISTINCT oi.order_id) AS times_ordered,
    SUM(oi.quantity) AS total_units_sold,
    SUM(oi.quantity * oi.unit_price) AS total_revenue,
    AVG(oi.unit_price) AS avg_selling_price,
    p.stock_quantity AS current_stock,
    CASE 
        WHEN SUM(oi.quantity) IS NULL THEN 'Never Ordered'
        WHEN SUM(oi.quantity) > 100 THEN 'Best Seller'
        WHEN SUM(oi.quantity) > 50 THEN 'Popular'
        WHEN SUM(oi.quantity) > 10 THEN 'Moderate'
        ELSE 'Slow Moving'
    END AS performance_category
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name, p.category, p.price, p.stock_quantity
ORDER BY total_revenue DESC;
```

**Explanation:** Comprehensive product analysis showing sales performance, revenue, and categorization.

---

## 📝 Three Complex Queries with Detailed Explanations

### Query 1: Monthly Sales Trend with Customer Segmentation

```sql
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') AS month,
    COUNT(DISTINCT o.order_id) AS total_orders,
    COUNT(DISTINCT o.customer_id) AS unique_customers,
    SUM(o.total_amount) AS monthly_revenue,
    AVG(o.total_amount) AS avg_order_value,
    SUM(CASE WHEN o.total_amount > 1000 THEN 1 ELSE 0 END) AS premium_orders,
    SUM(CASE WHEN o.total_amount BETWEEN 500 AND 1000 THEN 1 ELSE 0 END) AS mid_tier_orders,
    SUM(CASE WHEN o.total_amount < 500 THEN 1 ELSE 0 END) AS budget_orders,
    ROUND(SUM(CASE WHEN o.total_amount > 1000 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS premium_percentage
FROM orders o
WHERE o.status != 'Cancelled'
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
ORDER BY month DESC;
```

**Detailed Explanation:**

1. **DATE_FORMAT(o.order_date, '%Y-%m')**: Groups orders by year-month (e.g., '2024-01')
2. **COUNT(DISTINCT o.order_id)**: Counts unique orders in each month
3. **COUNT(DISTINCT o.customer_id)**: Counts unique customers (handles repeat customers)
4. **SUM(o.total_amount)**: Total revenue for the month
5. **AVG(o.total_amount)**: Average order value
6. **CASE statements**: Segments orders into price tiers
   - Premium: > $1000
   - Mid-tier: $500-$1000
   - Budget: < $500
7. **Premium percentage calculation**: Shows what % of orders are high-value

**Business Use Case:** 
- Track monthly sales trends
- Identify seasonal patterns
- Understand customer spending behavior
- Plan inventory and marketing strategies

**Sample Output:**
```
month   | total_orders | unique_customers | monthly_revenue | avg_order_value | premium_orders | mid_tier_orders | budget_orders | premium_percentage
--------|--------------|------------------|-----------------|-----------------|----------------|-----------------|---------------|-------------------
2024-03 | 15           | 12               | 18750.50        | 1250.03         | 8              | 5               | 2             | 53.33
2024-02 | 23           | 18               | 25430.75        | 1105.68         | 10             | 9               | 4             | 43.48
2024-01 | 31           | 25               | 32150.00        | 1037.10         | 12             | 13              | 6             | 38.71
```

---

### Query 2: Customer Retention and Repeat Purchase Analysis

```sql
SELECT 
    c.customer_id,
    c.customer_name,
    c.email,
    c.country,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_spent,
    MIN(o.order_date) AS first_purchase,
    MAX(o.order_date) AS last_purchase,
    DATEDIFF(CURDATE(), MAX(o.order_date)) AS days_since_last_order,
    DATEDIFF(MAX(o.order_date), MIN(o.order_date)) AS customer_lifespan_days,
    CASE 
        WHEN COUNT(o.order_id) >= 5 THEN 'VIP'
        WHEN COUNT(o.order_id) >= 3 THEN 'Loyal'
        WHEN COUNT(o.order_id) >= 2 THEN 'Repeat'
        ELSE 'One-Time'
    END AS customer_segment,
    CASE 
        WHEN DATEDIFF(CURDATE(), MAX(o.order_date)) <= 30 THEN 'Active'
        WHEN DATEDIFF(CURDATE(), MAX(o.order_date)) <= 90 THEN 'At Risk'
        WHEN DATEDIFF(CURDATE(), MAX(o.order_date)) <= 180 THEN 'Dormant'
        ELSE 'Lost'
    END AS engagement_status,
    ROUND(SUM(o.total_amount) / COUNT(o.order_id), 2) AS avg_order_value
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.status != 'Cancelled'
GROUP BY c.customer_id, c.customer_name, c.email, c.country
HAVING COUNT(o.order_id) > 0
ORDER BY total_spent DESC, total_orders DESC;
```

**Detailed Explanation:**

1. **Customer Metrics:**
   - Total orders and spending per customer
   - First and last purchase dates
   - Days since last order (recency)
   - Customer lifespan (loyalty duration)

2. **Customer Segmentation (based on order count):**
   - **VIP**: 5+ orders (best customers)
   - **Loyal**: 3-4 orders (regular customers)
   - **Repeat**: 2 orders (returning customers)
   - **One-Time**: 1 order (need nurturing)

3. **Engagement Status (based on recency):**
   - **Active**: Ordered within last 30 days
   - **At Risk**: 31-90 days since last order (send re-engagement email)
   - **Dormant**: 91-180 days (win-back campaign needed)
   - **Lost**: 180+ days (major intervention required)

4. **Average Order Value**: Total spent ÷ number of orders

**Business Use Case:**
- Identify VIP customers for special treatment
- Target "At Risk" customers with retention campaigns
- Re-engage dormant customers with special offers
- Analyze customer lifetime value (CLV)

**Sample Output:**
```
customer_id | customer_name | email              | country | total_orders | total_spent | first_purchase | last_purchase | days_since_last_order | customer_lifespan_days | customer_segment | engagement_status | avg_order_value
------------|---------------|--------------------|---------|--------------| ------------|----------------|---------------|----------------------|------------------------|------------------|-------------------|----------------
1           | John Smith    | john@example.com   | USA     | 8            | 5240.50     | 2023-06-15     | 2024-03-10    | 25                   | 269                    | VIP              | Active            | 655.06
3           | Carlos R.     | carlos@example.com | Spain   | 5            | 4125.75     | 2023-08-20     | 2024-02-28    | 37                   | 192                    | VIP              | At Risk           | 825.15
2           | Emma Wilson   | emma@example.com   | UK      | 3            | 2150.00     | 2023-11-05     | 2024-01-15    | 80                   | 71                     | Loyal            | At Risk           | 716.67
```

---

### Query 3: Product Category Performance with Inventory Insights

```sql
SELECT 
    p.category,
    COUNT(DISTINCT p.product_id) AS total_products,
    COUNT(DISTINCT oi.order_id) AS total_orders,
    SUM(oi.quantity) AS units_sold,
    SUM(p.stock_quantity) AS current_inventory,
    SUM(oi.quantity * oi.unit_price) AS total_revenue,
    AVG(p.price) AS avg_product_price,
    MIN(p.price) AS min_price,
    MAX(p.price) AS max_price,
    ROUND(SUM(oi.quantity * oi.unit_price) / SUM(oi.quantity), 2) AS avg_selling_price,
    ROUND(SUM(oi.quantity * oi.unit_price) / COUNT(DISTINCT oi.order_id), 2) AS revenue_per_order,
    CASE 
        WHEN SUM(oi.quantity) > 500 THEN 'High Demand'
        WHEN SUM(oi.quantity) > 200 THEN 'Medium Demand'
        WHEN SUM(oi.quantity) > 50 THEN 'Low Demand'
        ELSE 'Very Low Demand'
    END AS demand_level,
    CASE 
        WHEN SUM(p.stock_quantity) / NULLIF(SUM(oi.quantity), 0) > 2 THEN 'Overstocked'
        WHEN SUM(p.stock_quantity) / NULLIF(SUM(oi.quantity), 0) > 1 THEN 'Healthy'
        WHEN SUM(p.stock_quantity) / NULLIF(SUM(oi.quantity), 0) > 0.5 THEN 'Low Stock'
        ELSE 'Critical - Reorder Now'
    END AS inventory_status
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.category
ORDER BY total_revenue DESC;
```

**Detailed Explanation:**

1. **Product Metrics:**
   - Total products in each category
   - Number of orders containing category items
   - Total units sold
   - Current inventory levels

2. **Revenue Analysis:**
   - Total revenue per category
   - Average product price (catalog price)
   - Price range (min/max)
   - Average selling price (actual transaction price)
   - Revenue per order

3. **Demand Classification:**
   - **High Demand**: 500+ units sold
   - **Medium Demand**: 200-500 units
   - **Low Demand**: 50-200 units
   - **Very Low Demand**: < 50 units

4. **Inventory Health:**
   - **Overstocked**: Inventory > 2× sales (reduce orders, run promotions)
   - **Healthy**: Inventory = 1-2× sales (optimal)
   - **Low Stock**: Inventory = 0.5-1× sales (reorder soon)
   - **Critical**: Inventory < 0.5× sales (immediate reorder needed)

5. **NULLIF Function**: Prevents division by zero errors

**Business Use Case:**
- Optimize inventory management
- Identify best-selling categories
- Plan purchasing and restocking
- Detect slow-moving inventory
- Price optimization opportunities

**Sample Output:**
```
category    | total_products | total_orders | units_sold | current_inventory | total_revenue | avg_product_price | min_price | max_price | avg_selling_price | revenue_per_order | demand_level  | inventory_status
------------|----------------|--------------|------------|-------------------|---------------|-------------------|-----------|-----------|-------------------|-------------------|---------------|------------------
Electronics | 45             | 234          | 1250       | 3200              | 487500.00     | 425.50            | 49.99     | 1999.99   | 390.00            | 2083.76           | High Demand   | Healthy
Audio       | 28             | 156          | 890        | 2100              | 298750.00     | 215.75            | 29.99     | 599.99    | 335.67            | 1915.06           | High Demand   | Healthy
Footwear    | 67             | 89           | 445        | 5200              | 67250.00      | 89.99             | 39.99     | 249.99    | 151.12            | 755.62            | Low Demand    | Overstocked
```

---

## 🎓 Best Practices

### 1. Use Table Aliases
```sql
-- Good
SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;

-- Avoid
SELECT customers.name, orders.total FROM customers JOIN orders ON customers.id = orders.customer_id;
```

### 2. Always Specify JOIN Type
```sql
-- Explicit (Good)
SELECT * FROM customers INNER JOIN orders ON customers.id = orders.customer_id;

-- Implicit (Avoid)
SELECT * FROM customers, orders WHERE customers.id = orders.customer_id;
```

### 3. Use EXPLAIN to Optimize Queries
```sql
EXPLAIN SELECT * FROM customers c 
INNER JOIN orders o ON c.customer_id = o.customer_id 
WHERE c.country = 'USA';
```

### 4. Index Foreign Keys
```sql
CREATE INDEX idx_customer_id ON orders(customer_id);
CREATE INDEX idx_product_id ON order_items(product_id);
```

### 5. Avoid SELECT * in Production
```sql
-- Good - Specify needed columns
SELECT customer_name, email FROM customers;

-- Avoid - Fetches unnecessary data
SELECT * FROM customers;
```

### 6. Use LIMIT for Testing
```sql
-- Test query with small dataset first
SELECT * FROM large_table LIMIT 10;
```

---

## 🔑 Key Takeaways

1. **INNER JOIN**: Only matching records from both tables
2. **LEFT JOIN**: All from left table + matching from right (NULL if no match)
3. **RIGHT JOIN**: All from right table + matching from left (NULL if no match)
4. **FULL OUTER JOIN**: All records from both tables (use UNION in MySQL)
5. **CROSS JOIN**: Cartesian product (every combination)
6. **SELF JOIN**: Join table with itself
7. **NATURAL JOIN**: Auto-join on same column names (use cautiously)

---

## 📚 Additional Resources

- Always use meaningful table and column names
- Comment complex queries for future reference
- Test queries on sample data before running on production
- Use transactions for data modifications
- Regular backups are essential
- Monitor query performance with EXPLAIN

---

**Happy Querying! 🚀**

*Last Updated: January 2026*
