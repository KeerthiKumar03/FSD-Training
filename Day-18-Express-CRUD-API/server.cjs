const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const FILE_PATH = './users.json';

// Read users
function readUsers() {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
}

// Write users
function writeUsers(users) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
}

// HOME
app.get('/', (req, res) => {
    res.send('Express CRUD API Running');
});

//
// GET ALL USERS
//
app.get('/users', (req, res) => {
    const users = readUsers();
    res.status(200).json(users);
});

//
// GET USER BY ID
//
app.get('/users/:id', (req, res) => {
    const users = readUsers();

    const user = users.find(
        u => u.id === parseInt(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);
});

//
// POST - CREATE USER
//
app.post('/users', (req, res) => {

    const users = readUsers();

    const { name, course, age } = req.body;

    if (!name || !course || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newUser = {
        id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
        name,
        course,
        age
    };

    users.push(newUser);

    writeUsers(users);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});

//
// PUT - UPDATE ENTIRE USER
//
app.put('/users/:id', (req, res) => {

    const users = readUsers();

    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, course, age } = req.body;

    users[index] = {
        id,
        name,
        course,
        age
    };

    writeUsers(users);

    res.status(200).json({
        message: "User updated successfully",
        user: users[index]
    });
});

//
// PATCH - PARTIAL UPDATE
//
app.patch('/users/:id', (req, res) => {

    const users = readUsers();

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, course, age } = req.body;

    if (name) user.name = name;
    if (course) user.course = course;
    if (age) user.age = age;

    writeUsers(users);

    res.status(200).json({
        message: "User partially updated",
        user
    });
});

//
// DELETE USER
//
app.delete('/users/:id', (req, res) => {

    const users = readUsers();

    const id = parseInt(req.params.id);

    const filteredUsers = users.filter(
        user => user.id !== id
    );

    if (filteredUsers.length === users.length) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    writeUsers(filteredUsers);

    res.status(200).json({
        message: "User deleted successfully"
    });
});

//
// 404 HANDLER (KEEP LAST)
//
app.use((req, res) => {
    res.status(404).json({
        message: "404 - Page Not Found"
    });
});

//
// START SERVER
//
app.listen(2000, () => {
    console.log("Server running on port 2000");
});