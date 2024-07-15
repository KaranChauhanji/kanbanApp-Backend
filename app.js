const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const cors = require("cors");
const PORT = process.env.PORT || 3000
const connection =require('./config/db');
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');




const app = express()

app.use(express.json());
app.use(cors())
app.use('/user',userRouter);
app.use('/todo',todoRouter);


app.get('/',(_,res)=>{
    res.send("Health Check Server is Running Properly");
});




app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Server is Running and DB is Connected")
    } catch (error) {
        console.log(error.message)
    }
})
