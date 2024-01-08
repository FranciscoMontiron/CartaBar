// En un archivo como db.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('cartabar', 'root', '7513', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
