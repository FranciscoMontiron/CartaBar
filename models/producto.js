// models/producto.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('producto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'producto',
  },
  precio: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ibu: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  abv: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  smr: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  estado: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  observacion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  menu_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  menu_cleinte_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true, // Esto evita la pluralización automática
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});

module.exports = Producto;
