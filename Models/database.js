const { Sequelize } = require('sequelize');
module.exports = new Sequelize("todo_db", 'root', '0691001472!', {
    dialect: 'mysql',
    host: 'localhost'
});