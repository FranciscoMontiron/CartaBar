const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Producto = sequelize.define("producto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "producto",
  },
  precio_1: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ibu: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  abv: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  smr: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  estado: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  observacion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  categoria_precio_1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  categoria_precio_2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  precio_2: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  clienteId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "cliente", 
      key: "id",
    },
  },
  seccionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "seccion", // nombre de la tabla de secciones
      key: "id",
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});


module.exports = Producto;

