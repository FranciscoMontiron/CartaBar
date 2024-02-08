// config/db.js ambiente local.
const Sequelize = require('sequelize');

const sequelize = new Sequelize('barmenu', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: console.log, // Habilita logs
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
