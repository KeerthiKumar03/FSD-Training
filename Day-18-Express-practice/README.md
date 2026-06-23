# Express CRUD API with JSON File Storage

A simple RESTful CRUD API built using **Node.js**, **Express.js**, and **File System (users.json)**. This project demonstrates the implementation of Create, Read, Update, and Delete operations without using a database.


##  Features

* Get all users
* Get a user by ID
* Create a new user
* Replace a user (PUT)
* Partially update a user (PATCH)
* Delete a user
* Custom 404 handler
* JSON file-based storage


##  Project Structure

project/
│
├── server.cjs
├── users.json
├── package.json
└── README.md


##  Technologies Used

* Node.js
* Express.js
* JavaScript
* File System (fs module)

---

Create a file

### Navigate to the project directory

cd project-name

### Install dependencies

npm install


## ▶ Running the Server

node server.cjs

Server starts on:


http://localhost:2000


## API Endpoints

### Home Route

| Method | Endpoint |
| ------ | -------- |
| GET    | `/`      |

### Get All Users

| Method | Endpoint |
| ------ | -------- |
| GET    | `/users` |

### Get User By ID

| Method | Endpoint     |
| ------ | ------------ |
| GET    | `/users/:id` |

Example:
GET /users/1

### Create a User

| Method | Endpoint |
| ------ | -------- |
| POST   | `/users` |

Request Body:

json
{
    "name": "Keerthi",
    "course": "CSE",
    "age": 21
}


### Replace a User

| Method | Endpoint     |
| ------ | ------------ |
| PUT    | `/users/:id` |

Request Body:

json
{
    "name": "Rahul",
    "course": "ECE",
    "age": 23
}


### Partial Update

| Method | Endpoint     |
| ------ | ------------ |
| PATCH  | `/users/:id` |

Request Body:

json
{
    "course": "Data Science"
}

### Delete a User

| Method | Endpoint     |
| ------ | ------------ |
| DELETE | `/users/:id` |


## Sample users.json

json
[
  {
    "id": 1,
    "name": "Keerthi",
    "course": "CSE",
    "age": 21
  }
]


## Example Response

json
{
  "id": 1,
  "name": "Keerthi",
  "course": "CSE",
  "age": 21
}


## Future Improvements

* MongoDB Integration
* MySQL Integration
* Validation using Joi
* Error Handling Middleware
* Authentication using JWT
* MVC Architecture
* Deployment on Render or Railway

---

## Author

**Keerthi Kumar**

Built for learning REST APIs using Express.js.
