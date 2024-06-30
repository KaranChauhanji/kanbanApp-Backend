const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    role:{type:String, require:true, enum:["admin","user"], default:"user"},
});


const UserModel = mongoose.model('user',userSchema);

module.exports = UserModel;