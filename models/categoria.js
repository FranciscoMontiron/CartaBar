// models/categoria.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('categoria', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
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
}, {
  freezeTableName: true, // Esto evita la pluralización automática
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});

module.exports = Categoria;
