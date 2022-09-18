const fs = require("fs");
const path = require("path");

const {v4 :uuidv4} = require('uuid');

const rootDir = require("./path");

const filePath = path.join(rootDir, "Data", "Todos.json");

exports.fetchTodos = (callback) => {
  // try {
  //     return callback(JSON.parse(fs.readFileSync(filePath)));
  //   } catch {
  //     return callback([]);
  //   }
  fs.readFile(filePath, (err, fileContent) => {
    if (err) return callback([]);
    callback(JSON.parse(fileContent));
  });
};
exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    return callback(err);
  });
};
exports.generateId = () => {
  // return Math.floor(Math.random() * 1000);
  return uuidv4();
};
