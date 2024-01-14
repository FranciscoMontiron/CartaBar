// models/menu.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Menu = sequelize.define('menu', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.MEDIUMTEXT,
    allowNull: true,
  },
  contaco: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  cleinte_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  logo: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  direccion: {
    type: Sequelize.MEDIUMTEXT,
    allowNull: true,
  },
});

module.exports = Menu;
