const { DataTypes, sequelize } = require('../db');
const Users = require("./users.model")

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
            model: "Users",
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

Particular.belongsTo(Users, { foreignKey: 'id_user', as: "Users" });

module.exports = Particular;
