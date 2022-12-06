const { Sequelize } = require('sequelize');
module.exports = new Sequelize("todo_db", 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
});