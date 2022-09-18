const Todo = require("../Models/todo");
const { generateId } = require("../Utils/todos");

module.exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const todo = new Todo(generateId(), req.body.todo);
  todo.AddTodo((err) => {
    if (!err) return res.redirect("/");
    else {
      console.log(`Error : ${err}`);
      res.redirect("/");
    }
  });
};
module.exports.deleteTodo = (req, res) => {
  Todo.DeleteTodo(req.params.id, (err) => {
    if (!err) return res.redirect("/");
    else {
      console.log(`Error : ${err}`);
      if (err === "Not Found Todo!") return res.redirect("/NotFound");
      else return res.redirect("/");
    }
  });
};

module.exports.changeCompleted = (req, res) => {
  Todo.ChangeToCompleted(req.params.id, (err) => {
    if (!err) return res.redirect("/");
    else {
      console.log(`Error : ${err}`);
      if (err === "Not Found Todo!") return res.redirect("/NotFound");
      else return res.redirect("/");
    }
  });
};
