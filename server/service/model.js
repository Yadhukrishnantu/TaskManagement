const mongoose = require('mongoose')

 mongoose.connect('mongodb://0.0.0.0:27017/task')


// model

 const Task = mongoose.model('Task',{
    
        id : String ,
        title : String ,
        category : String
         
      
 })

module.exports={
   Task 
}