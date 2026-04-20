'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalle_venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1. Un detalle de carrito pertenece a un producto
      detalle_venta.belongsTo(models.ventas, {
        foreignKey: 'id_venta', // Ojo: foreignKey va con "f" minúscula
        as: 'ventas'
      });

      // 2. Un detalle de carrito pertenece a un carrito
      detalle_venta.belongsTo(models.medicamento, {
        foreignKey: 'id_medicamento',
        as: 'medicamento'
      });
    }
  }
  detalle_venta.init({
    id_venta: {
      type: DataTypes.INTEGER,
      field: 'id_venta'
    },
    id_medicamento: {
      type: DataTypes.INTEGER,
      field: 'id_medicamento'
    },
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(10, 2),
    subtotal: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'detalle_venta',
    tableName: 'detalle_venta'
  });
  return detalle_venta;
};