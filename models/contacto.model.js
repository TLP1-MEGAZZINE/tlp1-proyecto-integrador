const { DataTypes, sequelize } = require('../db');
const Users = require("./users.model")

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
            model: "Users",
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
Contacto.sync({ force: false }).then(() => {
    console.log('Tabla de contactos creada')
})

Contacto.belongsTo(Users, { foreignKey: 'id_user', as: "Users" });

module.exports = Contacto;
