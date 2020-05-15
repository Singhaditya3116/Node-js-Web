const express = require("express");

const server = express();

server.get('/',function(req,res,next){
    res.send("hello");
})

server.get('/greet',function(req,r,next){
    let greeting = "hello" + req.query.name;
    r.send(greeting);
})


server.listen(4444);