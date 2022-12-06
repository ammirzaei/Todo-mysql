const Todo = require("../Models/todo");

module.exports.addTodo = async (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  try {
    await Todo.create({ title: req.body.todo });
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
module.exports.deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports.changeCompleted = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    todo.isCompleted = true;
    await todo.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};