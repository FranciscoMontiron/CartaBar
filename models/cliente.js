// models/cliente.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('cliente', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  razonSocial: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  direccion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  estado: {
    type: Sequelize.TINYINT,
    allowNull: true,
  },
}, {
  freezeTableName: true, // Esto evita la pluralización automática
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});

module.exports = Cliente;
