// models/menu.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./cliente');

const Menu = sequelize.define('menu', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.TEXT('medium'),
    allowNull: true,
  },
  contacto: {
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
    type: Sequelize.TEXT('medium'),
    allowNull: true,
  },
});

Menu.belongsTo(Cliente, { foreignKey: 'cleinte_id', targetKey: 'id' });

module.exports = Menu;
