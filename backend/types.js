const zod=require("zod");

/*
 {
    title:string
    desciptin:string
 }

 {
    id:string
 }
*/
const createTodo=zod.object({
    title:zod.string().min(4),
    description:zod.string().min(4)

}) 
const updateTodo=zod.object({
    id:zod.string()
});

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}

