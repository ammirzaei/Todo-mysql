const Todo = require("../Models/todo");

module.exports.ReadTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.render('index', {
      pageTitle: "کارهای روزمره",
      todos,
      countCompleted: todos.filter(t => t.isCompleted).length,
      countRemaining: todos.filter(t => !t.isCompleted).length
    });
  } catch (err) {
    console.log(err);
  }
};
