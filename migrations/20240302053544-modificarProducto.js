'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('producto', 'descripcion', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'ibu', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'abv', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'smr', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'estado', {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
    });
    await queryInterface.addColumn('producto', 'observacion', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'categoria_precio_1', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'categoria_precio_2', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('producto', 'precio_2', {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });
    await queryInterface.addColumn('producto', 'clienteId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revertir los cambios si es necesario
  }
};
