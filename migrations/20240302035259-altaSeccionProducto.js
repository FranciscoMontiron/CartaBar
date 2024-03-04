'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seccionProducto', {
      seccionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'seccion',
          key: 'id'
        }
      },
      productoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'producto',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('seccionProducto');
  }
};
