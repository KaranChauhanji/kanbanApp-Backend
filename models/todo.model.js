const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    task:{type:String, require:true},
    description:{type:String},
    dueDate:{type:Date, default:Date.now()},
    status:{type:String, enum:["to-do","in progress","completed"], default:"to-do"},
    userId:{type:String},
    username:{type:String}
});


const TodoModel = mongoose.model('todo',todoSchema);

module.exports = TodoModel;