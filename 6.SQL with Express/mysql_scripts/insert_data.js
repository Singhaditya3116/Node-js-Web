const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host:"localhost",
        user:"aditya",
        password:"aditya",
        database:"mytestdb"
    }
)

const insert ={
    id:parseInt(process.argv[2]),
    name:process.argv[3],
    age:process.argv[4]
}

connection.query(
    `INSERT INTO person (id,name,age) values
    (${insert.id},"${insert.name}",${insert.age})`,function(errors,results){

        if(errors)
        {
            console.log("Errors :"+errors);
        }
        else
        {
            console.log("Data inserted Successfully");
        }
        connection.close();
    }
)