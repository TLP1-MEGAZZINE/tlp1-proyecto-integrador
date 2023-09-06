const { DataTypes, sequelize } = require('../db');

// Definir el modelo para la tabla users_rol
const Rubro = sequelize.define('rubro', {
  id_rubro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "rubro"
});

Rubro.sync({ force: false }).then(async () => {
  console.log('Tabla de rubro creada');

  // Verificar si ya existen registros en la tabla
  const count = await Rubro.count();
  if (count === 0) {
    // Crear los registros de rubro después de crear la tabla
    try {
      await Rubro.bulkCreate([
        { descripcion: 'Salud' },
        { descripcion: 'Tecnologia' },
        { descripcion: 'Educación' },
        { descripcion: 'Finanzas' },
        { descripcion: 'Manufactura' },
        { descripcion: 'Ventas' },
        { descripcion: 'Administración' },
        { descripcion: 'Alimenticio' },
        { descripcion: 'Construcción' },
        { descripcion: 'Docente' },
        { descripcion: 'Otros' },
      ]);
      console.log('registros de rubros creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros de rubros', error);
    }
  }
});

module.exports = Rubro; 