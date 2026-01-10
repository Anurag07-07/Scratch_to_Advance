<!-- mysql -u root -p to run the sql  -->


SHOW DATABASES; //To see the databases
USE <database Name> //to select a particular database
SHOW TABLES; to see the tables
CREATE DATABASE <database name> to create Database   

//To Create Table 
CREATE TABLE <tablename>(
  <columnname1>  [datatype] <keyword>, 
  <columnname2>  [datatype], 
  <columnname3>  [datatype], 
);

DESC <tablename>; //To see the table description 

INSERT INTO tablename (col1,col2,col3) VALUES (<value1>,<value2>,<value3>); 

SELECT * from tablename  to see the coloum in database

//Constraints
CREATE TABLE table2 (Name VARCHAR(15) NOT NULL , DoB DATE DEFAULT "2000-01-01",Gender ENUM("Male","Female","Other"));

//Add The VALUES
INSERT INTO table2 (Name,DoB,Gender) VALUES ("Punit","2002-10-10","Male"),("Someone",DEFAULT,"Female"),("Anurag","2026-07-07","Male"),("Riya",DEFAULT,"Female");

//Show Name From Table 
SELECT Name FROM table2;

Syntax SELECT * FROM <table name> WHERE {conditions...}

//Show Name of Female 
SELECT Name FROM table2 WHERE Gender = "Female"

//Get Data of user whose dob is greater than 2026-07-07
SELECT * FROM table2 WHERE DoB > "2026-07-07";

//Get Data of user whose dob is less than 2026-07-07 and Male
SELECT * FROM table2 WHERE DoB < "2026-07-07" AND GENDER = "Male";

//Get Data of user whose name start with a
SELECT * FROM table2 WHERE Name LIKE "a%";


//Get Data of user whose Gender start with M
SELECT * FROM table2 WHERE Gender LIKE "M%";

//Get Data of user whose Name contains a 
SELECT * FROM table2 WHERE Name LIKE "%a%";

//Get Data of user whose dob is less than 2026-07-07 or they are Female
SELECT * FROM table2 WHERE DoB < "2026-07-07" OR GENDER = "Female";

//Get data of user whose gender is not other 
SELECT * FROM table2 WHERE NOT Gender = "Other";

//SORT the name in Ascending Order
SELECT * FROM table2 ORDER BY Name; 
//SORT the name in Decending Order
SELECT * FROM table2 ORDER BY Name DESC;
//SORT the DoB in Ascending Order
SELECT * FROM table2 ORDER BY DoB; 
//SORT the DoB in Decending Order and only one row i want
SELECT * FROM table2 ORDER BY DoB DESC LIMIT 1; 

//Get data of user where gender is male order in asc order and want only 2 row 
SELECT * FROM table2 WHERE Gender = "Male" ORDER BY DoB DESC LIMIT 2;

------------------------------------------- Class 2 ------------------------------------

DELETE FROM <table name> WHERE {comparison ...} ORDER BY.. LIMIT ...

--Delete data on basis of constraints
DELETE FROM users WHERE Name LIKE "a%";

--Delete Whole Data of Table
DELETE FROM users; 

--Update Data

UPDATE <table name> SET <column 1> = value 1 WHERE {conditions};

--Update the Particular Data
UPDATE Actors SET FirstName = "RJ",NetworthInMillions = 1000 WHERE id = 4;

--Update The Schema
ALTER TABLE <table name> CHANGE <old colname> <new colname> [new contraint (datatype or constraint)]

ALTER TABLE Actors CHANGE NetworthInMillions NetWorth DECIMAL(10,2);

--Add something to Schema
ALTER TABLE Tablename ADD [column name type contraints]
ALTER TABLE Actors ADD Region VARCHAR(10) DEFAULT "Bollywood";

--Add After or Add First used to add column in specific Position
ALTER TABLE Actors ADD MiddleName VARCHAR(10) AFTER FirstName;

--Drop Table Coloum
ALTER TABLE Actors DROP MiddleName;

--Store Data with some specific column name
SELECT DOB AS "Date of Birth" FROM Actors;

--Concat the Column
SELECT CONCAT(FirstName," ",SecondName) AS Name FROM Actors;

--Find Distinct Data
SELECT DISTINCT Score FROM Students2;

--Count all the people with single marital status and write column as single people
SELECT count(*) AS "No of Single People" FROM Students2 WHERE Marital_Status = "Single";

--Sum or Avg MIN or MAX the Score
SELECT SUM(Score) FROM students2 where Marital_Status = "Married";
SELECT AVG(Score) FROM students2 where Marital_Status = "Married";
SELECT MIN(Score) FROM students2 where Marital_Status = "Married";
SELECT MAX(Score) FROM students2 where Marital_Status = "Married";

--Do this in One Query
SELECT Marital_status, COUNT(*) FROM Students2 GROUP BY Marital_Status;

--Use of Group BY
SELECT AssetType,COUNT(*) FROM DigitalAssets GROUP BY AssetType ORDER BY AssetType;

SELECT Name FROM Students GROUP BY Name ORDER BY Name;

----Having Clause along with Group By
SELECT DOB,COUNT(*) FROM Students2 GROUP BY DOB HAVING DOB > "1998-04-26";


SELECT Marital_Status, AVG(Score) AS Average FROM students2 GROUP BY Marital_Status HAVING Marital_Status = "Married"

--------------------------------------Class 3--------------------------------------------------------------------------------------
Joins 
SELECT * FROM <table 1> INNER JOIN <table 2> ON (join condition)
SELECT * FROM <table 1> LEFT JOIN <table 2> ON (join condition)

SELECT * FROM Actors RIGHT JOIN DigitalAssets ON actors.Id = digitalassets.id;
SELECT * FROM Actors LEFT JOIN DigitalAssets ON actors.Id = digitalassets.id;

SELECT * FROM Actors,DigitalAssets WHERE Actors.Id = DigitalAssets.Id

--Every data from left table and matched data from right table
SELECT FirstName,DOB,URL FROM Actors LEFT JOIN Digitalassets USING(Id); 
--Every data from Right table and matched data from Left table
SELECT FirstName,DOB,URL FROM Actors RIGHT JOIN Digitalassets USING(Id); 
SELECT FirstName,DOB,URL FROM Actors INNER JOIN Digitalassets;
--Key that match only joins  
SELECT FirstName,DOB,URL FROM Actors NATURAL JOIN Digitalassets; 

-- USING(Id) only when both tables have same connecting column name 
-- Cartesian Product i.e every row from table a matched with every other row from table b - Count is No. of rows of A * No. of rows of B 
-- Union use
--Natural JOIN 
--Self Join
