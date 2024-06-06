/*
create todo have some coloums
Todo{
    title:String,
    description:string
    completed:boolean
}
*/

const mongoose=require("mongoose");
//mongodb+srv://rahulhanje07:Rahul9901%40@cluster0.yklvimw.mongodb.net/todo_app
mongoose.connect("mongodb+srv://rahulhanje07:Rahul9901%40@cluster0.yklvimw.mongodb.net/todo");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}