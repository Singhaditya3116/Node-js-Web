const express = require("express");

const server = express();

const m1 = function(req,res,next){
    console.log("we are in middleware 1")
    next()
}

const m2 = function(req,res,next){
    console.log("we are in middleware 2")
    next()
}

const m3 = function(req,res,next){
    console.log("we are in middleware 3")
}

server.use(m1);
server.use('/a',m2);

server.get('/a',function(req,res,next){
    res.send("kya bolti public");
})
server.use(m3);


server.listen(5555);