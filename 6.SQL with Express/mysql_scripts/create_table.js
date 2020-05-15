const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"aditya",
    password:"aditya",
    database:"mytestdb"
})

connection.query(
    `CREATE TABLE IF NOT EXISTS person (
        id INT PRIMARY KEY NOT NULL,
        name varchar(20),
        age INT
    )`,function(error,results){
        if(error)
        {
            console.log("error " + error);
        }
        else
        {
            console.log("Table created successfully");
        }
        connection.close();
    }
)
