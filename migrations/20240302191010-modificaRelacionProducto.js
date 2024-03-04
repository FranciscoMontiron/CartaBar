'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('producto', 'seccionId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'seccion',
        key: 'id'
      }
    });
    await queryInterface.dropTable('SeccionProducto');
  },

  down: async (queryInterface, Sequelize) => {
    // Código para revertir los cambios si es necesario
  }
};
