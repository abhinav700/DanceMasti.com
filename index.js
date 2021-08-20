const express = require("express");
const path = require("path");
const fs = require("fs");
const http=require("http");
const app = express();
const port = 80;

const home=fs.readFileSync("index.html");
const aboutus=fs.readFileSync("aboutus.html");
const contact=fs.readFileSync("contact.html");
const server=http.createServer((req,res)=>{
      console.log(req.url);
      url=req.url;
      res.statusCode=200;

})
 
app.get('/home', (req, res)=>{
     res.status(200).send("index.html")
})

