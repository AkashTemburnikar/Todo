const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todo = require('./routes/todo');
//routes
app.use(cors());
app.use(bodyParser.json());
app.use('/todo',todo);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}

const uri = process.env.todos || 'mongodb://localhost:27017/todos';
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },(err)=>{
    if(err){
      process.exit(1);
      console.log('unable to connect to database');
    }
    else
    console.log('successfully connected to the database');
  });

  const port = process.env.PORT || 5000;
  app.listen(port,()=>{
    console.log('app is running');
  });
