const { DataTypes, sequelize } = require('../db');

//CREAR MODELO DE USERS
const Nacionalidad = sequelize.define('Nacionalidad', {
    id_pais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_pais: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Nacionalidad"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Nacionalidad.sync({ force: false }).then(async () => {
    console.log('Tabla de nacionalidades creada');

  // Verificar si ya existen registros en la tabla
  const count = await Nacionalidad.count();
  if (count === 0) {
      // Crear los registros de nacionalidad solo si no existen
      try {
          await Nacionalidad.bulkCreate([
              { nombre_pais: 'Argentina' },
              { nombre_pais: 'Bolivia' },
              { nombre_pais: 'Brasil' },
              { nombre_pais: 'Chile' },
              { nombre_pais: 'Colombia' },
              { nombre_pais: 'Ecuador' },
              { nombre_pais: 'Paraguay' },
              { nombre_pais: 'Perú' },
              { nombre_pais: 'Uruguay' },
              { nombre_pais: 'Venezuela' },
              { nombre_pais: 'Otros' }
          ]);
          console.log('registros de paises creados exitosamente');
      } catch (error) {
          console.error('Error al crear los registros paises', error);
      }
  } else {
      console.log('La tabla de nacionalidades ya contiene registros, no se crearán nuevos.');
  }
});

module.exports = Nacionalidad;