// models/seccion.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Seccion = sequelize.define('seccion', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
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
}, {
  freezeTableName: true, // Esto evita la pluralizacion automatica
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});

module.exports = Seccion;
