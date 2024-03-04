// models/menu.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Menu = sequelize.define('menu', {
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
  descripcion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  contacto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  logo: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  direccion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  
}, {
  freezeTableName: true, // Esto evita la pluralización automática
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});


module.exports = Menu;
