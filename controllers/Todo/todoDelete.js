const TodoModel = require("../../models/todo.model");

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      res.status(404).send({ message: "Todo ID not found." });
    }
    res
      .status(200)
      .send({ message: "Todo Deleted Successfully", todo: deletedTodo });
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in Deleting Todo: ${error.message}` });
  }
};

module.exports = deleteTodo;
