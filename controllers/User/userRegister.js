const bcrypt = require('bcrypt');
const UserModel = require('../../models/user.model');


const register = async(req,res)=>{
    const {username,email,password,role} = req.body

    try {
        bcrypt.hash(password,2,async(err,hash)=>{
            if(err){
                res.status(404).send({message:"Error in hashing password"});
            }

            if(hash){
                const user = new UserModel({username,email,password:hash,role});
                await user.save();
                res.status(200).send({message:`Welcome ${username} you are registered.`});
            }
        })
    } catch (error) {
        res.status(404).send(`Error in Registration: ${error.message}`)
    }
}


module.exports = register;