const http = require('node:http')
const express = require('express');
const { default: bodyParser } = require('body-parser');
const app = express()
const body = require("body-parser")
app.use(bodyParser.json())
app.get("/",(req,res)=>{
  return res.send("helloo..Welcome");
});
app.post("/",(req,res)=>{
  return res.send("Post from the client");
});

app.get("/about",(req,res)=>{
  res.send("Hayee Hayee");
});


app.all('/*splat',(req,res)=>{
  res.status(404).send("404-Page Not found");
});
app.listen(2000,()=>{
  console.log("Server is up and listening to requests using port 2000")
});