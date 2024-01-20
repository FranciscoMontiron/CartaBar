// models/usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuario', {
id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  estado: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }},{
    freezeTableName: true, // Esto evita la pluralizacion automatica
    timestamps: false, // Esto evita que se creen createdAt y updatedAt
  });

module.exports = Usuario;