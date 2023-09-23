const Todo =require('../models/Todo');

// define router

exports.createTodo=async(req,res)=>{
    try{
        // extract title and description from body
        const {title,description}=req.body;
        // create a new todo obj and insert in db
        const response=await Todo.create({title,description});
        // send a json fresponse with a flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )

    }
}