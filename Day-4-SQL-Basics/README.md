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

# Sample Tables
Users
+---------+--------------+----------------------+-----------+-------------------+
| user_id | full_name    | email                | city      | registration_date |
+---------+--------------+----------------------+-----------+-------------------+
|       1 | Keerthi      | keerthi@gmail.com    | Hyderabad | 2023-08-03        |
|       2 | Kavya        | kavya123@gmail.com   | Nizamabad | 2024-07-03        |
|       3 | Swathi       | swathi3@gmail.com    | Zahirabad | 2026-07-08        |
|       4 | Swetha       | swe523@gmail.com     | Warangal  | 2025-02-24        |
|       5 | Rani         | bkumarrani@gmail.com | Kurnool   | 2024-11-30        |
|       6 | Aarav Sharma | aarav@gmail.com      | Hyderabad | 2026-05-25        |
|       7 | Ananya Reddy | ananya@gmail.com     | Hyderabad | 2026-05-20        |
|       8 | Arjun Verma  | arjun@gmail.com      | Chennai   | 2026-04-15        |
|       9 | Bhavana Rao  | bhavana@gmail.com    | Bangalore | 2026-03-10        |
|      10 | Akhil Kumar  | akhil@gmail.com      | Hyderabad | 2026-05-28        |
|      11 | Sneha Patel  | sneha@gmail.com      | Mumbai    | 2026-01-18        |
|      12 | Ajay Singh   | ajay@gmail.com       | Delhi     | 2026-05-24        |
|      13 | Priya Nair   | priya@gmail.com      | Chennai   | 2026-02-08        |
|      14 | Aditi Joshi  | aditi@gmail.com      | Hyderabad | 2026-05-26        |
|      15 | Rahul Mehta  | rahul@gmail.com      | Hyderabad | 2026-05-27        |
|      16 | Kiran Das    | kiran@gmail.com      | Hyderabad | 2026-05-21        |
|      17 | Meera Iyer   | meera@gmail.com      | Bangalore | 2026-04-06        |
|      18 | Arpita Sen   | arpita@gmail.com     | Kolkata   | 2026-05-17        |
|      19 | Vikram Jain  | vikram@gmail.com     | Delhi     | 2026-03-22        |
|      20 | Aman Gupta   | aman@gmail.com       | Hyderabad | 2026-05-29        |
+---------+--------------+----------------------+-----------+-------------------+

Events 
+----------+-----------------+-----------------------------+-----------+---------------------+---------------------+-----------+--------------+
| event_id | title           | description                 | city      | start_date          | end_date            | status    | organizer_id |
+----------+-----------------+-----------------------------+-----------+---------------------+---------------------+-----------+--------------+
|      101 | Tech Conference | AI and Cloud Event          | Hyderabad | 2026-06-10 09:00:00 | 2026-06-12 18:00:00 | upcoming  |            1 |
|      102 | Music Fest      | Live Music Concert          | Chennai   | 2026-04-15 10:00:00 | 2026-04-15 22:00:00 | completed |            3 |
|      103 | Startup Meetup  | Networking for founders     | Bangalore | 2026-05-20 09:00:00 | 2026-05-23 17:00:00 | completed |            4 |
|      104 | Hackathon       | 24-hour coding challenge    | Hyderabad | 2026-07-01 08:00:00 | 2026-07-03 20:00:00 | upcoming  |            2 |
|      105 | Food Carnival   | Food festival and stalls    | Mumbai    | 2026-03-05 11:00:00 | 2026-03-06 21:00:00 | cancelled |            6 |
|      106 | Business Summit | Entrepreneurship conference | Hyderabad | 2026-02-01 09:00:00 | 2026-02-04 18:00:00 | completed |            5 |
|      107 | Gaming Expo     | Esports and gaming event    | Delhi     | 2026-08-11 10:00:00 | 2026-08-13 19:00:00 | upcoming  |            7 |
|      108 | Cultural Fest   | College cultural activities | Hyderabad | 2026-05-01 09:00:00 | 2026-05-02 20:00:00 | completed |            1 |
+----------+-----------------+-----------------------------+-----------+---------------------+---------------------+-----------+--------------+


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
