const { DataTypes, sequelize } = require('../db');
const { User } = require("./users.model.js")
// Definir el modelo para la tabla contacto
const Contacto = sequelize.define('Contacto', {
    id_contacto: {
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
    num_tel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Contacto"
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Contacto.sync({ force: true }).then(() => {
    console.log('Tabla de contactos creada')
})

Contacto.belongsTo(User, { foreignKey: 'id_user', as: "User" });

async function createContacto(userData) {

    try {

        return await Contacto.create(
            {
                id_user,
                num_tel,
                domicilio,
            }
        );

    } catch (error) {
        console.log("Error al crear registro de contacto", error)
        throw error
    }
}


module.exports = { createContacto, Contacto }
