const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"aditya",
    password:"aditya",
    database:"mytestdb"
})

function getAllPersons(){
    return new Promise(function(resolve,reject){
        connection.query(`Select * from person`,function(error,result){
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(result);
            }
        })
    })
}

function addNewPerson(id,name,age){
    return new Promise((resolve,reject)=>{
        connection.query(`INSERT into person(id,name,age)
         values (${id},"${name}",${age})`,(error,result)=>{
             if(result)
             {
                resolve("Inserted Successfully")
             }
             else
             {
                 reject("Insertion is not done")
             }
         })
    })
}


module.exports = {getAllPersons,addNewPerson};


