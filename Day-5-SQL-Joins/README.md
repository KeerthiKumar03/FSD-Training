# Event Management System – SQL Practice (Day 5)
# Project Overview

This project is a MySQL-based Event Management System created for SQL practice.
It demonstrates real-world database design and querying using multiple relational tables.

# Technologies Used
MySQL
SQL (ANSI Standard)

# Database Schema
The project contains the following tables:
1. Users
Stores user information.
2. Events
Stores event details and organizer information.
3. Sessions
Stores sessions under each event.
4. Registrations
Maps users to events they registered for.
5. Feedback
Stores user feedback and ratings for events.
6. Resources
Stores event-related resources (PDF, images, links).

# Relationships
Users → Events (organizer_id)
Users → Registrations → Events
Events → Sessions
Events → Feedback
Events → Resources

# SQL Concepts Covered
This project includes practice on:
SELECT queries
JOIN operations
GROUP BY & HAVING
Aggregate functions (COUNT, AVG)
Subqueries
Date functions
Filtering & sorting
Foreign key constraints
# Project Files
📦 Event-Management-SQL
 ┣ 📄 create_tables.sql
 ┣ 📄 insert_users.sql
 ┣ 📄 insert_events.sql
 ┣ 📄 insert_sessions.sql
 ┣ 📄 insert_registrations.sql
 ┣ 📄 insert_feedback.sql
 ┣ 📄 insert_resources.sql
 ┣ 📄 queries_day5.sql
 ┗ 📄 README.md

# Learning Outcomes
Designed a relational database schema
Understood foreign key dependencies
Practiced real-world SQL query scenarios
Improved problem-solving using SQL logic


# Author

BTech CSE Student
Full Stack Development & DSA Practice