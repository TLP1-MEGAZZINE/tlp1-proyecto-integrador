const { DataTypes, sequelize } = require('../db');

// Definir el modelo para la tabla users_rol
const NivelEducacion = sequelize.define('nivel_educacion', {
    id_NivelEducacion: {
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
    tableName: "nivel_educacion"
});

NivelEducacion.sync({ force: false }).then(async () => {
    console.log('Tabla de estado laboral creada');

    // Verificar si ya existen registros en la tabla
    const count = await NivelEducacion.count();
    if (count === 0) {
        // Crear los registros de nivel_educacion después de crear la tabla
        try {
            await NivelEducacion.bulkCreate([
                { descripcion: 'secundario completo' },
                { descripcion: 'secundario incompleto' },
                { descripcion: 'terciario completo' },
                { descripcion: 'terciario incompleto' },
            ]);
            console.log('registros de nivel educacion creada exitosamente');
        } catch (error) {
            console.error('Error al crear los registros de nivel educacion', error);
        }
    }
});



module.exports = NivelEducacion; 