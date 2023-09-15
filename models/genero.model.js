const { DataTypes, sequelize } = require('../config/db');

// Definir el modelo para la tabla users_rol
const UserGender = sequelize.define('Genero', {
  id_genero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // autoIncrement: true,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "Genero"
});


UserGender.sync({ force: false }).then(async () => {
  console.log('Tabla de género creada');
  // Verificar si ya existen registros en la tabla
  const count = await UserGender.count();
  if (count === 0) {
    // Crear los registros de género solo si no existen
    try {
      await UserGender.bulkCreate([
        { id_genero: "1", sexo: 'Masculino' },
        { id_genero: "2", sexo: 'Femenino' },
        { id_genero: "3", sexo: 'Sin especificar' }
      ]);
      console.log('Registros de géneros creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros de géneros:', error);
    }
  } else {
    console.log('La tabla de género ya contiene registros, no se crearán nuevos.');
  }
});


module.exports = UserGender; 