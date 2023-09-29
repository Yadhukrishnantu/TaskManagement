const db = require('./model')
const addTask = (id, title, category) => {
    return db.Task.findOne({id}).then(result => {
         if (result) {
             return {
                 statusCode: 404,
                 message: "Task already Exist"
 
             }
         }
         else {
             // create object of employee model for new employee
             const newTask = new db.Task({
                 id,
                 title,
                 category
                 
             })
 
             newTask.save()
 
             return {
                 statusCode: 200,
                 message: "Task added successfully"
             }
         }
 
     })
 }


 const allTask = () => {
    return db.Task.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                tasks: result
            }
        } else {
            return {
                statusCode: 404,
                message: "No Data is available"
            }
        }
    })
}


const getAnTask=(id)=>{
    return   db.Task.findOne({id}).then(result=>{
           if(result){
               return{
                   statusCode:200,
                   tasks:result
               }
           }
           else{
               return{
                   statusCode:404,
                   message:"Task not Present"
               }
           }
       })
   }

   
   const editTask = (id,title,category)=>{
    return db.Task.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.title=title
            result.category=category
            

            result.save()
            return{
                statusCode:200,
                message: "Task data Updated"
            }
        }else{
            return{
                statusCode:404,
                message:"Task not Present"
            }
        }
    })
}
const removeTask = (eid)=>{
    return  db.Task.deleteOne({id:eid}).then(result=>{
           if(result) {
               return{
                   statusCode:200 ,
                   message:"Task Deleted"
               }
           }
           else{
               return{
                 statusCode:404,
               message:"Task not present"
   
               }
               
           }
       })
   }
 module.exports={
    addTask , allTask , getAnTask , editTask , removeTask
 }