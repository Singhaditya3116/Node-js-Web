const express =require("express");

const app = express();

let todos=["first task",
"second task"];

app.get('/',(req,res)=>{

    let todosItem="";
    for(let i=0;i<todos.length;i++)
    {
        todosItem+="<li>" + todos[i] +"</li>";
    }

    let html=`
    <html>
        <body>
            <form action="add">
                <input name="taskname">
                <button type="submit" >Add</button>
            </form>

            <ul>
                ${todosItem}
            </ul>
        </body>
    </html>
    `

    res.send(html);
})

app.get('/add',(req,res)=>{
    console.log(req.query);
    todos.push(req.query.taskname);
    res.redirect('/');
})


app.listen(4444);