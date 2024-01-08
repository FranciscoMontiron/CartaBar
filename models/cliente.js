// models/cliente.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('cliente', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  razonSocial: {
    type: Sequelize.TEXT('medium'),
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  mail: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  direccion: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
});

module.exports = Cliente;
