const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
  }
})

module.exports = User;