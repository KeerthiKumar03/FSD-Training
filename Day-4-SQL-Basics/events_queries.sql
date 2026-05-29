--Table: events
--Columns: event_id, title, description, city, start_date, end_date, status, organizer_id

CREATE TABLE events(
event_id INT PRIMARY KEY,
title VARCHAR(200) NOT NULL,description TEXT,
city VARCHAR(100) NOT NULL,start_date DATETIME NOT NULL,
end_date DATETIME NOT NULL,
status ENUM('upcoming','completed','cancelled'),
organizer_id INT,CONSTRAINT fk_event_organizer
FOREIGN KEY (organizer_id)
REFERENCES users(user_id));

--insert into events values

INSERT INTO events
(event_id,title,description,city,start_date,end_date,status,organizer_id)VALUES
(101,'Tech Conference','AI and Cloud Event','Hyderabad',
'2026-06-10 09:00:00','2026-06-12 18:00:00','upcoming',1),

(102,'Music Fest','Live Music Concert','Chennai',
'2026-04-15 10:00:00','2026-04-15 22:00:00','completed',3),

(103,'Startup Meetup','Networking for founders','Bangalore',
'2026-05-20 09:00:00','2026-05-23 17:00:00','completed',4),

(104,'Hackathon','24-hour coding challenge','Hyderabad',
'2026-07-01 08:00:00','2026-07-03 20:00:00','upcoming',2),

(105,'Food Carnival','Food festival and stalls','Mumbai',
'2026-03-05 11:00:00','2026-03-06 21:00:00','cancelled',6),

(106,'Business Summit','Entrepreneurship conference','Hyderabad',
'2026-02-01 09:00:00','2026-02-04 18:00:00','completed',5),

(107,'Gaming Expo','Esports and gaming event','Delhi',
'2026-08-11 10:00:00','2026-08-13 19:00:00','upcoming',7),

(108,'Cultural Fest','College cultural activities','Hyderabad',
'2026-05-01 09:00:00','2026-05-02 20:00:00','completed',1);

--Queries on events table
-- 1. Display all events with organizer names

SELECT e.event_id,
       e.title,
       e.city,
       e.start_date,
       e.end_date,
       e.status,
       u.full_name AS organizer_name
FROM events e
JOIN users u
ON e.organizer_id = u.user_id;

-- 2. Find upcoming events

SELECT *
FROM events
WHERE status = 'upcoming';

-- 3. Count number of events in each city

SELECT city,
       COUNT(*) AS No_Of_Events
FROM events
GROUP BY city;


-- 4. Find events lasting more than 2 days

SELECT event_id,
       title,
       DATEDIFF(end_date, start_date) AS Duration_Days
FROM events
WHERE DATEDIFF(end_date, start_date) > 2;



-- 5. Display completed events organized by users from Hyderabad

SELECT e.event_id,
       e.title,
       e.city,
       e.status,
       u.full_name AS organizer_name
FROM events e
JOIN users u
ON e.organizer_id = u.user_id
WHERE e.status = 'completed'
AND u.city = 'Hyderabad';