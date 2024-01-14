// models/categoria.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('categoria', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING(255),
    defaultValue: 'categoria',
  },
  menu_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'menu',
      key: 'id',
    },
  },
  menu_cleinte_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'menu',
      key: 'cleinte_id',
    },
  },
});

module.exports = Categoria;
