'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('producto', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'producto'
      },
      precio_1: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      // Agrega el resto de los campos según tu modelo
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('producto');
  }
};
