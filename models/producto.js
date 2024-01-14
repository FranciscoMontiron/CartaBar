// models/producto.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('producto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING(45),
    allowNull: false,
    defaultValue: 'producto',
  },
  precio: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  descripcion: {
    type: Sequelize.MEDIUMTEXT,
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
    type: Sequelize.STRING(30),
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
});

module.exports = Producto;
