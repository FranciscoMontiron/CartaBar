// config/db.js ambiente local.
const Sequelize = require('sequelize');

const sequelize = new Sequelize('barmenu', 'root', '7513', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
