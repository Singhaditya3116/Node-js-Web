const express = require("express"); // import

const app =express();
let pageviews=0;
app.get("/",(req,res) =>{
    pageviews++;
    console.log(req.host,req.url,req.protocol);
    //res.send("nothing found");
    //res.send("<h1>Hello Aditya</h1>"); // simple html to print
    res.sendFile(__dirname +"/files/helloworld.html");
})


app.get('/views',(req,res)=>{
    res.send("Numbr of Views = " + pageviews);
})

app.listen(3333); //0 to 1024 is fro syystem maximum-65336. //to start the server
