const express = require("express");
const server = express();

const teachers = require('./routes/teachers.js');
const student = require("./routes/student.js");


server.use("/teachers",teachers);

server.use("/student",student);


server.listen(4444);