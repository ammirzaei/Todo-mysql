const { DataTypes } = require('sequelize');

const sequelize = require('./database');

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Todo;