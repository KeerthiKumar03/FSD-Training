--Table: users
--Columns: user_id, full_name, email, city, registration_date

create table users(user_id INT AUTO_INCREMENT PRIMARY KEY ,
 full_name VARCHAR(100) NOT NULL ,email VARCHAR(100) 
 UNIQUE NOT NULL,city VARCHAR(100) NOT NULL ,
 registration_date DATE NOT NULL);


--Inserting sample data into users table

insert into users values(1,"Keerthi","keerthi@gmail.com","Hyderabad","2023-08-03");
insert into users values(2,"Kavya","kavya123@gmail.com","Nizamabad","2024-07-03");
insert into users values(3,"Swathi","swathi3@gmail.com","Zahirabad","2026-07-08");
insert into users values(4,"Swetha","swe523@gmail.com","Warangal","2025-02-24");
insert into users values(5,"Rani","bkumarrani@gmail.com","Kurnool","2024-11-30");
INSERT INTO users(full_name,email,city,registration_date) VALUES
('Aarav Sharma','aarav@gmail.com','Hyderabad','2026-05-25'),
('Ananya Reddy','ananya@gmail.com','Hyderabad','2026-05-20'),
('Arjun Verma','arjun@gmail.com','Chennai','2026-04-15'),
('Bhavana Rao','bhavana@gmail.com','Bangalore','2026-03-10'),
('Akhil Kumar','akhil@gmail.com','Hyderabad','2026-05-28'),
('Sneha Patel','sneha@gmail.com','Mumbai','2026-01-18'),
('Ajay Singh','ajay@gmail.com','Delhi','2026-05-24'),
('Priya Nair','priya@gmail.com','Chennai','2026-02-08'),
('Aditi Joshi','aditi@gmail.com','Hyderabad','2026-05-26'),
('Rahul Mehta','rahul@gmail.com','Hyderabad','2026-05-27'),
('Kiran Das','kiran@gmail.com','Hyderabad','2026-05-21'),
('Meera Iyer','meera@gmail.com','Bangalore','2026-04-06'),
('Arpita Sen','arpita@gmail.com','Kolkata','2026-05-17'),
('Vikram Jain','vikram@gmail.com','Delhi','2026-03-22'),
('Aman Gupta','aman@gmail.com','Hyderabad','2026-05-29');

--Queries on users table
-- 1. Find users registered in the last 30 days
SELECT *
FROM users
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);


-- 2. Display users sorted by registration date

-- Ascending Order
SELECT *
FROM users
ORDER BY registration_date;

-- Descending Order
SELECT *
FROM users
ORDER BY registration_date DESC;


-- 3. Count number of users in each city

SELECT city,
       COUNT(*) AS No_Of_Users
FROM users
GROUP BY city;


-- 4. Find cities having more than 5 users

SELECT city,
       COUNT(*) AS No_Of_Users
FROM users
GROUP BY city
HAVING COUNT(*) > 5;

-- 5. Display users whose name starts with 'A'

SELECT full_name
FROM users
WHERE full_name LIKE 'A%';



-- 6. Find duplicate cities in the Users table

SELECT city,
       COUNT(*) AS Total_Users
FROM users
GROUP BY city
HAVING COUNT(*) > 1;



-- 7. Display users registered on weekends

SELECT *
FROM users
WHERE DAYNAME(registration_date) IN ('Saturday', 'Sunday');



-- 8. Find the oldest registered user

SELECT *
FROM users
ORDER BY registration_date
LIMIT 1;


-- 9. Display number of users registered each month

SELECT MONTH(registration_date) AS Month_Number,
       COUNT(*) AS Total_Users
FROM users
GROUP BY MONTH(registration_date)
ORDER BY Month_Number;