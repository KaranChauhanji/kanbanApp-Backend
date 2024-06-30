const express = require("express");
const register = require("../controllers/User/userRegister");
const login = require("../controllers/User/userLogin");
const logout = require("../controllers/User/userLogout");
const userRouter = express.Router();



userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.post('/logout',logout)

module.exports = userRouter;
