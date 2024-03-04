'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Borrar tablas existentes
    await queryInterface.dropTable('producto');
    await queryInterface.dropTable('seccion');

    // Crear nueva tabla seccion
    await queryInterface.createTable('seccion', {
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
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id',
        },
      },
    });

    // Crear nueva tabla producto
    await queryInterface.createTable('producto', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'producto',
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
          model: 'cliente',
          key: 'id',
        },
      },
      seccionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'seccion',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {

  }
};
