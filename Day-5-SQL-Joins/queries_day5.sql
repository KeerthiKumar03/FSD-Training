--1. User Upcoming Events (same city, sorted)
SELECT 
    u.user_id,
    u.full_name,
    e.event_id,
    e.title,
    e.city,
    e.start_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming'
ORDER BY e.start_date;

--2. Top Rated Events (≥10 feedbacks)
SELECT 
    e.event_id,
    e.title,
    AVG(f.rating) AS avg_rating,
    COUNT(*) AS total_feedbacks
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(*) >= 10
ORDER BY avg_rating DESC;

--3. Inactive Users (last 90 days)
SELECT *
FROM Users u
WHERE u.user_id NOT IN (
    SELECT DISTINCT user_id
    FROM Registrations
    WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)
);

--4. Peak Session Hours (10 AM–12 PM)
SELECT event_id, COUNT(*) AS peak_sessions
FROM Sessions
WHERE TIME(start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY event_id;

--5. Most Active Cities (Top 5)
SELECT 
    u.city,
    COUNT(*) AS total_registrations
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY total_registrations DESC
LIMIT 5;

--6. Event Resource Summary
SELECT 
    e.event_id,
    e.title,
    COUNT(r.resource_id) AS total_resources
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title;

 --7. Low Feedback Alerts (<3 rating)
SELECT 
    u.full_name,
    e.title,
    f.rating,
    f.comments
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;

--8. Sessions per Upcoming Event
SELECT 
    e.event_id,
    e.title,
    COUNT(s.session_id) AS total_sessions
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;

-- 9. Organizer Event Summary
SELECT 
    organizer_id,
    status,
    COUNT(*) AS total_events
FROM Events
GROUP BY organizer_id, status;

--10. Feedback Gap (registered but no feedback)
SELECT DISTINCT r.event_id
FROM Registrations r
LEFT JOIN Feedback f 
ON r.user_id = f.user_id AND r.event_id = f.event_id
WHERE f.feedback_id IS NULL;

-- 11. Daily New User Count
SELECT 
    registration_date,
    COUNT(*) AS total_users
FROM Users
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY registration_date;

-- 12. Event with Maximum Sessions
SELECT event_id, COUNT(*) AS session_count
FROM Sessions
GROUP BY event_id
ORDER BY session_count DESC
LIMIT 1;

-- 13. Average Rating per City
SELECT 
    e.city,
    AVG(f.rating) AS avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.city;

-- 14. Most Registered Events (Top 3)
SELECT 
    e.event_id,
    e.title,
    COUNT(r.user_id) AS total_registrations
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY total_registrations DESC
LIMIT 3;

-- 15. Session Time Conflicts
SELECT 
    s1.event_id,
    s1.title AS session1,
    s2.title AS session2
FROM Sessions s1
JOIN Sessions s2 
ON s1.event_id = s2.event_id
AND s1.session_id < s2.session_id
WHERE s1.start_time < s2.end_time
AND s2.start_time < s1.end_time;

-- 16. Unregistered Active Users
SELECT *
FROM Users u
WHERE u.registration_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
AND u.user_id NOT IN (
    SELECT user_id FROM Registrations
);

-- 17. Multi-Session Speakers
SELECT 
    speaker_name,
    COUNT(*) AS session_count
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;

-- 18. Events Without Resources
SELECT e.*
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;

-- 19. Completed Events Feedback Summary
SELECT 
    e.event_id,
    e.title,
    COUNT(r.registration_id) AS total_registrations,
    AVG(f.rating) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;

-- 20. User Engagement Index
SELECT 
    u.user_id,
    u.full_name,
    COUNT(DISTINCT r.event_id) AS events_attended,
    COUNT(f.feedback_id) AS feedback_count
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name;

-- 21. Top Feedback Providers
SELECT 
    user_id,
    COUNT(*) AS total_feedbacks
FROM Feedback
GROUP BY user_id
ORDER BY total_feedbacks DESC
LIMIT 5;

-- 22. Duplicate Registrations
SELECT 
    user_id,
    event_id,
    COUNT(*) AS count
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;

-- 23. Registration Trends (Monthly)
SELECT 
    DATE_FORMAT(registration_date, '%Y-%m') AS month,
    COUNT(*) AS total_registrations
FROM Registrations
GROUP BY month
ORDER BY month;

-- 24. Average Session Duration
SELECT 
    event_id,
    AVG(TIMESTAMPDIFF(MINUTE, start_time, end_time)) AS avg_duration
FROM Sessions
GROUP BY event_id;

-- 25. Events Without Sessions
SELECT e.*
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;