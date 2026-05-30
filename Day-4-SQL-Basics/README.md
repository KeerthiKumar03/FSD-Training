# Event Management System using MySQL
Overview

This project demonstrates basic and intermediate SQL operations using MySQL.
It includes database creation, table creation, inserting records, and performing different SQL queries on users and events tables.


# Database Used
CREATE DATABASE fsd;
USE fsd;

# Tables Created
1. Users Table-Stores user registration details.

# Columns
user_id → Primary Key
full_name → User Full Name
email → Unique Email Address
city → User City
registration_date → Date of Registration

2. Events Table-Stores event information.

# Columns
event_id → Primary Key
title → Event Title
description → Event Description
city → Event City
start_date → Event Start Date & Time
end_date → Event End Date & Time
status → Event Status (upcoming, completed, cancelled)
organizer_id → Foreign Key referencing users(user_id)


# SQL Concepts Practiced

# User Queries
Find users registered in the last 30 days
Display users sorted by registration date
Count number of users in each city
Find cities having more than 5 users
Display users whose name starts with 'A'
Find duplicate cities in the Users table
Display users registered on weekends
Find the oldest registered user
Display number of users registered each month

# Event Queries
Display all events with organizer names
Find upcoming events
Count number of events in each city
Find events lasting more than 2 days
Display completed events organized by users from Hyderabad

# SQL Features Used
CREATE DATABASE
CREATE TABLE
PRIMARY KEY
FOREIGN KEY
AUTO_INCREMENT
INSERT INTO
SELECT
WHERE
ORDER BY
GROUP BY
HAVING
JOIN
COUNT()
DATEDIFF()
DATE_SUB()
DAYNAME()
LIKE
ENUM

# By completing this project, the following SQL concepts were practiced:

Database and table creation
Data insertion
Filtering records
Sorting data
Aggregate functions
Grouping data
Using joins
Working with dates
Foreign key relationships
Writing optimized SQL queries
