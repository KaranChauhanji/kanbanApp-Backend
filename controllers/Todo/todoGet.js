const TodoModel = require("../../models/todo.model");

const todoGet = async (req, res) => {
  try {
    const { userId } = req.body;
    let filter = { userId };
    const todo = await TodoModel.find(filter);
    res.status(200).send(todo);
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in getting Data: ${error.message}` });
  }
};

module.exports = todoGet;
