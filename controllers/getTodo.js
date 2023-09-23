const Todo=require("../models/Todo");
exports.getTodo=async(req,res)=>{
    try{
        // fetch all todo item from database
        const todos=await Todo.find({});
        // response update
        res.status(200).json({
            success:true,
            dta:todos,
            message:"fetched the data",
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
        })

    }
}

exports.getTodoByID=async(req,res)=>{
    try{
        // extract todo on basis of id
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found"
            })

        }
        res.status(200).json({
            success: true ,
            dta :todo,
            message:`todo ${id} found`
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
        })

    }
}