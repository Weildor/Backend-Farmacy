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
      // define association here
    }
  }
  detalle_venta.init({
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalle_venta',
  });
  return detalle_venta;
};