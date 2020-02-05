const express = require('express');
const todoRouter = express.Router();
const Todo = require('../model/Todo');

//CRUD

//read
todoRouter.get('/',(req,res)=>{
  Todo.find({},(err,response)=>{
    if(err)
    res.status(500).json({message:{
      msgBody : "Unable to get todo list",
      msgError : true
    }});
    else{
      res.status(200).json({response});
    }

  });
});

//create
todoRouter.post('/',(req,res)=>{
  const todo = new Todo(req.body);
  todo.save((err,document)=>{
    if(err)
    res.status(500).json({message:{
      msgBody : "Unable to add todo",
      msgError : true
    }});
    else
    res.status(200).json({message:{
      msgBody: "Successfully Added Todo",
      msgError : false
    }});
  });
});

//update
todoRouter.put('/:id',(req,res)=>{
  Todo.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
    if(err)
    res.status(500).json({message:{
      msgBody : "Unable to Update Todo",
      msgError : true
    }});
    else
    res.status(200).json({message:{
      msgBody: "Successfully Updated Todo",
      msgError : false
    }});
  });
});

// delete
todoRouter.delete('/:id',(req,res)=>{
    Todo.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete Todo",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Todo",
                msgError : false
            }});
    });
});


module.exports = todoRouter;
