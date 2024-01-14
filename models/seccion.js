// models/seccion.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Seccion = sequelize.define('seccion', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  categoria_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'categoria',
      key: 'id',
    },
  },
});

module.exports = Seccion;
