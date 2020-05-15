const fs= require("fs");

fs.writeFileSync("helloworld.txt","hiii Aditya")

let data =fs.readFileSync("helloworld.txt");
console.log(data.toString());