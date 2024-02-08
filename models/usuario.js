// models/usuario.js
const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
    defaultValue: 1,
  },
}, {
  freezeTableName: true, // Esto evita la pluralización automática
  timestamps: false, // Esto evita que se creen createdAt y updatedAt
});

// Metodo para generar un token JWT
Usuario.prototype.generateAuthToken = function () {
  const token = jwt.sign({ id: this.id }, 'claveSecreta'); // Cambia 'claveSecreta' por una clave secreta más segura
  return token;
};

// Metodo para comparar la contraseña ingresada con la almacenada en la base de datos
Usuario.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Metodo para hash de contraseña antes de guardar en la base de datos
Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(usuario.password, salt);
});


module.exports = Usuario;
