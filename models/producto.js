// models/producto.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Menu = require('./menu');

const Producto = sequelize.define('producto', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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
    type: Sequelize.TEXT('medium'),
    allowNull: true,
  },
  ibu: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  porcentajeAlc: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  cuerpo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  seccion_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  menu_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  estado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
});

Producto.belongsTo(Menu, { foreignKey: 'menu_id', targetKey: 'id' });

module.exports = Producto;
