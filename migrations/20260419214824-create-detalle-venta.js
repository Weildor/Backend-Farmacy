'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalle_venta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_venta: {
        type: Sequelize.INTEGER,
        references:{
          model : 'ventas',
          key: 'id',
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE'
        },
      },
      id_medicamento: {
        type: Sequelize.INTEGER,
        references:{
          model : 'medicamentos',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      subtotal: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalle_venta');
  }
};