const { DataTypes, sequelize } = require('../db');
const { User } = require("./users.model")

// Definir el modelo para la tabla Particular
const Particular = sequelize.define('Particular', {
    id_Particular: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        },
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Particular"
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Particular.sync({ force: false }).then(() => {
    console.log('Tabla de particulares creada')
})

Particular.belongsTo(User, { foreignKey: 'id_user', as: "User" });



async function createParticular(userData) {

    try {
        return await Particular.create(
            {
                id_user
            },
        );
    } catch (error) {
        console.log("Error al crear el registro de particulares ", error)
        throw error
    }
}

module.exports = { createParticular, Particular }