'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  // El medicamento pertenece a una categoría
  this.belongsTo(models.categoria, { 
    foreignKey: 'id_categoria', 
    as: 'categoria' 
  });
}
  }
  medicamento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    fecha_caducidad: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'medicamento',
  });
  return medicamento;
};