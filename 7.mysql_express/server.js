const express = require("express");
const db = require("./db");

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.set("view engine","hbs");

server.get("/",(req,res)=>{

    db.getAllPersons()
        .then((result)=>{
            console.log();
            res.render("person",{result})
        })
        .catch((reject)=>{
            res.send("<h1>Some error</h1>")
        })
})

server.get("/add",(req,res)=>{
    res.render("person_add")
})

server.post("/add",(req,res)=>{
    //console.log(req.body.name);
    db.addNewPerson(req.body.id,req.body.name,req.body.age)
        .then((message)=>{
            console.log(message);
        })
        .catch((message)=>{
            console.log(message);
        })
    res.redirect("./")
})

server.listen(4444,()=>{
    console.log("server started ");
})