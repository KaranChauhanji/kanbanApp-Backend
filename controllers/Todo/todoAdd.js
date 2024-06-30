const TodoModel = require("../../models/todo.model");

const todoAdd = async (req, res) => {
  try {
    const todo = req.body;
    const newTodo = new TodoModel(todo);
    await newTodo.save();

    res.status(200).send({ message: "New Todo is Added." });
  } catch (error) {
    res.status(404).send({ message: `Wrong Details: ${error.message}` });
  }
};

module.exports = todoAdd;
