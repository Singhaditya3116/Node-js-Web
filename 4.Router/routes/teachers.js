const router = require("express").Router();

let teachers = [
    {name:"aditya",subject:"Coding"},
    {name:"abhinav",subject:"Dev"}
]

router.get('/:id',(req,res)=> res.send(teachers[req.params.id]));
router.get('/',(req,res)=> res.send(teachers));



module.exports = router;