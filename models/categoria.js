// models/categoria.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Producto = require('./producto');

const Categoria = sequelize.define('categoria', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  producto_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Categoria.belongsTo(Producto, { foreignKey: 'producto_id', targetKey: 'id' });

module.exports = Categoria;
