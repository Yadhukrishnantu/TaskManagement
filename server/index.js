const express = require('express')

const server=express()

 const cors = require('cors') 

server.use(cors({origin:'http://localhost:3000'}))

 server.use(express.json())

const logic = require('./service/logic.js')

// port

server.listen(8000,()=>{
    console.log("server started at port 8000");
})

server.post('/addTask',(req,res)=>{
    logic.addTask(req.body.id,req.body.title,req.body.category).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 server.get('/getAllTask',(req,res)=>{
    logic.allTask().then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 server.get('/getAnTask/:id',(req,res)=>{
    logic.getAnTask(req.params.id).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 server.post('/editTask',(req,res)=>{
    logic.editTask(req.body.id,req.body.title,req.body.category).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 server.delete('/deleteTask/:id',(req,res)=>{
    logic.removeTask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
