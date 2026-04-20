'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    ventas.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario', // F minúscula
        as: 'ventas'
      });
  ventas.hasMany(models.detalle_venta, {
        foreignKey: 'id_venta',
        as: 'detalles_venta'
      });
    }
  }
  ventas.init({
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ventas',
  });
  return ventas;
};