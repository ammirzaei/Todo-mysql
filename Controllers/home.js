const Todo = require("../Models/todo");

module.exports.ReadTodo = (req, res) => {
  Todo.GetAllTodo((todos, countCompleted, countRemaining) => {
    res.render("index", {
      pageTitle: "کارهای روزمره",
      todos,
      countCompleted,
      countRemaining
    });
  });
};
