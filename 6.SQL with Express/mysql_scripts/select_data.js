const sql = require("mysql2");

const connection = sql.createConnection({
    host:"localhost",
    user:"aditya",
    password:"aditya",
    database:"mytestdb"
})

connection.query(
    `Select * from person`,function(errors,result){
        if(errors)
        {
            console.log("Errors");
            console.log(errors);
        }
        else
        {
            console.log(result);
        }
        connection.close();
    }
)