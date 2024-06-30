const express = require("express");
const auth = require("../middlewares/auth.middleware");
const todoAdd = require("../controllers/Todo/todoAdd");
const todoGet = require("../controllers/Todo/todoGet");
const update = require("../controllers/Todo/todoUpdate");
const roleCheck = require("../middlewares/access.middleware");
const deleteTodo = require("../controllers/Todo/todoDelete");
const todoRouter = express.Router();




todoRouter.post("/add", auth, todoAdd);

todoRouter.get("/", auth, todoGet);

todoRouter.patch("/update/:id", auth, update);

todoRouter.delete("/delete/:id", auth, roleCheck(["admin"]), deleteTodo);

module.exports = todoRouter;
