const mongoose=require('mongoose');
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("successful");
    }).catch((error)=>{
        console.log("issue in db");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports=dbconnect;
