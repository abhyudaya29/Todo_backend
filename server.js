const express=require('express');

const app=express();


// PORT=5000;

// app.listen(PORT,()=>{
//     console.log("App is running successfully");
// })
// load config from env file
const todoRoutes=require('./routes/todo');
require("dotenv").config();

const PORT=process.env.PORT||4000;
// middleware to parse json request body
app.use(express.json()); // it is use to parse the data in the body


app.use('/api/v1',todoRoutes)
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
// connect with db
const dbconnect=require("./config/database");
dbconnect();

// default route
app.get('/',(req,res)=>{
    res.send(`<h1> this is home page baby</h1>`)
})