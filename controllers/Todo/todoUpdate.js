const TodoModel = require("../../models/todo.model");



const update = async(req,res)=>{
    const {id} =  req.params;
    const data = req.body;

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id,data,{new:true});
        
        if(!updatedTodo){
            return res.status(404).send({message:"Unable to find ID."});
        };

        res.status(200).send({message:`Updated Successfully`, todo:updatedTodo});
    } catch (error) {
        res.status(404).send({message:`Error in Updating ${error.message}`});
    }

}


module.exports = update 
