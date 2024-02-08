/*'use strict';

/** @type {import('sequelize-cli').Migration} */
/*module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('producto', 'categoria_precio_1', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('producto', 'categoria_precio_2', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.renameColumn('producto', 'precio', 'precio_1');

    await queryInterface.addColumn('producto', 'precio_2', {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('producto', 'categoria_precio_1');
    await queryInterface.removeColumn('producto', 'categoria_precio_2');
    await queryInterface.renameColumn('producto', 'precio_1', 'precio');
    await queryInterface.removeColumn('producto', 'precio_2');
  }
};*/
