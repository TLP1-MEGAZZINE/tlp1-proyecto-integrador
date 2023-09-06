const { DataTypes, sequelize } = require('../db');


// Definir el modelo para la tabla users_rol
const UserRol = sequelize.define('User_rol', {
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "User_rol"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
UserRol.sync({ force: false }).then(async () => {
  console.log('Tabla de roles creada');

  // Verificar si ya existen registros en la tabla
  const count = await UserRol.count();
  if (count === 0) {
    // Crear los registros de roles después de crear la tabla
    try {
      await UserRol.bulkCreate([
        { description: 'postulante' },
        { description: 'empresa' },
        { description: 'particular' }
      ]);
      console.log('registros de roles creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros roles', error);
    }
  }
});

module.exports = UserRol;
