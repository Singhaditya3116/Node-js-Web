const router = require("express").Router();

let student =[
    {name:"shubhankar" , age:20},
    {name:"rohit",age:22},
    {name:"rahul",age:23},
    {name:"vishal",age:22}
]

router.get('/',(req,res)=> res.send(student));

router.get('/add',(req,res)=>{
    student.push(
        {name :req.query.name , age:req.query.age}
    )
    res.send(student)
})

router.get("/:id",(req,res)=> {
    res.send(student[req.params.id])
}
);

module.exports = router;