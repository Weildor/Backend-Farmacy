'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un usuario pertenece a un Rol (Relación 1:N)
      this.belongsTo(models.rol, { 
        foreignKey: 'id_rol', 
        as: 'rol' 
      });

      // Un usuario puede tener muchas Ventas (Relación 1:N)
      this.hasMany(models.ventas, { 
        foreignKey: 'id_usuario', 
        as: 'ventas' 
      });
    }
  }
  usuarios.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    // 1. Agregamos el campo id_rol explícitamente para Sequelize
    id_rol: { 
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'usuarios',
    // 2. Forzamos el nombre de la tabla en plural para evitar el error de Sequelize
    tableName: 'usuarios' 
  });
  return usuarios;
};