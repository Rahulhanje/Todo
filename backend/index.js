const { todo }=require("./db");
const { createTodo,updateTodo }=require("./types");
const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());

//body{
   //title:string;
   //description:string 
   //completed
//}

app.post("/todo",async(req,res)=>{
      const createPayload=req.body;
      const parsePayload=createTodo.safeParse(createPayload);
      if(!parsePayload.success)
        {
            res.status(400).json({
                msg:"You sent the wrong inputs",
            })
            return ;
        }
        //put data in DB
        // console.log(createPayload);
        // console.log(parsePayload);
        // console.log(createPayload.data.title);
        // console.log(createPayload.data.descriptiofn);
       const newtodo= await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed: false
        });
        res.json({
          msg:"Todo Created successfully"
        })
});


app.get("/todo",async(req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
});


app.post("/completed",async(req,res)=>{
    const updatepayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);
    if(!parsePayload.success)
      {
          res.status(411).json({
              msg:"You sent the wrong Id",
          })
          return ;
      }
      await todo.update({
        _id:req.body.id
      },{
        completed:true
      })
      res.json({
        msg:"todo marked as Completed"
      })
});

app.listen(3000);