const http = require('node:http')
const fs = require('fs');
const express = require('express');
const app = express()
app.use(express.json())
//get all users
app.get("/",(req,res)=>{
  fs.readFile("/users.json",'utf-8',(err,data)=>{
    if(err){
      return res.status(500).json({message:"Error reading users file"});
    }
    const users = JSON.parse(data);
  })
});
//get users by id
app.get("/users",(req,res)=>{
 fs
})




app.post("/users",(req,res)=>{
  const {name} = req.body;
  const {course} = req.body;
  const {age} = req.body;
  const newItem = {id:users.length+1,name,course,age};
  users.push(newItem);
  res.status(201).json(newItem);
});


app.all('/*splat',(req,res)=>{
  res.status(404).send("404-Page Not found");
});
app.listen(2000,()=>{
  console.log("Server is up and listening to requests using port 2000")
});