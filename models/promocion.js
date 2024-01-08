// models/promocion.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Menu = require('./menu');

const Promocion = sequelize.define('promocion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.TEXT('medium'),
    allowNull: true,
  },
  precio: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  horaInicio: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  horaFin: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  diasDePromocion: {
    type: Sequelize.STRING(100),
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

Promocion.belongsTo(Menu, { foreignKey: 'menu_id', targetKey: 'id' });
Promocion.belongsTo(Menu, { foreignKey: 'menu_cleinte_id', targetKey: 'cleinte_id' });

module.exports = Promocion;
